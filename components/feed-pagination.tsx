"use client";
import { cn } from "@/lib/utils";
import { FeedSort, PaginatedReponse, Post } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const FeedPagination = ({
  paginationData,
}: {
  paginationData: PaginatedReponse<Post>["data"];
}) => {
  const sort = useSearchParams().get("sort") as FeedSort;
  const page_idx =
    Number.parseInt(useSearchParams().get("page_idx") as string) ?? 1;

  return (
    <div className="pt-[15px] pb-[45px] flex justify-center">
      <ul className="flex flex-wrap items-center">
        {}
        {Array.from({ length: paginationData.last_page }).map((a, i) => {
          return (
            <li key={i}>
              <Link
                href={`/?sort=${sort}&page_idx=${i + 1}`}
                className={cn(
                  "mx-2 px-2.5 py-0.5  min-w-10 min-h-10 inline-block text-center leading-8",
                  page_idx === i + 1
                    ? "bg-[#2fb5fa] text-white"
                    : "hover:bg-[#e6e6e6]"
                )}
              >
                {i + 1}
              </Link>
            </li>
          );
        })}
        {page_idx !== paginationData.last_page && (
          <li>
            <Link
              href={`/?sort=${sort}&page_idx=${page_idx + 1}`}
              className="mx-2 px-2.5 py-0.5 hover:bg-[#e6e6e6] min-w-10 min-h-10  inline-block text-center leading-8"
            >
              {"Tiếp >>"}
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
