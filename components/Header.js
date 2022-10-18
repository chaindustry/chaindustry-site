import { ArrowRight } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AppButton from "./button/AppButton";

const Header = () => {
  let navs = [
    { label: "About Us", path: "/about" },
    { label: "Our services", path: "/services" },
    { label: "Blog", path: "https://www.blog.chaindustry.io" },
    { label: "Academy", path: "https://www.academy.chaindustry.io" },
  ];
  //   Desktop Nav
  const LgNav = () => {
    return (
      <nav className="hidden lg:block">
        <ul className="flex gap-[54px]">
          {/* To include schema */}
          {navs.map((nav, id) => {
            return (
              <li key={id}>
                <Link href={nav.path}>
                  <a className="text-[18px] inline-flex items-center whitespace-nowrap font-sfLight leading-[36px] tracking-[-0.025em]">
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
  return (
    <header
      className="mb-[108px] py-5 flex justify-between items-center 
    sm:py-7
    md:py-7
    lg:py-[54px] lg:mb-[90px]"
    >
      <div className="w-full max-w-[249px]">
        {" "}
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
      </div>
      {/* Nav */}
      <LgNav />

      {/* Get started */}
      <div className="hidden gap-[15px] lg:flex">
        <Link href={`${app_link}/login`}>
          <a>
            <AppButton size="lg" label="Log In" variant="ghost" />
          </a>
        </Link>
        <Link href={`${app_link}/signup`}>
          <a>
            <AppButton size="lg" label="Get Started" variant="secondary" />
          </a>
        </Link>
      </div>

      {/* MObile hqmburger toggle */}
      <div className="cursor-pointer justify-center items-end flex flex-col gap-[10px] lg:hidden">
        <div className="bg-[#fff] w-[26px] h-[1px]"></div>
        <div className="bg-[#fff] w-[21px] h-[0.5px]"></div>
      </div>
    </header>
  );
};

export default Header;
