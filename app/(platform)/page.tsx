import Link from "next/link";
import { Container } from "@/components/container";
import { Feed } from "@/components/feed";

import { PopularBlogs } from "./_components/popular-blogs";
import { WriterContainer } from "./_components/writer-container";
import { CardVertical } from "../../components/post-card-1";
import { Banner } from "./_components/banner";
import { Categories } from "./_components/categories";

export default function HomePage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div className="pb-8">
      <Banner />
      <PopularBlogs />
      <Container className="flex  flex-col-reverse lg:grid lg:grid-cols-3 gap-x-14 mt-6">
        <div className="lg:col-span-2">
          <Feed searchParams={searchParams} />
        </div>
        <div>
          <Categories />

          <div className="mb-6 hidden lg:block px-4 border-[1px] border-[var(--common-border-color)]">
            <div className="flex  my-6">
              <h2 className="upppercase font-semibold ">Cây bút nổi bật</h2>
              <div className="bg-[#fef3c7] py-0.5 px-3 ml-2 text-[14px] text-[#92400e] font-medium">
                New
              </div>
              <Link href="/top-author" className="ml-auto text-12">
                Xem thêm
              </Link>
            </div>
            <div>
              <WriterContainer />
              <WriterContainer />
              <WriterContainer />
            </div>
          </div>
          <div className="mb-6 hidden lg:block px-4 border-[1px] border-[var(--common-border-color)]">
            <div className="flex  my-6">
              <h2 className="upppercase font-semibold ">Cũ nhưng chất</h2>
              <Link href="/top-author" className="ml-auto text-12">
                Xem thêm
              </Link>
            </div>
            <div className="pb-6">
              <CardVertical showCategory />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
