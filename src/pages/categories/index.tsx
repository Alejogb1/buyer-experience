import Navbar from '~/components/ui/navbar'
import { api } from "~/utils/api";
import NameToSlugLink from '~/utils/slug'; // Import utils to convert name to slug
import Head from "next/head";
import Link from 'next/link';

// Function to capitalize the first letter and convert the rest to lowercase
function capitalizeFirstLetter(string: String) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

const Categories = () => {
  const { data: categoryQuery, isLoading } = api.category.get.useQuery();

  return (
    <>
      <Head>
        <title>Categorias de software</title>
      </Head>
      <div className="mx-auto max-w-7xl h-100">
        <h1 className='text-2xl header'>
          Todos los programas en un solo lugar
        </h1>
        <ul>
          {categoryQuery?.map((item) => (
            <li key={item.id}>
              <Link href={`/c/${item.slug}`} className='hover:underline'>
                {capitalizeFirstLetter(item.name)}
              </Link>
            </li>
          ))
          }
        </ul>
      </div>
    </>

  )
}

export default Categories
