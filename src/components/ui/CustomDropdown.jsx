import React, { useContext, useState } from "react";
import { DataContext } from "../context/Context";

const CustomDropdown = ({
  options,
  placeholder = "Select option",
  onSelect,
}) => {
  const { selectedOption, setSelectedOption } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className="relative w-full col-span-1">
      {/* Dropdown Button */}
      <button
        type="button"
        aria-required
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-[#1B1B1F] border border-gray-600 rounded-md px-3 py-3.5 text-left text-white text-sm flex justify-between items-center focus:outline-none focus:border-gray-500"
      >
        <span className={selectedOption ? "text-white" : "text-gray-400"}>
          {selectedOption || placeholder}
        </span>
        <svg
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#1B1B1F] border border-gray-600 rounded-md shadow-lg z-10">
          {options.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSelect(option)}
              className="w-full px-3 py-2 text-left text-white text-sm hover:bg-gray-700 first:rounded-t-md last:rounded-b-md focus:outline-none focus:bg-gray-700"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
