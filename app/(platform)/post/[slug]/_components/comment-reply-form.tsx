"use client";
import { Button } from "@/components/ui/button";
import { ElementRef, FormEvent, useRef, useState } from "react";

export const CommentReplyForm = () => {
  const [reply, setReply] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: FormEvent<HTMLDivElement>) => {
    setReply(e.currentTarget.textContent as string);
    if (ref.current)
      if (e.currentTarget.textContent != "") {
        ref.current.dataset.placeholder = "";
      } else
        ref.current.dataset.placeholder = "Cảm nghĩ của bạn về comment này...";
  };
  return (
    <div className="">
      <form className="flex relative py-4 border-b border-[var(--common-border-color)] -mt-4 ">
        <div
          ref={ref}
          onInput={handleChange}
          contentEditable
          className="min-h-[30px] outline-none resize-none w-full relative before:content-[attr(data-placeholder)] before:text-gray-400"
          data-placeholder="Cảm nghĩ của bạn về comment này..."
        ></div>
        <Button
          className="ml-2 px-2 py-1 h-fit hover:bg-none"
          variant={"ghost"}
        >
          Trả lời
        </Button>
      </form>
    </div>
  );
};
