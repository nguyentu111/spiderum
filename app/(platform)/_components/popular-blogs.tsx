import { Container } from "@/components/container";
import { CardVertical } from "@/components/post-card-1";
import { Post } from "@/types";

export const PopularBlogs = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="pt-6 pb-10 bg-[var(--trending-background)]">
      <Container className="max-w-full">
        <div className="flex items-center mb-5 ">
          <h2 className="uppercase font-semibold text-sm md:text-base">
            Nổi bật trong tháng
          </h2>
          {/* <Link
            href="/top-post"
            className="text-[var(--trending-title)] border-l-[1px] ml-4 pl-4 hidden md:block"
          >
            Xem TOP 10 bài viết
          </Link> */}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-y-4 lg:gap-y-6 md:-mx-2 max-w-full overflow-hidden">
          {posts.slice(0, 4).map((post) => (
            <div className="px-2 mb-6 md:mb-0 " key={post.id}>
              <CardVertical post={post} />
            </div>
          ))}
          {/* <Link
            href="/top-post"
            className="text-[var(--trending-title)] md:hidden ml-auto text-sm underline flex items-center"
          >
            Xem TOP 10 bài viết
            <ArrowRightIcon className="ml-2" />
          </Link> */}
        </div>
      </Container>
    </div>
  );
};
