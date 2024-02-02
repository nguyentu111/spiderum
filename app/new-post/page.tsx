"use client";
import { cn } from "@/lib/utils";
import { FormEvent, useRef, useState } from "react";
import { Editor } from "./_components/editor";
import { Button } from "@/components/ui/button";
import { NextStep } from "./_components/next-step";
import { montserrat } from "../fonts";

export const dynamic = "force-static";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: FormEvent<HTMLDivElement>) => {
    setTitle(e.currentTarget.textContent as string);
    if (ref.current)
      if (e.currentTarget.textContent != "") {
        ref.current.dataset.placeholder = "";
      } else ref.current.dataset.placeholder = "Tiêu đề bài viết.......";
  };
  return (
    <>
      <div className="my-2.5 w-full min-h-screen mt-16">
        <div className="py-[25px] px-[30px] w-full md:w-[600px] lg:w-[650px] xl:w-[700px] mx-auto leading-8">
          <div
            ref={ref}
            onInput={handleChange}
            contentEditable
            data-placeholder="Tiêu đề bài viết......."
            className={cn(
              montserrat.className,
              "text-[30px] leading-[3rem] mb-4 font-semibold outline-none before:content-[attr(data-placeholder)] relative  before:text-[#c4c4c4]"
            )}
          />
          <Editor />
        </div>
      </div>
      <div className="fixed bottom-4 left-1/2 py-2 px-4 -translate-x-1/2 flex z-20">
        <Button variant={"secondary"} className="mr-4 rounded">
          Đã lưu
        </Button>
        <NextStep />
      </div>
    </>
  );
}
