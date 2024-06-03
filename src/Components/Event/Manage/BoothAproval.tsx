import { ChangeEvent, useEffect, useState } from "react";

const booths = [
  {
    name: "Name",
    location: "A1",
    date: "2024.05.10",
    description: "부스 설명 내용",
    status: "승인 대기",
  },
  {
    name: "Name",
    location: "B1",
    date: "2024.05.11",
    description: "부스 설명 내용",
    status: "승인 대기",
  },
  {
    name: "Name",
    location: "C1",
    date: "2024.05.11",
    description: "부스 설명 내용",
    status: "승인 대기",
  },
  {
    name: "Name",
    location: "D1",
    date: "2024.05.11",
    description: "부스 설명 내용",
    status: "승인 반려",
  },
  {
    name: "Name",
    location: "E1",
    date: "2024.05.11",
    description: "부스 설명 내용",
    status: "승인 완료",
  },
];
export default function BoothAproval() {
  const [checkList, setCheckList] = useState<boolean[]>(
    new Array(booths.length).fill(false)
  );
  const [isCheckAll, setIsCheckAll] = useState(false);

  const clickCheckbox = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    setCheckList((prevList) => {
      const newList = [...prevList];
      newList[index] = e.target.checked;
      setIsCheckAll(newList.every((check) => check));
      return newList;
    });
  };

  const clickCheckAll = (e: ChangeEvent<HTMLInputElement>) => {
    const isAll = e.target.checked;
    setIsCheckAll(isAll);
    setCheckList(new Array(booths.length).fill(isAll));
  };

  useEffect(() => {
    console.log(checkList);
  }, [checkList]);

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
            {booths.map((booth, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">
                  <input
                    type="checkbox"
                    onChange={(e) => clickCheckbox(e, index)}
                    checked={checkList[index]}
                  />
                </td>
                <td className="py-2 px-4 border-b">{booth.name}</td>
                <td className="py-2 px-4 border-b">{booth.location}</td>
                <td className="py-2 px-4 border-b">{booth.date}</td>
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
                  <button className="text-blue-500 hover:underline mr-2">
                    승인
                  </button>
                  <button className="text-blue-500 hover:underline">
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
