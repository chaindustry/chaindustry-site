import Image from "next/image";
import React from "react";

const PageImage = () => {
  return (
    <div
      className="relative h-[231px] mt-[47px] mb-[100px] mx-[-24px]
    sm:h-[250px]
    md:h-[300px]
    lg:h-[390px]
    xl:h-[454px]"
    >
      <Image
        src="/coins_img.png"
        layout="fill"
        objectFit="cover"
        priority
        quality={100}
        alt="Cover"
      />
    </div>
  );
};

export default PageImage;
