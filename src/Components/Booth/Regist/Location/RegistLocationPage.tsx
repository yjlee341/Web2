import React, { useState } from "react";

interface EventBookingProps {
  imageSrc: string;
  rows: string[];
  seatsPerRow: number[];
  bookingStatus: {
    confirmed: string[];
    reserved: string[];
    available: string[];
  };
}

const EventBooking: React.FC<EventBookingProps> = ({
  imageSrc,
  rows,
  seatsPerRow,
  bookingStatus,
}) => {
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);

  const getColorClass = (status: string) => {
    switch (status) {
      case "available":
        return "bg-yellow-400";
      case "reserved":
        return "bg-red-400";
      case "confirmed":
        return "bg-gray-400";
      default:
        return "";
    }
  };

  const handleSeatClick = (seat: string) => {
    setSelectedSeats((prevSelectedSeats) =>
      prevSelectedSeats.includes(seat)
        ? prevSelectedSeats.filter((s) => s !== seat)
        : [...prevSelectedSeats, seat]
    );
  };

  const transformBookingStatus = (statusData: {
    confirmed: string[];
    reserved: string[];
    available: string[];
  }): { [key: string]: string } => {
    const transformedStatus: { [key: string]: string } = {};
    statusData.confirmed.forEach((seat) => {
      transformedStatus[seat] = "confirmed";
    });
    statusData.reserved.forEach((seat) => {
      transformedStatus[seat] = "reserved";
    });
    statusData.available.forEach((seat) => {
      transformedStatus[seat] = "available";
    });
    return transformedStatus;
  };

  const transformedStatus = transformBookingStatus(bookingStatus);

  const renderSeats = () => {
    const seatRows = [];
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const seats = seatsPerRow[i];
      const seatElements = [];
      for (let j = 1; j <= seats; j++) {
        const seatKey = `${row}${j}`;
        const isConfirmed = transformedStatus[seatKey] === "confirmed";
        seatElements.push(
          <div
            key={seatKey}
            className={`w-16 h-16 ${getColorClass(
              transformedStatus[seatKey] || "available"
            )} m-1 flex items-center justify-center ${
              selectedSeats.includes(seatKey) ? "border-4 border-blue-500" : ""
            } ${!isConfirmed ? "cursor-pointer" : ""}`}
            onClick={() => !isConfirmed && handleSeatClick(seatKey)}
          >
            {seatKey}
          </div>
        );
      }
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
      <div className="bg-white p-4 rounded shadow-lg w-3/4">
        <div className="flex w-full gap-4">
          <div className="w-1/2 py-5 flex flex-col items-center bg-blue-100 rounded-lg">
            <div className="text-3xl font-bold">행사장 구조도</div>
            <img
              src={imageSrc}
              alt="Event Venue"
              className="w-2/3 h-auto rounded mt-3"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center pt-5 bg-blue-100 rounded-lg">
            <div className="text-3xl font-bold">부스 신청 현황</div>
            <div className="w-full items-start pl-5 pt-3">{renderSeats()}</div>
          </div>
        </div>
        <div className="flex justify-end pr-1 mt-4">
          <div className="flex items-center mr-4">
            <div className="w-4 h-4 bg-yellow-400 mr-2"></div>
            <span>비어있음</span>
          </div>
          <div className="flex items-center mr-4">
            <div className="w-4 h-4 bg-red-400 mr-2"></div>
            <span>예약됨</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-gray-400 mr-2"></div>
            <span>승인됨</span>
          </div>
        </div>
        <div className="flex justify-center gap-4 mt-4 w-full">
          <button className="w-1/4 bg-blue-500 text-white py-2 rounded">
            확인
          </button>
          <button className="w-1/4 bg-red-500 text-white py-2 rounded">
            취소
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventBooking;
