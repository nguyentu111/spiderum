"use client";
import { cn } from "@/lib/utils";
import EditorJS from "@editorjs/editorjs";
import { notoSerif } from "@/app/fonts";
import { uploadFile } from "@/actions/uploadFile";
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useChoosingCategories, useChossingTags } from "@/global-state";
export const Editor = forwardRef((props, ref: any) => {
  // const [chossingSetrie] = useChossingSerie();
  const [categories] = useChoosingCategories();
  const [tags] = useChossingTags();
  const editorRef = useRef<EditorJS>();
  const [isMounted, setIsMounted] = useState(false);

  const initializeEditor = async () => {
    // const setData = useEditor((state) => state.setData);
    const EditorJS = (await import("@editorjs/editorjs")).default;
    // @ts-ignore
    const Quote = (await import("@editorjs/quote")).default;
    // @ts-ignore
    const Link = (await import("@editorjs/link")).default;
    // @ts-ignore
    const Delimiter = (await import("@editorjs/delimiter")).default;
    // @ts-ignore
    const ImageTool = (await import("@editorjs/image")).default;
    if (!editorRef.current) {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          quote: Quote,
          link: Link,
          delimiter: Delimiter,
          image: {
            class: ImageTool,
            config: {
              uploader: {
                /**
                 * Upload file to the server and return an uploaded image data
                 * @param {File} file - file selected from the device or pasted by drag-n-drop
                 * @return {Promise.<{success, file: {url}}>}
                 */
                async uploadByFile(file: File) {
                  const formData: FormData = new FormData();
                  formData.append("image", file);
                  const rs = (await uploadFile(formData)) as any;
                  // if (featureImg === "") setFeatureImg(rs?.file?.url || "");
                  return rs;
                },
              },
            },
          },
        },
        placeholder: "Nội dung bài viết",
      });
      editorRef.current = editor;
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
        if (editorRef.current) editorRef.current.destroy();
      };
    }
  }, [isMounted]);
  useImperativeHandle(ref, () => ({
    getContent: async () => {
      if (editorRef.current) {
        const output = await editorRef.current.save();
        const thumbnail = output.blocks.find((block) => block.type === "image")
          ?.data.file.url;
        const data = {
          content: output,
          thumbnail,
          categories: categories,
          tags: tags,
        };
        return data;
      }
      return null;
    },
  }));
  return (
    <div
      id="editorjs"
      className={cn(
        "prose max-w-full min-h-screen text-18",
        notoSerif.className
      )}
    ></div>
  );
});
