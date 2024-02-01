import { Container } from "@/components/container";
import Link from "next/link";
import { CardVertical } from "../../../components/CardVertical";

export const PopularBlogs = () => {
  return (
    <div className="pt-6 pb-10 bg-[var(--trending-background)]">
      <Container>
        <div className="flex items-center mb-5 ">
          <h2 className="uppercase font-semibold">Nổi bật trong tháng</h2>
          <Link
            href="/top-post"
            className="text-[var(--trending-title)] border-l-[1px] ml-4 pl-4 "
          >
            Xem TOP 10 bài viết
          </Link>
        </div>
        <div className="grid md:grid-cols-4 -mx-2">
          <div className="px-2 mb-6 md:mb-0 ">
            <CardVertical />
          </div>
          <div className="px-2 mb-6 md:mb-0 ">
            <CardVertical />
          </div>
          <div className="px-2 mb-6 md:mb-0 ">
            <CardVertical />
          </div>
          <div className="px-2 mb-6 md:mb-0 ">
            <CardVertical />
          </div>
        </div>
      </Container>
    </div>
  );
};
