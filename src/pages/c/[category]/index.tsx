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
            <Navbar/>
            <div className="mx-auto max-w-7xl h-100 px-20 sm:px-6 lg:px-20">
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
                    <div className="w-4/12 gap-4 flex-start flex flex-row">
                        <figure className=" overflow-hidden shrink-0 relative">
                            <img 
                                className="rounded-md block relative shrink-0 w-16"
                                src="https://cdn.shopify.com/app-store/listing_images/ca153fbdb5d5bc9bb3402f61073dbcb2/icon/CLOVkZCGgf0CEAE=.png" 
                                alt="" 
                            />
                        </figure>
                        <div className="flex flex-col flex-start gap-2">
                            <div className="">
                                <a href="/opinar" className="hover:underline text-md text-black font-semibold">Transcy: Traducción y monedas</a>
                            </div>
                            <div className="self-stretch items-center flex flex-row relative text-sm text-black font-normal">
                                    <span className="">
                                        5                                    
                                    </span>
                                    <span className="shrink-0 mr-2">
                                        <Image 
                                            width={12}
                                            height={100}
                                            src="/starIcon.png" alt="" 
                                         />
                                    </span>
                                    <span> </span>
                                    <span className="overflow-hidden whitespace-nowrap overflow-ellipsis"> Plan gratis disponible</span>
                            </div>
                            <div className="text-sm text-gray-600 font-medium">Traduce la tienda. Convertidor por geolocalización</div>
                        </div>
                    </div>
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