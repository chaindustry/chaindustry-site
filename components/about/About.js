import Head from "next/head";
import React from "react";
import Available from "../home/Available";
import Join from "../home/Join";
import PageImage from "./PageImage";
import Services from "./Services";
import Team from "./Team";

const About = () => {
  return (
    <div>
      <Head>
        <title>About Chaindustry</title>
        <meta
          name="description"
          content="We give value and high quality digital services to our users and our
          partners."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-center mb-[40px] flex flex-col items-center">
        <div
          className="font-sfBold leading-[50.33px] text-[40px] tracking-[-0.035em] max-w-[329px] mb-4
             md:text-[60px] md:max-w-[561px] md:leading-[70px] 
             lg:text-[72px] lg:leading-[91px]"
        >
          Chaindustry
        </div>
        <span
          className="max-w-[272px] text-base tracking-[-0.03em] text-[color:var(--primary-0)] 
          md:max-w-[500px] md:text-[20px] md:leading-[30px] 
          lg:text-[24px]  lg:max-w-[587px] lg:leading-[36px]"
        >
          We give value and high quality digital services to our users and our
          partners.
        </span>
      </div>
      <PageImage />
      <Services />
      <Team />
      <Join />
      <Available />
    </div>
  );
};

export default About;
