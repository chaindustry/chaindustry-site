"use client";
import React from "react";
import { motion } from "framer-motion";

const BecomeTutor = () => {
  // Reusable fade-up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay },
    }),
  };

  return (
    <section className="text-white py-20 px-6 md:px-12 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 text-left md:text-left"
        >
          <motion.h1
            custom={0.1}
            variants={fadeUp}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6"
          >
            Unlock the Future
            {/* Are you a professional? <br /> Become a tutor. */}
          </motion.h1>

          <motion.p
            custom={0.2}
            variants={fadeUp}
            className="text-gray-300 mb-8 max-w-md mx-auto md:mx-0"
          >
            Learn Web3. Create value. Earn while you grow.
          </motion.p>

          <motion.button
            custom={0.3}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 200 }}
            onDirectionLock={() => alert('joined')}
            className="bg-pink-600 hover:bg-gradient hover:from-pink-600 hover:to-purple-600 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300 mb-4 md:mb-0 "
          >
            <a href="https://app.chaindustry.io/academy">Start Learning</a>            
          </motion.button>
        </motion.div>

        {/* Right Image Section */}
        <div className="flex-1 flex justify-center items-center relative">
          {/* Gradient Glow Circle (pulsing effect) */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.9, 1, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-72 h-72 sm:w-80 sm:h-80 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-pink-600 via-purple-600 to-orange-400 blur-[1px] shadow-[0_0_80px_20px_rgba(236,72,153,0.25)]"
          ></motion.div>

          {/* Floating Tutor Image */}
          <motion.img
            src="/AmazingFeaturesPics/Tutor.png"
            alt="Tutor"
            initial={{ y: 15, opacity: 0.8 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-64 sm:w-72 md:w-80 -top-9 object-contain z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default BecomeTutor;
