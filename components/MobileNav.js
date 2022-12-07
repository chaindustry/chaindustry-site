import Link from "next/link";
import React, { memo } from "react";
import AppButton from "./button/AppButton";
import { appName } from "../variables";
const MobileNav = ({ logo, navs, show, setShow }) => {
  let showNav = `fixed opacity-100 translate-x-0 shownav z-[1]`;
  let hideNav = `fixed z-[-18] opacity-0 hidenav translate-x-[100%]`;
  return (
    <nav
      className={`${show ? showNav : hideNav} inset-0 bg-primary-100 
        lg:hidden`}
    >
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
      <div className="container mx-auto py-7 px-[20px] relative z-1">
        <header className="flex justify-between mb-[38.91px]">
          {logo}
          {/* <div onClick={() => setShow(false)}>Bars</div> */}
        </header>
        <div className="flex justify-center gap-4 mb-[36px]">
          <Link href={`${appName}/signup`}>
            <a>
              <AppButton
                label="Get Started"
                sxclass="!py-4 !px-8 !rounded-[10px]"
                variant="secondary"
              />
            </a>
          </Link>
          <Link
            href={{
              pathname: `${appName}/login`,
              query: {
                url_source: "landing_page"
              }
            }}
          >
            <a>
              <AppButton
                label="Log In"
                sxclass="py-4 px-8 !rounded-[10px]"
                variant="ghost"
              />
            </a>
          </Link>
        </div>

        <ul className="flex flex-col gap-4">
          <li key={"home"}>
            <Link href={"/"}>
              <a className="font-sfLight text-[18px] leading-[201.5%] tracking-[-0.02rem]">
                Home
              </a>
            </Link>
          </li>
          {navs.map((nav, id) => {
            return (
              <li key={id}>
                <Link href={nav.path}>
                  <a className="font-sfLight text-[18px] leading-[201.5%] tracking-[-0.02rem]">
                    {nav.label}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default memo(MobileNav);
