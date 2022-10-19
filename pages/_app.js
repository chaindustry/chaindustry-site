import { useEffect } from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  //  width: 422px;
  // height: 831px;
  // left: 1122px;
  // top: -74px;

  // border: 128px solid rgba(222, 53, 97, 0.4);
  // filter: blur(241.5px);

  return (
    <div className="overflow-x-hidden relative">
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
      <main className="container relative z-[1] px-[20px] m-auto xl:w-[1200px] 2xl:w-[1300px] ">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
