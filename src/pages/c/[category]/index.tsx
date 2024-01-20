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
import Link from "next/link";

type SSGHelper = ReturnType<typeof generateSSGHelper>;

type Props = {
    slug: SlugType
}

// Function to capitalize the first letter and convert the rest to lowercase
function capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const Category: NextPage<Props> = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
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

    return (
        <>
            <Head>
                <title>{categoryData && capitalizeFirstLetters(categoryData.name)} | Audiencia</title>
                <meta
                    name="description"
                    content={categoryData?.description}
                />
            </Head>
            <div className="mx-auto max-w-7xl h-100">
                {/* {<CategoryTitle {...category}/>} */}
                <div className="w-11/12 md:w-10/12 lg:w-9/12 my-2 lg:my-12">
                    <h1 className="text-2xl md:text-2xl lg:text-4xl font-semibold text-black lg:pb-2">
                        {capitalizedCategoryName}
                    </h1>
                    <h4 className=" md:text-2xl lg:text-2xl text-gray-700">{categoryData?.description}</h4>
                    
                </div>
                <div className="text-md text-gray-500 font-normal mb-7">
                    72 aplicaciones
                </div>
                <div className="flex justify-between">
                    <div className="max-w-4xl">
                        <div className="subheading w-10/12">
                            <h3 className="text-lg mb-4">Más popular</h3>
                            <div className="md:flex lg:flex items-center">
                                <div className="w-10/12">
                                        {firstProduct && <ProductCard product={firstProduct} />}
                                </div>
                                <div className="px-3 hidden lg:block lg:border-r border-gray-300 h-14"></div>                               
                                <div className="hidden lg:block md:block ml-4 mt-10 lg:mt-4 items-center pb-4">
                                    <a href="/opinar" className='mb-2 hover:cursor-pointer lg:max-h-6 text-center text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-sm lg:rounded-md text-xs w-full sm:w-auto p-3 lg:px-3 lg:py-1.5 text-center :bg-black :hover:bg-black :focus:ring-black'>Opinar</a>
                                </div>                              
                            </div>
                        </div>
                        <div className="subheading my-9 w-10/12">
                            <h3 className="text-lg mb-4">Mejor para pymes</h3>
                            <div className="md:flex lg:flex items-center">
                                <div className="w-10/12">
                                        {secondProduct && <ProductCard product={secondProduct} />}
                                </div>
                                <div className="px-3 hidden lg:block lg:border-r border-gray-300 h-14 "></div>                               
                                <div className="hidden lg:block md:block ml-4 mt-10 lg:mt-4 items-center pb-4">
                                    <a href="/opinar" className='mb-2 hover:cursor-pointer lg:max-h-6 text-center text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-sm lg:rounded-md text-xs w-full sm:w-auto p-3 lg:px-3 lg:py-1.5 text-center :bg-black :hover:bg-black :focus:ring-black'>Opinar</a>
                                </div>                              
                            </div>
                        </div>
                        <div className="subheading w-10/12">
                            <h3 className="text-lg mb-4">Mejor para grandes empresas</h3>
                            <div className="md:flex lg:flex items-center">
                                <div className="w-10/12">
                                        {thirdProduct && <ProductCard product={thirdProduct} />}
                                </div>
                                <div className="px-3 hidden lg:block lg:border-r border-gray-300 h-14"></div>                               
                                <div className="hidden lg:block md:block ml-4 mt-10 lg:mt-4 items-center flex pb-4">
                                    <a href="/opinar" className='mb-4 hover:cursor-pointer lg:max-h-6 text-white bg-black hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-sm lg:rounded-md text-xs w-full sm:w-auto p-3 lg:px-3 lg:py-1.5 text-center :bg-black :hover:bg-black :focus:ring-black'>Opinar</a>
                                </div>                              
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-10 sm:py-5">
                <p className="text-lg font-semibold">Te podría interesar</p>
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const ssg: SSGHelper = generateSSGHelper();

    const slug = context.params?.category;

    if (typeof slug !== "string") throw new Error("no slug");

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