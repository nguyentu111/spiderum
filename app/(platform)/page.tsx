import Image from "next/image";
import { Banner } from "./_components/Banner";
import { PopularBlogs } from "./_components/PopularBlogs";
import { Feed } from "../../components/Feed";
import { Sidebar } from "@/components/sidebar";
import { Container } from "@/components/container";
import Link from "next/link";
import { WriterContainer } from "./_components/WirterContainer";
import { CardVertical } from "../../components/CardVertical";

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
      <Container className="grid grid-cols-3 gap-14 mt-6">
        <div className="col-span-2">
          <Feed searchParams={searchParams} />
        </div>
        <div>
          <Sidebar>
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
          </Sidebar>
          <Sidebar>
            <div className="flex  my-6">
              <h2 className="upppercase font-semibold ">Cũ nhưng chất</h2>
              <Link href="/top-author" className="ml-auto text-12">
                Xem thêm
              </Link>
            </div>
            <div className="pb-6">
              <CardVertical showCategory />
            </div>
          </Sidebar>
        </div>
      </Container>
    </div>
  );
}
