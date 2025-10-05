import React from "react";

const Task_View = ({ task }) => {
  const { taskName, date, priority } = task;
  return (
    <div className="bg-[#1B1B1F] p-5 rounded-lg border border-gray-700 flex items-center gap-4 hover:border-gray-600 transition-colors">
      {/* Task Content */}
      <div className="flex justify-between items-center flex-1">
        <div className="flex flex-col justify-between gap-2">
          <h5 className=" text-lg font-semibold text-white">{taskName}</h5>
          <p className="text-gray-400 text-sm">Due: {date}</p>
          {/* Priority Badge - Enhanced */}
          <span
            className={`
            text-xs 
            rounded-md
            px-3 
            py-2 
            font-medium
            w-fit
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
    </div>
  );
};

export default Task_View;
