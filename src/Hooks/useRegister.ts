import { useMutation } from "@tanstack/react-query";

interface registerData {
  email: string;
  name: string;
  nickname: string;
  password: string;
}

const registerUser = async (registerData: registerData): Promise<void> => {
  const response = await fetch(
    "https://dbe5fa4c-8754-4548-a440-4d22b98d7740.mock.pstmn.io",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerData),
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export function useRegisterUser() {
  return useMutation({ mutationFn: registerUser });
}
