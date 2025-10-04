import React from "react";

const ActiveTask = ({ task }) => {
  const { taskName, date, priority } = task;

  return (
    <div className="bg-[#202127] p-5 rounded-lg border border-gray-700 flex items-center gap-4 hover:border-gray-600 transition-colors">
      <input
        type="checkbox"
        defaultChecked={false}
        className="
          appearance-none 
          w-5 h-5 
          border-2 border-[#f04343] 
          rounded 
          bg-transparent
          focus:outline-none 
          focus:ring-2 
          focus:ring-[#f04343]/30
          checked:bg-[#c2620d62] 
          checked:border-[#b44708]
          relative
          cursor-pointer
          transition-all
          duration-200
          before:content-['✓']
          before:absolute
          before:text-[#fc955a]
          before:text-sm
          before:font-bold
          before:top-[-2px]
          before:left-[2px]
          before:opacity-0
          checked:before:opacity-100
        "
      />

      {/* Task Content */}
      <div className="flex justify-between items-center flex-1">
        <div>
          <h5 className="mb-1.5 text-lg font-semibold text-white">
            {taskName}
          </h5>
          <p className="text-gray-400 text-sm">Due: {date}</p>
        </div>

        {/* Priority Badge - Enhanced */}
        <span
          className={`
          text-xs 
          rounded-lg 
          px-3 
          py-2 
          font-medium
          ${
            priority === "High"
              ? "bg-[#c2620d62] text-[#fc955a] border border-[#b44708]"
              : ""
          }
          ${
            priority === "Medium"
              ? "bg-yellow-500/20 text-yellow-400 border border-yellow-600"
              : ""
          }
          ${
            priority === "Normal"
              ? "bg-gray-500/20 text-gray-300 border border-gray-600"
              : ""
          }
          ${
            priority === "Extreme"
              ? "bg-red-500/20 text-red-400 border border-red-600"
              : ""
          }
        `}
        >
          {priority}
        </span>
      </div>
    </div>
  );
};

export default ActiveTask;
