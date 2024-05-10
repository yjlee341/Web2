import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

interface loginData {
  email: string;
  password: string;
}

const fetchLogin = (loginData: loginData) => {
  const response = fetch(
    "https://dbe5fa4c-8754-4548-a440-4d22b98d7740.mock.pstmn.io",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    }
  ).then((response) => {
    if (!response.ok) throw new Error("err");
  });
  return response;
};

export const useLoginUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useMutation({
    mutationFn: () => fetchLogin({ email, password }),
    onError() {
      alert("아이디나 비밀번호를 잘못 입력하였습니다.");
    },
  });

  return { mutate, email, setEmail, password, setPassword };
};
