import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "~/components/Layout";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const MyApp: AppType<{ session: null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <Layout >
      <Component className={inter.className + "h-full"} {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
