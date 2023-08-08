import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "~/components/ui/navbar"
const Home = () => {
  const { data: session, status } = useSession();

  const ImagePath =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1200px-Salesforce.com_logo.svg.png";


  return (
    <>
    <Head>
      <title>Listado de los mejores softwares</title>
    </Head>
    <Navbar></Navbar>
    <main className="">


    </main>
    </>
  );
};

export default Home;
