import React, { useContext } from "react";
import { DataContext } from "../context/Context";

const WeekCalendar = () => {
  const { tasks } = useContext(DataContext);

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Get current week dates
  const today = new Date();
  const currentDay = today.getDay();

  const weekDates = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() - currentDay + i);
    weekDates.push(date);
  }

  const isToday = (date) => {
    return date.toDateString() === today.toDateString();
  };

  const hasTask = (date) => {
    if (!tasks || tasks.length === 0) return false;

    const targetDate = date.toISOString().split("T")[0];

    return tasks.some((task) => {
      if (!task.date) return false;

      const taskDate = task.date.split("T")[0];

      return taskDate === targetDate;
    });
  };

  return (
    <div className="bg-[#202127] p-6 rounded-md border border-gray-800">
      <div className="text-white text-lg font-semibold mb-4 flex justify-between">
        <h3>Week Calendar</h3>
        <h4 className="font-normal text-sm">
          {new Date().toLocaleDateString("en-US", { month: "long" })}
        </h4>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {weekDates.map((date, index) => (
          <div
            key={index}
            className={`
              md:p-3 p-1 rounded-md text-center text-sm
              ${
                isToday(date)
                  ? "bg-yellow-500 text-black font-semibold"
                  : "bg-[#1B1B1F] text-gray-300"
              }
              ${
                hasTask(date)
                  ? "border-2 border-yellow-600"
                  : "border border-gray-600"
              }
            `}
          >
            <div className="font-medium">{weekDays[index]}</div>
            <div className="text-lg">{date.getDate()}</div>
            <div
              className={`p-1 w-0.5 mx-auto rounded-full ${
                isToday(date)
                  ? "bg-black"
                  : hasTask(date)
                  ? "bg-amber-600"
                  : "bg-gray-600"
              }`}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeekCalendar;
