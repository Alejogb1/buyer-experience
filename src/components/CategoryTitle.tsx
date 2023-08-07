import { useSession } from "next-auth/react";
import { useState } from 'react';
import { Category } from '~/types';
import { api } from '~/utils/api';



export default function categoryTitle(category: Category){
    const { data: session } = useSession();
    const [ edit, setEdit ] = useState(false)
    const [editedTitle, setEditedTitle] = useState(category.title)

    const { mutate } = api.category.update.useMutation({
        onMutate: () => {
            setEdit(false)
        }
          
    })

  
    return (
        <h1 className="font-bold text-3xl">
            {category.title} 
        </h1>
    )
}