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
        <p>render?</p>
        <ul>
          {data?.map((item) =>  {
           if(item) {
            return(
                <li className="gap-4 flex-start flex flex-row group">
                    <figure className=" overflow-hidden shrink-0 relative">
                        <img
                            className="rounded-md block relative shrink-0 w-16"
                            src={item.logo} 
                            alt={item.name}
                        />
                    </figure>
                    <div className="flex flex-col flex-start gap-1">
                        <div className="">
                            <p className='group-hover:underline text-md text-black font-semibold'>
                                {item.name}
                            </p>
                        </div>
                    </div>
                </li>
            )
           }
          })
          }
        </ul>
    </main>
    )
}
