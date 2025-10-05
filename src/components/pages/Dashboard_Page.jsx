import React from "react";
import ActiveTaskStats from "../ui/ActiveTaskStats";
import CompletedTaskStats from "../ui/CompletedTaskStats";
import Clock from "../ui/Clock";
import DailyMotivation from "../ui/DailyMotivation";
import WeekCalendar from "../ui/WeekCalendar";
import ActiveTasks from "../taskData/activeTasks/ActiveTasks";
import Tasks_View from "../taskView/Tasks_View";

const Dashboard_Page = () => {
  return (
    <div className=" flex  flex-col gap-3 py-6 md:py-12 md:px-8 px-2 ">
      <div className="flex flex-col lg:flex-row gap-3 w-full">
        <div className="flex flex-col md:flex-row lg:flex-col gap-3 lg:w-2/6">
          <ActiveTaskStats />
          <CompletedTaskStats />
        </div>

        <div className="flex flex-col lg:flex-row gap-3 lg:w-4/6">
          <Clock />
          <DailyMotivation />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <WeekCalendar />
        <Tasks_View></Tasks_View>
      </div>
    </div>
  );
};

export default Dashboard_Page;
