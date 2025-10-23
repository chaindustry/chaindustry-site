import React from "react";

const ChatBalloon = ({ message, sender = "bot" }) => {
  const isUser = sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`relative max-w-xs md:max-w-sm px-4 py-2 rounded-2xl text-sm shadow-md ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        {message}

        {/* Bubble tail */}
        <div
          className={`absolute w-3 h-3 rotate-45 ${
            isUser
              ? "bg-blue-600 right-[-4px] bottom-0"
              : "bg-gray-200 left-[-4px] bottom-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

const ChatSection = () => {
  const messages = [
    { text: "Hey there! 👋", sender: "bot" },
    { text: "Hi! What's up?", sender: "user" },
    { text: "Just wanted to show you this awesome chat bubble UI 😄", sender: "bot" },
    { text: "Looks clean and modern!", sender: "user" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center justify-center">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-lg font-semibold mb-6 text-center text-gray-700">
          Chat Preview
        </h1>
        <div className="space-y-2">
          {messages.map((msg, i) => (
            <ChatBalloon key={i} message={msg.text} sender={msg.sender} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatSection;
