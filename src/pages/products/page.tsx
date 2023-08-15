import { Fragment } from 'react'
import Link from 'next/link'
import { PrismaClient } from '@prisma/client';
import Image from 'next/image'
import '../globals.css' 
import { useState } from 'react';
import Navbar from "~/components/ui/navbar"

const prisma = new PrismaClient();

export default async function Categories() {
  return (
    <main className='main-class pb-20'>
     <Navbar></Navbar>
      <div className="body-container">
          <h1 className='text-2xl header'>
            Todos los programas en un solo lugar
          </h1>
      </div>
    </main> 
  )
  }
