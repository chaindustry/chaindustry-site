import React from "react";
import { motion } from "framer-motion";
import { MdKeyboardArrowRight } from "react-icons/md";
import { doToEarnItems } from "../../functions";

const StartTodoEarn = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="max-w-7xl mx-auto px-6  text-white">
      {/* Header */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap justify-between items-center mb-10 gap-4"
      >
        <h2 className="text-2xl font-semibold">Earn in Every Way</h2>
        {/* <button className="text-sm bg-white text-black border border-gray-300 rounded-md px-4 py-1 hover:bg-gray-100 transition">
          Browse all
        </button> */}
      </motion.div>

      {/* Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {doToEarnItems.map((item, index) => (
          <motion.div
           whileHover={{ scale: 1.03 }}
  transition={{ type: "spring" }}
            key={index}
            variants={cardVariants}
            // 🪄 SMOOTH hover + return motion
            className={`${item.gradient} p-6 rounded-[20px] border border-white/10 flex flex-col justify-between min-h-56 cursor-pointer transition-all duration-300`}
          >
            {/* Image */}
            <motion.img
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{
                type: "spring",
                stiffness: 220,
                damping: 10,
              }}
              className="w-[60px] h-[60px]"
              src={item.image}
              alt={item.title}
            />

            {/* Text Section */}
            <div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-sm mb-4">{item.description}</p>
              {/* {index === 0 ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  className="text-sm text-white flex items-center gap-1 hover:underline"
                >
                  Explore
                  <span className="p-1 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/60 transition-all duration-300">
                    <MdKeyboardArrowRight />
                  </span>
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 250, damping: 15 }}
                  className="p-1 rounded-full bg-white/30 flex items-center justify-center hover:bg-white/60 transition-all duration-300"
                >
                  <MdKeyboardArrowRight />
                </motion.button>
              )} */}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default StartTodoEarn;
