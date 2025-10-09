import React, { useRef } from "react";
import { motion } from "framer-motion";

const ExploreSec = () => {
  return (
    <section className="relative max-w-7xl mx-auto px-6 sm:px-8 py-24 text-white overflow-hidden">
      {/* === Label === */}
      <div className="bg-[#FFFFFF1A] px-4 py-1 rounded-[10px] w-fit mb-6">
        <p className="text-sm font-medium tracking-wide">Chaindustry Ecosystem</p>
      </div>

      {/* === Headings === */}
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight bg-gradient-to-tr from-white to-gray-400 bg-clip-text text-transparent">
        Explore ChainDusty
      </h1>
      <h1 className="text-4xl sm:text-5xl font-bold mb-12 leading-tight bg-gradient-to-tr from-white to-gray-400 bg-clip-text text-transparent">
        Ecosystem
      </h1>

      {/* === Diagram Container === */}
      <div className="relative bg-[#18063580] rounded-3xl p-12 flex flex-col items-center justify-center">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-b bg-radial-fade opacity-40 blur-3xl" />

        {/* === Top Card === */}
        <Card title="DoToEarn" icon="/Explore/Dollar.png" className="mb-16" />

        {/* === Middle Row === */}
        <div className="relative z-10 flex sm:flex-col  md:flex-row justify-center items-center gap-12 mb-16 flex-wrap sm:flex-nowrap w-full max-w-3xl">
          <Card title="Academy" icon="/Explore/academy.png" />
          <Card title="Blog/Vlog" icon="/Explore/blog.png" />
          <Card title="Investments" icon="/Explore/invest.png" />
        </div>

        {/* === Bottom Card === */}
        <Card title="Servicing" icon="/Explore/service.png" />

        {/* === Connection Lines === */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 300 C350 100, 650 100, 950 300"
            stroke="#FF2D55"
            strokeWidth="1"
            fill="none"
          />
          <path
            d="M150 450 C400 250, 600 250, 850 450"
            stroke="#FF2D55"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>
    </section>
  );
};

// === Card with Mouse-Follow Border ===
const Card = ({ title, icon, className }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
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
      whileHover={{ scale: 1.05 }}
      className={`relative z-20 rounded-xl bg-radial-fade px-10 py-4 border border-white/10 flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_15px_#FF2D55]/20 min-w-[200px] sm:min-w-[230px] text-center cursor-pointer glow-card ${className}`}
    >
      <div className="glow" />
      <img src={icon} alt={title} className="w-6 h-6" />
      <p className="font-medium text-sm sm:text-base">{title}</p>
    </motion.div>
  );
};

export default ExploreSec;
