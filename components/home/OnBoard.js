import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
// import { ArrowRight } from "ic";
import { ArrowRight2 } from "iconsax-react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const OnBoard = () => {
  let details = [
    {
      id: 1,
      img: "man-phone",
      title: "Simple Task & Earn",
      desc: "We have 8 varieties of task you can earn from. You can earn CSPD points while learning, Streaming, Sleeping, Predicting, Freelancing, Promoting, Engaging or referring.",
      action_text: "Get Started, it’s free"
    },
    {
      id: 2,
      img: "nft",
      title: "Exchange CDSP for fiat, crypto or NFT",
      desc: "CDSP are not just mere points, they can be exchanged for crypto.",
      action_text: "Get Started, it’s free"
    },
    {
      id: 3,
      img: "medal",
      title: "Get on top of the leaderboard",
      desc: "Earn special rewards by getting a place on the leaderboard.",
      action_text: "Start earning"
    },
    {
      id: 4,
      img: "premium",
      title: "Perform a task,",
      title2: "Earn twice",
      desc: "Upgrade to Premium to enjoy 2X rewards.",
      action_text: null
    }
  ];
  // gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     const timeline = gsap.timeline();

  //     ScrollTrigger.create({
  //       trigger: ".stay-1",
  //       pin: true,

  //       start: "bottom center",
  //       end: "+=400",
  //       // endTrigger: ".stay-2",
  //       scrub: true, // I like the 1 sec delay, set to true for exact anime on scroll
  //       markers: true
  //     });
  //     ScrollTrigger.create({
  //       trigger: ".stay-2",
  //       pin: true,

  //       start: "bottom center",
  //       end: "+=400",
  //       scrub: true, // I like the 1 sec delay, set to true for exact anime on scroll
  //       markers: true,
  //       pinSpacing: "+=1000"
  //     });
  //     ScrollTrigger.create({
  //       trigger: ".stay-3",
  //       pin: true,

  //       start: "bottom center",
  //       end: "+=400",
  //       scrub: true, // I like the 1 sec delay, set to true for exact anime on scroll
  //       markers: true,
  //       pinSpacing: "500px"
  //     });
  //     ScrollTrigger.create({
  //       trigger: ".stay-4",
  //       pin: true,

  //       start: "bottom center",
  //       end: "+=400",
  //       scrub: true, // I like the 1 sec delay, set to true for exact anime on scroll
  //       markers: true,
  //       pinSpacing: "500px"
  //     });
  //   }, ref);

  //   return () => ctx.revert();
  // }, []);
  return (
    <section
      ref={ref}
      id="animate"
      className="md:m-auto md:max-w-[700px]
     lg:max-w-[1008px]
     xl:max-w-[1200px]"
    >
      {details.map((item, id) => {
        let img = `/obb/${item.img}.png`;
        let index = item.id;
        let size = {
          1: "h-[556px] w-[449px] right-[-41px] mb-[41px] md:right-[0px] md:h-[700px] md:w-[600px] z-[2]",
          2: "h-[280px] w-[222.64px] m-auto mb-[55px] md:m-[unset] md:w-[180px] md:h-[240px]",
          3: "h-[291px] w-[179px] m-auto mb-[33px]",
          4: "h-[197px] w-[249px] m-auto mb-[27px]"
        };

        return (
          <article
            // initial={{ opacity: 0, y: 100 }}
            // transition={{ delay: 0, duration: 0.5, type: "tween" }}
            // whileInView={{ opacity: 1, y: 0 }}
            key={id}
            className={`mb-[110px] ${index === 3 && "mb-[128px]"} relative 
            md:flex md:items-center md:px-[40px]
            ${index === 2 ? "md:flex-row" : "md:flex-row-reverse"}
            ${index === 1 ? "md:pr-0 md:items-start" : ""}
            `}
          >
            <div
              className={`${
                index === 1 &&
                "overflow-hidden relative right-[-1em] lg:right-0 lg:overflow-none lg:basis-[unset]"
              }
              md:basis-1/2
              `}
            >
              <div className={`relative ${size[index]}`}>
                <Image
                  layout={index === 1 ? "responsive" : "fill"}
                  src={img}
                  placeholder="blur"
                  blurDataURL={img}
                  priority
                  height={index === 1 && 556}
                  width={index === 1 && 449}
                  objectFit="contain"
                  quality={100}
                  alt={id}
                />
              </div>
            </div>
            <div className={`md:flex-1 stay-${id + 1}`}>
              <div
                className="max-w-[283px] shrink-0
                md:max-w-[323px]
                lg:max-w-[419px]
            "
              >
                <div
                  className="font-sfBold text-[32px] leading-[40px] tracking-[-0.06em] mb-[24px]
                lg:text-[40px] lg:leading-[50px] lg:tracking-[-0.06em]
                2xl:text-[48px] xl:leading-[60px] 2xl:tracking-[-0.06em]
                
                "
                >
                  {item.title}{" "}
                  {item.title2 && (
                    <span className="text-secondary-50">{item.title2}</span>
                  )}
                </div>
                <div
                  className="text-base font-sfLight text-grey-20 leading-[32.24px] tracking-[-0.025em] mb-[24px]
                lg:text-[18px] lg:leading-[42px]
                2xl:text-[24px] 2xl:leading-[48px]
                "
                >
                  {item.desc}
                </div>
                {item.action_text && (
                  <Link href="https://www.app.chaindustry.io/signup">
                    <a className="text-secondary-40 text-base font-sfMedium inline-flex gap-[10px] items-center tracking-[-0.03em]">
                      {item.action_text}
                      <ArrowRight2 />
                    </a>
                  </Link>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default OnBoard;
