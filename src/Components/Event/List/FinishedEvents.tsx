import React, { useState } from "react";
import EventCard from "./EventCard";
import InfiniteScroll from "react-infinite-scroll-component";

interface FinishedEventsProps {
  sortOrder: string;
}

export default function FinishedEvents({ sortOrder }: FinishedEventsProps) {
  const [events, setEvents] = useState([
    { name: "종료된 행사1" },
    { name: "종료된 행사2" },
    { name: "종료된 행사3" },
    { name: "종료된 행사4" },
    { name: "종료된 행사5" },
    { name: "종료된 행사6" },
  ]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreEvents = () => {
    setTimeout(() => {
      setEvents((prevEvents) => [
        ...prevEvents,
        { name: `종료된 행사${prevEvents.length + 1}` },
        { name: `종료된 행사${prevEvents.length + 2}` },
      ]);
    }, 1500);
  };

  return (
    <InfiniteScroll
      dataLength={events.length}
      next={fetchMoreEvents}
      hasMore={hasMore}
      loader={<h4>로딩 중...</h4>}
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>모든 행사를 불러왔습니다</b>
        </p>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, index) => (
          <EventCard key={index} name={event.name} />
        ))}
      </div>
    </InfiniteScroll>
  );
}
