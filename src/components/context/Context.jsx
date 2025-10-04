import { createContext, useState } from "react";

export const DataContext = createContext();
const Context = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const resetForm = () => setSelectedOption("");
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };
  const completeTask = (taskId) => {
    const taskcompleted = tasks.find((task) => task.id === taskId);

    if (taskcompleted) {
      // Fix: spread the task properties correctly
      setCompletedTasks((prevCompletedTasks) => [
        ...prevCompletedTasks,
        { ...taskcompleted, isCompleted: true }, // This should spread all task properties
      ]);

      // Remove from active tasks
      deleteTask(taskId);

      // Debug: Check what was added (this will still show old state)
      console.log("Task moved to completed", completedTasks);
    } else {
      console.log("Task not found with ID:", taskId);
    }
  };

  const globalData = {
    selectedOption,
    setSelectedOption,
    tasks,
    setTasks,
    resetForm,
    setCompletedTasks,
    completedTasks,
    deleteTask,
    completeTask,
  };
  return (
    <DataContext.Provider value={globalData}>{children}</DataContext.Provider>
  );
};

export default Context;
