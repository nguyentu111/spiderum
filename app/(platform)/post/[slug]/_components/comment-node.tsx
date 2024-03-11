"use client";
import { TriangleDown } from "@/components/icons/TriangleDown";
import { TriangleUp } from "@/components/icons/TriangleUp";
import Image from "next/image";
import { CommentReplyForm } from "./comment-reply-form";
import { useToggle } from "usehooks-ts";
import { CommentWithUserInfo, Post, User } from "@/types";
import { cn, formatTimeToDistant } from "@/lib/utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteComment, voteComment } from "@/lib/queries";
import { toast } from "sonner";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useAuth } from "@/hooks/use-auth";
import { TriangleUpFill } from "@/components/icons/TriangleUpFill";
import { TriangleDownFill } from "@/components/icons/TriangleDownFill";
import { useReducer, useTransition } from "react";
export const CommentNode = ({
  data,
  post,
}: {
  data: CommentWithUserInfo;
  post: Post;
}) => {
  const [open, toggleOpen] = useToggle(false);
  const queryClient = useQueryClient();
  const { session, checkAuth } = useAuth();
  const [optimisticData, dispatch] = useReducer(
    (state: CommentWithUserInfo, action: { type: 0 | 1 | 2 | 3 }) => {
      switch (action.type) {
        case 0: {
          return {
            ...state,
            likes: [...state.likes, session.data?.user as User],
            like: !!state.dislikes.find(
              (user) => user.id === session.data?.user.id
            )
              ? state.like + 2
              : state.like + 1,
            dislikes: [
              ...state.dislikes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
          };
        }
        case 1: {
          return {
            ...state,
            likes: [
              ...state.likes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
            like: state.like - 1,
            dislikes: [
              ...state.dislikes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
          };
        }
        case 2: {
          return {
            ...state,
            likes: [
              ...state.likes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
            like: !!state.likes.find(
              (user) => user.id === session.data?.user.id
            )
              ? state.like - 2
              : state.like - 1,
            dislikes: [...state.dislikes, session.data?.user as User],
          };
        }
        default: {
          return {
            ...state,
            likes: [
              ...state.likes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
            like: state.like + 1,
            dislikes: [
              ...state.dislikes.filter(
                (user) => user.id !== session.data?.user.id
              ),
            ],
          };
        }
      }
    },
    data
  );

  const mutateDelete = useMutation({
    mutationFn: deleteComment,
  });
  const mutateVote = useMutation({
    mutationFn: voteComment,
  });
  const handleDelete = () => {
    checkAuth();
    mutateDelete.mutate(
      {
        comment_id: data.id,
        token: session.data?.user.token,
      },
      {
        onSettled() {
          // queryClient.setQueryData(["comments", post.id,order], (prev : ) => ());
          queryClient.invalidateQueries({
            queryKey: ["comments", post.id],
          });
        },
      }
    );
  };
  const handleVote = async (action: 0 | 1 | 2 | 3) => {
    checkAuth();
    // switch
    dispatch({ type: action });
    await mutateVote.mutateAsync(
      {
        action: action,
        comment_id: data.id,
        token: session.data?.user.token,
      },
      {
        onSuccess() {
          // queryClient.invalidateQueries({
          //   queryKey: ["comments", post.id],
          // });
        },
        onError(error: any) {
          toast.error(error.message);
        },
      }
    );
  };

  return (
    <div className="flex flex-col mb-4">
      <div className="flex">
        <Image
          src={optimisticData.user.avatar_url as string}
          alt=""
          width={48}
          height={48}
          className="rounded-full w-12 h-12"
        />
        <div>
          <div className="flex ml-4 mb-2 flex-col">
            <div className="font-semibold">{optimisticData.user.alias}</div>
            <div className="text-gray-400 text-[13px]" suppressHydrationWarning>
              {formatTimeToDistant(optimisticData.created_at)}
            </div>
          </div>
          <div
            className="mt-4 mb-1.5 -ml-12 whitespace-pre-wrap break-words"
            dangerouslySetInnerHTML={{ __html: optimisticData.content }}
          ></div>
          <div className="flex items-center mt-2 -ml-10 mb-4 text-gray-600/75">
            {!!optimisticData.likes.find(
              (user) => user.id === session.data?.user.id
            ) ? (
              <button
                disabled={mutateVote.isPending}
                className={cn("my-2 text-[rgba(113,128,150,1)]")}
                onClick={() => handleVote(1)}
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
                className={cn("my-2 text-[rgba(113,128,150,1)]")}
                onClick={() => handleVote(0)}
              >
                <TriangleUp width={17} height={15} viewBox="0 0 17 15" />
              </button>
            )}

            <span className="font-bold mx-2">{optimisticData.like}</span>
            {!!optimisticData.dislikes.find(
              (user) => user.id === session.data?.user.id
            ) ? (
              <button
                disabled={mutateVote.isPending}
                className={cn("my-2 text-[rgba(113,128,150,1)]")}
                onClick={() => handleVote(3)}
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
                className={cn("my-2 text-[rgba(113,128,150,1)]")}
                onClick={() => handleVote(2)}
              >
                <TriangleDown width={17} height={15} viewBox="0 0 17 15" />
              </button>
            )}

            {optimisticData.childrens && (
              <button
                className="ml-4 cursor-pointer hover:text-black text-14 select-none"
                onClick={toggleOpen}
              >
                Trả lời
              </button>
            )}
            {session.data?.user.id === optimisticData.user.id && (
              <button
                className="ml-4 cursor-pointer hover:text-rose-600 text-14 select-none text-rose-500"
                onClick={handleDelete}
                disabled={mutateDelete.isPending}
              >
                {mutateDelete.isPending ? (
                  <ReloadIcon className="w-4 h-4 animate-spin" />
                ) : (
                  "Xóa"
                )}
              </button>
            )}
          </div>
          {/* action reply */}
        </div>
      </div>
      {open && (
        <div className="ml-6 pl-4 border-l-[3px] border-gray-700/10">
          <CommentReplyForm
            post={post}
            parent={optimisticData}
            setOpen={toggleOpen}
          />
        </div>
      )}
      <div className="mt-2 mr-0 mb-2 ml-6 pl-4 border-l-[3px] border-gray-700/10">
        {/* <ChildComment /> */}
        {optimisticData.childrens?.map((commentChildren) => (
          <CommentNode
            data={commentChildren}
            post={post}
            key={commentChildren.id}
          />
        ))}
      </div>
    </div>
  );
};
