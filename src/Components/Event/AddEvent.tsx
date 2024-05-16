import { useState } from "react";
import BoothTable from "./BoothTable";
import EventFormInput from "./EventFormInput";

export function getNumbers(maxNumber: number) {
  const NUMBERS = [];
  for (let i = 1; i <= maxNumber; i++) {
    NUMBERS.push(i);
  }
  return NUMBERS;
}
export function getAlphabets(maxAlphabet: string) {
  const code = maxAlphabet.charCodeAt(0);
  const ALPHABETS = [];
  for (let i = 65; i <= code; i++) {
    ALPHABETS.push(String.fromCharCode(i));
  }
  return ALPHABETS;
}
export default function AddEventPage() {
  const [boothType, setBoothType] = useState<"ALPHABET" | "NUMBER">("ALPHABET");
  const [maxAlphabet, setMaxAlphabet] = useState("A");
  const [maxNumber, setMaxNumber] = useState(1);

  const ALPHABETS = getAlphabets("Z");
  const NUMBERS = getNumbers(boothType === "ALPHABET" ? 20 : 100);

  const changeAlphabet = (e: any) => {
    setMaxAlphabet(e.target.value);
  };

  const changeNumber = (e: any) => {
    setMaxNumber(e.target.value);
  };

  return (
    <section className="flex min-h-screen justify-center">
      <div className="w-full max-w-screen-lg border h-full p-10">
        <h2>행사 등록</h2>
        <div className="flex flex-col mt-5">
          <span className="bg-blue-400 w-fit p-1 rounded-t">
            행사 정보 입력
          </span>
          <div className="w-full border border-blue-400 p-10 flex flex-col gap-5">
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
            <EventFormInput placeholder="" />
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <span className="bg-blue-400 w-fit p-1 rounded-t">
            행사 배치도 입력
          </span>

          {/* 이미지 첨부 */}

          <div className="w-full border border-blue-400 p-10 flex flex-col gap-5">
            <EventFormInput placeholder="" />

            {/* 부스 타입 */}

            <div className="flex gap-2">
              <label>
                <input
                  type="radio"
                  value={"ALPHABET"}
                  name={"type"}
                  defaultChecked={true}
                  onChange={(e) => {
                    setBoothType("ALPHABET");
                  }}
                />
                알파벳 형
              </label>
              <label>
                <input
                  type="radio"
                  value={"NUMBER"}
                  name={"type"}
                  defaultChecked={false}
                  onChange={(e) => {
                    setBoothType("NUMBER");
                  }}
                />
                숫자 형
              </label>
            </div>

            {/* 부스 테이블 */}

            <div className="flex gap-2">
              <select
                onChange={changeAlphabet}
                className={`w-20 border border-blue-300 p-2 rounded-md ${
                  boothType === "NUMBER" && "hidden"
                }`}
              >
                {ALPHABETS.map((alphabet) => (
                  <option key={alphabet} value={alphabet}>
                    {alphabet}
                  </option>
                ))}
              </select>
              <select
                onChange={changeNumber}
                className="w-20 border border-blue-300 p-2 rounded-md"
              >
                {NUMBERS.map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            </div>

            {/*  */}

            <BoothTable
              boothType={boothType}
              alphabet={maxAlphabet}
              number={maxNumber}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
