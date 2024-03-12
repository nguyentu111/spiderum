"use client";

import { Bookmark } from "@/components/icons/Bookmark";
import { BookmarkFill } from "@/components/icons/BookmarkFill";
import { useAuth } from "@/hooks/use-auth";
import { useOptimisticPost } from "@/hooks/use-optimistic-post";
import { savePost, unsavePost } from "@/lib/queries";
import { cn } from "@/lib/utils";
import { Post } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { HTMLAttributes } from "react";

export interface SavePostProps extends HTMLAttributes<HTMLDivElement> {
  post: Post;
  dispatch?: ReturnType<typeof useOptimisticPost>["dispatch"];
  onSaved?: () => void;
  onUnsaved?: () => void;
  onSave?: () => void;
  onUnsave?: () => void;
}
export const SavePost = ({
  post,
  dispatch,
  onSave,
  onSaved,
  onUnsave,
  onUnsaved,
  className,
  ...rest
}: SavePostProps) => {
  const { checkAuth, session } = useAuth();
  const mutationSave = useMutation({
    mutationFn: savePost,
  });
  const mutationUnSave = useMutation({
    mutationFn: unsavePost,
  });
  const handleSavePost = () => {
    checkAuth();
    if (post.is_saved) {
      dispatch && dispatch({ type: "unsave" });
      onUnsave && onUnsave();
      mutationUnSave.mutate(
        { slug: post.slug, token: session.data?.user.token! },
        {
          onError(error, variables, context) {
            console.log(error);
          },
          onSuccess() {
            onUnsaved && onUnsaved();
          },
        }
      );
    } else {
      dispatch && dispatch({ type: "save" });
      onSave && onSave();
      mutationSave.mutate(
        { slug: post.slug, token: session.data?.user.token! },
        {
          onError(error, variables, context) {
            console.log(error);
          },
          onSuccess() {
            onSaved && onSaved();
          },
        }
      );
    }
  };
  return (
    <div
      className={cn(
        "my-4 flex flex-col items-center justify-between cursor-pointer",
        className
      )}
      onClick={handleSavePost}
      {...rest}
    >
      {post.is_saved ? (
        <BookmarkFill size={25} viewBox="0 0 500 500" />
      ) : (
        <Bookmark size={25} viewBox="0 0 500 500" />
      )}
    </div>
  );
};
