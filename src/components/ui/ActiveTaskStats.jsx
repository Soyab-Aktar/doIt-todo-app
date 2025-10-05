import React, { useContext } from "react";
import { DataContext } from "../context/Context";

const ActiveTaskStats = () => {
  const { tasks, completedTasks } = useContext(DataContext);
  return (
    <div
      className="bg-[#202127] p-6 rounded-md border border-gray-800 w-1/2 md:w-full
  "
    >
      <h1>Active Task: {tasks.length}</h1>
    </div>
  );
};

export default ActiveTaskStats;
