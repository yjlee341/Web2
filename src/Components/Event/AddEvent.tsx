import { ChangeEvent, FormEvent, useState } from "react";
import BoothTable from "./BoothTable";
import EventFormInput from "./EventFormInput";
import { ALL_ALPHABETS } from "../../Constants/Alphabet";

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

type AreaData = Array<{ area: string; maxNumber: number }>;

interface EventData {
  name: string;
  location: string;
  description: string;
  openDate: string;
  closeDate: string;
  boothRecruitmentStartDate: string;
  boothRecruitmentEndDate: string;
  layoutType: "ALPHABET" | "NUMBER";
  areaClassifications: AreaData;
}

export default function AddEventPage() {
  const [boothType, setBoothType] = useState<"ALPHABET" | "NUMBER">("ALPHABET");
  const [maxAlphabet, setMaxAlphabet] = useState("A");
  const [maxNumber, setMaxNumber] = useState(1);

  const ALPHABETS = getAlphabets("Z");
  const NUMBERS = getNumbers(boothType === "ALPHABET" ? 20 : 100);

  const [eventDetails, setEventDetails] = useState<EventData>({
    name: "",
    location: "",
    description: "",
    openDate: "",
    closeDate: "",
    boothRecruitmentStartDate: "",
    boothRecruitmentEndDate: "",
    layoutType: "ALPHABET",
    areaClassifications: [{ area: "A", maxNumber: 1 }],
  });

  console.log(eventDetails.areaClassifications);

  const [mainImage, setMainImage] = useState<File>();
  const [layoutImages, setLayoutImages] = useState<File[]>([]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setEventDetails({ ...eventDetails, [name]: value });
  };

  const handleAreaTableChange = (alpha: string, number: number) => {
    let newAreas = [...eventDetails.areaClassifications];
    const index = newAreas.findIndex(({ area }) => area === alpha);
    newAreas[index].maxNumber = number;
    setEventDetails({ ...eventDetails, areaClassifications: newAreas });
  };

  const handleImageChange = (e: any) => {
    setMainImage(e.target.files[0]);
  };

  const handleLayoutImagesChange = (e: any) => {
    // @ts-ignore
    setLayoutImages([...e.target.files]);
  };

  const changeAlphabet = (e: any) => {
    setMaxAlphabet(e.target.value);
    let newAreas: AreaData = [];
    const alphabets = getAlphabets(e.target.value);

    // 지금 선택한 알파뱃이 이전 선택한 알파벳보다 크면
    alphabets.forEach((alphabet) => {
      const inIncludeAlphabet = eventDetails.areaClassifications.find(
        ({ area }) => area === alphabet
      );
      const initAreaValue = { area: alphabet, maxNumber: 0 };
      newAreas.push(inIncludeAlphabet ? inIncludeAlphabet : initAreaValue);
    });

    setEventDetails({
      ...eventDetails,
      areaClassifications: newAreas,
    });
  };

  const changeNumber = (e: any) => {
    setMaxNumber(e.target.value);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", eventDetails.name);
    formData.append("location", eventDetails.location);
    formData.append("description", eventDetails.description);
    mainImage && formData.append("mainImage", mainImage);
    formData.append("openDate", eventDetails.openDate);
    formData.append("closeDate", eventDetails.closeDate);
    formData.append(
      "boothRecruitmentStartDate",
      eventDetails.boothRecruitmentStartDate
    );
    formData.append(
      "boothRecruitmentEndDate",
      eventDetails.boothRecruitmentEndDate
    );
    formData.append("layoutType", eventDetails.layoutType);

    layoutImages.forEach((image) => {
      formData.append(`layoutImages`, image);
    });

    eventDetails.areaClassifications.forEach((areaClassification) => {
      formData.append("areaClassifications", areaClassification.area);
      formData.append("areaMaxNumbers", `${areaClassification.maxNumber}`);
    });

    fetch("http://52.79.91.214:8080/events", {
      method: "POST",
      body: formData,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjEwLCJpYXQiOjE3MTcwNjI2NTcsImV4cCI6MTcxNzE0OTA1N30.qns-mRMIh-O70UEM2pZvTn2Faf2FDmvWQerzwiFq2EI",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form className="flex min-h-screen justify-center" onSubmit={onSubmit}>
      <div className="w-full max-w-screen-lg border h-full p-10">
        <h2>행사 등록</h2>
        <div className="flex flex-col mt-5">
          <span className="bg-blue-400 w-fit p-1 rounded-t">
            행사 정보 입력
          </span>
          <div className="w-full border border-blue-400 p-10 flex flex-col gap-5">
            <EventFormInput
              placeholder="행사명"
              onChange={handleChange}
              name="name"
            />
            <EventFormInput
              placeholder="장소"
              onChange={handleChange}
              name="location"
            />
            <EventFormInput
              placeholder="설명"
              onChange={handleChange}
              name="description"
            />

            <input type="file" name="mainImage" onChange={handleImageChange} />

            <EventFormInput
              placeholder="시작날짜"
              onChange={handleChange}
              name="openDate"
              DateInput
            />
            <EventFormInput
              placeholder="마감날짜"
              onChange={handleChange}
              name="closeDate"
              DateInput
            />
            <EventFormInput
              placeholder="부스 모집 시작날짜"
              onChange={handleChange}
              name="boothRecruitmentStartDate"
              DateInput
            />
            <EventFormInput
              placeholder="부스 모집 마감날짜"
              onChange={handleChange}
              name="boothRecruitmentEndDate"
              DateInput
            />
          </div>
        </div>
        <div className="flex flex-col mt-10">
          <span className="bg-blue-400 w-fit p-1 rounded-t">
            행사 배치도 입력
          </span>

          {/* 이미지 첨부 */}

          <div className="w-full border border-blue-400 p-10 flex flex-col gap-5">
            <input
              type="file"
              name="layoutImages"
              multiple
              onChange={handleLayoutImagesChange}
            />

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
                    setMaxNumber(1);
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
              handleAreaTableChange={handleAreaTableChange}
            />

            <button className="w-44 mx-auto bg-blue-500 rounded-md p-2 text-3xl text-white">
              등록
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

/*
행사 상태변경API
fetch("http://52.79.91.214:8080/admin/events/5/status", {
      method: "PUT",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE2LCJpYXQiOjE3MTc1MDA4NzAsImV4cCI6MTcxNzU4NzI3MH0.SFuRQZ_xk8u-CyNRYkrXBu1nU9dx9eoxkdDPltC7ug4",
      },
    body:JSON.stringify({"status" : "APPROVE"})
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

  행사 신청목록 API
  fetch("http://52.79.91.214:8080/admin/events?page=0&status=all", {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjE2LCJpYXQiOjE3MTc1MDA4NzAsImV4cCI6MTcxNzU4NzI3MH0.SFuRQZ_xk8u-CyNRYkrXBu1nU9dx9eoxkdDPltC7ug4",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
 
 */