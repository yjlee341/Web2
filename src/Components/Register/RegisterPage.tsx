import RegisterInput from "./RegisterInput";
import { useRegisterUser } from "../../Hooks/useRegister";
import { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickName] = useState("");
  const [name, setName] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const { mutate } = useRegisterUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = { email, password, name, nickname };
      mutate(data);
      console.log("보내짐");
    } catch (error) {
      console.error("뭔가 문제가 발생함", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-1/2 h-full justify-center items-center shadow-md border-black">
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <RegisterInput
            label="이메일"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="text"
            value={email}
            setValue={setEmail}
          />
          <RegisterInput
            label="닉네임"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="text"
            value={nickname}
            setValue={setNickName}
          />
          <RegisterInput
            label="이름"
            placeholder="예약 기능을 이용할 때 사용될 이름을 입력해주세요."
            type="text"
            value={name}
            setValue={setName}
          />
          <RegisterInput
            label="비밀번호"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="password"
            value={password}
            setValue={setPassword}
          />
          <RegisterInput
            label="비밀번호 확인"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="password"
            value={passwordCheck}
            setValue={setPasswordCheck}
          />
          <input
            type="submit"
            value="회원가입"
            className="hover:cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
