import { LeftArrow } from "@/components/icons/LeftArrow";
import { Search } from "@/components/icons/Search";
import { useSearch } from "@/hooks/use-search";
import { useRouter } from "next/navigation";
import { FormEvent, KeyboardEvent } from "react";

export const HeaderSearch = () => {
  const router = useRouter();
  const onClose = useSearch((state) => state.onClose);
  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    router.push(`/search?q=${formData.get("search")}&type=post&page=1`);
  };
  return (
    <div className="bg-[var(--searchbar-bg-color)] h-12 flex items-center px-4 rounded">
      <button onClick={onClose} type="button">
        <LeftArrow width={17} height={12} viewBox="0 0 17 12" />
      </button>
      <form onSubmit={handleSearch} className="w-full h-full flex items-center">
        <input
          name="search"
          className="w-full bg-transparent outline-none text-14 px-4 placeholder:text-xs md:placeholder:text-sm"
          placeholder="Tìm kiếm theo tiêu đề tác giả hoặc tag "
        />
        <Search
          width={18}
          height={18}
          viewBox="0 0 18 24"
          className="text-[#969696]"
        />
      </form>
    </div>
  );
};
