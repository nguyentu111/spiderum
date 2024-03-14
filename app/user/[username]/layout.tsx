import { auth } from "@/auth";
import { BackToTop } from "@/components/backtotop";
import { Container } from "@/components/container";
import { Footer } from "@/components/patials/footer";
import { Header } from "@/components/patials/header";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "./_component/menu";
import Tabs from "./_component/tabs";
import { getUser, getPosts } from "@/lib/queries";
import { PaginatedReponse, Post, User } from "@/types";
import { notFound } from "next/navigation";

interface NewPostLayoutProps {
  children: React.ReactNode;
  params: {
    username: string;
  };
}
export default async function NewPostLayout({
  children,
  params: { username },
}: NewPostLayoutProps) {
  const session = await auth();
  const user = session?.user;
  const [postsRs, userRs] = await Promise.all([
    getPosts({ username }),
    getUser(username),
  ]);

  if (userRs.status === 404 || postsRs.status === 404) return notFound();
  const [userPosts, userData]: [PaginatedReponse<Post>, User] =
    await Promise.all([postsRs.json(), userRs.json()]);
  return (
    <>
      <Header
        hasShadow
        hasEmptySection
        hasSearch
        hasMessage
        hasNewPostBtn
        user={session?.user}
      />
      <div className="flex">
        <div className="lg:bg-[var(--profile-bg-color)] flex-1"></div>
        <Container className="md:px-0">
          <div className="lg:grid gap-[1.2rem] lg:grid-cols-4">
            <div className="w-full px-4 pb-4 bg-[var(--profile-bg-color)] ">
              <div className="flex justify-center">
                <Image
                  src={userData.avatar_url!}
                  alt={userData.alias!}
                  width={142}
                  height={142}
                  className="md:w-36 md:h-36  w-32 h-32 rounded-full flex-shrink-0 border border-[#dcdfe5] -mt-[60px] relative"
                />
              </div>
              <div className="max-w-[260px] mx-auto">
                <div className="mt-3">
                  <h1>
                    <Link
                      href={`/user/${username}`}
                      className="text-18 font-bold text-[rgb(74,85,104)]"
                    >
                      {userData.alias}
                    </Link>
                  </h1>
                  <div className="text-14 fon">
                    <Link
                      href={`/user/${username}`}
                      className="text-14  text-[rgb(160,174,192)]"
                    >
                      {userData.username}
                    </Link>
                  </div>
                </div>
                {user?.username === userData.username && (
                  <Button variant={"secondary"} className="rounded mt-3 w-full">
                    <Link href="/user/setting">Chỉnh sửa trang cá nhân</Link>
                  </Button>
                )}

                <div className="mt-3 flex justify-between">
                  <div className="flex flex-col">
                    <div className="font-bold">{0}</div>
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
                <Tabs
                  postsCount={userPosts.data.total}
                  username={username}
                  isLoggedUser={user?.username === username}
                />
                {user?.username === userData.username && <Menu />}
              </div>
              {/* tab content */}

              <div className="">{children}</div>
            </div>
          </div>
        </Container>
        <div className="flex-1"></div>
      </div>
      <Footer />
      <BackToTop />
    </>
  );
}
