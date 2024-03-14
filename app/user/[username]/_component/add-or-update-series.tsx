"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { addSeries, updateSeries } from "@/lib/queries";
import { CreateSerieSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Post, Series } from "@/types";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";
import { useSession } from "next-auth/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export const AddOrUpdateSeries = ({
  children,
  posts,
  series,
}: {
  children: React.ReactNode;
  series?: Series;
  posts: Post[];
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const session = useSession();
  const [chossingPosts, setChoosingPost] = useState<Post[]>(
    series ? series.posts : []
  );
  const mutateAddSeries = useMutation({
    mutationFn: addSeries,
  });
  const mutateUpdateSeries = useMutation({
    mutationFn: updateSeries,
  });
  const form = useForm<z.infer<typeof CreateSerieSchema>>({
    resolver: zodResolver(CreateSerieSchema),
    defaultValues: {
      description: series?.description ?? "",
      name: series?.name ?? "",
    },
  });
  const handleAddOrRemovePost = (post: Post) => {
    const exist = !!chossingPosts.find((p) => p.id === post.id);
    if (exist)
      setChoosingPost([...chossingPosts.filter((p) => p.id !== post.id)]);
    else setChoosingPost([...chossingPosts, post]);
  };
  const handleCreateOrUpdateSeries = (
    values: z.infer<typeof CreateSerieSchema>
  ) => {
    if (series) {
      mutateUpdateSeries.mutate(
        {
          slug: series.slug,
          data: { ...values, posts: chossingPosts.map((p) => p.id) },
          token: session.data?.user.token,
        },
        {
          onSuccess(data) {
            toast("Sửa series thành công");
            if (series.name === values.name) router.refresh();
            else
              router.push(
                `/user/${session.data?.user.username}/series/${data.data.data.slug}`
              );
            setOpen(false);
          },
          onError(error) {
            console.log(error);
          },
        }
      );
    } else
      mutateAddSeries.mutate(
        {
          data: { ...values, posts: chossingPosts.map((p) => p.id) },
          token: session.data?.user.token,
        },
        {
          onSuccess() {
            setChoosingPost([]);
            form.reset();
            toast("Tạo series thành công");
            setOpen(false);
          },
        }
      );
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="border bg-white max-h-[90%] overflow-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleCreateOrUpdateSeries)}>
            <div>
              <div className="text-18 font-bold pb-4 border-b ">
                {series ? "Sửa series" : "Tạo series"}
              </div>
              <div className="mt-4 font-bold">Tên series</div>
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-2">
                      Một chiếc tên dễ nhớ với người đọc
                    </FormLabel>
                    <FormControl className="w-full">
                      <input
                        type="text"
                        autoFocus
                        {...field}
                        className="px-3 py-2 outline-none border rounded w-full mt-2"
                        placeholder="Be creative..."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <div className="mt-4 font-bold">Mô tả series</div>
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="mt-2">
                      Chia sẻ ngắn gọn về nội dung series
                    </FormLabel>
                    <FormControl>
                      <textarea
                        className="px-3 py-2 outline-none border rounded w-full mt-2"
                        placeholder="Tóm tắt ngắn gọn..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Popover>
              <div className="mt-4 font-bold mb-2">
                Chọn bài viết cho vào series
              </div>
              <PopoverTrigger className="w-full">
                <div className="text-left cursor-pointer">
                  {posts.length === 0 ? (
                    <div className="mt-2 px-3 py-2 bg-gray-100 rounded">
                      Bạn đang không có bài viết nào.
                    </div>
                  ) : chossingPosts.length === 0 ? (
                    <div className="mt-2 px-3 py-2 bg-gray-100 rounded">
                      Bạn chưa chọn bài viết nào.
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-4 p-2 border-2">
                      {chossingPosts.map((p) => (
                        <div
                          className="rounded-full p-2 border text-sm font-bold"
                          key={p.id}
                        >
                          {p.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="center"
                className="w-[400px] md:w-[600px] max-w-[90vw] flex flex-col p-4 max-h-[400px] overflow-y-auto"
              >
                {posts.map((p) => (
                  <div
                    key={p.id}
                    className={cn(
                      "flex gap-4 cursor-pointer select-none p-2",
                      !!chossingPosts.find((post) => post.id === p.id) &&
                        "bg-green-200"
                    )}
                    onClick={() => handleAddOrRemovePost(p)}
                  >
                    <Image
                      src={p.thumbnail!}
                      alt=""
                      width={80}
                      height={80}
                      className="w-20 h-20 object-cover"
                    />
                    <p className="text-sm font-bold flex-1">{p.name}</p>
                    <input
                      readOnly
                      type="checkbox"
                      className="mx-2"
                      checked={!!chossingPosts.find((post) => post.id === p.id)}
                    />
                  </div>
                ))}
              </PopoverContent>
            </Popover>
            <DialogFooter className="justify-end items-center mt-2">
              <DialogClose asChild>
                <Button type="button" variant="secondary" className=" rounded">
                  Hủy bỏ
                </Button>
              </DialogClose>
              <Button
                type="submit"
                variant="primary"
                className="px-4 ml-4 rounded"
                disabled={mutateAddSeries.isPending}
              >
                {mutateAddSeries.isPending || mutateUpdateSeries.isPending ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : series ? (
                  "Sửa series"
                ) : (
                  "Tạo series"
                )}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
