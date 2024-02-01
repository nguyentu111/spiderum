import Image from "next/image";
import { Container } from "../container";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

export const Footer = () => {
  return (
    <div
      className="lg:mt-12 lg:py-8 lg:px-4 border-t border-[var(--common-border-color)] p-6 mt-12 px-4"
      style={{
        boxShadow:
          " 0 10px 15px -3px rgba(var(--blue-500),.05),0 4px 6px -2px rgba(var(--blue-500),.025)!important",
      }}
    >
      <div className="px-4 mx-auto ">
        <Container>
          <div className="lg:pb-4 flex items-center flex-wrap ">
            <Logo />
            <div className="lg:ml-[10%] lg:w-auto w-full ml-0 flex gap-6 text-12 font-bold items-center">
              <a href="https://aboutus.spiderum.com/">LIÊN HỆ</a>
              <a href="https://aboutus.spiderum.com/dieu-khoan">
                ĐIỀU KIỆN SỬ DỤNG
              </a>
            </div>
            <div className="ml-auto lg:w-auto lg:ml-auto flex flex-wrap gap-4 items-center pb-4 items-center">
              <span className="text-gray-400 text-xs">Tải app spiderum</span>
              <div className="flex gap-2">
                <a href="https://b.link/Spiderum-App-iOS">
                  <Image
                    width={122}
                    height={37}
                    className="w-[122px] h-[37.05px]"
                    src="https://spiderum.com/assets/icons/appstore-badge.svg"
                    alt="appstore"
                  />
                </a>
                <a href="https://b.link/Spiderum-App-Android">
                  <Image
                    width={122}
                    height={37}
                    className="w-[122px] h-[37.05px]"
                    src="https://spiderum.com/assets/icons/ggplay-badge.svg"
                    alt="ggplay"
                  />
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
