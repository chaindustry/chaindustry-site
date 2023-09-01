import {
  ArrowDown2,
  ArrowUp2,
  Buildings2,
  BuyCrypto,
  Chart1,
  ChartCircle,
  CloudConnection,
  Code,
  Coin,
  Designtools,
  HuobiToken,
  Microphone,
  MonitorMobbile,
  People,
  TrendUp
} from "iconsax-react";
import React, { useEffect, useState } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Title from "../Title";

const Services = () => {
  let matchesLg = useMediaQuery("(min-width:1024px)");
  console.log(matchesLg);
  let services_ = [
    {
      focus: "zoom-out",
      title: "Growth hacking and Digital marketing",
      text: "We help our partners grow their communities and users base with tasks that can attract and retain new people.",
      icon: ChartCircle
    },

    {
      focus: "fade-down",
      title: "Contents marketing",
      text: "We create copy and visual content (graphics and videos) for our network's partners that need them.",
      icon: Microphone
    },
    {
      focus: "fade-left",
      title: "Connection with freelancers",
      text: "We connect employers of Labour to affordable freelance experts who can get the Job done.",
      icon: People
    },
    {
      focus: "fade-up",
      title: "Value to users and partner",
      text: "Users get value through the rewards for completing tasks, and partners get value for creating these tasks to gain effective results from users on our platform.",
      icon: Coin
    },
    {
      focus: "zoom-out",
      title: "Traction and adoption",
      text: "Start-up companies and projects can work with us to gain great traction for their products, ad existing companies can always earn more traction and new users to grow their platform.",
      icon: TrendUp
    },

    {
      focus: "fade-left",
      title: "Content Development",
      text: "We have experience creating SEO-optimized content to attract and retain the target audience and ultimately bring your product and services to the spotlight. We create and manage graphics/video content for several projects.",
      icon: MonitorMobbile
    },
    {
      focus: "fade-left",
      title: "Community Management",
      text: " Community is everything. We will hack the growth and work it professionally 24/7 with our team of highly-trained community managers who provide top-tier and professional community management services to our partners.",
      icon: People
    },
    {
      focus: "fade-right",
      title: "Social media Marketing (SMM)",
      text: "Guerilla marketing on top crypto media platforms not limited to Twitter, telegram, YouTube and Reddit.",
      icon: Buildings2
    },
    {
      focus: "fade-up",
      title: "Hosting AMA Sessions",
      text: "We conduct high quality and organic 'Ask Me Anything' sessions for companies within and outside our network.",
      icon: CloudConnection
    }
    // {
    //   focus: "fade-right",
    //   title: "Data Analysis",
    //   text: "We turn your data into business insights and plan for the future with our analytics services,where data is gathered, processed, and presented to assist in improving your decision-making.",
    //   icon: Chart1
    // }
  ];
  const [showAll, setShowAll] = useState(false);
  const [services, setServices] = useState([]);
  useEffect(() => {
    if (!showAll) {
      setServices(services_.slice(0, matchesLg ? 6 : 4));
    }
  }, [matchesLg]);
  return (
    <div className="mb-[92px] pt-[50px]" id="services">
      <Title
        title={"Our Services"}
        text="Chaindustry Provides a wide range of quality services that are given here."
      />
      <div className="gap-[16px] sm:grid sm:grid-cols-2 sm:gap-[24px] lg:grid-cols-3 lg:gap-[22px]">
        {services.map((service, id) => {
          return (
            <div
              key={id}
              className="bg-[#160E24] rounded-[32px] p-[32px] mb-[16px] sm:mb-0 xl:p-[42px]"
            >
              <div className="text-secondary-50 mb-[32px] py-[5px] px-[8px] md:mb-[22px]">
                {React.createElement(service.icon, {
                  variant: "Bulk",
                  size: 54
                })}
              </div>
              <h2 className="text-[20px] font-sfMedium leading-[125%] tracking-[-0.05em] mb-[10.71px] lg:leading-[140%] lg:text-[22px]">
                {service.title}
              </h2>
              <p className="text-[14px] text-grey-30 font-sfLight leading-[150%] tracking-[-0.02em] lg:text-[13.5px] leading-[155%]">
                {service.text}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center mt-[3px] relative z-[3]">
        <div
          onClick={() => {
            setServices(() =>
              showAll ? services_.slice(0, matchesLg ? 6 : 4) : services_
            );
            setShowAll(!showAll);
            console.log("Hl");
          }}
          className="flex items-center text-secondary-40 font-sfSemibold gap-[10px] cursor-pointer select-none sm:mt-5"
        >
          <span>View {showAll ? "less" : "more"}</span>{" "}
          {showAll ? <ArrowUp2 /> : <ArrowDown2 />}
        </div>
      </div>
    </div>
  );
};

export default Services;
