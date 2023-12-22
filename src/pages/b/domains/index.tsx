import Link from "next/link";
import { useEffect } from "react";
import { NextResponse } from "next/server";
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { api } from "~/utils/api";

export default function Domains() {

    const { data } = api.bigQuery.getDomains.useQuery();

    console.log("data? ", data)
    return( 
    <main>
        <table className="w-full">
                <thead className="text-[11px] bg-slate-100/80 text-black font-thin dark:bg-gray-700 dark:text-gray-400 flex">
                    <tr className="border-y">
                        <th scope="col" className="pl-2 py-2">
                            <div className="font-bold text-left leading-6 text-gray-600/100">
                                KEYWORD
                            </div>
                        </th>
                        <th scope="col" className="">
                            <div className="font-bold text-left leading-6 text-gray-600/100">
                                COMPETITOR
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((item) =>  {
                        if(item) {
                            return(
                                <tr className="">
                                    <td>
                                        <figure className="shrink-0 relative">
                                            <img
                                                className="rounded-md block relative shrink-0 w-8"
                                                src={item.logo} 
                                                alt={item.name}
                                            />
                                        </figure>
                                    </td>
                                    <td>
                                        <div className="flex flex-col flex-start gap-1">
                                            <div className="">
                                                <p className='group-hover:underline text-md text-black font-semibold'>
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td> 
                                </tr>
                            )
                        }
                        })
                    }
                </tbody>
        </table>
    </main>
    )
}
