import Image from "next/image";
import Link from "next/link";

export const CardMinimize = () => {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <Image
        src="https://images.spiderum.com/sp-xs-avatar/f73d05604cbf11ee9289cdfd88096d11.png"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <Link className="" href="/">
          <h1 className="text-14 line-clamp-2 text-ellipsis font-semibold">
            Những cái chết vẫn chưa đủ để thức tỉnh cả một thế hệ?
          </h1>
        </Link>
        <div className="flex items-center mt-1">
          <Link
            href={""}
            className="text-blue-500 hover:text-blue-600 text-12 font-semibold"
          >
            girlintheair
          </Link>
          <span className="text-12 text-gray-400 ml-2">- 4 tháng 4 2022</span>
        </div>
      </div>
    </div>
  );
};
