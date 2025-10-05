import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-[#f04343] animate-bounce"></div>
      <div
        className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-[#f04343] animate-bounce"
        style={{ animationDelay: "0.1s" }}
      ></div>
      <div
        className="w-3 h-3 rounded-full bg-gradient-to-r from-orange-400 to-[#f04343] animate-bounce"
        style={{ animationDelay: "0.2s" }}
      ></div>
    </div>
  );
};

export default Loader;
