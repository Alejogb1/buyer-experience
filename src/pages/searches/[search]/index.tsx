import { api } from "~/utils/api";
import type { GetStaticProps, GetStaticPaths, NextPage } from 'next'
import { generateSSGHelper } from "~/server/helpers/ssgHelper";
import { SlugType } from "~/types"
import { InferGetStaticPropsType } from 'next'
import { useRouter } from "next/router";
type SSGHelper = ReturnType<typeof generateSSGHelper>;

type Props = {
    slug: SlugType
}

export default function MostSearched(props: InferGetStaticPropsType<typeof getStaticProps>) {

    const router = useRouter()
    if (router.isFallback) {
        return <p>Loading...</p>
    }

    const { slug } = props;

    const { data } = api.bigQuery.getKeywords.useQuery({ slug });

    console.log("data? ", data)

    return( 
        <div className="relative overflow-x-auto  border-collapse indent-initial border-spacing-2 border-gray-100 border-y">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-[11px] bg-slate-100/80 text-black font-thin dark:bg-gray-700 dark:text-gray-400">
                    <tr className="border-y">
                        <th scope="col" className="pl-2 py-2">
                            <div className="font-bold text-left leading-6 text-gray-600/100">
                                KEYWORD
                            </div>
                        </th>
                        <th scope="col" className="">
                            <div className="font-bold text-left leading-6 text-gray-600/100">
                                KEYWORD
                            </div>
                        </th>
                        <th scope="col" className="">
                            <div className="font-bold text-left leading-6 text-gray-600/100">
                                KEYWORD
                            </div>
                        </th>
                        <th scope="col" className="">
                            <div className="font-bold text-left leading-6 text-gray-600/100">
                                KEYWORD
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y">
                    {data?.map((item) =>  {
                        let string = 'Keyword_Difficulty'
                        if(item) {
                            return(
                                <tr className="border-y-1 dark:bg-gray-800 table-row border-gray-100 align-inherit border-solid box-border leading-6">
                                    <td scope="row" className="font-semibold pl-2 py-3 font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.Keyword}
                                    </td>
                                </tr>
                            )
                    }})}
                   
                </tbody>
            </table>
        </div>
    )
}
export const getStaticProps: GetStaticProps = async (context) => {
    const ssg: SSGHelper = generateSSGHelper();

    const slug = context.params?.search

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

    const slugs = ["custom_video_csv", "large_asl"]
    return {
        paths: slugs.map((item) => ({
            params: {
                search: item.toString(),
            },
        })),
        fallback: true, // false or "blocking"
    }

};