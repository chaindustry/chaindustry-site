import React from "react";

const ChatIcon = ({ text }) => {
  return (
    <div className="absolute top-6 right-6 z-30 animate-fadeIn">
      <div className="relative bg-radial-fade  text-white- rounded-2xl px-4 py-2 shadow-md  max-w-xs text-sm font-medium">
        {text}
        <div className="absolute left-6 w-3 h-3 bg-radial-fade rotate-45"></div>
      </div>
    </div>
  );
};

export default ChatIcon;
