import Link from 'next/link';

const Footer = () => {

    return (
        <div className="">
            <div className="relative flex h-16 items-center justify-between">

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static">
                    <Link target="_blank" href="https://forms.gle/TPxKvSvqtM9fqvJs5" className="hover:underline">
                        Feedback
                    </Link>
                </div>
            </div>
        </div>

    );
};

export default Footer;