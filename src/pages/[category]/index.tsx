import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next"
import { useSession } from "next-auth/react"
import Head from 'next/head'
import Link from 'next/link'

import { api } from "~/utils/api"
import { categoryTitle } from "~/components/CategoryTitle"


const category: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>>= ({ category }) => {
    const { data: session, status } = useSession();
    const { data: categoryQuery, isLoading } = api.category.get.useQuery({ categoryHandle: category})
    const trpc = api.useContext()

    return (
        <>  
            <Head>
                <title>/r/{categoryQuery?.categoryHandle}</title>
            </Head>

            <div className="bg-white">
                <div className="bg-slate-300 h-56 w-full">

                </div>
                <div className="flex pt-5 pb-7 bg-transparent mx-auto items-center max-w-6xl lg:max-w-7xl xl:max-w-8xl">
                    <div className="relative group">
                        {categoryQuery && <categoryImage {...categoryQuery} />}
                    </div>
                    <div className="pl-8">
                        {categoryQuery && <categoryTitle {...categoryQuery}/> }
                        <p className="text-slate-500">r/{categoryQuery?.categoryHandle}</p>
                    </div>
                    <div className="pl-10">
                        {categoryQuery ?                                                            
                                <button 
                                    className="h-2/5 px-8 py-2 font-bold text-white bg-blue-500 rounded-3xl focus:outline-none hover:bg-blue-600"
                                >
                                    <Link
                                        href={{
                                            pathname: '/about',
                                            query: { name: 'test' },
                                        }}
                                        >
                                        Anunciar
                                    </Link>
                                </button>

                            :

                            null

                        }
                    </div>
                </div>
            </div>
            <div className="flex flex-col pt-5 pb-7 bg-gray-200 mx-auto min-h-screen max-w-6xl lg:max-w-7xl xl:max-w-8xl">
                <div className="flex gap-8">
                    <div className="w-full">
                        <PopularProducts categoryId={categoryQuery?.id}/>
                    </div>

                    <div className="hidden w-1/2 md:block">
                        <CreatePostCreateCommunityCard/>
                    </div>
                </div>
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