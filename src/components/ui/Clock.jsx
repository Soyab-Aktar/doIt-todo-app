import { useEffect, useState } from "react";

// Custom hook - clean and reusable
const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return time;
};

const Clock = () => {
  const currentTime = useCurrentTime();

  // Format time parts
  const hours = currentTime.getHours().toString().padStart(2, "0");
  const minutes = currentTime.getMinutes().toString().padStart(2, "0");
  const seconds = currentTime.getSeconds().toString().padStart(2, "0");

  return (
    <div className="bg-[#202127] p-6 rounded-md border border-gray-800 flex flex-col items-center justify-center h-full lg:w-1/2">
      {/* Time Display */}
      <div className="flex items-center text-4xl md:text-5xl font-bold mb-3">
        <span className="text-white">{hours}</span>
        <span className="text-[#f04343] mx-1 animate-pulse">:</span>
        <span className="text-white">{minutes}</span>
        <span className="text-[#f04343] mx-1 animate-pulse">:</span>
        <span className="text-white">{seconds}</span>
      </div>

      {/* Date Display */}
      <div className="text-center">
        <div className="text-gray-400 text-sm">
          {currentTime.toLocaleDateString([], {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </div>
        <div className="text-gray-500 text-xs mt-1">Local Time</div>
      </div>
    </div>
  );
};

export default Clock;
