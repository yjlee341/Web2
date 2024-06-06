import React from "react";
import { getAccessToken } from "../Api/Util/token";

export default function CheckLogin({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoggedIn = !!getAccessToken();

  if (!isLoggedIn) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2>로그인 후 이용해주세요.</h2>
      </div>
    );
  }

  return <>{children}</>;
}
