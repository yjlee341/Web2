import { useQuery } from "@tanstack/react-query";
import { getAccessToken } from "../Api/Util/token";

interface BoothData {
  id: number;
  name: string;
  openTime: string;
  closeTime: string;
  location: LocationData[];
  description: string;
  mainImageUrl: string;
}

interface LocationData {
  classification: string;
  number: string;
}

const fetchBoothData = (eventId: number): Promise<BoothData> => {
  const token = getAccessToken();
  const response = fetch(`http://52.79.91.214:8080/booths/${eventId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (!response.ok) throw new Error("err");
    return response.json();
  });
  return response;
};

export function useGetBoothDetail(eventId: number) {
  const { isLoading, isError, data } = useQuery<BoothData>({
    queryKey: ["getBoothDetail", eventId],
    queryFn: () => fetchBoothData(eventId),
  });
  console.log(data);
  return { isLoading, isError, data };
}
