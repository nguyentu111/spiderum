"use client";
import { TriangleDown } from "@/components/icons/TriangleDown";
import { TriangleUp } from "@/components/icons/TriangleUp";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { CommentReplyForm } from "./comment-reply-form";
import { useToggle } from "usehooks-ts";

export const CommentNode = () => {
  const [open, toggleOpen] = useToggle(false);

  return (
    <div className="flex flex-col mb-4">
      <div className="flex">
        <Image
          src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12"
        />
        <div>
          <div className="flex ml-4 mb-2 flex-col">
            <div className="font-semibold">pinkpig</div>
            <div className="text-gray-400 text-[13px]">Hôm qua</div>
          </div>
          <div className="mt-4 mb-1.5 -ml-12 whitespace-pre-wrap break-words">
            Tóm tắt xã hội trong 1 câu nói của Adam Smith như sau: &quot;Thái
            độ, văn hóa tôn sùng sự giàu có nói chung và người giàu nói riêng,
            từ đó dẫn đến thái độ coi thường hay thậm chí là bỏ mặc người nghèo
            khó, là nguyên nhân lớn nhất và phổ biến nhất dẫn đến sự băng hoại
            đạo đức xã hội.&quot; Chúng ta dẫn dắt xã hội theo hướng nào thì kết
            quả xã hội sẽ lãnh hậu quả theo hướng đó thôi. Đây không chỉ là vấn
            đề đạo đức lối sống, nó là vấn đề tồn vong của xã hội.
          </div>
          <div className="flex items-center mt-2 -ml-10 mb-4 text-gray-600/75">
            <button className="my-2 text-[rgba(113,128,150,1)]">
              <TriangleUp width={17} height={15} viewBox="0 0 17 15" />
            </button>
            <span className="font-bold mx-2">4</span>
            <button className="my-2 text-[rgba(113,128,150,1)]">
              <TriangleDown width={17} height={15} viewBox="0 0 17 15" />
            </button>
            <button
              className="ml-4 cursor-pointer hover:text-black text-14 select-none"
              onClick={toggleOpen}
            >
              Trả lời
            </button>
          </div>
          {/* action reply */}
        </div>
      </div>
      {open && (
        <div className="ml-6 pl-4 border-l-[3px] border-gray-700/10">
          <CommentReplyForm />
        </div>
      )}
      <div className="mt-2 mr-0 mb-2 ml-6 pl-4 border-l-[3px] border-gray-700/10">
        {/* <ChildComment /> */}
      </div>
    </div>
  );
};
