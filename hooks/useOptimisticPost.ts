import { Post, User } from "@/types";
import { useReducer } from "react";
import { useAuth } from "./use-auth";

export const useOptimisticPost = (post: Post) => {
  const { checkAuth, session } = useAuth();

  const [optimisticPost, dispatch] = useReducer(
    (
      state: Post,
      action: { type: "like" | "unvote" | "dislike" | "save" | "unsave" }
    ): Post => {
      const liked = !!state.likes.find(
        (user) => user.id === session.data?.user.id
      );
      const disliked = !!state.dislikes.find(
        (user) => user.id === session.data?.user.id
      );
      switch (action.type) {
        case "like": {
          return {
            ...state,
            likes: [...state.likes, session.data?.user as User],
            dislikes: [
              ...state.dislikes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
            like: disliked ? state.like + 2 : state.like + 1,
          };
        }
        case "unvote": {
          return {
            ...state,
            likes: [
              ...state.likes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
            dislikes: [
              ...state.dislikes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
            like: liked ? state.like - 1 : state.like + 1,
          };
        }
        case "dislike": {
          return {
            ...state,
            likes: [
              ...state.likes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
            dislikes: [...state.likes, session.data?.user as User],
            like: liked ? state.like - 2 : state.like - 1,
          };
        }
        case "save": {
          return {
            ...state,
            is_saved: true,
          };
        }
        case "unsave": {
          return {
            ...state,
            is_saved: false,
          };
        }
      }
    },
    post
  );
  return { optimisticPost, dispatch };
};
