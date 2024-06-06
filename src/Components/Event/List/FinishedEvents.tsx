import React, { useState, useEffect } from "react";
import EventCard from "./EventCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchEvents } from "./EventService";
import { Event } from "./Interfaces";

interface FinishedEventsProps {
  sortOrder: string;
}

export default function FinishedEvents({ sortOrder }: FinishedEventsProps) {
  const [events, setEvents] = useState<Event[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [sliceNumber, setSliceNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchMoreEvents = async () => {
    try {
      const response = await fetchEvents(sliceNumber, sortOrder, "terminated");
      if (sliceNumber === 0) {
        setEvents(response.content);
      } else {
        setEvents((prevEvents) => [...prevEvents, ...response.content]);
      }
      setHasMore(response.hasNext);
      setSliceNumber(sliceNumber + 1);
    } catch (error) {
      console.error("Error fetching events:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setEvents([]);
    setSliceNumber(0);
    setHasMore(true);
    setLoading(true);
    fetchMoreEvents();
  }, [sortOrder]);

  return (
    <InfiniteScroll
      dataLength={events.length}
      next={fetchMoreEvents}
      hasMore={hasMore}
      loader={<h4 className="text-center my-4">로딩 중...</h4>}
      endMessage={
        <p className="text-center font-bold my-4">모든 행사를 불러왔습니다.</p>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {events.map((event, index) => (
          <EventCard
            key={index}
            name={event.name}
            image={event.mainImageUrl}
            endDate={event.closeDate}
          />
        ))}
      </div>
    </InfiniteScroll>
  );
}
