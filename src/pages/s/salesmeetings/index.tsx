import Link from "next/link";

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
                    <a className="group-hover:underline pl-2 text-xl">Salesmeetings</a>
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
                                <h3 className="text-lg mb-4">Most searched</h3>
                                <p>Similar search</p>
                            </div>
                            <div className="grid grid-cols-2 gap-8 items-center">
                                <div className="column-1">
                                    <p className="text-sm text-gray-700">lip sync software</p>
                                    <p className="text-sm text-gray-700">lip sync software</p>
                                </div>
                                <div className="column-2 items-center">
                                    <p className="text-xs text-gray-500">Videospark</p>
                                    <p className="text-xs text-gray-500">Videospark</p>
                                </div> 
                            </div>
                            
                        </div>
                        <div className="subheading my-9">
                                <div className="grid grid-cols-2 gap-8">
                                    <h3 className="text-lg mb-4">Valuable searches</h3>
                                    <p>Potential to profit</p>
                                </div>                            
                                <div className="grid grid-cols-2 gap-8 items-center">
                                    <div className="column-1">
                                        <p className="text-sm text-gray-700">lip sync software</p>
                                        <p className="text-sm text-gray-700">lip sync software</p>
                                    </div>
                                    <div className="column-2 items-center">
                                        <p className="text-xs text-green-700">$12,500</p>
                                        <p className="text-xs text-green-700">$1,500</p>
                                    </div> 
                                </div>
                        </div>
                        <div className="subheading">
                        <div className="grid grid-cols-2 gap-8">
                                    <h3 className="text-lg mb-4">Ranking opportunity</h3>
                                    <p>Time to rank</p>
                                </div>                            
                                <div className="grid grid-cols-2 gap-8 items-center">
                                    <div className="column-1">
                                        <p className="text-sm text-gray-700">lip sync software</p>
                                        <p className="text-sm text-gray-700">lip sync software</p>
                                    </div>
                                    <div className="column-2 items-center">
                                        <p className="text-xs text-gray-700">5 months</p>
                                        <p className="text-xs text-gray-700">7 months</p>
                                    </div> 
                                </div>
                        </div>
                    </div>
                    <div className="max-w-sm mr-10 border-black">
                         <div className="subheading mb-4">
                                <div className="text-left">
                                    <h3 className="text-lg">Competing domains </h3>
                                </div>
                                <div className="grid grid-cols-2 gap-2 items-center">
                                    <div className="column-1">
                                        <a href="google.com" className="hover:cursor text-sm underline text-gray-500">www.google.com</a>                            
                                    </div>
                                </div>
                                <div className="column-2 ">
                                    <p className="text-xs text-blue-500">90% similarity</p>
                                </div> 
                                <div className="grid grid-cols-2 gap-2 items-center">
                                    <div className="column-1">
                                        <a href="google.com" className="hover:cursor text-sm underline text-gray-500">www.yahoo.com</a>                            
                                    </div>
                                </div>
                                <div className="column-2 ">
                                    <p className="text-xs text-blue-500">67% similarity</p>
                                </div> 
                                <div className="grid grid-cols-2 gap-2 items-center">
                                    <div className="column-1">
                                        <a href="google.com" className="hover:cursor text-sm underline text-gray-500">www.yahoo.com</a>                            
                                    </div>
                                </div>
                                <div className="column-2 ">
                                    <p className="text-xs text-blue-500">50% similarity</p>
                                </div> 
                        </div>
                        <a href="" className="text-xs rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Bucket of domains</a>

                        <div className="mt-3">
                            <div className="text-left">
                                <h3 className="text-lg">Target groups</h3>
                            </div>
                            <div className="grid items-center gap-2 mb-4">
                                    <a href="google.com" target="_blank" className="hover:cursor text-sm underline text-gray-700">Sales Development Representative</a>
                                    <a href="google.com" target="_blank" className="hover:cursor text-sm underline text-gray-700">Vicepresident of Sales</a>
                                    <a href="google.com" target="_blank" className="hover:cursor text-sm underline text-gray-700">Chief Executive Officer</a>
                            </div>
                        </div>
                        <a href="" className="mt-4 text-xs rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">Bucket of groups</a>
                    </div>
                </div>
        </>
    );
}
