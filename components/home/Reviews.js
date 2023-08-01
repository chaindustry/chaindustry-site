import React from "react";
import Carousel from "../Carousel";

const Reviews = () => {
  let reviews = [
    {
      img: null,
      name: "Nancy Ogbonna",
      role: "UX writer @ Google",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, dictum nisi mollis arcu at senectus scelerisque convallis. Id vulputate auctor sed in sem et egestas ipsum. Turpis sagittis, libero enim sed odio facilisis. Id ipsum nisi consequat ullamcorper pretium, leo. Aliquam ultricies libero, velit auctor urna urna quis. Vel commodo, diam nibh ut ultricies. Ut sed consectetur quisque tortor."
    },
    {
      img: null,
      name: "Lekan Saheed",
      role: "Developer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, dictum nisi mollis arcu at senectus scelerisque convallis. Id vulputate auctor sed in sem et egestas ipsum. Turpis sagittis, libero enim sed odio facilisis. Id ipsum nisi consequat ullamcorper pretium, leo. Aliquam ultricies libero, velit auctor urna urna quis. Vel commodo, diam nibh ut ultricies. Ut sed consectetur quisque tortor."
    },
    {
      img: null,
      name: "John Paul",
      role: "Developer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, dictum nisi mollis arcu at senectus scelerisque convallis. Id vulputate auctor sed in sem et egestas ipsum. Turpis sagittis, libero enim sed odio facilisis. Id ipsum nisi consequat ullamcorper pretium, leo. Aliquam ultricies libero, velit auctor urna urna quis. Vel commodo, diam nibh ut ultricies. Ut sed consectetur quisque tortor."
    },
    {
      img: null,
      name: "Victor Adebisi",
      role: "Developer",
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, dictum nisi mollis arcu at senectus scelerisque convallis. Id vulputate auctor sed in sem et egestas ipsum. Turpis sagittis, libero enim sed odio facilisis. Id ipsum nisi consequat ullamcorper pretium, leo. Aliquam ultricies libero, velit auctor urna urna quis. Vel commodo, diam nibh ut ultricies. Ut sed consectetur quisque tortor."
    }
  ];
  return "";
  return (
    <section
      className="mb-[128px]  max-w-[1184px] mx-auto
    md:flex md:items-center
    lg:mb-[152px]
    "
    >
      <div
        className="mb-[41px]
      md:w-1/2 md:shrink-0"
      >
        <h1
          className="font-sfBold text-[2em] leading-[125.84%] tracking-[-0.06em] mb-[24px]
        lg:text-[48px] lg:leading-[139.34%] lg:mb-[43px]
        "
        >
          Reviews
        </h1>
        <p
          className="text-grey-20 font-sfLight tracking-[-0.025em] leading-[201.5%] text-[1em] max-w-[283px]
        lg:text-[24px] lg:max-w-[419px]
        "
        >
          Our Customers love to work with us and appreciate our efforts at the
          end.
        </p>
      </div>
      <div className="md:w-1/2">
        <Carousel xsclass={"rounded-[20px]"}>
          {reviews.map((review, id) => {
            return (
              <div
                key={id}
                className="bg-[#170337] basis-full shrink-0 p-[20px] rounded-[20px] whitespace-normal w-full
                md:p-[30px] md:rounded-[30px]
                lg:p-[40px] lg:rounded-[40px]
                "
              >
                <header className="flex items-center mb-[40px]">
                  <div
                    className="bg-primary-70 mr-[24px] h-[40px] w-[40px] rounded-full shrink-0
                  md:h-[50px] md:w-[50px]
                  lg:h-[64px] lg:w-[64px]
                  "
                  ></div>
                  <div>
                    <div
                      className="font-sfMedium mb-1 text-base leading-[150%] tracking-[-0.03em]
                    lg:text-[18px] lg:tracking-[-0.04em]
                    "
                    >
                      {review.name}
                    </div>
                    <div
                      className="font-sfLight text-[14px] leading-[150%] tracking-[-0.02em] text-grey-30
                    lg:text-[1em]
                    "
                    >
                      {review.role}
                    </div>
                  </div>
                </header>
                <p
                  className="font-sfLight text-[14px] leading-[193.5%] tracking-[-0.02em] text-grey-20
                lg:text-[18px]
                "
                >
                  {review.review}
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
