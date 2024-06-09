import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface BoothRegistData {
  linkedEvent: number;
  openTime: string;
  endTime: string;
  mainImage?: File | null;
  locations: number[];
  name: string;
  description: string;
  accountNumber: string;
  boothName: string;
}

const fetchSignUp = (boothRegistData: BoothRegistData): Promise<void> => {
  const response = fetch("http://52.79.91.214:8080/booths", {
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    body: JSON.stringify(boothRegistData),
  }).then((response) => {
    if (!response.ok) throw new Error("err");
    return response.json();
  });

  return response;
};

//TODO: linkedEvent : Props + location 분리

export const useRegisteBooth = (initBoothName?: string) => {
  const navi = useNavigate();
  const [description, setDescription] = useState("");
  const [linkedEvent, setLinkedEvent] = useState(0);
  const [openTime, setOpenTime] = useState("");
  const [mainImage, setMainImage] = useState<File | null>();
  const [locations, setLocations] = useState([1, 2, 3]);
  const [endTime, setEndTime] = useState("");
  const [name, setName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [boothName, setBoothName] = useState(initBoothName ?? "");
  const { mutate } = useMutation({
    mutationFn: () =>
      fetchSignUp({
        name,
        description,
        linkedEvent,
        openTime,
        endTime,
        accountNumber,
        locations,
        mainImage,
        boothName,
      }),

    onError: () => {
      alert("부스 신청에 실패했습니다.");
    },
    onSuccess: () => {
      alert("부스가 신청되었습니다.");
      navi("/");
    },
  });

  return {
    mutate,
    setName,
    setMainImage,
    setOpenTime,
    setEndTime,
    setDescription,
    setAccountNumber,
    boothName,
    setBoothName,
  };
};
