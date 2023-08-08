import Image from 'next/image'

export default function CompanyImage () {

    return (
        <Image
            className="company-image"
            src={ImagePath}
            alt="logo de empresa"
            width={100}
            height={20}
        />    
    )
}