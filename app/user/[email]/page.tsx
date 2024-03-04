import { Container } from "@/components/container";
import { Bookmark } from "@/components/icons/Bookmark";
import { Feather } from "@/components/icons/Feather";
import { Stack } from "@/components/icons/Stack";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "./_component/menu";
import { SavedPosts } from "./_component/saved-posts";
import { auth } from "@/auth";
import { Posts } from "./_component/posts";
import { Suspense } from "react";
import { Series } from "./_component/series";

interface UserPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export default async function UserPage({
  params,
  searchParams,
}: UserPageProps) {
  const session = await auth();
  const user = session?.user!;
  const tab = searchParams.tab;
  return (
    <div className="flex">
      <div className="lg:bg-[var(--profile-bg-color)] flex-1"></div>
      <Container className="md:px-0">
        <div className="lg:grid gap-[1.2rem] lg:grid-cols-4">
          <div className="w-full px-4 pb-4 bg-[var(--profile-bg-color)] ">
            <div className="flex justify-center">
              <Image
                src="https://www.gravatar.com/avatar/d8d6e65667fcdeca659355b80972658c?d=wavatar&f=y"
                alt=""
                width={142}
                height={142}
                className="md:w-36 md:h-36  w-32 h-32 rounded-full flex-shrink-0 border border-[#dcdfe5] -mt-[60px] relative"
              />
            </div>
            <div className="max-w-[260px] mx-auto">
              <div className="mt-3">
                <h1>
                  <Link
                    href={`/user/${user.alias ?? user.username}`}
                    className="text-18 font-bold text-[rgb(74,85,104)]"
                  >
                    {user.alias ?? user.username}
                  </Link>
                </h1>
                <div className="text-14 fon">
                  <Link
                    href={`/user/${user.user_info.email}`}
                    className="text-14  text-[rgb(160,174,192)]"
                  >
                    {user.user_info.email}
                  </Link>
                </div>
              </div>
              <Button variant={"secondary"} className="rounded mt-3 w-full">
                <Link href="/user/setting">Chỉnh sửa trang cá nhân</Link>
              </Button>
              <div className="mt-3 flex justify-between">
                <div className="flex flex-col">
                  <div className="font-bold">0</div>
                  <div className="text-14">followers</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">0</div>
                  <div className="text-14">following</div>
                </div>
                <div className="flex flex-col">
                  <div className="font-bold">0</div>
                  <div className="text-14">spiders</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 mt-4 px-4 flex flex-col gap-6">
            <div className="flex justify-between items-center border-b border-[var(--profile-tab-border-bottom-color)]">
              <div className="flex">
                <Link
                  href="/user/tunguyen123"
                  className={cn(
                    tab != "series" &&
                      tab != "savedPosts" &&
                      "border-b-2 border-[#3398d4] font-bold",
                    "flex items-center justify-center px-4 py-2 "
                  )}
                >
                  <Feather className="text-gray-400 mr-2" size={16} />
                  <span className="ml-2 whitespace-nowrap">Bài viết (0)</span>
                </Link>
                <Link
                  href="/user/tunguyen123?tab=series"
                  className={cn(
                    tab == "series" && "border-b-2 border-[#3398d4] font-bold",
                    "flex items-center justify-center px-4 py-2 "
                  )}
                >
                  <Stack className="text-gray-400 mr-2" size={16} />
                  <span className="ml-2">Series</span>
                </Link>
                <Link
                  href="/user/tunguyen123?tab=savedPosts"
                  className={cn(
                    tab == "savedPosts" &&
                      "border-b-2 border-[#3398d4] font-bold",
                    "items-center justify-center px-4 py-2 hidden md:flex"
                  )}
                >
                  <Bookmark
                    className="text-gray-400 mr-2"
                    size={18}
                    viewBox="0 0 500 500"
                  />
                  <span className="ml-2">Đã lưu</span>
                </Link>
              </div>
              <Menu />
            </div>
            {/* tab content */}

            <div className="">
              {!tab && (
                <Suspense fallback={<Posts.Skeleton />}>
                  <Posts />
                </Suspense>
              )}
              {tab == "series" && (
                <Suspense fallback={<Series.Skeleton />}>
                  <Series />
                </Suspense>
              )}
              {tab == "savedPosts" && <SavedPosts />}
              {tab == "comments" && <div>comments</div>}
              {tab == "followers" && <div>followers</div>}
              {tab == "following" && <div>following</div>}
              {tab == "draft" && <div>draft</div>}
            </div>
          </div>
        </div>
      </Container>
      <div className="flex-1"></div>
    </div>
  );
}
