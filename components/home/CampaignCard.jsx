"use client";
import React from "react";
import { motion } from "framer-motion";

const CampaignCard = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
      className="relative text-white rounded-2xl  0 transition-all duration-300"
      // style={{
      //   backgroundColor: "#18063580", // ← 50% opacity version of your figma color
      //   backdropFilter: "blur(12px)", // keeps that glassy soft feel
      // }}
    >
      {/* Image Section */}
      <div className="relative">
       

        {/* Floating Overlay Card */}
        <div className="absolute left-2/4 -bottom-0 -translate-x-1/2 w-[80%] bg-[#1E1E1E]/70 border border-white/10 rounded-xl p-2">
          <p className="text-xs text-gray-400 mb-1">Private</p>

          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-sm font-semibold leading-tight">
                Chaindustry Agent Campaign
              </h3>
              <p className="text-[10px] mt-1 flex items-center gap-1 text-gray-400">
                Date Created: Dec 25, 2024 2:20PM
              </p>
            </div>
            <span className="text-[10px] bg-green-500/20 text-green-400 px-2 py-[2px] rounded-full font-medium">
              Active
            </span>
          </div>

          <div className="mt-3 text-[11px] space-y-1 text-gray-400">
            <p>Start Date: Dec 25, 2024 2:20PM</p>
            <p>End Date: Dec 25, 2024 2:20PM</p>
          </div>
        </div>
      </div>

      {/* Description Section */}
<div className="pt-16 pb-6  text-center sm:text-left">
  <h3 className="text-lg font-semibold mb-2 text-white">
    Create Campaign
  </h3>
  <p className="text-xs text-gray-400 leading-relaxed max-w-sm  mx-auto sm:mx-0">
    Start creating campaigns on the Chaindustry app and get participants
    from our ecosystem.
  </p>
</div>

    </motion.div>
  );
};

export default CampaignCard;
