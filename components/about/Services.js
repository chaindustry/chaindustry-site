import {
  ArrowDown2,
  ArrowUp2,
  Buildings2,
  BuyCrypto,
  Chart1,
  ChartCircle,
  CloudConnection,
  Code,
  Designtools,
  HuobiToken,
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
      focus: "fade-left",
      title: "Content Marketing",
      text: "We create copy and visual contents (graphics and videos) for our network's partners that need them..",
      icon: MonitorMobbile
    },
    {
      focus: "fade-up",
      title: "Hosting AMA Sessions",
      text: "We conduct high quality and organic 'Ask Me Anything' sessions for companies within and outside our network.",
      icon: CloudConnection
    },
    {
      focus: "fade-down",
      title: "CG & CMC Listing",
      text: "We can bring new crypto projects to the level where it's listed on coin index platforms like Coingecko and Coinmarketcap. We can also help make important updates on their coin index profile.",
      icon: BuyCrypto
    },
    {
      focus: "fade-left",
      title: "Website and Mobile App Development",
      text: "We have a team of designers and developers that can design and deliver quality digital products for companies just like they designed Chaindustry and more.",
      icon: Code
    },
    {
      focus: "fade-up",
      title: "NFT design",
      text: "A lot of 3D designers are part of our Team and our community, they have experience in designing and maintaining NFT collections.",
      icon: Designtools
    },
    {
      focus: "zoom-out",
      title: "Social Media Promotions and engagements",
      text: "With Promote To Earn, Chat To Earn and Engage To Earn being part of our DoToEarn product. We promote projects on social media and build organic engagements around it.",
      icon: TrendUp
    },

    {
      focus: "fade-left",
      title: "VC/Angel investor introduce and BD",
      text: "We are connected to communities of venture capitalist and investors looking for good projects to invest with their terms. We can link projects with VC connections.",
      icon: People
    },
    {
      focus: "fade-right",
      title: "UI/UX and Product management",
      text: "Our design team will build and manage your product by establishing a clear design process, meeting deadlines, and delivering a spot-on end result.",
      icon: Buildings2
    },
    {
      focus: "fade-right",
      title: "Data Analysis",
      text: "We turn your data into business insights and plan for the future with our analytics services,where data is gathered, processed, and presented to assist in improving your decision-making.",
      icon: Chart1
    }
  ];
  const [showAll, setShowAll] = useState(false);
  const [services, setServices] = useState([]);
  useEffect(() => {
    if (!showAll) {
      setServices(services_.slice(0, matchesLg ? 6 : 4));
    }
  }, [matchesLg]);
  return (
    <div className="mb-[92px]" id="services">
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
