import { signIn, signOut, useSession } from "next-auth/react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from './dropdownMenu';

const Navbar = () => {
  const { data: session, status } = useSession();
  const [category, setCategory] = useState('');
  const router = useRouter();


  useEffect( () => {
    if(category != ''){
      router.push(`/c/${category}`).catch((error) =>
        console.log(error)
      )
    }
  }, [category])

  return (
    <nav className="mx-auto max-w-7xl px-20 sm:px-6 lg:px-20">
        <div className="relative flex h-16 items-center justify-between">
        <div className="relative flex h-16 items-center justify-between">
            <Link
            className="hover:underline"
            href="/"
            >
            Logo
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