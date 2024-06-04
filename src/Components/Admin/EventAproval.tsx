import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useEffect, useState } from "react";
import { useRadioChecks } from "../../Hooks/useRadioChecks";

interface EventAprovalType {
  content: Array<{
    id: number;
    description: string;
    location: string;
    name: string;
    registrationDate: string;
    status: string;
  }>;
  pageNumber: number;
  totalPages: number;
}

const booths = [
  {
    name: "Name",
    location: "서울시 구로구",
    date: "2024.05.10",
    description: "부스 설명 내용",
    status: "승인 대기",
  },
  {
    name: "Name",
    location: "서울시 구로구",
    date: "2024.05.11",
    description: "부스 설명 내용",
    status: "승인 대기",
  },
  {
    name: "Name",
    location: "서울시 구로구",
    date: "2024.05.11",
    description: "부스 설명 내용",
    status: "승인 대기",
  },
  {
    name: "Name",
    location: "서울시 구로구1",
    date: "2024.05.11",
    description: "부스 설명 내용",
    status: "승인 반려",
  },
  {
    name: "Name",
    location: "서울시 구로구서울시 구로구서울시 구로구서울시 구로구E1",
    date: "2024.05.11",
    description: "부스 설명 내용",
    status: "승인 완료",
  },
];

const fetcher = () =>
  fetch("http://52.79.91.214:8080/admin/events?page=0&status=all", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNzUxMjg0NywiZXhwIjoxNzE3NTk5MjQ3fQ.BDW1tDnJTZxOQDK73plj9TDxUgX30Zkglgyy7KBy-wY",
    },
  }).then((response) => response.json());

const setEventState = (id: number, status: string) =>
  fetch(`http://52.79.91.214:8080/admin/events/${id}/status`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEsImlhdCI6MTcxNzUxMjg0NywiZXhwIjoxNzE3NTk5MjQ3fQ.BDW1tDnJTZxOQDK73plj9TDxUgX30Zkglgyy7KBy-wY",
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

export default function EventAproval() {
  const { data } = useQuery<EventAprovalType>({
    queryKey: ["event-aproval"],
    queryFn: fetcher,
  });

  const { checkList, clickCheckAll, clickCheckbox, isCheckAll } =
    useRadioChecks(data?.content.length ?? 1);

  const onAprove = (boothId: number) => {
    setEventState(boothId, "APPROVE");
  };

  const onReject = (boothId: number) => {
    setEventState(boothId, "REJECT");
  };
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
              <th className="py-2 px-4">행사명</th>
              <th className="py-2 px-4">행사 장소</th>
              <th className="py-2 px-4">행사 신청일</th>
              <th className="py-2 px-4">행사 설명</th>
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
                <td className="py-2 px-4 border-b">{booth.location}</td>
                <td className="py-2 px-4 border-b">{booth.registrationDate}</td>
                <td className="py-2 px-4 border-b">{booth.description}</td>
                <td
                  className={`py-2 px-4 border-b ${
                    booth.status === "승인 반려"
                      ? "text-red-500"
                      : booth.status === "승인 완료"
                      ? "text-blue-500"
                      : ""
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
      </div>
    </div>
  );
}
