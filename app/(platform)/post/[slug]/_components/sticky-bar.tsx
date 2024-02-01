import { Bookmark } from "@/components/icons/Bookmark";
import { ChatSquare } from "@/components/icons/ChatSquare";
import { Share } from "@/components/icons/Share";
import { TriangleDown } from "@/components/icons/TriangleDown";
import { TriangleUp } from "@/components/icons/TriangleUp";
import { UserPlus } from "@/components/icons/UserPlus";
import Image from "next/image";
import Link from "next/link";
export const Stickybar = () => {
  return (
    <div
      className="flex flex-col fixed transition-opacity duration-200 ease-in-out items-center z-[99]"
      style={{ left: "calc((100% - 650px) / 2 - 14vw)", top: "20%" }}
    >
      <div className="mb-2 flex flex-col items-center justify-center ">
        <button className="my-2 text-[rgba(113,128,150,1)]">
          <TriangleUp />
        </button>
        <span className="my-2 font-bold">4</span>
        <button className="my-2 text-[rgba(113,128,150,1)]">
          <TriangleDown />
        </button>
        <div className="my-2 border-[4px] border-dashed rounded-full overflow-hidden ">
          <Link
            href="/user/abc"
            className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
          >
            <Image
              src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
              alt=""
              width={56}
              height={56}
              className=""
            />
          </Link>
        </div>
        <button className="-mt-[1.3rem] shadow-sm shadow-[#e8dede] h-5 w-5 rounded-full bg-white text-[rgb(113,128,150)] flex items-center justify-center">
          <UserPlus width={12} height={16} viewBox="0 0 640 512" />
        </button>
      </div>
      <div>
        <div className="h-8 my-4 flex flex-col items-center justify-between">
          <Bookmark size={25} viewBox="0 0 500 500" />
        </div>
        <div className="h-8 my-4 flex flex-col items-center justify-between">
          <ChatSquare
            width={18}
            height={19}
            viewBox="0 0 18 19"
            className="flex-shrink-0 text-[#718096]"
          />
          <span className="text-12 text-[#718096]">14</span>
        </div>
        <div className="h-8 my-4 flex flex-col items-center justify-between">
          <Share size={25} viewBox="0 0 48 48" className="text-[#718096]" />
        </div>
      </div>
    </div>
  );
};
