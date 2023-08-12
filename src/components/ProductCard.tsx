import Image from 'next/image'
import CompanyIcons from './CompanyIcons'
import CompanyImage from './CompanyImage'

export default function ProductCard () {
    return (
        <div className="product-container border-1">
            <CompanyImage/>
        <div className="company-text">
            <p className="text-5xl font-bold">{product.name}</p>
            <div className="product-reviews">
                <CompanyIcons/>
                <p className="text-xs font-bold">{product.rating}</p>
            </div>
            <p className="text-lg mt-4 font-semibold text-black text-opacity-60">
                {product.description}
            </p>
        </div>
        <button className="product-button mt-4">
            <p>Visitar software</p>
        </button>
        </div>
    )
}