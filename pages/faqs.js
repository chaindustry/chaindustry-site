import Head from "next/head";
import React from "react";
import Faq from "../components/home/Faq";
import { faqs } from "../variables";

const FaqPage = () => {
  const addFaqJsonLd = () => {
    const generateEntities = () => {
      return faqs.map((faq) => {
        return {
          "@type": "Question",
          name: faq.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.text
          }
        };
      });
    };

    console.log(generateEntities());

    return {
      __html: `{
        "@context": "https://schema.org/",
        "@type": "FAQPage",
         "mainEntity": ${JSON.stringify(generateEntities())}
      }`
    };
  };

  console.log(addFaqJsonLd());
  return (
    <div>
      <Head>
        <title> Chaindustry - Frequently Asked Questions(FAQ) |</title>
        <meta
          name="description"
          content="Here are some frequently asked questions and answers by users and partners on chaindustry"
          key="desc"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={addFaqJsonLd()}
          key="faq-jsonld"
        />
      </Head>
      <Faq />
    </div>
  );
};

export default FaqPage;
