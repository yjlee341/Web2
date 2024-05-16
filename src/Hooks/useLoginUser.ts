import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { setAccessToken } from "../Api/Util/token";

interface loginData {
  email: string;
  password: string;
}

interface Token {
  auth: string;
}

const fetchLogin = (loginData: loginData): Promise<Token> => {
  const response = fetch(
    "https://bbf17e96-e094-43ee-9957-471b288f2aac.mock.pstmn.io/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    }
  ).then((response) => {
    if (!response.ok) throw new Error("err");
    return response.json();
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
    onSuccess: (data: Token) => {
      setAccessToken(data.auth);
    },
  });

  return { mutate, email, setEmail, password, setPassword };
};
