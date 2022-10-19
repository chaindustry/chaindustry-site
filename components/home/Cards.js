import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const Cards = ({ constants }) => {
  // return console.log(constants);
  const CardImage = ({ src }) => {
    const img = `/tasks/${src}.png`;
    return (
      <div
        className="relative w-[13.34px] h-[13.34px] mb-[5px] shrink-0
        md:w-[18px] md:h-[18px] md:mb-[10px]
      lg:w-[35.65px] lg:h-[35.65px] lg:mb-[12.99px]
      "
      >
        <Image
          layout="fill"
          placeholder="blur"
          blurDataURL={img}
          src={img}
          priority
          quality={100}
          alt={src}
          objectFit="contain"
        />
      </div>
    );
  };
  const Card = ({ c }) => {
    return (
      <motion.div
        style={{ background: `var(--d2e-${c})` }}
        className={`w-[50.02px] h-[50.02px] rounded-[10.0042px] pt-[10.36px] flex flex-col items-center card
        md:w-[73px] md:h-[73px] md:rounded-[17px] md:pt-[15px]
        lg:h-[129.95px] lg:w-[129.95px] lg:rounded-[25.9897px] lg:pt-[28.16px]
        `}
      >
        <CardImage src={c} />
        <span
          className="text-[color:var(--grey-90)] text-[6.6695px] tracking-[-0.03em] leading-[10px] font-sfSemibold 
          md:text-[12px] md:leading-[130%]
        lg:leading-[150%] lg:text-[17.3265px]
        "
        >
          {c}
        </span>
      </motion.div>
    );
  };
  const Row = ({ children, className, id, rootId }) => {
    let x = {
      1: "-30%",
      2: "30%",
      3: "-30%",
    };
    return (
      <motion.div
        layout
        id={rootId}
        initial={{ x: 0 }}
        animate={{ x: x[id] }}
        transition={{
          ease: "linear",
          duration: 20,
          type: "tween",
          //   default: { ease: "linear" },
          repeat: "Infinity",
          repeatType: "reverse",
        }}
        className={`flex gap-[7px] ${className} 
        md:gap-[11px]
         lg:gap-[17px]`}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div
      className="flex  overflow-hidden flex-col gap-[7px] 
      md:gap-[11px]
    lg:gap-[17px]
    "
    >
      <Row id={1} rootId="row1">
        {constants?.row1.map((c, id) => {
          return <Card key={id} c={c} />;
        })}
      </Row>
      <Row id={2} rootId="row2" className={"ml-[42px]"}>
        {constants?.row2.map((c, id) => {
          return <Card key={id} c={c} />;
        })}
      </Row>
      <Row id={3} rootId={"row3"}>
        {constants?.row3.map((c, id) => {
          return <Card key={id} c={c} />;
        })}
      </Row>
    </div>
  );
};

export default Cards;
