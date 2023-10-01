import { PrismaClient } from "@prisma/client";
import { Category } from "~/types";

interface SoftwareOption {
    software_name: string;
    options: string[];
}

interface ProductCreateManyInput {
    name: string;
    categories: object,
    description: string,
    logo: string,
    rating: number,
    website_url: string,
}


// Define a function to map the JSON data into Prisma-compatible format
function mapDataForPrisma(data: Record<string, any>[]): SoftwareOption[] {
    const mappedData: SoftwareOption[] = data.map((item) => {
        const options: string[] = [];
        for (let i = 1; i <= 13; i++) {
            const optionKey = `option_${i}`;
            if (item[optionKey]) {
                options.push(item[optionKey]);
            }
        }
        return {
            software_name: item.software_name,
            options,
        };
    });
    return mappedData;
}

// Filter out software with empty options
const prismaReadyData: SoftwareOption[] = mapDataForPrisma(JSON).filter((item) => item.options.length > 0);

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
})

async function main() {
    for (const item of prismaReadyData) {
        const softwareName = item.software_name;
        const categoryIds = [];

        for (const option of item.options) {
            const category = await prisma.$queryRaw<Category[]>`
                SELECT id FROM Category WHERE slug = ${option};
            `;

            if (category && category.length > 0) {
                categoryIds.push(category[0]?.id);
            } else {
                console.error("Category not found for option: " + option);
            }
        }

        if (categoryIds.length > 0) {
            const result = await prisma.product.create({
                data: {
                    name: softwareName,
                    description: '',
                    logo: '',
                    rating: 0,
                    website_url: '',
                    categories: {
                        connect: categoryIds.map((id) => ({ id })),
                    },
                },
            });

            console.log(result);
        } else {
            console.error("No valid categories found for software name: " + softwareName);
        }
    }
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
