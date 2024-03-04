"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CategoryWithTag } from "@/types";
import { FormEvent, useRef, useState } from "react";
import { montserrat, notoSerif } from "../../fonts";
import { Editor } from "./editor";
import { NextStep } from "./next-step";
type Props = {
  categories: CategoryWithTag[];
};

export const NewPost = ({ categories }: Props) => {
  const refTitle = useRef<HTMLDivElement | null>(null);
  const refEditor = useRef<any>(null);

  const [title, setTitle] = useState("");
  const handleChange = (e: FormEvent<HTMLDivElement>) => {
    setTitle(e.currentTarget.textContent as string);
    if (refTitle.current)
      if (e.currentTarget.textContent != "") {
        refTitle.current.dataset.placeholder = "";
      } else refTitle.current.dataset.placeholder = "Tiêu đề bài viết.......";
  };
  const save = async () => {
    console.log({
      ...(await refEditor.current?.getContent()),
      title,
    });
  };
  return (
    <>
      <div className="my-2.5 w-full min-h-screen mt-16">
        <div className="py-[25px] px-[30px] w-full md:w-[600px] lg:w-[650px] xl:w-[700px] mx-auto leading-8">
          <div
            ref={refTitle}
            onInput={handleChange}
            contentEditable
            data-placeholder="Tiêu đề bài viết......."
            className={cn(
              montserrat.className,
              "text-[30px] leading-[3rem] mb-4 font-semibold outline-none before:content-[attr(data-placeholder)] relative  before:text-[#c4c4c4]"
            )}
          />

          <Editor ref={refEditor} />
        </div>
      </div>
      <div className="fixed bottom-4 left-1/2 py-2 px-4 -translate-x-1/2 flex z-20">
        <Button variant={"secondary"} className="mr-4 rounded">
          Đã lưu
        </Button>
        <NextStep categories={categories} save={save} />
      </div>
    </>
  );
};
