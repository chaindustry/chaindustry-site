import React from "react";

const Title = ({ title, text }) => {
  return (
    <div className="mb-[60px]">
      <h1
        className="text-[24px] tracking-[-0.05em] font-sfSemibold leading-[125%] mb-[24px]
      sm:text-[28px]
      md:text-[30px]
      lg:text-[38px]
      "
      >
        {title}
      </h1>
      <p
        className="tracking-[-0.015em] text-grey-10 font-sfLight leading-[150%] text-[16px] max-w-[318px]
      sm:text-[16.5px] sm:max-w-[320px]
      md:text-[18px] md:max-w-[350px]
      lg:text-[20px] lg:max-w-[400px]
      "
      >
        {text}
      </p>
    </div>
  );
};

export default Title;
