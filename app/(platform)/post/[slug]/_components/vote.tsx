"use client";
import { TriangleDown } from "@/components/icons/TriangleDown";
import { TriangleDownFill } from "@/components/icons/TriangleDownFill";
import { TriangleUp } from "@/components/icons/TriangleUp";
import { TriangleUpFill } from "@/components/icons/TriangleUpFill";
import { useAuth } from "@/hooks/use-auth";
import { useOptimisticPost } from "@/hooks/useOptimisticPost";
import { votePost } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { Post } from "@/types";
import { useMutation } from "@tanstack/react-query";
export const Vote = ({
  type,
  post,
  dispatch,
}: {
  type: "vertical" | "horizontal";
  post: Post;
  dispatch: ReturnType<typeof useOptimisticPost>["dispatch"];
}) => {
  const { checkAuth, session } = useAuth();
  const mutateVote = useMutation({
    mutationFn: votePost,
  });
  const handleVote = (action: "like" | "dislike" | "unvote") => {
    checkAuth();
    dispatch({ type: action });
    mutateVote.mutate(
      {
        action: action === "like" ? 0 : action === "dislike" ? 2 : 1,
        slug: post.slug,
        token: session.data?.user.token,
      },
      {
        onSuccess(data) {
          //   router.refresh();
          //   console.log(data);
        },
      }
    );
  };
  return (
    <div
      className={cn(
        type === "vertical"
          ? "flex flex-col items-center justify-center gap-2"
          : "flex justify-between items-center gap-2"
      )}
    >
      {!!post.likes.find((user) => user.id === session.data?.user.id) ? (
        <button
          disabled={mutateVote.isPending}
          className={cn("my-2 text-[rgba(113,128,150,1)]")}
          onClick={() => handleVote("unvote")}
        >
          <TriangleUpFill
            width={17}
            height={15}
            viewBox="0 0 17 15"
            className="text-green-500"
          />
        </button>
      ) : (
        <button
          disabled={mutateVote.isPending}
          className={cn("text-[rgba(113,128,150,1)]")}
          onClick={() => handleVote("like")}
        >
          <TriangleUp width={17} height={15} viewBox="0 0 17 15" />
        </button>
      )}
      <span className="font-bold">{post.like}</span>
      {!!post.dislikes.find((user) => user.id === session.data?.user.id) ? (
        <button
          disabled={mutateVote.isPending}
          className={cn("text-[rgba(113,128,150,1)]")}
          onClick={() => handleVote("unvote")}
        >
          <TriangleDownFill
            width={17}
            height={15}
            viewBox="0 0 17 15"
            className="text-red-500"
          />
        </button>
      ) : (
        <button
          disabled={mutateVote.isPending}
          className={cn("text-[rgba(113,128,150,1)]")}
          onClick={() => handleVote("dislike")}
        >
          <TriangleDown width={17} height={15} viewBox="0 0 17 15" />
        </button>
      )}
    </div>
  );
};
