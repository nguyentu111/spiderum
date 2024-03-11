import { notoSerif } from "@/app/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface BlockContext {
  id: string;
  type: "paragraph" | "quote" | "image";
  data: any;
}
export const PostContent = ({ data }: { data: string }) => {
  const blocks = JSON.parse(data).blocks as BlockContext[];
  return (
    <div
      className={cn(
        "flex justify-start flex-col items-start text-[19px] leading-8 ",
        notoSerif.className
      )}
    >
      {blocks.map((block) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={block.id}
                dangerouslySetInnerHTML={{ __html: block.data.text }}
                className="mb-4"
              ></p>
            );
          case "image":
            return (
              <div key={block.id} className="w-full relative overflow-hidden">
                <Image
                  src={block.data.file.url as string}
                  alt={block.data.caption}
                  className="object-contain"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            );
        }
      })}
    </div>
  );
};
