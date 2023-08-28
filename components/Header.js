import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { memo, useEffect, useRef, useState } from "react";
import { appName } from "../variables";
import AppButton from "./button/AppButton";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Logo = () => {
  return (
    <Link href="/">
      <a className="inline-block">
        <div
          className="relative w-[118px] h-[24.09px]
        md:w-[140px] md:h-[30px]
        lg:w-[185px] lg:h-[39px]
        "
        >
          <Image
            layout="fill"
            src={"/logo.png"}
            objectFit="contain"
            priority
            quality={100}
            alt="Logo"
            // placeholder="blur"
            // blurDataURL="/logo.png"
          />
        </div>
      </a>
    </Link>
  );
};
const Header = () => {
  let navs = [
    { label: "About Us", path: "/about" },
    // { label: "Our services", path: "/services" },
    { label: "Blog", path: "https://www.blog.chaindustry.io" },
    { label: "Academy", path: "https://www.academy.chaindustry.io" }
  ];
  const [show, setShow] = useState(false);
  const toggleNav = (bool) => {
    return setShow(bool);
  };
  const router = useRouter();
  //   Desktop Nav
  const LgNav = () => {
    return (
      <nav className="hidden lg:block mt-[12px] transition ">
        <ul className="flex gap-[32px] ">
          {/* To include schema */}
          {navs.map((nav, id) => {
            let isActive = router.pathname === nav.path;
            return (
              <li key={id}>
                <Link href={nav.path}>
                  <a
                    className={`${
                      isActive ? "bg-white/20" : ""
                    } rounded-[12px] text-[18px] px-[16px] py-[8px] inline-flex items-center whitespace-nowrap font-sfLight leading-[201.5%] tracking-[-0.025em]`}
                  >
                    {nav.label}
                    {nav.label === "Blog" && (
                      <ArrowRight style={{ transform: "rotate(-45deg)" }} />
                    )}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  };
  let app_link = "https://chainapp.vercel.app";

  const closeNav = () => {
    setShow(false);
  };
  useEffect(() => {
    Router.events.on("routeChangeStart", closeNav);

    return () => Router.events.off("routeChangeStart", closeNav);
  }, []);
  const ref = useRef(null);

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     const tl = gsap.timeline();
  //     // gsap.set("#logo", {
  //     //   opacity: 1,
  //     //   position: "absolute"
  //     // });
  //     gsap.set("#menu", { display: "none" });
  //     gsap.set("#header", { height: "100vh" });
  //     const headerTween = gsap.to("#header", {
  //       keyframes: {
  //         "0%": {
  //           height: "100vh"
  //         },
  //         "20%": {
  //           height: "100vh"
  //         },
  //         "40%": {
  //           height: "100vh"
  //         },
  //         "60%": {
  //           height: "100vh"
  //         },
  //         "80%": {
  //           height: "100vh"
  //         },
  //         "100%": {
  //           height: "auto"
  //         }
  //       },
  //       duration: 4,
  //       paused: true
  //     });
  //     const menuTween = gsap.to("#menu", {
  //       keyframes: {
  //         opacity: [0, 0, 1],
  //         easeEach: "power2.inOut"
  //       },

  //       duration: 5,
  //       paused: true
  //     });
  //     const center = {
  //       xPercent: -50,
  //       yPercent: -50,
  //       // scale: 2.5,
  //       top: "50%",
  //       left: "50%",
  //       position: "absolute"
  //     };
  //     let eachTween = gsap.to("#logo", {
  //       keyframes: {
  //         // "0%": {
  //         //   // y: 100,

  //         //   opacity: 0
  //         //   scale: 2
  //         // },
  //         // "20%": {
  //         //   // y: 100,
  //         //   // scale: 2.5,
  //         //   ...center,
  //         //   opacity: 0
  //         // },
  //         // "40%": {
  //         //   // y: 0,
  //         //   // scale: 2.5,
  //         //   ...center,
  //         //   opacity: 1
  //         //   // x: "100%"
  //         // },
  //         // "60%": {
  //         //   ...center
  //         //   // scale: 2.5
  //         //   // x: "100%"
  //         // },
  //         // "75%": { scale: 1, transformOrigin: "top top", ...center },
  //         // // "90%": { x: "100%" },
  //         // "100%": {
  //         //   scale: 1,
  //         //   xPercent: 0,
  //         //   yPercent: 0,
  //         //   left: 0,
  //         //   top: 0,
  //         //   position: "relative"
  //         // },
  //         position: [
  //           "relative"
  //           // "relative",
  //           // "relative",
  //           // "relative",
  //           // "relative",
  //           // "static"
  //         ],
  //         left: ["50%", "50%", "50%", "50%", "50%", "0"],
  //         top: ["50%", "50%", "50%", "50%", "50%", "0"],
  //         yPercent: [-50, -50, -50, -50, 0],
  //         scale: [2, 2, 2, 1, 1],
  //         opacity: [0, 1],
  //         xPercent: [-50, -50, -50, -50, 0],
  //         easeEach: "power4.inOut" // <- customise the ease between each keyframe
  //       },
  //       duration: 5,
  //       paused: true
  //     });
  //     headerTween.play();
  //     eachTween.play();
  //     menuTween.play();
  //   }, ref);
  //   return () => ctx.revert();
  // }, [ref]);
  const duration = 5;
  return (
    <div ref={ref}>
      <motion.header
        id="header"
        // initial={{ height: "100vh" }}
        // animate={{ height: "auto" }}
        // transition={{ duration: duration, delay: 2 }}
        className="mb-[108px]  py-7 flex justify-between items-center  relative z-[200]
    sm:py-7
    md:py-7
    lg:py-[54px] lg:mb-[90px]"
      >
        <motion.div id="logo" className="">
          {" "}
          <Logo />
        </motion.div>
        {/* Nav */}
        <LgNav />

        {/* Get started */}
        <motion.div className="hidden gap-[15px] lg:flex">
          <Link
            href={{
              pathname: `${appName}/login`,
              query: {
                url_source: "landing_page"
              }
            }}
          >
            <a>
              <AppButton size="lg" label="Log In" variant="ghost" />
            </a>
          </Link>
          <Link href={`${appName}/signup`}>
            <a>
              <AppButton size="lg" label="Get Started" variant="secondary" />
            </a>
          </Link>
        </motion.div>

        {/* MObile hqmburger toggle */}
        <motion.div
          id="menu"
          // initial={{ display: "none" }}
          // animate={{ display: "flex" }}
          transition={{ delay: duration + 2 }}
          className={`relative z-[106] cursor-pointer justify-center items-end flex flex-col gap-[10px] lg:!hidden ${
            show ? "animate-bars" : "reshape-bars"
          }`}
          onClick={() => toggleNav(show ? false : true)}
        >
          <div className="bg-[#fff] w-[26px] h-[1px] bar"></div>
          <div className="bg-[#fff] w-[21px] h-[1px] bar"></div>
        </motion.div>
        <MobileNav
          logo={<Logo />}
          navs={navs}
          show={show}
          setShow={toggleNav}
        />
      </motion.header>
    </div>
  );
};

export default memo(Header);
