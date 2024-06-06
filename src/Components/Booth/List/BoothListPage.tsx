import React, { useState, useEffect } from "react";
import BoothCard from "./BoothCard";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchBooths } from "./BoothService";
import { Booth } from "./Interfaces";
import CheckLogin from "../../CheckLogin";

export default function BoothListPage() {
  const [booths, setBooths] = useState<Booth[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [sliceNumber, setSliceNumber] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchMoreBooths = async () => {
    try {
      setLoading(true);
      const response = await fetchBooths(sliceNumber);
      setBooths((prevBooths) => [...prevBooths, ...response.content]);
      setHasMore(response.hasNext);
      setSliceNumber((prevSliceNumber) => prevSliceNumber + 1);
    } catch (error) {
      console.error("Error fetching booths:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMoreBooths();
  }, []);

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <CheckLogin>
      <div className="p-4 m-8">
        <div className="p-4 mt-4 border-b-2 border-r-2 shadow-md">
          <div className="flex items-center mt-3 mx-10">
            <form className="mb-4 w-full flex" onSubmit={handleSearchSubmit}>
              <input
                type="text"
                placeholder="부스 검색"
                className="flex-grow p-2 border border-gray-300 rounded-l"
              />
              <button
                type="submit"
                className="p-2 bg-blue-500 text-white rounded-r"
              >
                검색
              </button>
            </form>
          </div>
          {loading ? (
            <h4 className="text-center my-4">로딩 중...</h4>
          ) : booths.length === 0 ? (
            <p className="text-center my-4">부스 정보가 없습니다</p>
          ) : (
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
                  <BoothCard
                    key={index}
                    name={booth.name}
                    image={booth.mainImageUrl}
                    endDate={booth.closeDate}
                  />
                ))}
              </div>
            </InfiniteScroll>
          )}
        </div>
      </div>
    </CheckLogin>
  );
}
