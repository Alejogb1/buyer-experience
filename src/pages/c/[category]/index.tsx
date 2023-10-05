import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { InferGetStaticPropsType } from 'next'
import { prisma } from "~/server/db";
import Head from 'next/head'
import { api } from "~/utils/api";
import { SlugType } from "~/types"
import { useRouter } from "next/router";
import ProductCard from "~/components/ProductCard";
import capitalizeFirstLetters from "~/utils/capitalize";

type SSGHelper = ReturnType<typeof generateSSGHelper>;

type Props = {
    slug: SlugType
}
type ProductCardProps = {
    product?: {
        id: number;
        name: string;
        description: string;
        logo: string;
        rating: number;
        website_url: string;
    } | undefined;

};


// Function to capitalize the first letter and convert the rest to lowercase
function capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const Category: NextPage<Props> = (props: InferGetStaticPropsType<typeof getStaticProps>,) => {
    const router = useRouter()
    if (router.isFallback) {
        return <p>Loading...</p>
    }

    const { slug } = props;

    const { data: categoryQuery } = api.category.getCategoryBySlug.useQuery({ slug });
    const { data: productQuery } = api.product.getProductsByCategory.useQuery({ slug });

    if (!categoryQuery || !productQuery) {
        return <p>Cargando...</p>;
    }

    const categoryData = categoryQuery[0];
    const productData = productQuery[0];

    const capitalizedCategoryName = categoryData?.name ? capitalizeFirstLetter(categoryData.name) : '';




    const firstProduct = productData?.products[0]
    const secondProduct = productData?.products[1]
    const thirdProduct = productData?.products[2]

    console.log(secondProduct)
    return (
        <>
            <Head>
                <title>{categoryData && capitalizeFirstLetters(categoryData.name)} | Audiencia</title>
                <meta
                    name="description"
                    content={categoryData?.description}
                />
            </Head>
            <div className="mx-auto max-w-7xl h-100 pb-20">
                {/* {<CategoryTitle {...category}/>} */}
                <div className="w-9/12 my-12">
                    <h1 className="text-4xl font-semibold text-black">
                        {capitalizedCategoryName}
                    </h1>
                    <h4 className="text-2xl text-gray-700">{categoryData?.description}</h4>
                </div>
                <div className="text-md text-gray-500 font-normal mb-7">
                    72 aplicaciones
                </div>
                <div className="subheading">
                    <h3 className="text-lg mb-4">Más popular</h3>
                    {firstProduct && <ProductCard product={firstProduct} />}
                </div>
                <div className="subheading my-9">
                    <h3 className="text-lg mb-4">Mejor para pymes</h3>
                    {secondProduct && <ProductCard product={secondProduct} />}

                </div>
                <div className="subheading">
                    <h3 className="text-lg mb-4">Mejor para grandes empresas</h3>
                    {thirdProduct && <ProductCard product={thirdProduct} />}
                </div>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const ssg: SSGHelper = generateSSGHelper();

    const slug = context.params?.category;

    if (typeof slug !== "string") throw new Error("no slug");

    const category = await ssg.category.getCategoryBySlug.prefetch({ slug })

    return {
        props: {
            trpcState: ssg.dehydrate(),
            slug
        },
        revalidate: 60,
    };
};

export const getStaticPaths: GetStaticPaths = async () => {

    const slugs = await prisma.category.findMany({
        select: {
            slug: true,
        },
    });
    return {
        paths: slugs.map((item) => ({
            params: {
                category: item.slug.toString(),
            },
        })),
        fallback: true, // false or "blocking"
    }

};

export default Category