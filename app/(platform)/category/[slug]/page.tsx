import { PostCarousel } from "@/components/post-carousel";
import { CardHorizontal } from "../../../../components/CardHorizontal";
import { Feed } from "./_components/Feed";

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
    <div className="col-span-2">
      <div className="mb-12">
        <CardHorizontal />
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
