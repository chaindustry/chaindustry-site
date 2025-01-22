import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/home/Footer";
import "../styles/globals.scss";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  // scroll();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag("config", "G-EEN44L4H8F", {
        page_path: url
      });
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    // <ReactLenis root >
    <div className="overflow-x-hidden relative">
      <Head>
        <meta name="theme-color" content="#0A0118" />
      </Head>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-EEN44L4H8F`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EEN44L4H8F', {
              page_path: window.location.pathname,
            });
          `
        }}
      />
      {/* Background blur filter */}
      <div
        className="absolute h-[579px] w-[294px] absolute top-[99px] border-[128px] border-primary-50 saf-blur left-[-250px] blur-[241.5px]
      lg:top-[249px] lg:left-0 lg:h-[831px] lg:w-[422px]
      "
      ></div>
      {/* Bg blur filter */}
      <div
        className="absolute w-[422px] h-[831px] top-[-74px] right-[-127px] blur-[241px] border-[128px] saf-blur border-secondary-50/40
      lg:top-[-74px] lg:right-[-104px]
      "
      ></div>

      {/* Main app */}
      <main
        className={`container relative z-[3] px-[20px] m-auto xl:w-[1200px] 2xl:w-[1300px]`}
      >
        <Header />
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
    // </ReactLenis>
  );
}

export default MyApp;
