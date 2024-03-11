"use client";

import { addComment } from "@/lib/queries";
import { Post } from "@/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import { Loader } from "lucide-react";
export const CommentForm = ({ post }: { post: Post }) => {
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const router = useRouter();
  const [text, setText] = useState("");
  const ref = useRef<HTMLDivElement | null>(null);
  const mutation = useMutation({
    mutationFn: addComment,
  });
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

    setText(cleanedHTML);
    // setCursorEditable(e.currentTarget, cleanedHTML.length as number);
    if (ref.current)
      if (e.currentTarget.textContent != "") {
        ref.current.dataset.placeholder = "";
      } else
        ref.current.dataset.placeholder = "Cảm nghĩ của bạn về bài viết này...";
  };
  const handleAddComment = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    !mutation.isPending &&
      mutation.mutate(
        {
          data: {
            content: text,
            post_id: post.id,
          },
          token: session?.user.token,
        },
        {
          onSuccess() {
            setText("");
            if (ref.current)
              ref.current.dataset.placeholder =
                "Cảm nghĩ của bạn về bài viết này...";
            queryClient.invalidateQueries({ queryKey: ["comments", post.id] });
          },
          onError() {
            toast.error("Server gặp lỗi, vui lòng thử lại sau");
          },
        }
      );
  };
  return (
    <form
      className="flex relative py-4 border-b border-[var(--common-border-color)] -mt-4 mb-1"
      onSubmit={handleAddComment}
    >
      <ContentEditable
        innerRef={ref}
        onChange={handleChange}
        contentEditable
        data-placeholder="Cảm nghĩ của bạn về bài viết này..."
        className="min-h-12 outline-none resize-none w-full relative before:content-[attr(data-placeholder)] before:text-gray-400"
        html={text}
      ></ContentEditable>
      <button
        className="ml-2 px-2 py-1 h-fit hover:text-blue-500 hover:bg-gray-100 rounded transition-all"
        disabled={mutation.isPending}
      >
        {mutation.isPending ? <Loader className="animate-spin" /> : "Gửi"}
      </button>
    </form>
  );
};
