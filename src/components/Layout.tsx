import Navbar from './ui/navbar'
import { LayoutProps } from '~/types'
import Footer from './ui/footer';

function Layout({ children }: LayoutProps) {

    return (
        <div className='mx-auto max-w-7xl px-2 lg:px-20 sm:px-6 lg:px-20'>
            <Navbar />
            <div className={"h-full"}>
                {children}
            </div>
            <Footer />
        </div>

    )
}

export default Layout 