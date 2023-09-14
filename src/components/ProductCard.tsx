import Image from 'next/image'
import CompanyIcons from './CompanyIcons'
import CompanyImage from './CompanyImage'

export default function ProductCard() {
    return (
        <div className="w-4/12 gap-4 flex-start flex flex-row group cursor-pointer">
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
    )
}