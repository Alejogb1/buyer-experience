import Navbar from './ui/navbar'
import { LayoutProps } from '~/types'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

function Layout({ children }: LayoutProps) {

    return (
        <div className={inter.className}>
            <Navbar />
            {children}
        </div>
    )
}

export default Layout 