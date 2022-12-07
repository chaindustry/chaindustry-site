import Head from "next/head";
import Image from "next/image";
import Home from "../components/home/Home";

export default function Main() {
  return (
    <div>
      <Head>
        <meta
          name="description"
          content="Chaindustry is a DoToEarn network offering value and digital services to it's users and partners."
        />

        <meta property="og:url" content="https://www.chaindustry.io" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Chaindustry" />
        <meta
          property="og:description"
          content="Chaindustry is a DoToEarn network offering value and digital services to it's users and partners."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/cashio-1ccdd.appspot.com/o/og_chain-min%20(1).png?alt=media&token=aa672469-787f-41f3-84e1-c0956951e51e"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="chaindustry.io" />
        <meta property="twitter:url" content="https://www.chaindustry.io" />
        <meta name="twitter:title" content="Chaindustry" />
        <meta
          name="twitter:description"
          content="Chaindustry is a DoToEarn network offering value and digital services to it's users and partners."
        />
        <meta
          name="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/cashio-1ccdd.appspot.com/o/og_chain-min%20(1).png?alt=media&token=aa672469-787f-41f3-84e1-c0956951e51e"
        />

        <title>Chaindustry | Home</title>
        <meta
          name="description"
          content="Chaindustry is a digital servicing company giving value and digital services to its users and partners."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}
