import { Fire } from "@/components/icons/Fire";
import { FeedSort } from "@/types";

export const feedsort: { value: FeedSort; label: string }[] = [
  {
    value: "hot",
    label: "Dành cho bạn",
  },
  {
    value: "controversial",
    label: "Sôi nổi",
  },
  {
    value: "new",
    label: "Mới nhất",
  },
  {
    value: "follow",
    label: "Theo tác giả",
  },
  {
    value: "top",
    label: "Đánh giá cao nhất",
  },
];
export const feedsortVals = feedsort.map((f) => f.value);
