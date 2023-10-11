import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "~/components/Layout";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"], display: "swap" });

const MyApp: AppType<{ session: null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <Layout >
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Encuentra la solución que mejor se adapte a tu negocio."
        />
        <meta
          lang="es"
        />
      </Head>
      <Component className={inter.className + "h-full"} {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
