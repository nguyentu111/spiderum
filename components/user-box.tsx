import { logout } from "@/actions/logout";
import { Bookmark } from "@/components/icons/Bookmark";
import { Draft } from "@/components/icons/Draft";
import { Gear } from "@/components/icons/Gear";
import { Logout } from "@/components/icons/Logout";
import { WirtePost } from "@/components/icons/WirtePost";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { getCsrfToken, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export const UserBox = () => {
  const { data: session } = useSession();
  const user = session?.user!;
  const searchParams = useSearchParams();
  return (
    <Popover key={searchParams.get("tab")}>
      <PopoverTrigger asChild>
        <button aria-label="Tài khoản">
          <div className="mx-1 nav-toggle relative flex items-center justify-center">
            <div
              className="mx-1 bg-cover bg-no-repeat mr-1.5 w-10 h-10 flex items-center justify-center rounded-full relative navbar-toggle"
              style={{
                backgroundImage: `url(${user.avatar_url})`,
              }}
            ></div>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverContent
        className="max-h-[calc(100vh-78px)] overflow-auto"
        side="bottom"
        align="end"
      >
        <div className="mx-2 p-2 flex  ">
          <Image
            src={user.avatar_url!}
            width={46}
            height={46}
            alt="avatar"
            className="mr-4 w-12 h-12 rounded"
          />
          <div>
            <span className="font-bold">{user.alias}</span>
            <div className="text-sm text-[rgba(var(--gray-600),.75)]">
              @{user.username}
            </div>
            <Button variant={"secondary"}>
              <Link href="/user/tunguyen123">Xem trang cá nhân</Link>
            </Button>
          </div>
        </div>
        <Separator />
        <div className="py-2">
          <PopoverClose asChild>
            <Link
              href="/user/tunguyen123"
              className="mx-2 p-2 rounded flex items-center cursor-pointer hover:bg-[var(--dropdown-item-hover-bg)]"
            >
              <WirtePost />
              <span className="m-2">Bài viết của tôi</span>
            </Link>
          </PopoverClose>
          <PopoverClose asChild>
            <Link
              href="/user/tunguyen123?tab=draft"
              className="mx-2 p-2 rounded flex items-center cursor-pointer hover:bg-[var(--dropdown-item-hover-bg)]"
            >
              <Draft />
              <span className="m-2">Nháp của tôi</span>
            </Link>
          </PopoverClose>

          <PopoverClose asChild>
            <Link
              href="/user/tunguyen123?tab=savedPosts"
              className="mx-2 p-2 rounded flex items-center cursor-pointer hover:bg-[var(--dropdown-item-hover-bg)]"
            >
              <Bookmark size={20} viewBox="0 0 500 500" />
              <span className="m-2">Đã lưu</span>
            </Link>
          </PopoverClose>

          <Link
            href="/user/setting"
            className="mx-2 p-2 rounded flex items-center cursor-pointer hover:bg-[var(--dropdown-item-hover-bg)]"
          >
            <Gear size={16} />
            <span className="m-2">Tùy chỉnh tài khoản</span>
          </Link>
        </div>
        <Separator />
        <div className="pt-2">
          <form
            // action={async () => {
            //   "use server";
            //   await signOut();
            // }}
            action={logout}
          >
            <button className="w-[calc(100%-16px)] mx-2 p-2 rounded flex items-center justify-start cursor-pointer hover:bg-[var(--dropdown-item-hover-bg)]">
              <Logout />
              <span className="m-2">Đăng xuất</span>
            </button>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};
