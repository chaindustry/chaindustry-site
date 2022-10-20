import { ArrowRight, ArrowUp } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { SiDiscord, SiTelegram, SiTwitter } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
const Footer = () => {
  let links = {
    company: [
      { label: "Why Chaindustry", path: "#" },
      { label: "Our services", path: "#" },
      { label: "Team", path: "#" },
      { label: "Blog", path: "#" },
      { label: "FAQs", path: "/faqs" },
    ],
    misc: [
      { label: "Terms of use", path: "#" },
      { label: "Privacy Policy", path: "#" },
    ],
    socials: [
      { icon: <SiDiscord size={19} />, path: "#" },
      { icon: <SiTwitter size={19} />, path: "#" },
      { icon: <FaTelegramPlane size={21} />, path: "#" },
    ],
  };
  return (
    <footer>
      <div className="mb-[60px]">
        <div className="relative w-[118px] h-[25.09px] mb-[28.91px]">
          <Image
            src="/logo.png"
            layout="fill"
            quality={100}
            objectFit="contain"
            alt="logo"
          />
        </div>

        <form className="bg-white/10 rounded-[1em] p-[2em] max-w-[284px]">
          <h2 className="max-w-[190px] text-[18px] leading-[150%] tracking-[-0.05em] font-sfSemibold mb-[35px]">
            Subscribe now for updates
          </h2>
          <div className="flex items-center">
            <input
              required
              placeholder="Email"
              className="bg-transparent px-2 outline-none w-full h-[40px] border-b-grey-50 border-b-[1px] mr-[11.5px]"
            />
            <button className="bg-secondary-50 border-none h-[32px] w-[32px] rounded-full flex items-center justify-center shrink-0">
              <ArrowRight size={16} />
            </button>
          </div>
        </form>
      </div>
      {/* Links */}
      <div>
        <nav className="flex flex-col gap-[2em] mb-[69px]">
          {links.company.map((link, id) => {
            return (
              <Link key={id} href={link.path}>
                <a className="font-sfLight text-[1em] leading-[150%] tracking=[-0.02em]">
                  {link.label}
                </a>
              </Link>
            );
          })}
        </nav>
        <nav className="flex flex-col gap-[2em] mb-[51px]">
          {links.misc.map((link, id) => {
            return (
              <Link key={id} href={link.path}>
                <a className="font-sfLight text-[1em] leading-[150%] tracking=[-0.02em]">
                  {link.label}
                </a>
              </Link>
            );
          })}
        </nav>
        <nav className="flex gap-[8px] mb-[66px]">
          {links.socials.map((link, id) => {
            return (
              <Link key={id} href={link.path}>
                <a
                  rel="noreferrer"
                  target={"_blank"}
                  className="w-[2em] h-[2em] bg-[#9d99a3] inline-flex items-center justify-center rounded-full text-primary-100"
                >
                  {link.icon}
                </a>
              </Link>
            );
          })}
        </nav>

        <div className="font-sfLight text-[14px] leading-[150%] tracking-[-2%] mb-[92px] items-center flex justify-between">
          <span> Copyright &copy; {new Date().getFullYear()} Chaindustry</span>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
};
const BackToTop = () => {
  const scrolUp = () => {
    typeof window !== "undefined" &&
      window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  };
  return (
    <div
      onClick={scrolUp}
      className="cursor-pointer bg-secondary-50 h-[32px] rounded-full flex items-center justify-center w-[32px]"
    >
      <ArrowUp size={16} />
    </div>
  );
};
export default Footer;
