"use client";
import { TriangleDown } from "@/components/icons/TriangleDown";
import { TriangleDownFill } from "@/components/icons/TriangleDownFill";
import { TriangleUp } from "@/components/icons/TriangleUp";
import { TriangleUpFill } from "@/components/icons/TriangleUpFill";
import { useAuth } from "@/hooks/use-auth";
import { useOptimisticPost } from "@/hooks/use-optimistic-post";
import { votePost } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { Post } from "@/types";
import { useMutation } from "@tanstack/react-query";
export interface VoteCallbackProps {
  onLike?: () => void;
  onLiked?: () => void;
  onUnvote?: () => void;
  onUnvoted?: () => void;
  onVote?: () => void;
  onVoted?: () => void;
  onDislike?: () => void;
  onDisliked?: () => void;
}
export interface VoteProps extends VoteCallbackProps {
  type?: "vertical" | "horizontal" | "half-horizontal";
  post: Post;
  dispatch?: ReturnType<typeof useOptimisticPost>["dispatch"];
}
export const Vote = ({
  type = "vertical",
  post,
  dispatch,
  onLike,
  onLiked,
  onVote,
  onUnvote,
  onUnvoted,
  onDislike,
  onDisliked,
  onVoted,
}: VoteProps) => {
  const { checkAuth, session } = useAuth();
  const mutateVote = useMutation({
    mutationFn: votePost,
  });
  const handleVote = (action: "like" | "dislike" | "unvote") => {
    checkAuth();
    dispatch && dispatch({ type: action });
    switch (action) {
      case "like": {
        onLike && onLike();
        onVote && onVote();
        break;
      }
      case "dislike": {
        onDislike && onDislike();
        onVote && onVote();
        break;
      }
      case "unvote": {
        onUnvote && onUnvote();
        break;
      }
    }
    mutateVote.mutate(
      {
        action: action === "like" ? 0 : action === "dislike" ? 2 : 1,
        slug: post.slug,
        token: session.data?.user.token,
      },
      {
        onSuccess(data) {
          switch (action) {
            case "like": {
              onLiked && onLiked();
              onVoted && onVoted();
            }
            case "dislike": {
              onDisliked && onDisliked();
              onVoted && onVoted();
            }
            case "unvote": {
              onUnvoted && onUnvoted();
            }
          }
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
      {post.user_action === 1 ? (
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
      <span className="font-bold">{post.point}</span>
      {type !== "half-horizontal" &&
        (post.user_action === -1 ? (
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
        ))}
    </div>
  );
};
