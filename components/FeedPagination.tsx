import { cn } from "@/lib/utils";
import Link from "next/link";

export const FeedPagination = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const sort = searchParams.sort as string;
  const page_idx = Number.parseInt(searchParams.page_idx as string) ?? 1;

  return (
    <div className="pt-[15px] pb-[45px]">
      <ul className="flex items-center">
        {Array.from({ length: 10 }).map((a, i) => {
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
        <li>
          <Link
            href="/"
            className="mx-2 px-2.5 py-0.5 hover:bg-[#e6e6e6] min-w-10 min-h-10  inline-block text-center leading-8"
          >
            {"Tiếp >>"}
          </Link>
        </li>
      </ul>
    </div>
  );
};
