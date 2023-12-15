import Link from "next/link";
import KeywordClusters from "~/components/(dashboard)/KeywordClusters";

export default function Salesmeetings() {
    return (
        <>
            <Link target="_blank" href="https://www.salesmeetings.ai/" className="w-16 gap-4 flex-start flex flex-row group cursor-pointer">
                <div className="flex flex-row">
                    <img
                            className="rounded-md block relative shrink-0 w-8"
                            src={"https://media.licdn.com/dms/image/C560BAQEFIoUFD06ejA/company-logo_200_200/0/1678585464315?e=2147483647&v=beta&t=PeOqD4vM8aNK4_l2_QH0--aAhn8C9JEskGUwxs_KfRk"}
                            alt={"company logo"}
                        />
                    <p className="group-hover:underline pl-2 text-xl">Salesmeetings</p>
                </div>
            </Link>   
            <div className="flex flex-col flex-start gap-1">
                <div className="pt-2">
                    <p className="text-sm text-gray-500 font-normal max-w-lg">Salesmeetings offers lip sync technology to programmatically reach buyers
                    over email with dynamic video made for SDRs.</p>
                </div>
            </div>
            <div className="flex justify-between pt-5">  
                <div className="max-w-sm">
                        <div className="subheading">
                            <div className="grid grid-cols-2 gap-8">
                                <h3 className="text-md font-semibold">Most searched</h3>
                                <p>Volume</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 items-center">
                                <div className="column-1">
                                    <KeywordClusters json={"most searched"} />
                                </div>
                                <div className="column-2 items-center grid gap-2">
                                    <div className="">
                                        <p className="text-xs text-gray-500">80,120</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-gray-500">80,120</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-gray-500">80,120</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-gray-500">80,120</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-gray-500">80,120</p>
                                    </div>
                                    <div className="">
                                        <p className="text-xs text-gray-500">80,120</p>
                                    </div>
                                </div> 
                            </div>
                            <button className="mt-2 mb-2 text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md text-xs w-full sm:w-auto px-2 py-1 text-center :bg-black :hover:bg-black :focus:ring-black">View all</button>

                        </div>
                        <div className="subheading">
                        <div className="grid grid-cols-2 gap-8">
                                    <h3 className="text-md font-semibold">Ranking opportunities</h3>
                                    <p>Difficulty</p>
                                </div>                            
                                <div className="grid grid-cols-2 gap-8 items-center">
                                    <div className="column-1">
                                        <KeywordClusters json={"ranking opportunities"}/>
                                    </div>
                                    <div className="column-2 items-center">
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                        <p className="text-xs text-gray-700">Low</p>
                                    </div> 
                                </div>
                                <button className="mt-2 mb-2 text-white bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-black font-medium rounded-md text-xs w-full sm:w-auto px-2 py-1 text-center :bg-black :hover:bg-black :focus:ring-black">View all</button>

                        </div>
                    </div>
                    <div className="max-w-sm mr-10 border-black">
                         <div className="subheading mb-4">
                                <div className="text-left">
                                   <p className="text-lg">Related domains</p>
                                </div>
                                <div className="column-2 ">
                                    <p className="text-xs text-blue-500">197 found</p>
                                </div>
                        </div>
                        <Link href="/b/domains" className="text-xs rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Bucket of domains</Link>
                        <div className="mt-3">
                            <div className="text-left">
                                <h3 className="text-lg">Target groups</h3>
                            </div>
                            <div className="grid items-center gap-2 mb-4">
                                    <Link href="google.com" target="_blank" className="hover:cursor text-sm underline text-gray-700">Sales Development Representative</Link>
                                    <Link href="google.com" target="_blank" className="hover:cursor text-sm underline text-gray-700">Vicepresident of Sales</Link>
                                    <Link href="google.com" target="_blank" className="hover:cursor text-sm underline text-gray-700">Chief Executive Officer</Link>
                            </div>
                        </div>
                        <Link href="/b/groups" className="mt-4 text-xs rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Bucket of groups</Link>
                    </div>
                </div>
        </>
    );
}
