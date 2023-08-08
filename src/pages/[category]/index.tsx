import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next"
import { useSession } from "next-auth/react"
import Head from 'next/head'
import Link from 'next/link'

import { api } from "~/utils/api"
import CategoryTitle from "~/components/CategoryTitle"

const category: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>>= ({ category }) => {
    const { data: session, status } = useSession();

    console.log(category)
    // { data: categoryQuery, isLoading } = api.category.get.useQuery({ categoryHandle: category})
    const trpc = api.useContext()

    return (
        <>  
            <Head>
                <title>Categoria de software CRM</title>
            </Head>
            <div className="mx-auto max-w-7xl h-100 px-20 sm:px-6 lg:px-20">
                {/* {<CategoryTitle {...category}/>} */}
                    <p className="w-9/12 text-black text-opacity-60 mb-4">
                        {/*(category.description*/}
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

export function getServerSideProps(context: GetServerSidePropsContext<{ category: string }>) {
    const category = context.params?.category;
    // const ssr = ssrHelper();
    
    // await ssr.category.get.prefetch({title: category})

    return {
        props: {
            // trpcState: ssr.dehydrate(),
            category,
        }
    };
}


export default category