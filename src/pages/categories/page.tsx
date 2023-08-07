import Link from 'next/link'
import { PrismaClient } from '@prisma/client';
import Image from 'next/image'
import '../globals.css' 
import { useState } from 'react';

const links = [{
  label: 'Review',
  route: '/review'
}]

export default async function CategoriesList() {
  const categoriesData = await getData();
  console.log({categoriesData})
  return (
    <main className='main-class pb-20'>
       <nav className="mx-auto max-w-7xl px-20 sm:px-6 lg:px-20">
          <div className="relative flex h-16 items-center justify-between">
            <div className="relative flex h-16 items-center justify-between">
              <Link
                className="hover:underline"
                href="/review"
              >
                Escribir reseña
              </Link>
            </div>
        </div>
      </nav>
      <div className="mx-auto max-w-7xl h-100 px-20 sm:px-6 lg:px-20">
          <h1 className='text-2xl header'>
            Todos los programas en un solo lugar
          </h1>
          <ul>
              {categoriesData.categories.map((category) => (
                  <li key={category.id}>
                    <Link href="/"  className='hover:underline'>{category.name}</Link>
                 </li>
              ))}  
          </ul>
      </div>
    </main> 
  )
  }

