import RegisterInput from "./RegisterInput";

export default function RegisterPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col w-1/2 h-full justify-center items-center shadow-md border-black">
        <form className="flex flex-col">
          <RegisterInput
            label="이메일"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="text"
            value=""
          />
          <RegisterInput
            label="닉네임"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="text"
            value=""
          />
          <RegisterInput
            label="이름"
            placeholder="예약 기능을 이용할 때 사용될 이름을 입력해주세요."
            type="text"
            value=""
          />
          <RegisterInput
            label="비밀번호"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="password"
            value=""
          />
          <RegisterInput
            label="비밀번호 확인"
            placeholder="OpenBook에서 사용하실 이메일을 입력해주세요."
            type="password"
            value=""
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
