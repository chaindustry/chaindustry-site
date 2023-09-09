import React, { useState } from "react";
import AppButton from "../button/AppButton";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { appName } from "../../variables";
const Upgrade = () => {
  const plans = [
    { amount: 48, dur: "Year" },
    { amount: 5, dur: "Month" }
  ];
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  return (
    // <motion.div
    // //   layout
    // >
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: "some", fallback: true }}
      // layout="preserve-aspect"
      className="transition rounded-[24px] bg-[#170337] py-[44px] px-[57px] text-center flex flex-col items-center mb-[128px]  max-w-[839px] mx-auto
        
        md:rounded-[36px] md:py-[54px] md:mb-[168px]
        lg:rounded-[48px] lg:py-[64px] lg:mb-[219px]
        "
    >
      <motion.h2
        layout="position"
        className="font-sfSemibold tracking-[-0.06em] text-[24px] leading-[125.84%] mb-[48px]
          md:text-[36px] md:font-sfBold
          lg:text-[48px] 
          "
      >
        Upgrade to Premium
      </motion.h2>
      <motion.div layout="position" className="mb-[16.5px]">
        <span
          className="text-[40px] leading-[47.73px] tracking-[-0.05em] font-sfSemibold
            md:text-[54px] lg:leading-[62.38px]
          lg:text-[64px] lg:leading-[76.38px] lg:tracking-[-0.06em]
          "
        >
          ${selectedPlan?.amount}
        </span>
        <span
          className="font-sfLight leading-[30px] text-[20px] tracking-[-2%]
          md:
          lg:
          "
        >
          /{selectedPlan?.dur}
        </span>
      </motion.div>
      <AnimatePresence>
        {selectedPlan.dur === "Year" && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{
              opacity: 0,
              // scale: 0,
              transformOrigin: "bottom",
              y: 60,
              transition: { duration: 0.2 }
            }}
            //   layout="position"
            className="bg-secondary-50 inline-block rounded-[51px] h-[26px] tracking-[-2%] leading-[150%] text-[12px] font-sfLight px-[8px] py-[4px] mb-[53.76px]
              md:h-[35px] md:text-[1em] md:px-[1em] md:mb-[24px]
              "
          >
            Save 20%
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        layout="position"
        className="mb-[51.74px] bg-white/10 rounded-[24px] p-[4px] flex gap-[12px]
          md:rounded-[100px]
          "
      >
        {plans.map((c, id) => {
          return (
            <motion.div
              layout="position"
              onClick={() => setSelectedPlan(c)}
              key={id}
              className={`cursor-pointer font-sfLight tracking-[-0.02em] leading-[150%] text-[12px] h-[34px] inline-flex items-center px-[16px] rounded-[20px] justify-center ${
                c.dur === selectedPlan.dur ? "bg-primary-10 text-grey-90" : ""
              }
                md:h-[44px] md:px-[1.5em] md:py-[0.5em] md:rounded-[70px] md:text-[14px]
                lg:h-[59px] lg:px-[2em] lg:py-[1em] lg:rounded-[100px] lg:text-[18px]
                `}
            >
              {c.dur}ly
            </motion.div>
          );
        })}
      </motion.div>
      <Link
        href={{
          query: { plan: selectedPlan.dur },
          pathname: `${appName}/profile/upgrade`
        }}
      >
        <a rel="noreferrer" target="_blank">
          <AppButton
            sxclass={"!rounded-[12px]"}
            variant="secondary"
            label="Upgrade to Premium"
            size="lg"
          />
        </a>
      </Link>
    </motion.div>
    // </motion.div>
  );
};

export default Upgrade;
