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
                <title>/c/software { }</title>
            </Head>
            <div className="mx-auto max-w-7xl h-100 px-20 sm:px-6 lg:px-20">
                {/* {<CategoryTitle {...category}/>} */}
                <p className="w-9/12 text-black text-opacity-60 mb-4">
                    {data[0]?.name}
                </p>
                <div className="subheading">
                    <h3 className="text-2xl mb-2">Mejor en general</h3>
                </div>
                {/* <ProductCard {product.segment}/> */}
                <div className="subheading">
                    <h3 className="text-2xl mb-2 mt-10">Mejor para pymes</h3>
                </div>
                {/* <ProductCard {product.segment}/> */}
                <div className="subheading">
                    <h3 className="text-2xl mb-2 mt-10">Mejor para grandes empresas</h3>
                </div>
                {/* <ProductCard {product.segment}/> */}
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