"use client";
import { useEffect, useState } from "react";
import { ChevronUp } from "./icons/ChevronUp.tsx";
import { cn } from "@/lib/utils";

export const BackToTop = () => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY > 700) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <button
      onClick={handleClick}
      className={cn(
        "text-white flex items-center justify-center  bg-[#2fb5fa] rounded-full h-12 w-12 fixed right-[5%] z-[9999] transition-transform duration-200 ease-in-out bottom-16 ",
        showButton ? "" : "scale-0"
      )}
    >
      <ChevronUp width={16} height={11} viewBox="0 0 16 11" />
    </button>
  );
};
