import React from "react";

interface TabsProps {
  selectedTab: string;
  onTabChange: (tab: string) => void;
}

export default function Tabs({ selectedTab, onTabChange }: TabsProps) {
  const tabs = ["진행중", "모집중", "종료된 행사"];

  return (
    <div className="flex space-x-4 border-b-2 border-blue-500">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-t ${
            selectedTab === tab
              ? "bg-blue-500 text-white border-blue-500 border-t-2 border-x-2"
              : "bg-gray-200 text-gray-800"
          } ${selectedTab !== tab ? "border-b-2 border-blue-500" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
