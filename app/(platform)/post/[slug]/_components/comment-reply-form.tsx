"use client";
import { Button } from "@/components/ui/button";
import { addComment } from "@/lib/queries";
import { CommentWithUserInfo, Post } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Loader } from "lucide-react";

export const CommentReplyForm = ({
  post,
  parent,
  setOpen,
}: {
  post: Post;
  parent: CommentWithUserInfo;
  setOpen: (open: boolean) => void;
}) => {
  const [reply, setReply] = useState("");
  const { data: session } = useSession();

  const ref = useRef<HTMLDivElement | null>(null);
  const mutation = useMutation({
    mutationFn: addComment,
  });
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleChange = (e: ContentEditableEvent) => {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = e.target.value as string;
    const nonTextElements = tempDiv.querySelectorAll(
      ":is(iframe, img, script, style, video, audio, canvas, svg, button)"
    );
    nonTextElements.forEach((element) => element.remove());
    tempDiv
      .querySelectorAll("[style]")
      .forEach((node) => node.removeAttribute("style"));
    tempDiv
      .querySelectorAll("[class]")
      .forEach((node) => node.removeAttribute("class"));

    const cleanedHTML = tempDiv.innerHTML;
    setReply(cleanedHTML);
    if (ref.current)
      if (e.currentTarget.textContent != "") {
        ref.current.dataset.placeholder = "";
      } else
        ref.current.dataset.placeholder = "Cảm nghĩ của bạn về comment này...";
  };
  const handleReply = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate(
      {
        data: {
          content: reply,
          post_id: post.id,
          parent_id: parent.id,
        },
        token: session?.user.token,
      },
      {
        onSuccess() {
          setOpen(false);
          setReply("");
          if (ref.current)
            ref.current.dataset.placeholder =
              "Cảm nghĩ của bạn về bài viết này...";
        },
        onError() {
          toast.error("Server gặp lỗi, vui lòng thử lại sau");
        },
        onSettled() {
          queryClient.invalidateQueries({ queryKey: ["comments", post.id] });
        },
      }
    );
  };
  return (
    <div className="">
      <form
        className="flex relative py-4 border-b border-[var(--common-border-color)] -mt-4 "
        onSubmit={handleReply}
      >
        <ContentEditable
          innerRef={ref}
          onChange={handleChange}
          contentEditable
          data-placeholder="Cảm nghĩ của bạn về bài viết này..."
          className="min-h-12 outline-none resize-none w-full relative before:content-[attr(data-placeholder)] before:text-gray-400"
          html={reply}
        ></ContentEditable>
        <Button
          className="ml-2 px-2 py-1 h-fit hover:bg-none"
          variant={"ghost"}
          disabled={mutation.isPending}
        >
          {mutation.isPending ? <Loader className="animate-spin" /> : "Trả lời"}
        </Button>
      </form>
    </div>
  );
};
