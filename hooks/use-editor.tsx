import { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import { uploadFile } from "@/actions/uploadFile";

export const useEditor = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [featureImg, setFeatureImg] = useState("");

  const ref = useRef<EditorJS>();
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
    if (!ref.current) {
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
                  if (featureImg === "") setFeatureImg(rs?.file?.url || "");
                  return rs;
                },
              },
            },
          },
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
      console.log(output);
    }
  };
  return { ref, featureImg, save };
};
