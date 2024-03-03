"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { authenticate } from "@/actions/login";
import { CreateAccountSchema, LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { axiosCient } from "@/lib/fetcher";
import { AxiosError } from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const CreateAccountForm = ({
  email,
  avatar,
}: {
  email: string;
  avatar: string | undefined;
}) => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof CreateAccountSchema>>({
    resolver: zodResolver(CreateAccountSchema),
    // defaultValues: {
    //   password: "",
    //   alias:"",

    // },
  });

  const onSubmit = (values: z.infer<typeof CreateAccountSchema>) => {
    setError("");

    startTransition(async () => {
      try {
        const rs = await axiosCient.post("/auth/users/store", {
          ...values,
          email,
          avatar_url:
            avatar ??
            "https://res.cloudinary.com/desegehaa/image/upload/v1709434601/spiderum/default-avatars/uqyg9qebd1yjhprh0ffd.jpg",
        });
        toast.success("Tạo tài khoản thành công");
        authenticate({
          email,
          password: values.password,
        })
          .then((errorMessage) => {
            if (errorMessage) {
              form.reset();
              setError(errorMessage);
            }
          })
          .catch(() => setError("Something went wrong"));
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.message);
        }
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormControl className="w-full">
                <input
                  className="outline-1 outline-[#ccc] border w-full h-10 px-2 py-1.5"
                  type="text"
                  placeholder="Tên đăng nhập"
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="alias"
          render={({ field }) => (
            <FormItem>
              <FormControl className="w-full">
                <input
                  className="outline-1 outline-[#ccc] border w-full h-10 px-2 py-1.5"
                  type="text"
                  placeholder="Tên hiển thị"
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl className="w-full">
                <input
                  className="outline-1 outline-[#ccc] border w-full h-10 px-2 py-1.5"
                  type="password"
                  placeholder="Mật khẩu"
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password_confirmation"
          render={({ field }) => (
            <FormItem>
              <FormControl className="w-full">
                <input
                  className="outline-1 outline-[#ccc] border w-full h-10 px-2 py-1.5"
                  type="password"
                  placeholder="Nhập lại mật khẩu"
                  autoFocus
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <p className="text-sm">
          Bằng việc nhấn vào Đăng ký, bạn đã đồng ý với{" "}
          <span className="hover:underline text-blue-500 cursor-pointer">
            Điều khoản sử dụng
          </span>{" "}
          và{" "}
          <span className="hover:underline text-blue-500 cursor-pointer">
            Chính sách bảo mật
          </span>{" "}
          của Spiderum
        </p>
        <input
          disabled={isPending}
          type="submit"
          value={"Đăng kí"}
          id="submit-btn"
          className="mt-4 w-full h-10 px-2 py-1.5 text-white bg-[#2fb5fa] hover:bg-[#1d98d8] cursor-pointer disabled:cursor-not-allowed"
        />
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {error && (
            <>
              {/* < className="h-5 w-5 text-red-500" /> */}
              <p className="text-sm text-red-500">{error}</p>
            </>
          )}
        </div>
      </form>
    </Form>
  );
};
