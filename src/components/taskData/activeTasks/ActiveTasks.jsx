import { DataContext } from "@/components/context/Context";
import React, { useContext } from "react";
import ActiveTask from "./ActiveTask";

const ActiveTasks = () => {
  const { tasks } = useContext(DataContext);
  return (
    <div>
      <header className="flex items-center justify-between my-6 px-2">
        <h1 className="text-2xl font-semibold">Active Tasks</h1>
        <button className="btn text-xs bg-[#87333362] rounded-md p-2 border border-[#f04343]">
          Sort By: Priority
        </button>
      </header>
      <main className="flex flex-col gap-3">
        {tasks.map((task) => (
          <ActiveTask key={task.id} task={task} />
        ))}
      </main>
    </div>
  );
};

export default ActiveTasks;
