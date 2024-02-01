"use client";

import { FormEvent, useRef, useState } from "react";

export const CommentForm = () => {
  const [text, setText] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);

  const handleChange = (e: FormEvent<HTMLDivElement>) => {
    setText(e.currentTarget.textContent as string);
    if (ref.current)
      if (e.currentTarget.textContent != "") {
        ref.current.dataset.placeholder = "";
      } else
        ref.current.dataset.placeholder = "Cảm nghĩ của bạn về bài viết này...";
  };
  return (
    <form className="flex relative py-4 border-b border-[var(--common-border-color)] -mt-4 mb-1">
      <div
        ref={ref}
        onInput={handleChange}
        contentEditable
        data-placeholder="Cảm nghĩ của bạn về bài viết này..."
        className="min-h-12 outline-none resize-none w-full relative before:content-[attr(data-placeholder)] before:text-gray-400"
      ></div>
      <button className="ml-2 px-2 py-1 h-fit hover:text-blue-500 hover:bg-gray-100 rounded transition-all">
        Gửi
      </button>
    </form>
  );
};
