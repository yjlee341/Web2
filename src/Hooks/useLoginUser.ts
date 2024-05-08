import { useMutation } from "@tanstack/react-query";

interface loginData {
  email: string;
  password: string;
}

const loginUser = async (loginData: loginData): Promise<void> => {
  const response = await fetch(
    "https://dbe5fa4c-8754-4548-a440-4d22b98d7740.mock.pstmn.io",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export function useLoginUser() {
  return useMutation({ mutationFn: loginUser });
}
