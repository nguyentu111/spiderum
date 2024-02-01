import { Bookmark } from "@/components/icons/Bookmark";
import { Chat } from "@/components/icons/Chat";
import { Triangle } from "@/components/icons/Triangle";
import { Button } from "@/components/ui/button";
import { cn, cutWords } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface CardHorizontalProps {
  avatarSize?: number;
  titleClass?: string;
  descriptionClass?: string;
  hasBookmarkBtn?: boolean;
}
export const CardHorizontal = ({
  avatarSize = 48,
  titleClass,
  descriptionClass,
  hasBookmarkBtn,
}: CardHorizontalProps) => {
  return (
    <div className="flex gap-5">
      <Link href="/post/Cafein-va-Bieu-tinh-o-Phap-2-ly-ca-phe-moi-ngay-va-1-giac-ngu-kem-chat-luong-NTLWezQ8fNoj">
        <Image
          src={
            "https://images.spiderum.com/sp-thumbnails/341857b0ac9111eeabed5537d8e13793.png"
          }
          alt=""
          width={400}
          height={300}
          className="rounded h-full object-cover"
        />
      </Link>
      <div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div className="uppercase text-[12px]">Khoa học - công nghê</div>
              <div className="ml-4 flex items-start text-[12px] text-[#909399] relative before:absolute before:w-1 before:h-1 before:rounded-full before:top-1/2 before:-left-2  before:bg-[#c4c4c4]">
                14 phút đọc
              </div>
            </div>
            <Button
              variant={"ghost"}
              className="flex items-center h-[25px] p-0"
            >
              <Bookmark size={20} viewBox="0 0 18 24" />
              {/* <ThreeDots
              width={4}
              height={16}
              viewBox="0 0 4 16"
              className="w-4 cursor-pointer h-full"
            /> */}
            </Button>
          </div>
          <div className="mb-4">
            <div className="mt-2">
              <Link href="/post/Cafein-va-Bieu-tinh-o-Phap-2-ly-ca-phe-moi-ngay-va-1-giac-ngu-kem-chat-luong-NTLWezQ8fNoj">
                <h2
                  className={cn(
                    "line-clamp-2 font-semibold mb-2 sm:text-[18px] text-ellipsis overflow-hidden ",
                    titleClass
                  )}
                >
                  ‘Lẽ sống’ - Chính thái độ nhìn cuộc sống sẽ quyết định cuộc
                  đời bạn
                </h2>
              </Link>
            </div>
            <div className={cn("text-[14px]", descriptionClass)}>
              {cutWords(
                "Lẽ sống là cuốn sách với ba bài diễn thuyết xoay quanh việc phân tích ý nghĩa cuộc đời trong những hoàn cảnh khác nhau",
                24
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="mr-3">
              <Image
                src="https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg"
                alt=""
                width={avatarSize}
                height={avatarSize}
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
          <div className="flex items-center gap-2">
            <span className="text-[12px] flex items-center">
              <Triangle width={17} height={15} viewBox="0 0 17 15" />
              <span className="ml-1">12</span>
            </span>
            <span className="text-[12px] flex items-center">
              <Chat size={17} />
              <span className="ml-1">12</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
