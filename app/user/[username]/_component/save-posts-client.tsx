"use client";
import { CardVertical } from "@/components/post-card-2";
import { Post } from "@/types";
import { useSession } from "next-auth/react";
import { useReducer } from "react";

export const SavedPostsClient = ({ posts }: { posts: Post[] }) => {
  const session = useSession();
  const [optimisticPosts, dispatch] = useReducer(
    (
      state: Post[],
      action: { type: "remove-post" | "like" | "unvote"; payload: Post }
    ) => {
      switch (action.type) {
        case "remove-post": {
          return [...state.filter((p) => p.id !== action.payload.id)];
        }
        case "like": {
          const index = state.findIndex((p) => p.id === action.payload.id);
          return [
            ...state.slice(0, index),
            {
              ...action.payload,
              like: action.payload.like + 1,
              likes: [...action.payload.likes, session.data?.user],
              dislikes: [
                ...action.payload.dislikes.filter(
                  (user) => user.id !== session.data?.user.id
                ),
              ],
            },
            ...state.slice(index + 1),
          ] as Post[];
        }
        case "unvote": {
          const index = state.findIndex((p) => p.id === action.payload.id);
          console.log(state.slice(0, index - 1), index, state.slice(index + 1));
          const newState = [
            ...state.slice(0, index),
            {
              ...action.payload,
              likes: [
                ...action.payload.likes.filter(
                  (user) => user.id !== session.data?.user.id
                ),
              ],
              dislikes: [
                ...action.payload.dislikes.filter(
                  (user) => user.id !== session.data?.user.id
                ),
              ],
            },
            ...state.slice(index + 1),
          ] as Post[];

          newState[index].like =
            newState[index].likes.length - newState[index].dislikes.length;
          return newState;
        }
      }
    },
    posts
  );
  const handleUnsave = (p: Post) => {
    dispatch({ type: "remove-post", payload: p });
  };
  const handleLike = (p: Post) => {
    dispatch({ type: "like", payload: p });
  };
  const handleUnvote = (p: Post) => {
    dispatch({ type: "unvote", payload: p });
  };
  return (
    <>
      {optimisticPosts.map((p: Post) => (
        <CardVertical
          post={p}
          key={`${p.id}${p.like}`}
          onUnsave={() => handleUnsave(p)}
          onLike={() => handleLike(p)}
          onUnvote={() => handleUnvote(p)}
        />
      ))}
    </>
  );
};
