import { type AppType } from "next/app";
import { api } from "~/utils/api";
import "~/styles/globals.css";
import { Inter } from "next/font/google";
import Layout from "~/components/Layout";
import Head from "next/head";
import Script from "next/script";
const inter = Inter({ subsets: ["latin"], display: "swap" });

const MyApp: AppType<{ session: null }> = ({
  Component,
  pageProps: { ...pageProps },
}) => {
  return (
    <Layout >
      <Head>
          <Script id="google-tag-manager">
            {`
              <!-- Google Tag Manager -->
              <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5Z53CSJQ');</script>
              <!-- End Google Tag Manager -->
          `}
          </Script>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta
          name="description"
          content="Encuentra la solución que mejor se adapte a tu negocio."
        />
        <meta
          lang="es"
        />
      </Head>
      <Script>
            {`
              <!-- Google Tag Manager (noscript) -->
              <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5Z53CSJQ"
              height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
              <!-- End Google Tag Manager (noscript) -->
          `}
          </Script>
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
      <Component className={inter.className + "h-full"} {...pageProps} />
    </Layout>
  );
};

export default api.withTRPC(MyApp);
