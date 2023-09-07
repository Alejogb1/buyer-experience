import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { InferGetStaticPropsType } from 'next'
import { prisma } from "~/server/db";
import { appRouter } from '~/server/api/root';
import superjson from 'superjson';
import Head from 'next/head'
import { api } from "~/utils/api";
import { SlugType } from "~/types"
import { useRouter } from "next/router";
import Navbar from "~/components/ui/navbar";
import Image from "next/image";
import ProductCard from "~/components/ProductCard";
type SSGHelper = ReturnType<typeof generateSSGHelper>;

type Props = {
    slug: SlugType
}

type CategoryData = {
    id: number;
    name: string;
    slug: string;
}
const Category: NextPage<Props> = (props: InferGetStaticPropsType<typeof getStaticProps>,) => {
    const { slug } = props;

    const categoryQuery = api.category.getCategoryBySlug.useQuery({ slug });

    const router = useRouter()
    if (router.isFallback) {
        return <p>Loading...</p>
    }

    const { data } = categoryQuery;

    

    return (
        <>
            <Head>
                <title>Mejor {data[0].name}</title>
            </Head>
            <div className="mx-auto max-w-7xl h-100 px-20 sm:px-6 lg:px-20 pb-20">
                {/* {<CategoryTitle {...category}/>} */}
                <div className="w-9/12 my-12">
                    <h1 className="text-4xl font-semibold text-black">
                        {data[0]?.name}
                    </h1>
                    <h4 className="text-2xl text-gray-700">Vende en más idiomas a más personas y asegúrate de que los clientes entiendan lo que estás vendiendo.</h4>
                </div>
                <div id="app-count" className="text-md text-gray-600 font-medium my-12">
                    52 aplicaciones
                </div>
                <div className="subheading">
                    <h3 className="text-lg mb-2 hover:underline">Más popular</h3>
                    <ProductCard/>
                </div>
                <div className="subheading my-9">
                    <h3 className="text-lg mb-2 hover:underline">Mejor para pymes</h3>
                    <ProductCard/>
                </div>
                <div className="subheading">
                    <h3 className="text-lg mb-2 hover:underline">Mejor para grandes empresas</h3>
                    <ProductCard/>
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