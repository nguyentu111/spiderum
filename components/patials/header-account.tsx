import { Feather } from "@/components/icons/Feather";
import { Mail } from "@/components/icons/Mail";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { UserBox } from "@/components/user-box";
import { BellBtn } from "./bell-btn";

interface HeaderAccountProps {
  hasMessage?: boolean;
  hasNewPostBtn?: boolean;
}
export const HeaderAccount = ({
  hasMessage,
  hasNewPostBtn,
}: HeaderAccountProps) => {
  return (
    <div className="flex items-center">
      {hasMessage && (
        <Button
          variant="ghost"
          size="lg"
          className="w-10  items-center justify-center mx-1 hidden md:flex"
          asChild
        >
          <Link href={"/message"} aria-label="Tin nhắn">
            <Mail
              className="text-gray-400"
              width={18}
              height={14}
              viewBox="0 0 18 14"
            />
          </Link>
        </Button>
      )}

      <BellBtn />
      {hasNewPostBtn && (
        <Button variant={"secondary"} size="lg" className="mx-1">
          <Link
            href="/new-post"
            className="flex items-center justify-center mx-1 "
            aria-label="Viết bài"
          >
            <Feather className="text-gray-400 mr-2 hidden md:block" size={16} />
            <span>Viết bài</span>
          </Link>
        </Button>
      )}
      <UserBox />
    </div>
  );
};
