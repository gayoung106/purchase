"use client";

import colors from "@/styles/colors";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import Toast, { ToastType } from "@/components/commons/Toast";
import { useDarkMode } from "@/context/DarkModeContext";
import Label from "@/components/ui/atoms/label/Label";
import LabelInput from "@/components/ui/molecules/inputs/LabelInput";
import Button from "@/components/ui/atoms/button/Button";

const LoginBody = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { isDarkMode } = useDarkMode();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 로그인 로직 (예시)
    if (employeeId === "user" && password === "password") {
      localStorage.setItem("user", JSON.stringify({ employeeId }));
      Toast.notify("로그인에 성공했습니다!", ToastType.SUCCESS);
      router.push("/main"); // 로그인 성공 시 홈으로 리다이렉트
    } else {
      Toast.notify("아이디 혹은 비밀번호를 확인해주세요.", ToastType.ERROR);
    }

    /** api 방식 로그인 구현 */
    // try {
    //   const response = await fetch('/api/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ employeeId, password }),
    //   });

    //   if (!response.ok) {
    //     throw new Error('로그인 실패!');
    //   }

    //   const data = await response.json();
    //   localStorage.setItem('token', data.token); // JWT 토큰 저장
    //   router.push('/tender'); // 로그인 성공 시 홈으로 리다이렉트
    // } catch (error) {
    //   alert(error.message);
    // }
  };

  return (
    <div
      style={{ backgroundColor: colors.signature }}
      className="flex items-center justify-center h-screen shadow-lg"
    >
      <form
        onSubmit={handleSubmit}
        className="space-y-4 w-96 py-12 px-6 rounded-3xl"
        style={{ backgroundColor: colors.white }}
      >
        <div
          className="flex justify-center border rounded-3xl w-[70%] mx-auto shadow-lg"
          style={{ backgroundColor: colors.signature }}
        >
          <Label
            mode="lg"
            content="PURCHASE LOGIN"
            customStyle={{ color: colors.white, padding: "8px" }}
          />
        </div>
        <div className="py-16 flex flex-col">
          <div>
            <LabelInput
              labelMode="sm"
              labelContent="사원번호"
              labelColor="signature"
              labelFontWeight="bold"
              inputMode="sm"
              inputColor="Button_Default"
              inputType="text"
              placeholder="사원번호를 입력하세요"
              value={employeeId}
              onChange={(e) => setEmployeeId(e.target.value)}
              customStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                color: isDarkMode ? colors.signature : colors.signature,
              }}
            />
          </div>
          <div>
            <LabelInput
              labelMode="sm"
              labelContent="비밀번호"
              labelColor="signature"
              labelFontWeight="bold"
              inputMode="sm"
              inputColor="Button_Default"
              inputType="password"
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              customStyle={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            />
          </div>
        </div>
        <div className="flex justify-center pb-10">
          <Button
            mode="md"
            content="로그인"
            color="signature"
            type="submit"
            customStyle={{ borderRadius: "25px", width: "160px" }}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginBody;
