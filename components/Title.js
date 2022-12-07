import React from "react";

const Title = ({ title, text }) => {
  return (
    <div className="mb-[60px]">
      <h1 className="text-[24px] tracking-[-0.05em] font-sfSemibold leading-[125%] mb-[24px]">
        {title}
      </h1>
      <p className="tracking-[-0.015em] text-grey-10 font-sfLight leading-[150%] text-[16px]">
        {text}
      </p>
    </div>
  );
};

export default Title;
