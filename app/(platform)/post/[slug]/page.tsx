import Link from "next/link";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ThreeDots } from "@/components/icons/ThreeDots";
import { PostContent } from "./_components/post-content";
import { Stickybar } from "./_components/sticky-bar";
import { TriangleUp } from "@/components/icons/TriangleUp";
import { TriangleDown } from "@/components/icons/TriangleDown";
import { FacebookCircle } from "@/components/icons/FacebookCircle";
import { Bookmark } from "@/components/icons/Bookmark";
import { Button } from "@/components/ui/button";
import { PostCarousel } from "@/components/post-carousel";
import { Comments } from "./_components/comments";
import { montserrat } from "@/app/fonts";
export default function PostPage() {
  return (
    <div className="text-14 leading-[1.5385615384] bg-white flex flex-col items-center min-h-[80vh]">
      <div className="py-[15px] px-[10px] mt-2 xl:w-[700px] lg:w-[650px] md:w-[600px] w-full">
        <div className="text-gray-600 mt-6 mb-1.5">
          <Link
            href="/category/quandien-tranhluan"
            className=" hover:underline"
          >
            Quan điểm - Tranh luận
          </Link>
        </div>
        <h1
          className={cn(
            "md:text-[42px] md:leading-[58px] text-gray-800",
            montserrat.className
          )}
        >
          Bàn về chuyện cô Á hậu tham mưu giúp nền kinh tế Việt Nam
        </h1>
        <div className="my-1">
          <p className="italic text-16 text-gray-500 break-words">
            Từ việc cô á hậu hiến kế cho nước nhà tới chuyện các chị em thoải
            mái lên tiktok để đòi hỏi và thể hiện cái tôi.
          </p>
        </div>
        <div className="mt-6 flex items-center">
          <Image
            src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
            alt=""
            width={56}
            height={56}
            className="rounded-full"
          />
          <div className="mx-2.5">
            <div className="font-semibold">pinkpig</div>
            <div className="text-gray-400 text-[13px]">Hôm qua</div>
          </div>
          <div className="ml-auto">
            <ThreeDots />
          </div>
        </div>
      </div>
      <div className="my-2.5 min-h-screen max-w-screen w-full">
        <PostContent />
        <Stickybar />
      </div>
      <div className="py-[15px] px-[10px] mb-5 xl:w-[700px] lg:w-[650px] md:w-[600px] w-full flex items-center justify-between border-b border-[#e3ebf6]">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <button className="my-2 text-[rgba(113,128,150,1)]">
              <TriangleUp width={17} height={15} viewBox="0 0 17 15" />
            </button>
            <span className="font-bold mx-2">4</span>
            <button className="my-2 text-[rgba(113,128,150,1)]">
              <TriangleDown width={17} height={15} viewBox="0 0 17 15" />
            </button>
          </div>
          <div className="text-center before:content-['·'] before:mx-2 text-gray-500">
            540 lượt xem
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <FacebookCircle
              size={25}
              viewBox="0 0 500 500"
              className="text-[var(--facebook-logo-color)]"
            />
          </button>
          <button>
            <Bookmark size={24} viewBox="0 0 500 500" />
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center p-4 gap-4 flex-col lg:justify-between lg:p-0 lg:flex-row lg:items-start xl:w-[700px] lg:w-[650px] md:w-[600px]">
        <div className="lg:mr-2.5 mb-2.5s lg:flex-1 w-full pb-4 rounded">
          <div className="flex">
            <Image
              src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
              alt=""
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="mx-2.5">
              <div className="font-semibold">pinkpig</div>
              <div className="text-gray-400 text-[13px]">Hôm qua</div>
            </div>
            <div className="ml-auto">
              <Button variant={"secondary"} className="rounded">
                Follow
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between lg:flex-1 pb-4 w-full rounded">
          <div>
            <Link className="" href={"/category/quandiem-tranhluan"}>
              <strong>Quan điểm - Tranh luận</strong>
            </Link>
            <p className="text-xs text-gray-500">/quan-diem-tranh-luan</p>
          </div>
          <Button variant={"secondary"} className="rounded">
            Follow
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[750px] lg:w-[900px] mb-6">
        <div className="my-6">
          <strong>Bài viết nổi bật</strong>
        </div>
        <PostCarousel />
      </div>
      <div className=" xl:w-[700px] lg:w-[768px] xs:w-[640px] w-full">
        <Comments />
      </div>
    </div>
  );
}
