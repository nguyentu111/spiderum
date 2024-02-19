"use client";
import { cn } from "@/lib/utils";
import { notoSerif } from "@/app/fonts";
export const Editor = () => {
  return (
    <>
      <div
        id="editorjs"
        className={cn(
          "prose max-w-full min-h-screen text-18",
          notoSerif.className
        )}
      ></div>
    </>
  );
};
