import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdownMenu';
import CounterClock from "../CounterClock";
const Navbar = () => {
  const { data: session, status } = useSession();
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
          <span className="flex items-center text-sm font-medium text-gray-800"><span className="flex w-2.5 h-2.5 bg-blue-600 rounded-full mr-1.5 flex-shrink-0"></span>1509 viendo</span>
          <span>
            <CounterClock />
          </span>
        </div>
        <div className="relative flex h-16 items-center justify-between">
          <Link
            className="text-sm font-bold flex pt-1 italic"
            href="/"
          >
            AUDIENCIA
          </Link>
        </div>

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