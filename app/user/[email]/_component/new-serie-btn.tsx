"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

export const NewSerieBtn = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border bg-white max-h-[90%] overflow-auto">
        <div>
          <div className="text-18 font-bold pb-4 border-b ">Tạo series</div>
          <div className="mt-4 font-bold">Tên series</div>
          <p className="mt-2">Một chiếc tên dễ nhớ với người đọc</p>
          <input
            className="px-3 py-2 outline-none border rounded w-full mt-2"
            placeholder="Be creative..."
          />
        </div>
        <div>
          <div className="mt-4 font-bold">Mô tả series</div>
          <p className="mt-2">Chia sẻ ngắn gọn về nội dung series</p>
          <textarea
            className="px-3 py-2 outline-none border rounded w-full mt-2"
            placeholder="Tóm tắt ngắn gọn..."
          />
        </div>
        <div>
          <div className="mt-4 font-bold">Chọn bài viết cho vào series</div>
          <div className="mt-2 px-3 py-2 bg-gray-100 rounded">
            Bạn đang không có bài viết nào.
          </div>
        </div>
        <DialogFooter className="justify-end items-center">
          <DialogClose asChild>
            <Button type="button" variant="secondary" className=" rounded">
              Hủy bỏ
            </Button>
          </DialogClose>
          <Button type="button" variant="primary" className="px-4 ml-4 rounded">
            Tạo series
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
