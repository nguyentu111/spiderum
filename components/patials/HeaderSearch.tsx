import { LeftArrow } from "@/components/icons/LeftArrow";
import { Search } from "@/components/icons/Search";
import { useSearch } from "@/hooks/use-search";
import { useRouter } from "next/navigation";
import { KeyboardEvent } from "react";

export const HeaderSearch = () => {
  const router = useRouter();
  const onClose = useSearch((state) => state.onClose);
  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      router.push(`/search?q=${e.currentTarget.value}&type=post&page=1`);
    }
  };
  return (
    <div className="bg-[var(--searchbar-bg-color)] h-12 flex items-center px-4 rounded">
      <button onClick={onClose} type="button">
        <LeftArrow width={17} height={12} viewBox="0 0 17 12" />
      </button>
      <input
        className="w-full bg-transparent outline-none text-14 px-4"
        placeholder="Tìm kiếm theo tiêu đề tác giả hoặc tag "
        onKeyDown={handleSearch}
      />
      <Search
        width={18}
        height={18}
        viewBox="0 0 18 24"
        className="text-[#969696]"
      />
    </div>
  );
};
