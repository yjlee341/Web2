import { getAccessToken } from "../../../Api/Util/token";
import { useQuery } from "@tanstack/react-query";
import { useRadioChecks } from "../../../Hooks/useRadioChecks";
import { useParams } from "react-router-dom";
import PageNation from "../../Util/PageNation";
import { Event, eventFetcher } from "../EventDetail";
import BoothAprovalTable from "./BoothAprovalTable";

export type BoothAprovalContent = Array<{
  id: number;
  name: string;
  registrationDate: string;
  description: string;
  status: string;
  boothLocationData: Array<{
    classification: string;
    number: string;
  }>;
}>;
export interface BoothAprovalType {
  totalPages: number;
  pageNumber: number;
  content: Array<{
    id: number;
    name: string;
    registrationDate: string;
    description: string;
    status: string;
    boothLocationData: Array<{
      classification: string;
      number: string;
    }>;
  }>;
}

const fetcher = (eventId: string | undefined) => {
  if (!eventId) return Promise.reject();
  return fetch(`http://52.79.91.214:8080/events/${eventId}/managed/booths`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getAccessToken()}`,
    },
  }).then((response) => {
    if (response.ok) return response.json();
    else throw new Error();
  });
};

const setBoothState = (boothId: number, status: string) => {
  fetch(`http://52.79.91.214:8080/events/booths/${boothId}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getAccessToken()}`,
    },
    body: JSON.stringify({ status }),
  })
    .then((response) => {
      if (response.ok) return response.json();
      else throw new Error();
    })
    .then((data) => {
      window.location.reload(); // TODO: 리액트 쿼리로 변경
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

export default function BoothAproval() {
  const { id } = useParams();

  const { data, isError } = useQuery<BoothAprovalType>({
    queryKey: ["event-aproval"],
    enabled: !!id,
    queryFn: () => fetcher(id),
  });

  const {
    data: eventData,
    isError: eventError,
    isLoading: eventLoading,
  } = useQuery<Event>({
    queryKey: ["event", id],
    enabled: !!id,
    queryFn: () => eventFetcher(id),
    retry: 1,
  });

  const { checkList, clickCheckAll, clickCheckbox, isCheckAll } =
    useRadioChecks(data?.content?.length ?? 1);

  const onAprove = (boothId: number) => {
    setBoothState(boothId, "APPROVE");
  };

  const onReject = (boothId: number) => {
    setBoothState(boothId, "REJECT");
  };

  if (!eventLoading && !eventData?.isUserManager) {
    alert("행사 관리자만 이용 가능합니다");
    window.history.back();
  }
  if (!data || isError) return <>부스 데이터를 찾을 수 없습니다.</>;

  return (
    <div className="flex-1 flex flex-col p-2">
      <div className="w-full inline-flex gap-3 p-2">
        <img
          className="border p-2 rounded-md"
          src=""
          alt="설정"
          onClick={() => console.log(checkList)}
        ></img>
        <button className="border p-2 rounded-md">승인 대기</button>
        <button className="border p-2 rounded-md">승인 완료</button>
        <button className="border p-2 rounded-md">승인 반려</button>
        <button className="border p-2 rounded-md ml-auto">선택 삭제</button>
      </div>
      <div className="container mx-auto">
        {data.content.length === 0 ? (
          <div className="text-center text-2xl bold mt-20">
            신청된 부스가 없습니다😂
          </div>
        ) : (
          <table className="min-w-full bg-white border-y border-gray-200">
            <thead>
              <tr className="border-b">
                <th className="py-2 w-1">
                  <input
                    type="checkbox"
                    checked={isCheckAll}
                    onChange={clickCheckAll}
                  />
                </th>
                <th className="py-2 px-4">부스명</th>
                <th className="py-2 px-4">부스 위치</th>
                <th className="py-2 px-4">부스 신청일</th>
                <th className="py-2 px-4">부스 설명</th>
                <th className="py-2 px-4">상태</th>
                <th className="py-2 px-4">관리</th>
              </tr>
            </thead>

            <BoothAprovalTable
              booths={data?.content}
              checkList={checkList}
              clickCheckbox={clickCheckbox}
              onAprove={onAprove}
              onReject={onReject}
            />
          </table>
        )}
        {/* {data && <PageNation maxPage={data.totalPages ?? 1} showPage={5} />} */}
      </div>
    </div>
  );
}
