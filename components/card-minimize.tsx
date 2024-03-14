import { formatTimeToDistant } from "@/lib/utils";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const CardMinimize = ({ post }: { post: Post }) => {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <Image
        src={post.thumbnail!}
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 rounded-full"
      />
      <div>
        <Link className="" href={`/post/${post.slug}`}>
          <h1 className="text-14 line-clamp-2 text-ellipsis font-semibold">
            {post.name}
          </h1>
        </Link>
        <div className="flex items-center mt-1">
          <Link
            href={`/user/${post.author?.username}`}
            className="text-blue-500 hover:text-blue-600 text-12 font-semibold"
          >
            {post.author?.alias}
          </Link>
          <span className="text-12 text-gray-400 ml-2">
            {formatTimeToDistant(post.created_at)}
          </span>
        </div>
      </div>
    </div>
  );
};
