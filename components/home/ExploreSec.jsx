"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import ChatIcon from "./card/ChatIcon";

const fadeIn = (direction = "up", delay = 0) => ({
  hidden: { opacity: 0, y: direction === "up" ? 40 : -40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

const cards = [
  { title: "Academy", icon: "/Explore/academy.png" },
  { title: "Blog/Vlog", icon: "/Explore/blog.png" },
  { title: "Commitments", icon: "/Explore/invest.png" },
];

const ExploreSec = () => {
  const [active, setActive] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  const circleControls1 = useAnimation();
  const circleControls2 = useAnimation();

  const descriptions = {
    DoToEarn: "Complete simple on-chain tasks and earn rewards instantly.",
    Academy: "Learn blockchain, DeFi, and Web3 from curated experts.",
    "Blog/Vlog": "Stay updated with Web3 trends, news, and educational videos.",
    Commitments: "Invest or stake in ecosystem projects and earn yields.",
    Servicing: "Access ChainDustry's service marketplace and developer tools.",
  };

  // 🔹 Animate glowing motion when section is visible
  useEffect(() => {
    if (isInView) {
      circleControls1.start({
        offsetDistance: ["0%", "100%"],
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        },
      });
      circleControls2.start({
        offsetDistance: ["0%", "100%"],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "linear",
          delay: 0.3,
        },
      });
    } else {
      circleControls1.stop();
      circleControls2.stop();
    }
  }, [isInView]);

  // 🔹 Move the glow ball along the path on hover
  useEffect(() => {
    if (hoveredCard) {
      // Move forward when hovered
      circleControls1.start({
        offsetDistance: ["0%", "100%"],
        transition: { duration: 1.2, ease: "easeInOut" },
      });
      circleControls2.start({
        offsetDistance: ["100%", "0%"],
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    } else {
      // Return back when hover ends
      circleControls1.start({
        offsetDistance: ["100%", "0%"],
        transition: { duration: 1.2, ease: "easeInOut" },
      });
      circleControls2.start({
        offsetDistance: ["0%", "100%"],
        transition: { duration: 1.2, ease: "easeInOut" },
      });
    }
  }, [hoveredCard]);

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
        viewport={{ once: true }}
        className="bg-[#FFFFFF1A] px-4 py-1 rounded-[10px] w-fit mb-6"
      >
        <p className="text-sm font-medium tracking-wide">
          Chaindustry Ecosystem
        </p>
      </motion.div>

      {/* Heading */}
      <motion.h1
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView="show"
        className="text-4xl sm:text-5xl font-bold leading-[1.2] pb-[2px] bg-gradient-to-tr from-white to-gray-400 bg-clip-text text-transparent"
      >
        Explore ChainDustry
      </motion.h1>
      <motion.h1
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        className="text-4xl sm:text-5xl font-bold mb-12 leading-[1.2] bg-gradient-to-tr from-white to-gray-400 bg-clip-text text-transparent"
      >
        Ecosystem
      </motion.h1>

      {/* Diagram Container */}
      <div
        className={`relative bg-[#18063580] rounded-3xl p-6 sm:p-12 md:p-16 flex flex-col items-center justify-center transition-all duration-500 ${
          active ? "energy-active" : ""
        }`}
      >
        {/* Chat balloon for lg only */}
        <div className="hidden lg:block">
          {hoveredCard && <ChatIcon text={descriptions[hoveredCard]} />}
        </div>

        {/* Top card */}
        <motion.div
          variants={fadeIn("up", 0.5)}
           viewport={{ once: true, amount: 0.4 }}
          initial="hidden"
          whileInView="show"
          className="mb-10 sm:mb-16 w-full max-w-xs sm:max-w-sm md:max-w-none flex justify-center"
        >
          <Card
            title="DoToEarn"
            icon="/Explore/Dollar.png"
            description={descriptions["DoToEarn"]}
            onHover={() => setHoveredCard("DoToEarn")}
            onLeave={() => setHoveredCard(null)}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />
        </motion.div>

        {/* Middle cards */}
        <motion.div
          variants={fadeIn("up", 0.6)}
           viewport={{ once: true, amount: 0.4 }}
          initial="hidden"
          whileInView="show"
          className="relative z-10 flex flex-col md:flex-wrap md:flex-row lg:flex-nowrap justify-center items-center gap-6 sm:gap-10 mb-10 sm:mb-16 w-full max-w-3xl"
        >
          {cards.map(({ title, icon }) => (
            <Card
              key={title}
              title={title}
              icon={icon}
              description={descriptions[title]}
              onHover={() => setHoveredCard(title)}
              onLeave={() => setHoveredCard(null)}
              expandedCard={expandedCard}
              setExpandedCard={setExpandedCard}
            />
          ))}
        </motion.div>

        {/* Bottom card */}
        <motion.div
          variants={fadeIn("up", 0.7)}
          viewport={{ once: true, amount: 0.4 }}
          initial="hidden"
          whileInView="show"
          className="w-full max-w-xs sm:max-w-sm md:max-w-none flex justify-center"
        >
          <Card
            title="Servicing"
            icon="/Explore/service.png"
            description={descriptions["Servicing"]}
            onHover={() => setHoveredCard("Servicing")}
            onLeave={() => setHoveredCard(null)}
            expandedCard={expandedCard}
            setExpandedCard={setExpandedCard}
          />
        </motion.div>

        {/* Keep existing SVG but now motion-aware */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
          xmlns="http://www.w3.org/2000/svg"
        >
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
const Card = ({
  title,
  icon,
  description,
  onHover,
  onLeave,
  expandedCard,
  setExpandedCard,
}) => {
  const isExpanded = expandedCard === title;

  return (
    <motion.div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={() =>
        window.innerWidth < 1024 &&
        setExpandedCard(isExpanded ? null : title)
      }
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative z-20 rounded-xl bg-radial-fade px-6 py-4 border border-white/10 flex flex-col items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_15px_#FF2D55]/20 min-w-[180px] sm:min-w-[230px] text-center cursor-pointer glow-card"
    >
      <div className="flex items-center gap-3 justify-center">
        <img src={icon} alt={title} className="w-6 h-6" />
        <p className="font-medium text-sm sm:text-base">{title}</p>
      </div>
      {isExpanded && (
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs sm:text-sm text-gray-300 mt-2 max-w-[250px]"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default ExploreSec;
