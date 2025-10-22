"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
    x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
  },
  show: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const ExploreSec = () => {
  const [active, setActive] = useState(false);

  // 👁️ Detect when section is in view
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  // 🎛️ Control animations manually
  const circleControls1 = useAnimation();
  const circleControls2 = useAnimation();

  useEffect(() => {
    if (isInView) {
      // Resume animation when visible
      circleControls1.start({
        offsetDistance: ["0%", "100%"],
        transition: { duration: active ? 1.5 : 3, repeat: Infinity, ease: "linear" },
      });
      circleControls2.start({
        offsetDistance: ["0%", "100%"],
        transition: { duration: active ? 2 : 4, repeat: Infinity, ease: "linear", delay: 0.3 },
      });
    } else {
      // Pause animation when out of view
      circleControls1.stop();
      circleControls2.stop();
    }
  }, [isInView, active]);

  return (
    <section
      ref={sectionRef}
      className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 text-white overflow-hidden"
    >
      {/* Label */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="bg-[#FFFFFF1A] px-4 py-1 rounded-[10px] w-fit mb-6"
      >
        <p className="text-sm font-medium tracking-wide">Chaindustry Ecosystem</p>
      </motion.div>

      {/* Headings */}
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-4xl sm:text-5xl font-bold leading-[1.2] pb-[2px] bg-gradient-to-tr from-white to-gray-400 bg-clip-text text-transparent"
      >
        Explore ChainDustry
      </motion.h1>
      <motion.h1
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="text-4xl sm:text-5xl font-bold mb-12 leading-[1.2] bg-gradient-to-tr from-white to-gray-400 bg-clip-text text-transparent"
      >
        Ecosystem
      </motion.h1>

      {/* Diagram Container */}
      <div
        className={`relative bg-[#18063580] rounded-3xl p-12 flex flex-col items-center justify-center transition-all duration-500 ${
          active ? "energy-active" : ""
        }`}
      >
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b bg-radial-fade opacity-40" />

        {/* Top Card */}
        <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView="show" viewport={{once: true, amount: (0.4)}}>
          <Card
            title="DoToEarn"
            icon="/Explore/Dollar.png"
            className="mb-16"
            onHover={() => setActive(true)}
            onLeave={() => setActive(false)}
          />
        </motion.div>

        {/* Middle Row */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView="show"
           viewport={{once: true, amount: (0.4)}}
          className="relative z-10 flex flex-wrap md:flex-nowrap justify-center items-center gap-12 mb-16 w-full max-w-3xl"
        >
          <Card title="Academy" icon="/Explore/academy.png" onHover={() => setActive(true)} onLeave={() => setActive(false)} />
          <Card title="Blog/Vlog" icon="/Explore/blog.png" onHover={() => setActive(true)} onLeave={() => setActive(false)} />
          <Card title="Commitments" icon="/Explore/invest.png" onHover={() => setActive(true)} onLeave={() => setActive(false)} />
        </motion.div>

        {/* Bottom Card */}
        <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView="show"  viewport={{once: true, amount: (0.4)}}>
          <Card title="Servicing" icon="/Explore/service.png" onHover={() => setActive(true)} onLeave={() => setActive(false)} />
        </motion.div>

        {/* ⚡ Connection Lines + Moving Light Particles */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Line 1 */}
          <motion.path
            d="M50 300 C350 100, 650 100, 950 300"
            stroke="#FF2D55"
            strokeWidth="1.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2 }}
          />
          <motion.circle
            r="6"
            fill="#FF2D55"
            filter="url(#glow)"
            style={{
              offsetPath: "path('M50 300 C350 100, 650 100, 950 300')",
              offsetRotate: "auto",
            }}
            animate={circleControls1}
          />

          {/* Line 2 */}
          <motion.path
            d="M150 450 C400 250, 600 250, 850 450"
            stroke="#FF2D55"
            strokeWidth="1.2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0.3 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 2, delay: 0.5 }}
          />
          <motion.circle
            r="6"
            fill="#FF2D55"
            filter="url(#glow)"
            style={{
              offsetPath: "path('M150 450 C400 250, 600 250, 850 450')",
              offsetRotate: "auto",
            }}
            animate={circleControls2}
          />

          {/* Glow filter */}
          <defs>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
        </svg>
      </div>
    </section>
  );
};

// === Card Component ===
const Card = ({ title, icon, className, onHover, onLeave }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);

    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + "deg");
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className={`relative z-20 rounded-xl bg-radial-fade px-10 py-4 border border-white/10 flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_15px_#FF2D55]/20 min-w-[200px] sm:min-w-[230px] text-center cursor-pointer glow-card ${className}`}
    >
      <div className="glow" />
      <img src={icon} alt={title} className="w-6 h-6" />
      <p className="font-medium text-sm sm:text-base">{title}</p>
    </motion.div>
  );
};

export default ExploreSec;
