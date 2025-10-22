import React, { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { ArrowDown2 } from "iconsax-react";
import { faqs } from "../../variables";

const Faq = () => {
  const [clicked, setClicked] = useState(null);

  const bounceVariants = {
    initial: { opacity: 0, y: -10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 22,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: "easeOut" },
  },
});

  return (
    <motion.div
      id="faqs"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: "some", fallback: true }}
      className="mx-auto max-w-[791px] mb-[128px] lg:mb-[276px]"
    >
      <h1
        className="font-sfSemibold text-[32px] text-center leading-[125%] tracking-[-0.05em] mb-[24px]
        lg:mb-[48px] lg:text-[48px] lg:leading-[57px] lg:tracking-[-0.06em]"
      >
        Frequently Asked Questions
      </h1>

      <LayoutGroup>
        <motion.div layout>
          {faqs.map((faq, id) => {
            const isActive = clicked?.id === faq.id;
            return (
              <motion.div
               variants={fadeUp(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
                layout
                onClick={() => setClicked(isActive ? null : faq)}
                key={id}
                className={`group bg-[#110227] ${
                  !isActive && "hover:bg-[#39176A]"
                } rounded-[8px] p-[16px] mb-[8px] cursor-pointer
                lg:py-[24px] lg:px-[22px]`}
              >
                <motion.h2
                  layout="position"
                  className={`${
                    isActive
                      ? "mb-[16px] text-white lg:mb-[28px]"
                      : "text-grey-20"
                  } flex justify-between items-center text-[16px] font-sfLight leading-[150%] tracking-[-0.02em] group-hover:text-white
                  lg:text-[24px] lg:tracking-[-0.04em]`}
                >
                  {faq.title}
                  <motion.div
                    animate={{ rotate: isActive ? 180 : 0, scale: isActive ? 1.1 : 1 }}
                    transition={{ type: "spring", stiffness: 250, damping: 12 }}
                    className="ml-[20px] flex items-center text-[#8D5CEB] lg:text-white lg:mr-[14px]"
                  >
                    <ArrowDown2 size={20} variant="Outline" />
                  </motion.div>
                </motion.h2>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.p
                      key="content"
                      variants={bounceVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      dangerouslySetInnerHTML={{ __html: faq.text }}
                      className="text-grey-20 text-[12px] font-sfLight leading-[160%] tracking-[-0.02em] overflow-hidden 
                      [&>a]:text-secondary-50 [&>a]:font-sfSemibold [&>b]:text-primary-30 
                      lg:text-[16px]"
                    ></motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </LayoutGroup>
    </motion.div>
  );
};

export default Faq;
