import { ChangeEvent, useState } from "react";
import {
  format,
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  eachDayOfInterval,
  isWithinInterval,
  isToday,
} from "date-fns";

// Props 타입 정의
interface Props {
  startDate: Date;
  endDate: Date;
}

interface ServiceTime {
  date: Date;
  timeList: string[];
}

export default function ServiceTimeAdd({ startDate, endDate }: Props) {
  const [serviceTimeList, setServiceTimeList] = useState<ServiceTime[]>();
  const [time, setTime] = useState("");

  const addServiceTime = () => {};

  // Month index is adjusted by subtracting 1
  const adjustedStartDate = new Date(
    startDate.getFullYear(),
    startDate.getMonth() - 1,
    startDate.getDate()
  );
  const adjustedEndDate = new Date(
    endDate.getFullYear(),
    endDate.getMonth() - 1,
    endDate.getDate()
  );

  const [currentMonth, setCurrentMonth] = useState(
    startOfMonth(adjustedStartDate)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // 현재 월의 모든 날짜 가져오기
  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth),
  });

  // 이전 달로 이동
  const handlePreviousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  // 다음 달로 이동
  const handleNextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  // 날짜 클릭 핸들러
  const handleDateClick = (date: Date) => {
    if (
      isWithinInterval(date, { start: adjustedStartDate, end: adjustedEndDate })
    ) {
      setSelectedDate(date);
    }
  };

  //시간 변경
  const handleTimeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTime(event.target.value);
  };

  const a = (selectedDate: Date, time: string) => {};

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center w-1/3 ">
        <div className="flex justify-between items-center w-full mb-2">
          <button
            onClick={handlePreviousMonth}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            Prev
          </button>
          <div className="text-lg font-bold">
            {format(currentMonth, "yyyy MMMM")}
          </div>
          <button
            onClick={handleNextMonth}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            Next
          </button>
        </div>
        <div className="grid grid-cols-7 gap-2 w-full">
          {daysInMonth.map((day) => {
            const isActive = isWithinInterval(day, {
              start: adjustedStartDate,
              end: adjustedEndDate,
            });
            const isTodayDate = isToday(day);
            return (
              <div
                key={format(day, "yyyy-MM-dd")}
                className={`p-2 text-center border ${
                  isActive
                    ? "bg-white cursor-pointer"
                    : "bg-gray-300 cursor-not-allowed"
                } ${isTodayDate ? "border-blue-500" : "border-gray-200"}`}
                onClick={() => handleDateClick(day)}
              >
                {format(day, "d")}
              </div>
            );
          })}
        </div>
      </div>
      {selectedDate && (
        <div className="flex flex-col gap-4 items-center bg-white w-1/3 p-4 mt-4">
          <p className="font-bold text-xl">
            선택된 날짜: {format(selectedDate, "yyyy-MM-dd")}
          </p>
          <div className="flex gap-5">
            <h1 className="font-bold text-xl">시간 추가</h1>
            <input type="time" value={time} onChange={handleTimeChange} />
            <button
              onClick={() => {}}
              className="bg-blue-500 font-bold px-4 rounded-md text-white"
            >
              추가
            </button>
          </div>

          <div className="mt-2 px-4 py-2 font-bold w-1/2 bg-blue-500 text-white rounded">
            Action Button
          </div>
        </div>
      )}
    </div>
  );
}
