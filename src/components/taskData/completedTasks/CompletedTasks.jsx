import React from "react";

const CompletedTasks = () => {
  return (
    <div>
      <header className="flex items-center justify-between my-6 px-2">
        <h1 className="text-2xl font-semibold">Completed Tasks</h1>
        <button className="btn text-xs bg-[#87333362] rounded-md p-2 border border-[#f04343]">
          Clear All Tasks
        </button>
      </header>
    </div>
  );
};

export default CompletedTasks;
