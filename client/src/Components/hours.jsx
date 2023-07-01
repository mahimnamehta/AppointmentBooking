import React, { memo, useMemo, useState } from "react";
import { format, isSameMinute, parseISO } from "date-fns";
import { CheckCircle2 } from "lucide-react";
import { cn } from "../Lib/utils";

const AvailableHours = memo(({ freeTimes }) => {
  const [selectedTime, setSelectedTime] = useState();

  return (
    <div className="flex flex-col col-12 items-center h-[190px] w-[380px] gap-6 mt-12 p-0">
      <span>
        Available times:{" "}
        <span className="font-semibold text-orange-950">
          {freeTimes.length}
        </span>
      </span>
      <div
        style={{ overflow: "auto", maxHeight: "300px", maxWidth: "100px" }}
        className="grid grid-cols-4  sm:grid-cols-5 md:grid-cols-6  text-md gap-2"
      >
        {freeTimes.map((hour, hourIdx) => (
          <div key={hourIdx}>
            <button
              type="button"
              className={cn(
                "bg-green-200 rounded-lg px-2 text-gray-800 relative hover:border hover:border-green-400 w-[60px] h-[26px]",
                selectedTime &&
                  isSameMinute(selectedTime, hour) &&
                  "bg-green-400 text-gray-800"
              )}
              onClick={() => setSelectedTime(hour)}
            >
              <CheckCircle2
                className={cn(
                  "w-[16px] h-[16px] absolute hidden top-0 right-0 transform translate-x-1 -translate-y-1.5 text-green-700",
                  selectedTime && isSameMinute(selectedTime, hour) && "block"
                )}
              />
              {format(hour, "HH:mm")}
            </button>
          </div>
        ))}
      </div>
      {selectedTime && (
        <div className="w-full py-6">
          <span>Final selected reservation time is: </span>
          <span
            className="font-semibold text-rose-950 pl-1"
            style={{ color: "blue" }}
          >
            {format(selectedTime, "dd MMMM yyyy HH:mm")}
          </span>
        </div>
      )}
    </div>
  );
});

export default AvailableHours;
