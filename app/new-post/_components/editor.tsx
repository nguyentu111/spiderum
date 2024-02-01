"use client";
import EditorJS from "@editorjs/editorjs";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { notoSerif } from "@/app/fonts";

export const Editor = () => {
  const ref = useRef<EditorJS>();
  const refDiv = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const initializeEditor = async () => {
    // const setData = useEditor((state) => state.setData);
    const EditorJS = (await import("@editorjs/editorjs")).default;
    // @ts-ignore
    const Quote = (await import("@editorjs/quote")).default;
    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          quote: Quote,
        },
        placeholder: "Nội dung bài viết",
      });
      ref.current = editor;
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true);
    }
  }, []);
  useEffect(() => {
    const init = async () => {
      await initializeEditor();
    };
    if (isMounted) {
      init();
      return () => {
        if (ref.current) ref.current.destroy();
      };
    }
  }, [isMounted]);
  const save = async () => {
    if (ref.current) {
      const output = await ref.current.save();
    }
  };
  return (
    <>
      <div
        ref={refDiv}
        id="editorjs"
        className={cn(
          "prose max-w-full min-h-screen text-18",
          notoSerif.className
        )}
      ></div>
    </>
  );
};
