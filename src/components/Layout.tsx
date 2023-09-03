import Navbar from './ui/navbar'
import { LayoutProps } from '~/types'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

function Layout({ children }: LayoutProps) {

    return (
        <>
            <Navbar />
            <main className={inter.className + "h-full"}>
                {children}
            </main>
        </>
      
    )
}

export default Layout 