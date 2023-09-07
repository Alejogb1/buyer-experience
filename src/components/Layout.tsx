import Navbar from './ui/navbar'
import { LayoutProps } from '~/types'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

function Layout({ children }: LayoutProps) {

    return (
        <div className='mx-auto max-w-7xl px-20 sm:px-6 lg:px-20'>
            <Navbar />
            <div className={inter.className + "h-full"}>
                {children}
            </div>
        </div>
      
    )
}

export default Layout 