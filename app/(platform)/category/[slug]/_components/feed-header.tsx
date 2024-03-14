"use client";
import { Fire } from "@/components/icons/Fire";
import { Flag } from "@/components/icons/Flag";
import { PinWheel } from "@/components/icons/PinWheel";
import { Star } from "@/components/icons/Star";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { FeedSort } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Dispatch, ReactNode, SetStateAction } from "react";
export const categoryFeedsort: {
  value: FeedSort;
  label: string;
  icon: ReactNode;
}[] = [
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
  sort,
  setSort,
}: {
  slug: string;
  sort: FeedSort;
  setSort: Dispatch<SetStateAction<FeedSort>>;
}) => {
  return (
    <>
      <div>
        <div className="flex justify-between border-b border-[#e3ebf6] my-6">
          <div className="pl-4 border-l-[4px] border-l-[#3199d5] text-18 font-bold">
            DÀNH CHO BẠN
          </div>
          <div className=" items-center hidden lg:flex">
            {categoryFeedsort.map((s) => (
              <Button
                onClick={() => setSort(s.value)}
                variant={"ghost"}
                key={s.value}
                className={cn(
                  "flex items-center px-3",
                  s.value === sort
                    ? "border-b-[3px] border-blue-500 text-blue-500"
                    : "text-[#969696]"
                )}
              >
                {s.icon}
                <span className="ml-2">{s.label}</span>
              </Button>
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
