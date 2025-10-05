import { motivationalQuotes } from "@/data/quotes";
import { useState, useEffect } from "react";
import { TbCube } from "react-icons/tb";

const DailyMotivation = () => {
  const [currentQuote, setCurrentQuote] = useState({ text: "", author: "" });

  // Get random quote on component mount/refresh
  useEffect(() => {
    const getRandomQuote = () => {
      const randomIndex = Math.floor(Math.random() * motivationalQuotes.length);
      return motivationalQuotes[randomIndex];
    };

    setCurrentQuote(getRandomQuote());
  }, []);

  return (
    <div
      className="bg-[#202127] p-6 rounded-md border border-gray-800 h-full lg:w-1/2 flex flex-col justify-center 
      transform transition-all duration-300 ease-in-out  
      cursor-pointer group"
    >
      <div className="text-center">
        {/* Icon with hover animation */}
        <div
          className="text-green-400 text-3xl mb-4 
          transform transition-all duration-300 
          group-hover:scale-110  group-hover:text-green-300 flex justify-center"
        >
          <TbCube />
        </div>

        {/* Quote text with animation */}
        <blockquote
          className="text-gray-300 italic text-sm leading-relaxed mb-4 
          transform transition-all duration-300 
          group-hover:text-white group-hover:scale-105"
        >
          "{currentQuote.text}"
        </blockquote>

        {/* Author with underline animation */}
        <cite
          className="text-gray-500 text-xs 
          transform transition-all duration-300 
          group-hover:text-gray-300 relative"
        >
          <span className="relative">
            — {currentQuote.author}
            <span
              className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 
              transition-all duration-300 group-hover:w-full"
            ></span>
          </span>
        </cite>

        {/* Subtle label */}
        <div
          className="text-gray-600 text-xs mt-3 
          transition-all duration-300 
          group-hover:text-green-400"
        >
          Daily Motivation
        </div>
      </div>
    </div>
  );
};

export default DailyMotivation;
