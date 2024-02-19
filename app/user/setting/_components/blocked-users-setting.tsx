import { Button } from "@/components/ui/button";
import Image from "next/image";

export const BlockedUserSetting = () => {
  return (
    <div className="">
      <h4 className="font-bold text-20">Danh sách người dùng bị chặn</h4>
      <ul>
        <li>
          <div className="mt-6 flex items-center">
            <Image
              src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
              alt=""
              width={56}
              height={56}
              className="rounded-full lg:w-14 lg:h-14 w-10 h-10"
            />
            <div className="mx-2.5">
              <div className="font-semibold lg:text-20 text-base">pinkpig</div>
              <div className="text-gray-400 lg:text-base text-sm">
                @thesunsetisbeautiful
              </div>
            </div>
            <div className="ml-auto">
              <Button variant={"secondary"}>Bỏ chặn</Button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
