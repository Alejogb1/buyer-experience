import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CounterClock from "../CounterClock";
const Navbar = () => {
  const [category, setCategory] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (category != '') {
      router.push(`/c/${category}`).catch((error) =>
        console.log(error)
      )
    }
  }, [category])

  return (
    <nav className="">
      <div className="relative flex h-16 items-center justify-between">
        <div className="">
          <span className="flex items-center text-sm font-medium text-gray-800">
            <span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>1 viendo</span>
        </div> 

          <Link
            className="text-sm font-medium flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"
            href="/"
          >
            AUDIENCIA
          </Link>
      

        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static">
          <Link href="/categories" className="hover:underline">
            Categorías
          </Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;