import { useSession } from "next-auth/react";
import { useState } from 'react';
import { Category } from '~/types';
import { api } from '~/utils/api';



export default function CategoryTitle(category: Category){
  
    return (
        <h1 className="text-2xl header">{category.name}</h1>
    )
}