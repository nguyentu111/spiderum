import { Bookmark } from "@/components/icons/Bookmark";
import { ThreeDots } from "@/components/icons/ThreeDots";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface CardVerticalProps {
  showCategory?: boolean;
}
export const CardVertical = ({ showCategory }: CardVerticalProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Link href="/post/Cafein-va-Bieu-tinh-o-Phap-2-ly-ca-phe-moi-ngay-va-1-giac-ngu-kem-chat-luong-NTLWezQ8fNoj">
        <Image
          src={
            "https://images.spiderum.com/sp-thumbnails/341857b0ac9111eeabed5537d8e13793.png"
          }
          alt=""
          width={400}
          height={300}
          className="rounded"
        />
      </Link>
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex items-center">
            <Link
              href="/category"
              className="relative uppercase dot-after text-12  after:absolute after:w-1 after:h-1 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-[0.7rem]  after:bg-[#c4c4c4] mr-4"
            >
              QUAN ĐIỂM - TRANH LUẬN
            </Link>
            <div className="flex items-start text-[12px] text-[#909399]">
              14 phút đọc
            </div>
          </div>
          <Button variant={"ghost"} className="flex items-center h-[25px] p-0">
            <Bookmark size={20} viewBox="0 0 18 24" />
            {/* <ThreeDots
              width={4}
              height={16}
              viewBox="0 0 4 16"
              className="w-4 cursor-pointer h-full"
            /> */}
          </Button>
        </div>
        <div className="mb-2">
          <div className="mt-2   ">
            <Link href="/post/Cafein-va-Bieu-tinh-o-Phap-2-ly-ca-phe-moi-ngay-va-1-giac-ngu-kem-chat-luong-NTLWezQ8fNoj">
              <h2 className="h-[60px] line-clamp-2 font-semibold mb-2 sm:text-[18px] text-ellipsis overflow-hidden">
                Cafein và Biểu tình ở Pháp. HAI ly cà phê mỗi ngày bằng MỘT giấc
                ngủ kém chất lượng.
              </h2>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <Link href="/" className="mr-3">
          <Image
            src="https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg"
            alt=""
            width={24}
            height={24}
            className="rounded-full"
          />
        </Link>
        <Link href="/" className="text-[14px] font-semibold">
          Limitless
        </Link>
        <div className="ml-4 text-[12px] text-[#909399] relative before:absolute before:w-1 before:h-1 before:rounded-full before:top-1/2 before:-left-2  before:bg-[#c4c4c4]">
          6 Th1
        </div>
      </div>
    </div>
  );
};
