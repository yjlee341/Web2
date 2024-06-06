import { BoothResponse } from "./Interfaces";
import { getAccessToken } from "../../../Api/Util/token";

export const fetchBooths = async (
  sliceNumber: number
): Promise<BoothResponse> => {
  const token = getAccessToken();
  const response = await fetch(
    `http://52.79.91.214:8080/booths?sliceNumber=${sliceNumber}`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
