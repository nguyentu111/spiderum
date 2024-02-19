"use client";
import { PlusIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Series } from "./series";
import { Categories } from "./categories";

export function NextStep({ save }: { save: () => void }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"primary"} className="px-3 rounded">
          Bước tiếp theo
        </Button>
      </DialogTrigger>
      <DialogContent className="">
        <div className="flex flex-col items-start justify-center">
          <div className="py-3 w-full">
            <p className="font-bold text-14 mb-2">
              Mô tả bài viết <em className="text-gray-500">(không bắt buộc)</em>
            </p>
            <textarea className="w-full rounded outline-none border px-3 py-2 text-14 resize-none h-[70px]"></textarea>
          </div>
          <div className="py-3 w-full">
            <Series />
          </div>
          <div className="py-3 w-full">
            <Categories />
          </div>
        </div>
        <DialogFooter className="justify-center items-center">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="w-[9rem] rounded"
            >
              Quay lại
            </Button>
          </DialogClose>
          <Button
            type="button"
            variant="primary"
            className="w-[9rem] rounded"
            onClick={save}
          >
            Tạo
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
