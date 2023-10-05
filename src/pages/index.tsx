import Head from "next/head";
import Link from "next/link";
import Script from 'next/script'

const Home = () => {

  return (
    <>
      <Head>
        <title>Listado de los mejores softwares</title>
      </Head>
      <main>
        <div className="relative">
          <div className="max-w-4xl flex justify-left flex-column">
            <div className="mt-12 mb-20">
              <h1 className="max-w-2xl text-4xl text-left  mx-auto font-bold tracking-tight text-gray-900 sm:text-2xl md:text-4xl lg:text-6xl">
                Cual es el mejor software  para tu empresa?
              </h1>
              <p className="max-w-2xl text-left mt-6 lg:text-lg text-gray-600">
                Encuentra la solución que mejor se adapte a tu negocio.
              </p>
              <div className="max-w-2xl mt-5 flex justify-left gap-x-6">
                <Link
                  href="/categories"
                  className="rounded-md bg-black px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Buscar soluciones
                </Link>
                <Link href="/opinar" className="text-sm font-semibold leading-6 text-gray-900 mt-2">
                  Opinar <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>
      <div className="container">
        <Script defer src="https://www.googletagmanager.com/gtag/js?id=G-J531CF9875" />
        <Script defer id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-J531CF9875');
        `}
        </Script>
      </div>

    </>
  );
};

export default Home;