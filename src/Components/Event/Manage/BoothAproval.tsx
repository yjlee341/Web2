import { getAccessToken } from "../../../Api/Util/token";
import { useQuery } from "@tanstack/react-query";
import { useRadioChecks } from "../../../Hooks/useRadioChecks";
import { useParams } from "react-router-dom";
import PageNation from "../../Util/PageNation";

interface BoothAprovalType {
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
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};

//TODO: 행사를 만든 계정이 아닌 경우 RETURN
//TODO: 로그인 필요
export default function BoothAproval() {
  const { id } = useParams();

  const { data, isError } = useQuery<BoothAprovalType>({
    queryKey: ["event-aproval"],
    enabled: !!id,
    queryFn: () => fetcher(id),
  });

  const { checkList, clickCheckAll, clickCheckbox, isCheckAll } =
    useRadioChecks(data?.content?.length ?? 1);

  const onAprove = (boothId: number) => {
    setBoothState(boothId, "APPROVE");
  };

  const onReject = (boothId: number) => {
    setBoothState(boothId, "REJECT");
  };

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
          <tbody>
            {data?.content?.map((booth, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    onChange={(e) => clickCheckbox(e, index)}
                    checked={checkList[index]}
                  />
                </td>
                <td className="py-2 px-4 border-b">{booth.name}</td>
                <td className="py-2 px-4 border-b">
                  {booth.boothLocationData?.map(
                    ({ classification, number }) => (
                      <span>
                        {classification}-{number}
                      </span>
                    )
                  )}
                </td>
                <td className="py-2 px-4 border-b">{booth.registrationDate}</td>
                <td className="py-2 px-4 border-b">{booth.description}</td>
                <td
                  className={`py-2 px-4 border-b ${
                    booth.status === "APPROVE"
                      ? "text-red-500"
                      : booth.status === "REJECT"
                      ? "text-blue-500"
                      : "text-black"
                  }`}
                >
                  {booth.status}
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="w-full text-blue-500 hover:underline mr-2 border rounded-md px-2 whitespace-nowrap"
                    onClick={() => onAprove(booth.id)}
                  >
                    승인
                  </button>
                  <button
                    className="w-full text-blue-500 hover:underline border rounded-md px-2 whitespace-nowrap"
                    onClick={() => onReject(booth.id)}
                  >
                    반려
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* {data && <PageNation maxPage={data.totalPages ?? 1} showPage={5} />} */}
      </div>
    </div>
  );
}
