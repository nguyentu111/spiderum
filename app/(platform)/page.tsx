import Link from "next/link";
import { Container } from "@/components/container";
import { Feed } from "@/components/feed";

import { PopularBlogs } from "./_components/popular-blogs";
import { WriterContainer } from "./_components/writer-container";
import { CardVertical } from "../../components/post-card-1";
import { Banner } from "./_components/banner";
import { Categories } from "./_components/categories";
import {
  getCategories,
  getNewFeed,
  getNewTopWriter,
  getOldButGoldPost,
  getTopView,
} from "@/lib/queries";
import { auth } from "@/auth";
import { FeedSort } from "@/types";
import { redirect } from "next/navigation";
import { getRandomElementsFromArray } from "@/lib/utils";

export const dynamic = "force-dynamic";
export default async function HomePage({
  searchParams: { page_idx, sort },
}: {
  searchParams: { sort: FeedSort; page_idx: number };
}) {
  const session = await auth();
  if (!session?.user && sort === "follow") redirect("/?sort=top&page_idx=1");

  const [topViewPosts, newFeedPosts, categories, topWriter, oldButGoldPost] =
    await Promise.all([
      getTopView(session?.user.token),
      getNewFeed({
        page: page_idx,
        per_page: 5,
        sort,
        token: session?.user.token,
      }),
      getCategories(),
      getNewTopWriter(session?.user.token),
      getOldButGoldPost(session?.user.token),
    ]);
  return (
    <div className="pb-8">
      <Banner />
      <PopularBlogs posts={topViewPosts.data} />
      <Container className="flex  flex-col-reverse lg:grid lg:grid-cols-3 gap-x-14 mt-6">
        <div className="lg:col-span-2">
          <Feed postsPaginated={newFeedPosts} />
        </div>
        <div>
          <Categories categories={categories.data} />

          <div className="mb-6 hidden lg:block px-4 border-[1px] border-[var(--common-border-color)]">
            <div className="flex  my-6">
              <h2 className="upppercase font-semibold ">Cây bút nổi bật</h2>
              <div className="bg-[#fcf7dc] py-0.5 px-3 ml-2 text-[14px] text-[#92400e] font-medium">
                New
              </div>
            </div>
            <div>
              {getRandomElementsFromArray(topWriter.data, 3).map((user) => (
                <WriterContainer user={user} key={user.id} />
              ))}
            </div>
          </div>
          <div className="mb-6 hidden lg:block px-4 border-[1px] border-[var(--common-border-color)]">
            <div className="flex  my-6">
              <h2 className="upppercase font-semibold ">Cũ nhưng chất</h2>
            </div>
            <div className="pb-6">
              {oldButGoldPost.data && (
                <CardVertical showCategory post={oldButGoldPost.data} />
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
