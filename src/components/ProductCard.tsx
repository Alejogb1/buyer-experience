import Image from 'next/image'
import Link from 'next/link';
type ProductCardProps = {
    product: {
        id: number;
        name: string;
        description: string;
        logo: string;
        rating: number;
        website_url: string;
    }
}

export default function ProductCard(product: ProductCardProps) {
    if (!product) {
        return <p>No product available</p>; // Handle undefined case gracefully
    }
    const { name, logo, description, rating, website_url } = product.product;

    return (
        <Link href={{
            pathname: '/[product]',
            query: { product: name },
        }} className="w-4/12 gap-4 flex-start flex flex-row group cursor-pointer">
            <figure className=" overflow-hidden shrink-0 relative">
                <img
                    className="rounded-md block relative shrink-0 w-16"
                    src={logo}
                    alt={name}
                />
            </figure>
            <div className="flex flex-col flex-start gap-1">
                <div className="">
                    <p className='group-hover:underline text-md text-black font-semibold'>
                        {name}
                    </p>
                </div>

                <div className="self-stretch items-center flex flex-row relative text-sm text-black font-normal">
                    <span className="">
                        {rating}
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
                <div ><p className="text-sm text-gray-500 font-normal">{description}</p></div>
            </div>
        </Link>
    )
}