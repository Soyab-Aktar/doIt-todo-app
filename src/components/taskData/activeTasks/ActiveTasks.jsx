import { DataContext } from "@/components/context/Context";
import React, { useContext, useState } from "react";
import ActiveTask from "./ActiveTask";
import { MdNoteAlt } from "react-icons/md";

const ActiveTasks = () => {
  const { tasks = [] } = useContext(DataContext); // ✅ Move to top
  const [isSorted, setIsSorted] = useState(false);

  const priorityOrder = {
    Extreme: 1,
    High: 2,
    Medium: 3,
    Normal: 4,
  };

  // Sort function
  const getSortedTasks = () => {
    if (!isSorted) return tasks;

    return [...tasks].sort((a, b) => {
      return priorityOrder[a.priority] - priorityOrder[b.priority];
    });
  };

  // Toggle sort
  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  const sortedTasks = getSortedTasks();

  return (
    <div>
      <header className="flex items-center justify-between my-6 px-2">
        <h1 className="text-2xl font-semibold">Active Tasks</h1>
        <button
          onClick={handleSort}
          className={`btn text-xs rounded-md p-2 border transition-colors ${
            isSorted
              ? "bg-green-500/20 text-green-400 border-green-600"
              : "bg-[#87333362] border-[#f04343]"
          }`}
        >
          {isSorted ? "Sorted by Priority" : "Sort By: Priority"}
        </button>
      </header>
      <main className="flex flex-col gap-3">
        {sortedTasks.length === 0 ? (
          <div className="text-center py-12">
            <div className="flex flex-col items-center justify-center gap-3 text-gray-400">
              <MdNoteAlt className="text-9xl" />
              <p className="text-xl">No active tasks yet</p>
            </div>
            <p className="text-gray-500 text-sm mt-2">
              Add a task to get started!
            </p>
          </div>
        ) : (
          sortedTasks.map((task) => <ActiveTask key={task.id} task={task} />)
        )}
      </main>
    </div>
  );
};

export default ActiveTasks;
