import LoginInput from "./LoginInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLoginUser } from "../../Hooks/useLoginUser";

export default function LoginPage() {
  const navi = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate } = useLoginUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = { email, password };
      mutate(data);
      console.log("보내짐");
    } catch (error) {
      console.error("뭔가 문제가 발생함", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen font-light">
      <div className="flex flex-col w-1/2 h-full justify-center items-center shadow-md border-b-2 border-r-2 p-5">
        <h1>대충 로고</h1>
        <form className="flex flex-col w-1/2" onSubmit={handleSubmit}>
          <LoginInput
            type="text"
            placeholder="이메일을 입력해주세요."
            label="이메일"
            value={email}
            setValue={setEmail}
          />
          <LoginInput
            type="password"
            placeholder="비밀번호를 입력해주세요."
            label="비밀번호"
            value={password}
            setValue={setPassword}
          />
          <input
            type="submit"
            value="로그인"
            className="hover:cursor-pointer bg-[#0064FF] rounded-md text-white h-10 font-bold"
          />
          <button
            className="ml-auto border-black mt-1"
            onClick={() => {
              navi("/register");
            }}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
