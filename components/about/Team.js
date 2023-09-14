import Image from "next/image";
import React from "react";
import { SiDiscord, SiLinkedin, SiTelegram, SiTwitter } from "react-icons/si";
import Title from "../Title";

const Team = () => {
  let team = [
    {
      dp: "emma.JPG",
      name: "Emmanuel Patrick",
      role: "Founder and CEO",
      desc: "Founder at #ChainDustry and Co-founder at #KandaWeather| Community and Content Developer| Leader| Smart Thinker| Tech enthusiast & E.Engr| Reef Ambassador!",
      socials: [
        { name: <SiLinkedin />, url: "https://linkedIn.com/in/withempato" },
        { name: <SiTelegram />, url: "https://t.me/withempato" },
        { name: <SiTwitter />, url: "https://twitter.com/withempato" }
      ]
    },
    {
      dp: "paul.JPG",
      name: "John Harnie Paul",
      role: "CTO",
      desc: "Techpreneur || Fullstack || React native pro and Node Express js || CEO Orizon24 Solutions and Cashio",
      socials: [
        { name: <SiTwitter />, url: "https://twitter.com/john_harnie" },
        { name: <SiTelegram />, url: "https://t.me/lucifa_morningstar" },
        {
          name: <SiLinkedin />,
          url: "https://www.linkedin.com/in/john-paul-213109227"
        }
      ]
    },
    {
      dp: "igunnu.jpeg",
      name: "Igunnu Emmanuel",
      role: "Developer",
      desc: "Blockchain || Web3 || NFT Degen. Backend Guru.",
      socials: [
        { name: <SiTelegram />, url: "https://t.me/js_genin" },
        {
          name: <SiDiscord />,
          url: "https://discordapp.com/users/446123015156269068"
        },
        {
          name: <SiTwitter />,
          url: "https://twitter.com/daemon_rae"
        }
      ]
    },

    // {
    //   dp: "patrick.JPG",
    //   name: "Patrick Idungafa",
    //   role: "CMO",
    //   desc: "Blockchain Community Manager and Digital Marketer. I eat NFTs for breakfast.",
    //   socials: [
    //     {
    //       name: <SiDiscord />,
    //       url: "https://discordapp.com/users/maguar#8196"
    //     },

    //     { name: <SiTwitter />, url: "https://twitter.com/IdungafaPatrick" },
    //     {
    //       name: <SiLinkedin />,
    //       url: "https://www.linkedin.com/in/patrick-idungafa-1bb2681a5"
    //     }
    //   ]
    // },
    {
      dp: "annie.jpeg",
      name: "Annie Ukay",
      role: "Operations Manager",
      desc: "Sui generis",
      socials: [
        {
          name: <SiLinkedin />,
          url: "https://www.linkedin.com/in/annie-ukay-70121121a"
        },
        { name: <SiTwitter />, url: "https://twitter.com/Deenigma4" },
        { name: "", url: "" }
      ]
    },
    {
      dp: "affia.jpg",
      name: "Emmanuel Afia",
      role: "Marketing Manager",
      desc: "Sui generis",
      socials: [
        {
          name: <SiLinkedin />,
          url: "https://www.linkedin.com/in/annie-ukay-70121121a"
        },
        { name: <SiTwitter />, url: "https://twitter.com/Deenigma4" },
        { name: "", url: "" }
      ]
    },
    {
      dp: "friday.jpg",
      name: "Ukpemonong Friday",
      role: "HR Manager",
      desc: "",
      socials: []
    }
    // {
    //   dp: "utty.jpeg",
    //   name: "Utomobong Usoro",
    //   role: "Moderator Instructor",
    //   desc: `Crypto Enthusiast || Community Manger/Moderator || Crypto Writer || Freelancer.😎🥰`,
    //   socials: [
    //     {
    //       name: <SiLinkedin />,
    //       url: "https://www.linkedin.com/in/utomobong-usoro-a3147a143"
    //     },
    //     { name: <SiTwitter />, url: "https://twitter.com/Utybby?s=08" },
    //     { name: <SiTelegram />, url: "https://t.me/Utygirl" }
    //   ]
    // },
  ];
  return (
    <div id="team" className="mb-[200px]">
      <Title
        title={"Our Team"}
        text="We give value and high quality digital services to our users and our partners"
      />
      <div className="sm:grid sm:grid-cols-2 sm:gap-[24px] lg:grid-cols-3 lg:gap-[22px]">
        {team.map((member, id) => {
          let img = `/team/${member.dp}`;
          return (
            <div key={id} className="mb-[24px] sm:mb-0">
              <div
                className="relative bg-primary-90 h-[342px] mb-[16px] overflow-hidden rounded-[16px]
                md:h-[370px] 
                lgz:h-[390px]
              xl:h-[443px]"
              >
                <Image
                  className="grayscale"
                  src={member.dp ? img : "/avatar.png"}
                  layout="fill"
                  objectFit="cover"
                  objectPosition={"top"}
                  placeholder="blur"
                  blurDataURL={member.dp ? img : "/avatar.png"}
                  priority
                  alt={member.name}
                  quality={100}
                />
              </div>
              <div>
                <h1 className="text-[20px] leading-[150%] tracking-[-0.03em] font-sfSemibold mb-1">
                  {member.name}
                </h1>
                <span className="font-sfLight leading-[150%] text-grey-20 text-[16px] tracking-[-0.02em]">
                  {member.role}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
