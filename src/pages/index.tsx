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

      <div className="mx-auto max-w-7xl h-100 px-20 sm:px-6 lg:px-20">
        <h1 className="text-2xl header">El mejor software CRM</h1>
        <p className="w-9/12 text-black text-opacity-60 mb-4">
          El software CRM (administración de relaciones con los clientes)
          rastrea y administra las relaciones con los clientes. Registra las
          interacciones entre una empresa, sus prospectos y sus clientes
          existentes. Los productos de software de CRM colocan todos los datos
          relevantes del cliente, como la información de contacto, el historial
          y los resúmenes de transacciones, en un registro en vivo conciso.{" "}
        </p>
        <div className="subheading">
          <h3 className="text-2xl mb-2">Mejor en general</h3>
        </div>
        <div className="product-container border-1">
          <Image
            className="company-image"
            src={ImagePath}
            alt="logo de empresa"
            width={100}
            height={20}
          />
          <div className="company-text">
            <p className="text-5xl font-bold">Salesforce</p>
            <div className="product-reviews">
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/halfstarIcon.png"
                width={20}
                height={20}
                alt="half star icon"
              />
              <p className="text-xs font-bold">4.4</p>
            </div>
            <p className="text-lg mt-4 font-semibold text-black text-opacity-60">
              Salesforce es una plataforma integral rentable con una sólida
              solución de gestión de clientes y ventas.
            </p>
          </div>
          <button className="product-button mt-4">
            <p>Visitar software</p>
          </button>
        </div>
        <div className="subheading">
          <h3 className="text-2xl mb-2 mt-10">Mejor para pymes</h3>
        </div>
        <div className="product-container border-1">
          <Image
            className="company-image"
            src={ImagePath}
            alt="logo de empresa"
            width={100}
            height={20}
          />
          <div className="company-text">
            <p className="text-5xl font-bold">Salesforce</p>
            <div className="product-reviews">
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/halfstarIcon.png"
                width={20}
                height={20}
                alt="half star icon"
              />
              <p className="text-xs font-bold">4.4</p>
            </div>
            <p className="text-lg mt-4 font-semibold text-black text-opacity-60">
              Salesforce es una plataforma integral rentable con una sólida
              solución de gestión de clientes y ventas.
            </p>
          </div>
          <button className="product-button mt-4">
            <p>Visitar software</p>
          </button>
        </div>
        <div className="subheading">
          <h3 className="text-2xl mb-2 mt-10">Mejor para grandes empresas</h3>
        </div>
        <div className="product-container border-1">
          <Image
            className="company-image"
            src={ImagePath}
            alt="logo de empresa"
            width={100}
            height={20}
          />
          <div className="company-text">
            <p className="text-5xl font-bold">Salesforce</p>
            <div className="product-reviews">
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/starIcon.png"
                width={20}
                height={20}
                alt="star icon"
              />
              <Image
                src="/halfstarIcon.png"
                width={20}
                height={20}
                alt="half star icon"
              />
              <p className="text-xs font-bold">4.4</p>
            </div>
            <p className="text-lg mt-4 font-semibold text-black text-opacity-60">
              Salesforce es una plataforma integral rentable con una sólida
              solución de gestión de clientes y ventas.
            </p>
          </div>
          <button className="product-button mt-4">
            <p>Visitar software</p>
          </button>
        </div>
      </div>
    </main>
    </>
  );
};

export default Home;
