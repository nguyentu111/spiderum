"use client";
import { cn } from "@/lib/utils";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import { notoSerif } from "@/app/fonts";
import { uploadFile, uploadFileByUrl } from "@/actions/uploadFile";
import {
  Dispatch,
  SetStateAction,
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  useChoosingCategories,
  useChoosingSerie,
  useChossingTags,
} from "@/global-state";
export type EditorHandle = {
  getContent: () => Promise<{
    content: OutputData;
    thumbnail: string | undefined;
    categories: string[];
    tags: string[];
    series: string | undefined;
  } | null>;
};
interface Props {
  onChange?: () => void;
  defaultData?: OutputData;
}
export const Editor = forwardRef<EditorHandle, Props>(
  ({ onChange, defaultData }, ref) => {
    // const [chossingSetrie] = useChossingSerie();
    const [series] = useChoosingSerie();
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
                  async uploadByFile(file: File) {
                    const formData: FormData = new FormData();
                    formData.append("image", file);
                    const rs = (await uploadFile(formData)) as any;
                    // if (featureImg === "") setFeatureImg(rs?.file?.url || "");
                    return rs;
                  },
                  async uploadByUrl(url: string) {
                    return uploadFileByUrl(url).then((result) => {
                      console.log(result);
                      return {
                        success: 1,
                        file: {
                          url: result.secure_url,
                        },
                      };
                    });
                  },
                },
              },
            },
          },
          placeholder: "Nội dung bài viết",
          onChange,
          data: defaultData,
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
          const thumbnail = output.blocks.find(
            (block) => block.type === "image"
          )?.data.file.url as string | undefined;
          const data = {
            content: output,
            thumbnail,
            categories: categories.map((c) => c.id),
            tags: tags.map((t) => t.id),
            series: series,
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
  }
);
