import React, { useState } from "react";
import Tabs from "./Tabs";
import OngoingEvents from "./OngoingEvents";
import RecruitingEvents from "./RecruitingEvents";
import FinishedEvents from "./FinishedEvents";
import RadioButtons from "./RadioButtons";
import { Progress } from "./types"; // Progress 타입 임포트

export default function App() {
  const [selectedTab, setSelectedTab] = useState<Progress>("진행중");
  const [sortOrder, setSortOrder] = useState("최신순");

  const renderTabContent = () => {
    switch (selectedTab) {
      case "진행중":
        return <OngoingEvents sortOrder={sortOrder} />;
      case "모집중":
        return <RecruitingEvents sortOrder={sortOrder} />;
      case "종료된 행사":
        return <FinishedEvents sortOrder={sortOrder} />;
      default:
        return null;
    }
  };

  return (
    <div className="p-4 m-8">
      <Tabs selectedTab={selectedTab} onTabChange={setSelectedTab} />
      <div className="border-2 border-t-0 border-blue-500 rounded-b">
        <div className="p-4">
          <form
            className="flex justify-between items-center mx-4 my-4"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="search" className="sr-only">
              특정 기간 내 행사 찾기
            </label>
            <input
              type="text"
              id="search"
              placeholder="특정 기간 내 행사 찾기"
              className="border p-2 rounded w-3/4"
            />
            <RadioButtons
              sortOrder={sortOrder}
              onSortOrderChange={setSortOrder}
            />
          </form>
          <div className="mx-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}
