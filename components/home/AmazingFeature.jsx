"use client";
import React from "react";
import { motion } from "framer-motion";
import { features } from "../../functions";
import { MdKeyboardArrowRight } from "react-icons/md";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CampaignCard from "./card/CampaignCard";

// === Animation Variants ===
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};
{/* === Motion Variants === */}
const fadeInLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};


const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // delay between child animations
    },
  },
};


const AmazingFeature = () => {
  return (
    <section id="amaze" className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 text-white overflow-hidden">
      {/* === Tag === */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="bg-[#FFFFFF1A] px-4 py-1 rounded-[10px] w-fit mb-6"
      >
        <p className="text-sm font-medium tracking-wide">Amazing Features</p>
      </motion.div>

      {/* === Headings === */}
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        id='title1'
        className="text-4xl sm:text-5xl font-bold mb-2 leading-[1.2] pb-[2px] bg-gradient-to-tr from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
      >
        Everything you need.
      </motion.h1>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="text-4xl sm:text-5xl font-bold mb-6 leading-[1.2] pb-[2px] bg-gradient-to-tr from-[#FFFFFF] to-[#71717A] bg-clip-text text-transparent"
      >
        Nothing you don’t.
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        className="font-inter text-[13px] leading-[28px] text-[#A1A1AACC] mb-16"
      >
        Elevate your experience, amplify your earnings — join our ecosystem and
        discover the difference.
      </motion.p>

      {/* === Features Grid (staggered reveal) === */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cards p-4 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              src={item.img}
              alt={item.title}
              className="rounded-xl mb-4 w-full h-56 object-cover"
            />
            <h3 className="text-lg font-semibold mb-2 text-white">
              {item.title}
            </h3>
            <p className="text-white/70 text-[13.9px] leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* === Lower Cards === */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className=" mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {/* === Left Card === */}
  <motion.div
    variants={fadeInLeft}
    whileHover={{ scale: 1.02 }}
    className="cards md:col-span-2 bg-[#180635] rounded-2xl border border-white/10 hover:border-white/30 transition duration-300 p-8 flex flex-col justify-between"
  >
    <motion.div
      initial={{ y: 15 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      className="flex justify-center mb-8 lg:mb-10"
    >
      <img
        src="/features/diamond.png"
        alt="Upgrade Icon"
        className="w-[110px] h-[88px]"
      />
    </motion.div>

    {/* === Upgrade CTA === */}
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="relative bg-[#18181B] border border-white/10 rounded-xl px-3 py-2 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0 overflow-visible"
    >
      <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left">
        ✨ More value when you upgrade
      </p>
      <button className="btn w-full sm:w-auto relative z-0">
        <span>Upgrade</span>
      </button>

      <img
        src="/features/hand.png"
        alt="Hand"
        className="absolute right-[-35px] bottom-[-20px] w-[70px] h-[69px] object-contain z-10"
      />
    </motion.div>

    {/* === Text Section === */}
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2 text-white">
        Perform a task, Earn twice
      </h3>
      <p className="text-white/70 text-xs mb-3">
        Upgrade to Premium to enjoy 2X rewards.
      </p>
      <a
        href="https://app.chaindustry.io/tasks/trending"
        className="text-[#FF2D55] font-medium text-md hover:underline flex hover:gap-2 items-center"
      >
        Start earning <MdKeyboardArrowRight />
      </a>
    </div>
  </motion.div>

  {/* === Right Card === */}
  <motion.div
    variants={fadeInRight}
    whileHover={{ scale: 1.03 }}
    transition={{ type: "spring", stiffness: 200 }}
    className="cards md:col-span-1 bg-[#180635] rounded-2xl border border-white/10 hover:border-white/30 transition duration-300 p-6 sm:p-8 flex flex-col"
  >
    <img
      src="/features/keyboard.png"
      alt="Campaign Background"
      className="w-full h-52 object-contain rounded-t-2xl relative left-5 brightness-[0.75]"
    />
    <CampaignCard />
  </motion.div>
</motion.div>
    </section>
  );
};

export default AmazingFeature;
