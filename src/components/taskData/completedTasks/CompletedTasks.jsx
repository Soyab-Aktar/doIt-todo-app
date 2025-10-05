import { DataContext } from "@/components/context/Context";
import React, { useContext } from "react";
import CompletedTask from "./CompletedTask";
import { MdTask } from "react-icons/md";

const CompletedTasks = () => {
  const { completedTasks = [], setCompletedTasks } = useContext(DataContext);
  const handleClearAll = () => {
    setCompletedTasks("");
  };
  return (
    <div>
      <header className="flex items-center justify-between my-6 px-2">
        <h1 className="text-2xl font-semibold">Completed Tasks</h1>
        <button
          onClick={handleClearAll}
          className="btn text-xs bg-[#87333362] rounded-md p-2 border border-[#f04343]"
        >
          Clear All Tasks
        </button>
      </header>
      <main className="flex flex-col gap-3">
        {completedTasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
              <MdTask className="text-9xl" />

              <p className="text-xl">Your wins will appear here</p>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Track your progress by completing tasks!
            </p>
          </div>
        ) : (
          completedTasks &&
          completedTasks.map((completedTask) => (
            <CompletedTask
              key={completedTask.id}
              completedTask={completedTask}
            />
          ))
        )}
      </main>
    </div>
  );
};

export default CompletedTasks;
