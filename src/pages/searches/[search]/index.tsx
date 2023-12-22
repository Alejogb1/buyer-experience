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
        <div className="relative overflow-x-auto  border-collapse indent-initial border-spacing-2 border-gray-100 border">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-[11px] bg-gray-100 text-black font-thin dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="pl-2">
                            Keyword
                        </th>
                        <th scope="col" className="">
                            Volume
                        </th>
                        <th scope="col" className="">
                            Category
                        </th>
                        <th scope="col" className="">
                            Price
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) =>  {
                        let string = 'Keyword_Difficulty'
                        if(item) {
                            return(
                                <tr className="bg-white dark:bg-gray-800">
                                    <td scope="row" className="pl-2 py-1 font-normal text-gray-900 whitespace-nowrap dark:text-white">
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