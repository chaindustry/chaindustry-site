"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Reviews = [
  {
    image:
      "https://i.pinimg.com/736x/cc/c1/40/ccc140a2513c49c34cb7a3af3de2eeb9.jpg",
    name: "Nancy Ekweremadu",
    title: "Marketing Lead @ NovaTech",
    description:
      "Working with Chaindustry was a game changer. Their growth hacks brought us a wave of real, active users who actually stayed. Pure value.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/a2/09/d6/a209d6e66859493e14c59bc92e5b2e02.jpg",
    name: "Tunde Balogun",
    title: "Founder @ Brandify",
    description:
      "Their content team just gets it. Every post, every design hit perfectly with our audience — our engagement literally doubled in weeks.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/6e/fc/b1/6efcb179febac5060fcadd0002eec6a0.jpg",
    name: "Amara Okeke",
    title: "HR Manager @ WorkNet",
    description:
      "We needed reliable freelancers fast, and Chaindustry made it happen. Smooth process, skilled people, and zero stress. I love that.",
  },
  {
    image:
      "https://i.pinimg.com/736x/97/1a/ab/971aab04585a81d82eff510361c37995.jpg",
    name: "David Eze",
    title: "CEO @ Startovate",
    description:
      "Our startup gained insane traction after partnering with them. Their strategies are bold, data-backed, and focused on real results.",
  },
  {
    image:
      "https://i.pinimg.com/736x/e8/5f/49/e85f4984ad6ab9dfa8b1623f768147c3.jpg",
    name: "Fatima Bello",
    title: "Content Strategist @ WaveLink",
    description:
      "Chaindustry’s SEO and content game is elite. They turned our blog into a conversion engine. We started ranking within weeks!",
  },
  {
    image:
      "https://i.pinimg.com/736x/ec/38/9d/ec389dd1a5f4a8f331151e46c8a6863f.jpg",
    name: "Kingsley Obi",
    title: "Community Lead @ Coinverse",
    description:
      "Our Telegram was dead before Chaindustry stepped in. Now it’s full of energy. Their community team knows how to keep people hooked.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/24/f9/ab/24f9ab3f22b8e373da80b3242dec14c1.jpg",
    name: "Sarah Johnson",
    title: "CMO @ PixelTree",
    description:
      "They didn’t just run ads — they built hype. The social media buzz around our launch was crazy. Genuine engagement, not bots.",
  },
  {
    image:
      "https://i.pinimg.com/1200x/bb/6a/ef/bb6aef8c1bd48cd8b3b41725eaba18e3.jpg",
    name: "Emmanuel Chika",
    title: "Project Lead @ MetaLabs",
    description:
      "Our AMA session with Chaindustry pulled in hundreds of real participants. It felt organic, smooth, and super professional throughout.",
  },
];



const ClientsReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    cssEase: "ease-in-out",
  };

  return (
    <section className="py-24 px-6 md:px-12 text-white bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT SIDE TEXT */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Reviews
          </h1>
          <p className="text-gray-300 mb-8 max-w-[419px] mx-auto md:mx-0 text-[18px] leading-[1.93] tracking-[-0.02em]">
            Our customers love to work with us and appreciate our efforts at the
            end.
          </p>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="w-full max-w-[600px] mx-auto md:mx-0">
          <Slider {...settings}>
            {Reviews.map((data, index) => (
              <motion.div
                key={index}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="px-4"
              >
                <div className="max-w-[611px] w-full rounded-[40px] p-10 bg-[#170337] hover:bg-[#1c0442] transition-all duration-500 shadow-[0_0_15px_rgba(128,0,255,0.15)]">
                  <div className="flex items-center gap-4 mb-5">
                    <img
                      src={data.image}
                      alt={data.name}
                      className="w-[64px] h-[64px] rounded-full object-fit border border-white/10"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{data.name}</h3>
                      <p className="text-sm text-gray-400">{data.title}</p>
                    </div>
                  </div>

                  <p className="font-sans text-[18px] leading-[1.93] tracking-[-0.02em] text-gray-200">
                    “{data.description}”
                  </p>
                </div>
              </motion.div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ClientsReviews;
