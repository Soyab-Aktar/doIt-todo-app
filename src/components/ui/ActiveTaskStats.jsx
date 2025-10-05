import React, { useContext } from "react";
import { DataContext } from "../context/Context";
import { SlEnergy } from "react-icons/sl";

const ActiveTaskStats = () => {
  const { tasks, completedTasks } = useContext(DataContext);

  // Calculate progress percentage
  const totalTasks = tasks.length + completedTasks.length;
  const progressPercentage =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks.length / totalTasks) * 100);

  return (
    <div className="bg-[#202127] p-6 rounded-md border border-gray-800 flex flex-col gap-4 md:w-1/2 lg:w-full ">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Active Tasks</h3>
          <p className="text-gray-400 text-sm">{tasks.length} remaining</p>
        </div>
        <div className="text-yellow-500 text-3xl">
          <SlEnergy></SlEnergy>
        </div>
      </div>

      {/* Big Number */}
      <div className="text-3xl font-bold text-yellow-500">{tasks.length}</div>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-gray-400">Progress</span>
          <span className="text-white">{progressPercentage}%</span>
        </div>
        <progress
          className="progress progress-warning w-full h-2 "
          value={progressPercentage}
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default ActiveTaskStats;
