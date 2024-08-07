import React, { useState, useEffect } from "react";
import { MoonIcon } from "@heroicons/react/24/solid";
import { SunIcon } from "@heroicons/react/24/solid";

export const TimeOfDay: React.FC = () => {
  const [timeOfDay, setTimeOfDay] = useState<string>("");

  useEffect(() => {
    const updateTimeOfDay = () => {
      const now = new Date();
      const hours = now.getHours();
      let greeting = "Good Morning";

      if (hours >= 12 && hours < 18) {
        greeting = "Good Afternoon";
      } else if (hours >= 18) {
        greeting = "Good Evening";
      }

      setTimeOfDay(greeting);
    };

    updateTimeOfDay();
    const interval = setInterval(updateTimeOfDay, 60000); // updates every minute

    return () => clearInterval(interval); /// cleanup interval component
  }, []);
  return (
    <>
      <div className="flex gap-2 items-center">
        <span className="text-sm">{timeOfDay}</span>
        {timeOfDay === "Good Evening" ? (
          <MoonIcon className=" text-green size-6" />
        ) : (
          <SunIcon className="text-green size-6" />
        )}
      </div>
    </>
  );
};
