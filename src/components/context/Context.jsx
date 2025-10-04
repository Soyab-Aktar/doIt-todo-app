import { createContext, useState } from "react";

export const DataContext = createContext();
const Context = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const resetForm = () => setSelectedOption("");
  const [tasks, setTasks] = useState([]);
  const globalData = {
    selectedOption,
    setSelectedOption,
    tasks,
    setTasks,
    resetForm,
  };
  return (
    <DataContext.Provider value={globalData}>{children}</DataContext.Provider>
  );
};

export default Context;
