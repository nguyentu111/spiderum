import { Post, User } from "@/types";
import { useEffect, useReducer } from "react";
import { useAuth } from "./use-auth";

export const useOptimisticPost = (post: Post) => {
  const { session } = useAuth();

  const [optimisticPost, dispatch] = useReducer(
    (
      state: Post,
      action: {
        type:
          | "like"
          | "unvote"
          | "dislike"
          | "save"
          | "unsave"
          | "add-comment"
          | "delete-comment"
          | "update-init";
        payload?: Post;
      }
    ): Post => {
      switch (action.type) {
        case "like": {
          return {
            ...state,
            point: state.point + 1,
            user_action: 1,
          };
        }
        case "unvote": {
          return {
            ...state,
            point: state.point - state.user_action,
            user_action: 0,
          };
        }
        case "dislike": {
          return {
            ...state,
            point: state.point - 1,
            user_action: -1,
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
        case "add-comment": {
          return {
            ...state,
            comments_count: state.comments_count + 1,
          };
        }
        case "delete-comment": {
          return {
            ...state,
            comments_count: state.comments_count - 1,
          };
        }
        case "update-init": {
          return {
            ...action.payload!,
          };
        }
      }
    },
    post
  );
  // useEffect(() => {
  //   dispatch({ type: "update-init", payload: post });
  // }, [post]);
  return { optimisticPost, dispatch };
};
