import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import React, { memo, useEffect, useState } from "react";
import { appName } from "../variables";
import AppButton from "./button/AppButton";
import MobileNav from "./MobileNav";

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
  const Logo = () => {
    return (
      <Link href="/">
        <a>
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
              placeholder="blur"
              blurDataURL="/logo.png"
            />
          </div>
        </a>
      </Link>
    );
  };
  const closeNav = () => {
    setShow(false);
  };
  useEffect(() => {
    Router.events.on("routeChangeStart", closeNav);

    return () => Router.events.off("routeChangeStart", closeNav);
  }, []);
  return (
    <header
      className="mb-[108px] py-7 flex justify-between items-center  relative z-[2]
    sm:py-7
    md:py-7
    lg:py-[54px] lg:mb-[90px]"
    >
      <div className="w-full max-w-[249px]">
        {" "}
        <Logo />
      </div>
      {/* Nav */}
      <LgNav />

      {/* Get started */}
      <div className="hidden gap-[15px] lg:flex">
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
      </div>

      {/* MObile hqmburger toggle */}
      <div
        className={`relative z-[106] cursor-pointer justify-center items-end flex flex-col gap-[10px] lg:hidden ${
          show ? "animate-bars" : "reshape-bars"
        }`}
        onClick={() => toggleNav(show ? false : true)}
      >
        <div className="bg-[#fff] w-[26px] h-[1px] bar"></div>
        <div className="bg-[#fff] w-[21px] h-[1px] bar"></div>
      </div>
      <MobileNav logo={<Logo />} navs={navs} show={show} setShow={toggleNav} />
    </header>
  );
};

export default memo(Header);
