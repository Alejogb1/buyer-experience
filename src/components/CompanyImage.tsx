import Image from 'next/image'

export default function CompanyImage () {

    return (
        <Image
            className="company-image"
            src="https://cdn.shopify.com/app-store/listing_images/ca153fbdb5d5bc9bb3402f61073dbcb2/icon/CLOVkZCGgf0CEAE=.png"
            alt="logo de empresa"
            width={100}
            height={20}
        />    
    )
}