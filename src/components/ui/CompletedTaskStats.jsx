import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import { TbProgressCheck } from "react-icons/tb";
const CompletedTaskStats = () => {
  const { completedTasks } = useContext(DataContext);

  return (
    <div className="bg-[#202127] p-6 rounded-md border border-gray-800 flex flex-col gap-4 md:w-1/2 lg:w-full ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Completed Tasks</h3>
          <p className="text-gray-400 text-sm">Total finished</p>
        </div>
        <div className="text-green-500 text-3xl">
          <TbProgressCheck />
        </div>
      </div>

      {/* Big Number - The Count */}
      <div className="text-3xl font-bold text-green-400">
        {completedTasks.length}
      </div>
    </div>
  );
};

export default CompletedTaskStats;
