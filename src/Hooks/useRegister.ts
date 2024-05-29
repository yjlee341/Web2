import { useMutation } from "@tanstack/react-query";

interface registerData {
  email: string;
  name: string;
  nickname: string;
  password: string;
}

const registerUser = async (registerData: registerData): Promise<void> => {
  const response = await fetch("http://52.79.91.214:8080/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerData),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};

export function useRegisterUser() {
  return useMutation({ mutationFn: registerUser });
}
