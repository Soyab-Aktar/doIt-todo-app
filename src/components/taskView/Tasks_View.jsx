import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/Context";
import Task_View from "./Task_View";
import { MdNoteAlt } from "react-icons/md";

const Tasks_View = () => {
  const { tasks = [] } = useContext(DataContext);
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
    <div className="bg-[#202127] p-6 rounded-md border border-gray-800 w-full ">
      <div className="text-white text-lg font-semibold mb-4 flex flex-col md:flex-row gap-2 justify-between md:items-center">
        <h1>Task List</h1>
        <div className="flex gap-2">
          <button
            onClick={handleSort}
            className={`btn text-xs rounded-md p-2 border transition-colors w-1/2 md:w-fit ${
              isSorted
                ? "bg-green-500/20 text-green-400 border-green-600"
                : "bg-[#87333362] border-[#f04343]"
            }`}
          >
            {isSorted ? "Sorted by Priority" : "Sort By: Priority"}
          </button>
          <Link
            to={`/tasks`}
            className="btn text-xs bg-[#87333362] rounded-md p-2 border border-[#f04343]  w-1/2 md:w-fit"
          >
            Manage Tasks
          </Link>
        </div>
      </div>
      <main
        className={`grid gap-3 ${
          tasks.length === 0
            ? "grid-cols-1"
            : tasks.length > 4
            ? "md:grid-cols-2 lg:grid-cols-3"
            : "md:grid-cols-2"
        }`}
      >
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
          sortedTasks.map((task) => (
            <Task_View key={task.id} task={task}></Task_View>
          ))
        )}
      </main>
    </div>
  );
};

export default Tasks_View;
