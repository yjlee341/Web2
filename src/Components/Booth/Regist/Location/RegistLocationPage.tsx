import React, { useState } from "react";
import LocationStateInfo from "./LocationStateInfo";
import ModalButton from "./ModalButton";
import "../../../../index.css"; // 사용자 정의 CSS 파일 포함
import { useGetLocation } from "../../../../Hooks/Event/useGetLocation";

interface Props {
  eventId: string;
}

export default function RegistLocationPage({ eventId }: Props) {
  const { isLoading, isError, data } = useGetLocation(eventId);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const maxSelectableSeats = 3;

  if (isLoading) {
    return <div>로딩중입니다...</div>;
  }

  if (isError) {
    return <div>오류가 발생했습니다.</div>;
  }

  const getColorClass = (status: "EMPTY" | "WAITING" | "APPROVE") => {
    switch (status) {
      case "EMPTY":
        return "bg-yellow-400";
      case "WAITING":
        return "bg-red-400";
      case "APPROVE":
        return "bg-gray-400";
      default:
        return "";
    }
  };

  const handleSeatClick = (seatId: number) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((id) => id !== seatId);
      } else if (prevSelectedSeats.length < maxSelectableSeats) {
        return [...prevSelectedSeats, seatId];
      } else {
        alert(`You can select up to ${maxSelectableSeats} seats.`);
        return prevSelectedSeats;
      }
    });
  };

  const renderSeats = () => {
    if (!data) return;
    const seatRows = [];
    for (const row in data.areas) {
      const seatElements = data.areas[row].map((area) => (
        <div
          key={area.id}
          className={`w-16 h-16 ${getColorClass(
            area.status
          )} m-1 flex items-center justify-center text-center text-sm font-mono ${
            selectedSeats.includes(area.id) ? "border-4 border-blue-500" : ""
          } ${area.status !== "APPROVE" ? "cursor-pointer" : ""}`}
          onClick={() => area.status !== "APPROVE" && handleSeatClick(area.id)}
        >
          {area.number}
        </div>
      ));
      seatRows.push(
        <div key={row} className="flex justify-start mb-2 font-bold">
          {seatElements}
        </div>
      );
    }
    return seatRows;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {data ? (
        <div className="bg-white p-4 rounded shadow-lg w-3/4">
          <div className="flex w-full gap-4 h-full">
            <div className="w-1/2 py-5 flex flex-col h-[600px] items-center bg-blue-100 rounded-lg ">
              <div className="text-3xl h-1/3 font-bold">행사장 구조도</div>
              <img
                src={data.layoutImageUrls[0]}
                alt="Event Venue"
                className="w-2/3 h-auto rounded mt-3"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center pt-5 bg-blue-100 rounded-lg h-[600px] overflow-x-scroll overflow-y-scroll scrollbar-custom">
              <div className="text-3xl font-bold">부스 신청 현황</div>
              <div className="w-full flex flex-col items-start pl-5 pt-3">
                {renderSeats()}
              </div>
            </div>
          </div>
          <div className="flex justify-end pr-1 mt-4">
            <LocationStateInfo color="yellow-400" state={"비어있음"} />
            <LocationStateInfo color="red-400" state={"예약됨"} />
            <LocationStateInfo color="gray-400" state={"승인됨"} />
          </div>
          <div className="flex justify-center gap-4 mt-4 w-full">
            <ModalButton action={() => {}} color="blue-500" text="확인" />
            <ModalButton action={() => {}} color="red-500" text="취소" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
