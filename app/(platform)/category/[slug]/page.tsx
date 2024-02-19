import { PostCarousel } from "@/components/post-carousel";

import { Feed } from "./_components/feed";
import { CardVertical } from "@/components/post-card-1";

interface CategoryPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export default function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const slug = params.slug;
  return (
    <div className="lg:col-span-2">
      <div className="mb-12">
        <CardVertical />
      </div>
      <div className="mb-12">
        <PostCarousel />
      </div>
      <div className="mb-12">
        <Feed slug={slug} searchParams={searchParams} />
      </div>
    </div>
  );
}
