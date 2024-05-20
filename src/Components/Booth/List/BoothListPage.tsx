import React, { useState } from "react";
import BoothCard from "./BoothCard";
import InfiniteScroll from "react-infinite-scroll-component";

export default function BoothListPage() {
  const [booths, setBooths] = useState([
    { name: "부스 1" },
    { name: "부스 2" },
    { name: "부스 3" },
    { name: "부스 4" },
    { name: "부스 5" },
    { name: "부스 6" },
  ]);
  const [hasMore, setHasMore] = useState(true);

  const fetchMoreBooths = () => {
    setTimeout(() => {
      setBooths((prevBooths) => [
        ...prevBooths,
        {
          name: `부스 ${prevBooths.length + 1}`,
        },
        {
          name: `부스 ${prevBooths.length + 2}`,
        },
      ]);
    }, 1500);
  };

  return (
    <div className="p-4 m-8">
      <div className="border-2 border-blue-500 p-4 mt-4 rounded">
        <form
          className="flex justify-between items-center my-4 mb-4 mx-10"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="search" className="sr-only">
            부스 검색
          </label>
          <input
            type="text"
            id="search"
            placeholder="부스 검색"
            className="border p-2 rounded w-full"
          />
        </form>
        <InfiniteScroll
          dataLength={booths.length}
          next={fetchMoreBooths}
          hasMore={hasMore}
          loader={<h4 className="text-center my-4">로딩 중...</h4>}
          endMessage={
            <p className="text-center font-bold my-4">
              모든 부스를 불러왔습니다
            </p>
          }
        >
          <div className="grid grid-cols-2 gap-10 mx-10">
            {booths.map((booth, index) => (
              <BoothCard key={index} name={booth.name} />
            ))}
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
