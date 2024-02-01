"use client";
import { Fire } from "@/components/icons/Fire";
import { Flag } from "@/components/icons/Flag";
import { PinWheel } from "@/components/icons/PinWheel";
import { Star } from "@/components/icons/Star";
import { cn } from "@/lib/utils";
import Link from "next/link";
export const categoryFeedsort = [
  {
    value: "hot",
    label: "Thịnh hành",
    icon: <Fire width={14} height={18} viewBox="0 0 14 18" />,
  },
  {
    value: "new",
    label: "Mới",
    icon: <Star size={17} />,
  },
  {
    value: "controversial",
    label: "Sôi nổi",
    icon: <PinWheel size={19} />,
  },
  {
    value: "top",
    label: "Top",
    icon: <Flag width={13} height={15} viewBox="0 0 13 15" />,
  },
];

export const FeedHeader = ({
  slug,
  searchParams,
}: {
  slug: string;
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <>
      <div>
        <div className="flex justify-between border-b border-[#e3ebf6] my-6">
          <div className="pl-4 border-l-[4px] border-l-[#3199d5] text-18 font-bold">
            DÀNH CHO BẠN
          </div>
          <div className="flex items-center">
            {categoryFeedsort.map((s) => (
              <Link
                key={s.value}
                href={`/category/${slug}?sort=${s.value}&page_idx=1`}
                className={cn(
                  "flex items-center px-3",
                  s.value === searchParams?.sort
                    ? "border-b-[3px] border-blue-500 text-blue-500"
                    : "text-[#969696]"
                )}
                scroll={false}
              >
                {s.icon}
                <span className="ml-2">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col align-bottom listTabs">
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
        <div>asd</div>
      </div>
    </>
  );
};
