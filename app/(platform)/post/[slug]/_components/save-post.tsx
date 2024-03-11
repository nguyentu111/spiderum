"use client";

import { Bookmark } from "@/components/icons/Bookmark";
import { useAuth } from "@/hooks/use-auth";
import { useOptimisticPost } from "@/hooks/useOptimisticPost";
import { savePost } from "@/lib/queries";
import { Post } from "@/types";
import { useMutation } from "@tanstack/react-query";

export const SavePost = ({
  post,
  dispatch,
}: {
  post: Post;
  dispatch: ReturnType<typeof useOptimisticPost>["dispatch"];
}) => {
  const { checkAuth, session } = useAuth();
  const mutation = useMutation({
    mutationFn: savePost,
  });
  const handleSavePost = () => {
    checkAuth();
    dispatch({ type: post.is_saved ? "unsave" : "save" });
    mutation.mutate({ slug: post.slug, token: session.data?.user.token! });
  };
  return (
    <div
      className="h-8 my-4 flex flex-col items-center justify-between cursor-pointer"
      onClick={handleSavePost}
    >
      {post.is_saved ? "saved" : <Bookmark size={25} viewBox="0 0 500 500" />}
    </div>
  );
};
