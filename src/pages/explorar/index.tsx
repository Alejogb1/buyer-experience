import Link from "next/link"
import Navbar from "~/components/ui/navbar"
import ProductCard from "~/components/ProductCard";
import { Inter } from "next/font/google";
import Image from 'next/image'
import CompanyIcons from '~/components/CompanyIcons'
import CompanyImage from '~/components/CompanyImage'

const inter = Inter({ subsets: ["latin"], display: "swap" });

const Explore = () => {
    return (

        <div className="relative" >
            <div className="max-w-4xl flex justify-left mt-5">
                <div className={inter.className}>
                    <h2 className="text-2xl font-semibold">En tendencia este Septiembre</h2>
                </div>
            </div>
            <div className=" col-span-full lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4">
                <div className="max-w-5xl pt-10 grid gap-y-4 grid-flow-dense gap-4 lg:gap-y-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                    <div className="w-full cursor-pointer">
                        <div className="gap-4 flex-start flex flex-row">
                            <figure className=" overflow-hidden shrink-0 relative">
                                <img
                                    className="rounded-md block relative shrink-0 w-16"
                                    src="https://cdn.shopify.com/app-store/listing_images/ca153fbdb5d5bc9bb3402f61073dbcb2/icon/CLOVkZCGgf0CEAE=.png"
                                    alt=""
                                />
                            </figure>
                            <div className="flex flex-col flex-start gap-1 group">
                                <div className="">
                                    <a href="/opinar" className="group-hover:underline text-md text-black font-semibold">Transcy: Traducción y monedas</a>
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
                    <div className="w-full cursor-pointer">
                        <div className="gap-4 flex-start flex flex-row cursor pointer group">
                            <figure className=" overflow-hidden shrink-0 relative">
                                <img
                                    className="rounded-md block relative shrink-0 w-16"
                                    src="https://cdn.shopify.com/app-store/listing_images/ca153fbdb5d5bc9bb3402f61073dbcb2/icon/CLOVkZCGgf0CEAE=.png"
                                    alt=""
                                />
                            </figure>
                            <div className="flex flex-col flex-start gap-1">
                                <div className="">
                                    <a href="/opinar" className="group-hover:underline text-md text-black font-semibold">Transcy: Traducción y monedas</a>
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
                    <div className="w-full cursor-pointer">
                        <div className="gap-4 flex-start flex flex-row cursor pointer group">
                            <figure className=" overflow-hidden shrink-0 relative">
                                <img
                                    className="rounded-md block relative shrink-0 w-16"
                                    src="https://cdn.shopify.com/app-store/listing_images/ca153fbdb5d5bc9bb3402f61073dbcb2/icon/CLOVkZCGgf0CEAE=.png"
                                    alt=""
                                />
                            </figure>
                            <div className="flex flex-col flex-start gap-1">
                                <div className="">
                                    <a href="/opinar" className="group-hover:underline text-md text-black font-semibold">Transcy: Traducción y monedas</a>
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
                    <div className="w-full cursor-pointer">
                        <div className="gap-4 flex-start flex flex-row cursor pointer group">
                            <figure className=" overflow-hidden shrink-0 relative">
                                <img
                                    className="rounded-md block relative shrink-0 w-16"
                                    src="https://cdn.shopify.com/app-store/listing_images/ca153fbdb5d5bc9bb3402f61073dbcb2/icon/CLOVkZCGgf0CEAE=.png"
                                    alt=""
                                />
                            </figure>
                            <div className="flex flex-col flex-start gap-1">
                                <div className="">
                                    <a href="/opinar" className="group-hover:underline text-md text-black font-semibold">Transcy: Traducción y monedas</a>
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
                    <div className="w-full cursor-pointer">
                        <div className="gap-4 flex-start flex flex-row cursor pointer group">
                            <figure className=" overflow-hidden shrink-0 relative">
                                <img
                                    className="rounded-md block relative shrink-0 w-16"
                                    src="https://cdn.shopify.com/app-store/listing_images/ca153fbdb5d5bc9bb3402f61073dbcb2/icon/CLOVkZCGgf0CEAE=.png"
                                    alt=""
                                />
                            </figure>
                            <div className="flex flex-col flex-start gap-1">
                                <div className="">
                                    <a href="/opinar" className="group-hover:underline  text-md text-black font-semibold">Transcy: Traducción y monedas</a>
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
                    <div className="w-full cursor-pointer">
                        <div className="gap-4 flex-start flex flex-row cursor pointer group">
                            <figure className=" overflow-hidden shrink-0 relative">
                                <img
                                    className="rounded-md block relative shrink-0 w-16"
                                    src="https://cdn.shopify.com/app-store/listing_images/ca153fbdb5d5bc9bb3402f61073dbcb2/icon/CLOVkZCGgf0CEAE=.png"
                                    alt=""
                                />
                            </figure>
                            <div className="flex flex-col flex-start gap-1">
                                <div className="">
                                    <a href="/opinar" className="group-hover:underline text-md text-black font-semibold">Transcy: Traducción y monedas</a>
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
            </div>
            <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#002EFF] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                />
            </div>
        </div>
    )
}

export default Explore