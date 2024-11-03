"use client";

import Navbar from "@/components/layouts/Navbar";
import { useDarkMode } from "@/context/DarkModeContext";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`h-screen flex ${
        isDarkMode ? "dark:bg-dark-Grey_Darken_5" : "bg-white"
      }`}
    >
      <div className="flex flex-col flex-1">
        {/* 네비게이션 바 */}
        <Navbar /> {/* isDarkMode는 Navbar에서 사용할 수 있음 */}
        {/* 컨텐츠 영역 */}
        <div className="flex-1 overflow-auto flex flex-col mb-4">
          {children}
        </div>
      </div>
    </div>
  );
}