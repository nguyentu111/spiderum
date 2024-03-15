"use client";
import { Button } from "@/components/ui/button";
import { deleteDraft } from "@/lib/queries";
import { Draft } from "@/types";
import { useMutation } from "@tanstack/react-query";
import { Loader, Trash2Icon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const DeleteDraftBtn = ({
  id,
  onDelete,
}: {
  id: Draft["id"];
  onDelete?: () => void;
}) => {
  const session = useSession();
  const mutateDelete = useMutation({ mutationFn: deleteDraft });
  const handleDelete = async () => {
    onDelete && onDelete();
    mutateDelete.mutate(
      { id, token: session.data?.user.token! },
      {
        onSuccess: () => {
          router.refresh();
        },
        onError(err) {
          toast.error(err.message);
        },
      }
    );
  };
  const router = useRouter();
  return (
    <Button
      variant={"ghost"}
      className="text-red-600 hover:text-white hover:bg-red-500 px-2 !text-sm py-1 !h-auto"
      onClick={handleDelete}
    >
      <>
        <Trash2Icon className="w-4 h-4 mr-3" />
        Xóa
      </>
    </Button>
  );
};
