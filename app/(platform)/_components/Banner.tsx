import { roboto } from "@/app/fonts";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BannerImage } from "./banner-image";

export const Banner = () => {
  return (
    <div className="w-full relative   lg:h-[55vh] bg-no-repeat flex bg-cover lg:min-h-[515px] h-[312px] md:h-[490px]">
      <BannerImage />
      <Container className="z-20">
        <div className="md:max-w-[60%]">
          <h1
            className={cn(
              roboto.className,
              "text-2xl md:text-4xl lg:text-[56px] mb-4 lg:leading-[62px] font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#262443] to-[#2a99d5]"
            )}
          >
            Góc nhìn đa chiều của thế hệ trẻ Việt Nam
          </h1>
          <div
            className={cn(
              "text-base md:text-lg lg:text-[1.875rem] mb-4 ld:leading-[42px] font-normal ",
              roboto.className
            )}
          >
            Viết - Chia sẻ - Kết nối - Chiêm nghiệm <br />
            Tất cả tại Spiderum
          </div>
          <Button
            variant={"outline"}
            className="px-[50px] py-[9px] rounded-full"
            size={"lg"}
          >
            Đăng bài viết
          </Button>
        </div>
      </Container>
    </div>
  );
};
