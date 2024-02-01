"use client";
import { notFound, redirect, useRouter } from "next/navigation";
import { feedsort } from "@/constants/feed";
import { cn } from "@/lib/utils";
export const FeedTabs = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const sort = searchParams.sort as string;
  const page_idx = searchParams.page_idx;
  const router = useRouter();
  // if (!sort || feedsort.map((f) => f.val).includes(sort)) return notFound();

  if (!page_idx) redirect(`/?sort=${sort}&page_idx=1`);
  return (
    <div className="mb-6 w-full overflow-x-auto border-b-[var(--filter-border-color)] border-b-[1px] flex items-center">
      {feedsort.map((f) => (
        <button
          key={f.value}
          className={cn(
            "uppercase md:mr-5 px-2 py-2 text-[14px] font-medium whitespace-nowrap",
            f.value === sort && "border-b-[3px] border-[#3398d4]"
          )}
          onClick={() =>
            router.push(`/?sort=${f.value}&page_idx=1`, { scroll: false })
          }
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};
