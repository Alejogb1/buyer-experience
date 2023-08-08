import { GetServerSidePropsContext, InferGetServerSidePropsType, NextPage } from "next"
import Navbar from '~/components/ui/navbar'
import Link from "next/link"
import { api } from "~/utils/api";

const Categories = () => {
  const {data: categoryQuery, isLoading } = api.category.get.useQuery();

  console.log("QUERY DATA: ", )
  return (
    <>
      <Navbar/>
      <div className="mx-auto max-w-7xl h-100 px-20 sm:px-6 lg:px-20">
        <h1 className='text-2xl header'>
          Todos los programas en un solo lugar 
        </h1>
        <ul>
          {categoryQuery?.map((item) => (
                  <li key={item.id}>
                  <Link href="/"  className='hover:underline'>{item.name}</Link>
              </li>
              ))
            }
        </ul>  
   </div>
 </> 

  )
}

export default Categories
