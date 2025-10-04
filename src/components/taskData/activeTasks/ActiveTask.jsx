import { DataContext } from "@/components/context/Context";
import React, { useContext } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const ActiveTask = ({ task }) => {
  const { deleteTask, completeTask } = useContext(DataContext);
  const { taskName, date, priority, id } = task;

  const handleCheck = (e) => {
    const checked = e.target.checked;
    console.log(checked);
    if (checked) {
      completeTask(id);
    }
  };
  const handleRemove = () => {
    console.log("Removing.....");
    deleteTask(id);
    console.log("Removed ...");
  };

  return (
    <div className="bg-[#202127] p-5 rounded-lg border border-gray-700 flex items-center gap-4 hover:border-gray-600 transition-colors">
      <input
        type="checkbox"
        checked={false}
        onChange={handleCheck}
        className="
          appearance-none 
          w-5 h-5 
          border-2 border-green-500 
          rounded 
          bg-transparent
          focus:outline-none 
          focus:ring-2 
          focus:ring-green-700/30
          checked:bg-green-600
          checked:border-lime-500
          relative
          cursor-pointer
          transition-all
          duration-200
          before:content-['✓']
          before:absolute
          before:text-black
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
        <button
          onClick={handleRemove}
          className=" cursor-pointer p-2 rounded-md text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-all duration-200 group"
        >
          <MdOutlineDeleteOutline className="text-2xl group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default ActiveTask;
