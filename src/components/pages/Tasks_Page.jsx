import { useContext } from "react";
import CustomDropdown from "../ui/CustomDropdown";
import { DataContext } from "../context/Context";

const Tasks_Page = () => {
  const { selectedOption, tasks, setTasks, resetForm } =
    useContext(DataContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);

    const taskData = {
      id: Date.now(),
      task: formObject.task,
      priority: selectedOption,
      date: formObject.date,
    };

    console.log("Complete Task :", taskData);
    setTasks((prevTask) => [...prevTask, taskData]);
    console.log(tasks);
    e.target.reset();
    resetForm();
  };
  return (
    <div className="py-12 md:px-8 px-2">
      <h1 className="mb-6 text-2xl font-semibold px-2">Add New Task</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-[#202127] md:px-6 px-3 py-6 rounded-md grid lg:grid-cols-5 gap-2"
      >
        {/* input */}
        <input
          required
          name="task"
          type="text"
          placeholder="Type here"
          className=" col-span-2 input w-full rounded-md bg-[#1B1B1F] focus:outline focus:outline-gray-500 border border-gray-600 py-6 "
        />
        {/* Priority */}
        <CustomDropdown
          placeholder="Select Priority"
          options={["Normal", "Medium", "High", "Extreme"]}
          onSelect={(value) => console.log("Selected:", value)}
        />

        {/* Date */}

        <input
          name="date"
          type="datetime-local"
          className="col-span-1 input w-full text-gray-400 rounded-md bg-[#1B1B1F] focus:outline focus:outline-gray-500 border border-gray-600 py-6 "
        />

        {/* button */}
        <button
          type="submit"
          className="col-span-2 lg:col-span-1 btn text-xl bg-[#f04343] rounded-md w-full p-6 border-none"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Tasks_Page;
