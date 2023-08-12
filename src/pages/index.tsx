import { useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "~/components/ui/navbar"
const Home = () => {

  return (
    <>
    <Head>
      <title>Listado de los mejores softwares</title>
    </Head>
    <Navbar></Navbar>
    <main className="">
      <h1 className="text-4xl text-center header">Encuentra el mejor software</h1>
    </main>
    </>
  );
};

export default Home;
