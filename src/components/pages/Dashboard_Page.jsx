import React from "react";
import ActiveTaskStats from "../ui/ActiveTaskStats";
import CompletedTaskStats from "../ui/CompletedTaskStats";
import Clock from "../ui/Clock";
import DailyMotivation from "../ui/DailyMotivation";
import WeekCalendar from "../ui/WeekCalendar";
import NextTask from "../ui/NextTask";

const Dashboard_Page = () => {
  return (
    <div className=" flex  flex-col gap-3 py-12 md:px-8 px-2 ">
      <div className="flex flex-col md:flex-row gap-3 w-full">
        {/* Task Section: 40% width on md+ */}
        <div className="flex md:flex-col gap-3 md:w-2/6">
          <ActiveTaskStats /> {/* Position 1 */}
          <CompletedTaskStats /> {/* Position 2 */}
        </div>

        {/* Clock Section: 60% width on md+ */}
        <div className="flex flex-col md:flex-row gap-3 md:w-4/6">
          <Clock /> {/* Position 3 */}
          <DailyMotivation /> {/* Position 4 */}
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <WeekCalendar /> {/* Position 5 */}
        <NextTask /> {/* Position 6 */}
      </div>
    </div>
  );
};

export default Dashboard_Page;
