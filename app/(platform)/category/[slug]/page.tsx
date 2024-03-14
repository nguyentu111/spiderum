import { PostCarousel } from "@/components/post-carousel";

import { Feed } from "./_components/feed";
import { CardVertical } from "@/components/post-card-2";
import { getCategories, getNewFeed, getPosts } from "@/lib/queries";
import { auth } from "@/auth";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Sidebar } from "./_components/side-bar";
import {
  Category,
  CategoryWithTag,
  FeedSort,
  PaginatedReponse,
  Post,
} from "@/types";
import { notFound } from "next/navigation";

interface CategoryPageProps {
  params: { slug: string };
  searchParams: { sort: FeedSort; page_idx: string };
}
export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const slug = params.slug;
  const sort = searchParams.sort;
  const page_idx = Number.parseInt(searchParams.page_idx);
  const session = await auth();
  const [posts, categories, maybeInterestingPostsRs] = await Promise.all([
    getNewFeed({
      token: session?.user.token,
      category: slug,
      page: page_idx,
      per_page: 5,
      sort,
    }),
    getCategories(),
    getPosts({ token: session?.user.token, except_cat: slug, random: true }),
  ]);
  const postsInteresting = await maybeInterestingPostsRs.json();
  const category = categories.data.find(
    (cat: CategoryWithTag) => cat.slug == slug
  ) as CategoryWithTag;
  if (!category) return notFound();
  if (posts.data.data.length > 0)
    return (
      <>
        <div className="mb-9 w-full h-[400px] relative">
          <div className="bg-[url(https://spiderum.com/assets/images/categories/business-min.jpg)] h-full bg-cover bg-center blur-[3px]"></div>
          <Container className="">
            <div
              className="flex flex-col items-center justify-center bg-black/30 text-white 
        font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center absolute w-full h-full"
            >
              <div className="uppercase font-bold text-3xl lg:text-5xl ">
                {category.name}
              </div>
              <div className="mt-4">
                <Button
                  variant={"outline"}
                  className="text-black bg-transparent px-4 py-2 "
                >
                  Theo dõi
                </Button>
              </div>
            </div>
          </Container>
        </div>
        <Container className="lg:grid lg:grid-cols-3 gap-14">
          <div className="lg:col-span-2">
            <div className="mb-12">
              <CardVertical post={posts.data.data[0]} />
            </div>
            <div className="mb-12">
              <PostCarousel posts={posts.data.data.slice(1)} />
            </div>
            <div className="mb-12">
              <Feed slug={slug} paginatedPosts={posts} />
            </div>
          </div>
          <Sidebar
            className="hidden lg:block"
            category={category}
            posts={postsInteresting.data.data.slice(0, 5)}
          />
        </Container>
      </>
    );
  else return <p>Chưa có bài viết</p>;
}
