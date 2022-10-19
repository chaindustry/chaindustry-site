import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import AppButton from "../button/AppButton";
import Header from "../Header";
import OnBoard from "./OnBoard";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Cards from "./Cards";
import Image from "next/image";

const Home = () => {
  const [constants, setConstants] = useState({
    row1: [
      "engage",
      "refer",
      "predict",
      "learn",
      "freelance",
      "refer",
      "learn",
      "sleep",
      "predict",
      "learn",
      "freelance",
    ],
    row2: [
      "chat",
      "learn",
      "refer",
      "stream",
      "engage",
      "learn",
      "freelance",
      "refer",
      "learn",
      "sleep",
      "predict",
    ],
    row3: [
      "refer",
      "stream",
      "learn",
      "sleep",
      "chat",
      "learn",
      "freelance",
      "refer",
      "learn",
      "sleep",
      "predict",
    ],
  });
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: "#anim",
        animation: gsap.fromTo(
          "#anim",
          { scale: 1 },
          {
            scale: 0.2,
            duration: 4,
            transformOrigin: "top center",
            yPercent: 40,
          }
        ),

        start: "bottom bottom",
        // end: "bottom top",
        scrub: true, // I like the 1 sec delay, set to true for exact anime on scroll
        //markers: true,
      });

      gsap.fromTo(
        "#shell",
        {
          scale: 0.8,
          // keyframes: {
          //   scale: 0,
          //   // opacity: [0, 0, 0, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          // },
        },
        {
          scale: 1.3,
          repeat: -1,
          repeatDelay: -1,
          duration: 3,
          opacity: 0,
          delay: 0.1,
        }
      );

      gsap.fromTo(
        "#inner-shell",
        {
          scale: 0.8,
          // keyframes: {
          //   scale: 0,
          //   // opacity: [0, 0, 0, 1],
          // },
        },
        {
          scale: 1.3,
          repeat: -1,
          repeatDelay: -1,
          duration: 3,
          opacity: 0,
          delay: 0.3,
        }
      );
      gsap.fromTo(
        "#main-shell",
        {
          scale: 0.8,
          // keyframes: {
          //   scale: 0,
          //   // opacity: [0, 0, 0, 1],
          // },
        },
        {
          scale: 1.2,
          repeat: -1,
          repeatDelay: -1,
          duration: 3,
          opacity: 0,
          delay: 0,
        }
      );

      gsap.fromTo(
        "#static",
        {
          scale: 1,
        },
        {
          scale: 1,

          duration: 30,
          repeat: -1,
          scrollTrigger: {
            trigger: "#anim",

            scrub: 1,
          },
        }
      );
      ScrollTrigger.create({
        trigger: "#coin3",
        animation: gsap.fromTo("#coin2", { yPercent: 50 }, { yPercent: -400 }),
        scrub: true,
        start: "bottom bottom",
      });

      ScrollTrigger.create({
        trigger: "#coin3",
        animation: gsap.fromTo("#coin3", { yPercent: 50 }, { yPercent: -100 }),
        scrub: true,
        start: "bottom bottom",
      });
      ScrollTrigger.create({
        trigger: "#coin3",
        animation: gsap.fromTo("#coin4", { yPercent: 50 }, { yPercent: -320 }),
        scrub: true,
        start: "bottom bottom",
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  const ScrollContent = () => {
    return (
      <section
        className="flex gap-[60px] overflow-auto mb-[30px] mx-[-1rem] md:mx-auto 
      md:mb-[-10px]"
      >
        {[...Array(50)].map((item, index) => {
          return (
            <div
              key={index}
              className="flex shrink-0 h-[40px] w-[95.73px] bg-white/20"
            ></div>
          );
        })}
      </section>
    );
  };
  let circleRef = useRef(null);

  return (
    <div ref={ref}>
      <Header />

      <section className="flex flex-col items-center">
        <div className="text-center mb-[40px] flex flex-col items-center">
          <div
            className="font-sfBold leading-[50.33px] text-[40px] tracking-[-0.035em] max-w-[329px] mb-4
             md:text-[60px] md:max-w-[561px] md:leading-[70px] 
             lg:text-[72px] lg:leading-[91px]"
          >
            DoToEarn with chaindustry.
          </div>
          <span
            className="max-w-[272px] text-base tracking-[-0.03em] text-[color:var(--primary-0)] 
          md:max-w-[500px] md:text-[20px] md:leading-[30px] 
          lg:text-[24px]  lg:max-w-[587px] lg:leading-[36px]"
          >
            Participate in our DoToearn ecosystem and earn awesome rewards.
          </span>
        </div>
        <div
          className="flex justify-center gap-4 mb-[99px]
        md:mb-[60px]
        lg:mb-[40px]
        "
        >
          <AppButton size="lg" label="Get Started" variant="secondary" />
          <AppButton size="lg" label="Log In" variant="ghost" />
        </div>
        {/* Animation Panel for tasks */}

        <div
          id="anim-cont"
          className={`
          h-[281px] w-full flex flex flex-col items-center 
            relative 
          md:h-[400px]
           lg:h-[730px]
           
           `}
        >
          {/* Coin images and oulse effect */}
          <motion.div
            id="coins_and_pulse"
            className="h-[281px] relative w-[281px] flex flex-col items-center justify-center
            md:h-[400px] md:w-[400px] md:p-[20px]
            lg:h-[730px] lg:w-[730px] lg:p-[32px]"
          >
            {[1, 2, 3, 4].map((coin, id) => {
              let img = `/coins/coin${coin}.png`;
              let className = {
                1: `h-[43.5px] w-[43.5px]  top-[12px] left-[13px]
                md: md:
                lg:h-[91.65px] lg:w-[91.65px] lg:top-[118.38px] lg:left-[-36.65px]`,
                2: `h-[67.44px] w-[72.06px] left-[1px] top-[91.56px]
                lg:w-[142.07px] h-[151.82px] lg:left-[-62px] lg:top-[286px]
                `,
                3: `right-[-29px] top-[94px] w-[80.99px] h-[81.08px]
                lg:h-[161.83px] lg:w-[161.65px] lg:right-[-135.48px] lg:top-[180px]
                `,
                4: `h-[50.07px] w-[53.51px] right-[58.49px] bottom-[24.8px]
                lg:w-[106.79px] lg:h-[99.93px] lg:bottom-[236.24px] lg:right-[7.21px]
                `,
              };
              return (
                <div
                  className={`absolute ${className[coin]} z-[10]`}
                  key={coin}
                  id={`coin${coin}`}
                >
                  <Image
                    src={img}
                    layout="fill"
                    placeholder="blur"
                    blurDataURL={img}
                    quality={100}
                    objectFit="contain"
                    priority
                    alt={`coin${coin}`}
                  />
                </div>
              );
            })}
            <div
              id="anim"
              className="h-[281px] w-[281px] flex flex-col items-center justify-center
            md:h-[400px] md:w-[400px] md:p-[20px]
            lg:h-[730px] lg:w-[730px] lg:p-[32px]
          "
            >
              {" "}
              <motion.div
                id="main-shell"
                className="h-[281px] w-[281px]  absolute rounded-full bg-secondary-50/20 p-[12.92px]animation-panel
        md:h-[400px] md:w-[400px] md:p-[20px]
        lg:h-[730px] lg:w-[730px] lg:p-[32px]"
              ></motion.div>
              <div
                id="shell"
                className="w-[256.36px] h-[256.36px]  absolute rounded-full bg-secondary-50/20 p-[10.01px]
          md:p-[16px] md:h-[370px] md:w-[370px]
          lg:p-[26px]  lg:h-[666px] lg:w-[666px]
          "
              ></div>{" "}
              <div
                id="inner-shell"
                className=" absolute h-[236.35px] w-[236.35px] rounded-full bg-secondary-50/20 p-[11.56px]
            md:p-[18px] md:w-[350px] md:h-[350px]
             lg:p-[30px] lg:h-[614px] lg:w-[614px]
            "
              ></div>
              {/* Image panel */}
              <div
                ref={circleRef}
                className="w-[213.25px] -rotate-[18.91deg] flex justify-center items-center scale-1 h-[213.25px] rounded-full relative bg-primary-90 overflow-hidden
              md:w-[310px] md:h-[310px]
               lg:h-[554px] lg:w-[554px]
               
              "
              >
                <div id="static" className="flex  items-center">
                  <Cards constants={constants} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollContent />
      {/* <div className="overflow-hidden"> */}
      <OnBoard />
      {/* </div> */}
    </div>
  );
};

export default Home;
// useEffect(() => {
//   let callback = (entries, observer) => {
//     console.log("Observing");
//     entries.forEach((entry) => {
//       // console.log(entry);
//       if (!entry?.isIntersecting) {
//         const rootDivId = entry?.target?.parentElement?.id;
//         const rootDiv = document.getElementById(rootDivId);

//         const exitingChild = entry;
//         const target = exitingChild?.target;
//         const element = target?.lastElementChild?.innerText;
//         console.log(constants);
//         if (!rootDivId) return;
//         // let rowArr = constants[rootDivId].filter((c) => c !== element);
//         // rowArr.push(element);
//         // // console.log(`${element} from ${rootDivId}`);
//         // if (rootDivId === "row1") {
//         //   console.log(`New ${rootDivId} array is ${rowArr}`);
//         //   return setConstants({
//         //     row1: rowArr,
//         //     row2: [...constants.row2],
//         //     row3: [...constants.row3],
//         //   });
//         // }
//         // if (rootDivId === "row2") {
//         //   console.log(`New ${rootDivId} array is ${rowArr}`);
//         //   return setConstants({
//         //     row1: [...constants.row1],
//         //     row2: rowArr,
//         //     row3: [...constants.row3],
//         //   });
//         // }
//         // if (rootDivId === "row3") {
//         //   console.log(`New ${rootDivId} array is ${rowArr}`);
//         //   setConstants({
//         //     row1: [...constants.row1],
//         //     row2: [...constants.row2],
//         //     row3: rowArr,
//         //   });
//         // }
//         // // if (rootDivId) {
//         // //   let rowArr = [
//         // //     ...constants[rootDivId].filter((c) => c !== element),
//         // //     element,
//         // //   ];
//         // //   console.log(rootDiv);
//         // //   switch (rootDivId) {
//         // //     case "row1":
//         // //       console.log(rowArr);
//         // //       return setConstants({
//         // //         row1: rowArr,
//         // //         row2: [...constants.row2],
//         // //         row3: [...constants.row3],
//         // //       });
//         // //   }
//         // // }
//         // const clonedElement = target.cloneNode(true);
//         // console.log(exitingChild);
//         // if (rootDivId) {
//         //   // target.remove();
//         //   rootDiv.appendChild(clonedElement);
//         //   console.log(exitingChild);
//         // }
//       }
//       // Each entry describes an intersection change for one observed
//       // target element:
//       //   entry.boundingClientRect
//       //   entry.intersectionRatio
//       //   entry.intersectionRect
//       //   entry.isIntersecting
//       //   entry.rootBounds
//       //   entry.target
//       //   entry.time
//     });
//   };
//   let observerOptions = {
//     root: circleRef?.current,
//     threshold: 0.1,
//     rootMargin: "0px",
//   };
//   let elementToObserve = document.getElementsByClassName("card");
//   let observer = new IntersectionObserver(callback, observerOptions);
//   Array.from(elementToObserve).forEach((element) => {
//     observer?.observe(element);
//   });
//   return () =>
//     Array.from(elementToObserve).forEach((element) => {
//       observer?.unobserve(element);
//     });
// }, []);
