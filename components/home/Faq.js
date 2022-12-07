import React, { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowDown2 } from "iconsax-react";
import { faqs } from "../../variables";
const Faq = () => {
  const [clicked, setClicked] = useState(null);

  return (
    <motion.div
      id="faqs"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: "some", fallback: true }}
      className="mx-auto max-w-[791px] mb-[128px]
    lg:mb-[276px]
    "
    >
      <h1
        className="font-sfSemibold text-[32px] text-center leading-[125%] tracking-[-0.05em] mb-[24px]
      lg:mb-[48px] lg:text-[48px] lg:leading-[57px] lg:tracking-[-0.06em]
      "
      >
        Frequently Asked Questions
      </h1>
      <LayoutGroup>
        <motion.div layout>
          {faqs.map((faq, id) => {
            let isActive = clicked?.id === faq.id;
            return (
              <motion.div
                layout
                onClick={() => {
                  if (isActive) {
                    setClicked(null);
                  } else {
                    setClicked(faq);
                  }
                }}
                key={id}
                className={`group bg-[#110227] ${
                  !isActive && "hover:bg-[#39176A] "
                } rounded-[8px] p-[16px] mb-[8px] cursor-pointer
                lg:py-[24px] lg:px-[22px]
                `}
              >
                <motion.h2
                  layout="position"
                  className={`${
                    isActive
                      ? "mb-[16px] text-white lg:mb-[28px]"
                      : "text-grey-20"
                  } flex justify-between text-[16px] font-sfLight leading-[150%] tracking-[-0.02em] group-hover:text-white
                  lg:text-[18px] lg:tracking-[-0.03em]
                  lg:text-[24px] lg:tracking-[-0.04em]

                  `}
                >
                  {faq.title}

                  <motion.div
                    className="ml-[20px] flex justify-between items-center text-[#8D5CEB]
                    
                    lg:text-white lg:mr-[14px]"
                    animate={{
                      rotate: isActive ? 180 : 0,
                      transformOrigin: "center"
                    }}
                  >
                    <ArrowDown2 size={20} variant="Outline" />
                  </motion.div>
                </motion.h2>
                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      dangerouslySetInnerHTML={{ __html: faq.text }}
                      layout="position"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-grey-20 text-[12px] overflow-hidden font-sfLight leading-[160%] tracking-[-0.02em] [&>a]:text-secondary-50 [&>a]:font-sfSemibold [&>b]:text-primary-30 
                      lg:text-[16px]
                      "
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
