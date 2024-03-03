"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { RegisterSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosCient } from "@/lib/fetcher";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { AxiosError } from "axios";

export const ForgotPasswordForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError("");

    startTransition(async () => {
      try {
        const rs = await axiosCient.post("/forgot-password", values);
        toast.success("Email đã được gửi.");
      } catch (e) {
        if (e instanceof AxiosError)
          setError(e.response?.data.message ?? "Something went wrong!");
        else setError("Something went wrong!");
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 w-full md:w-[350px] mx-auto">
      <Link href="/" aria-label="Trang chủ">
        <Image
          src="/assets/spiderum-logo.png"
          alt="logo"
          width={87}
          height={80}
          className="mb-5"
          priority
        />
      </Link>
      <Form {...form}>
        <form
          className="flex flex-col items-center justify-center w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {error && (
            <>
              <p className="text-sm text-red-500">{error}</p>
            </>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm">
                  {" "}
                  Vui lòng nhập địa chỉ email của bạn để được cấp lại mật khẩu
                </FormLabel>
                <FormControl className="w-full">
                  <input
                    className="outline-none border w-full h-10 px-2 py-1.5"
                    type="text"
                    placeholder="email@gmail.com"
                    autoFocus
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex mt-4">
            <span className="text-sm">
              Thư xác nhận sẽ được gửi vào hòm thư của bạn
            </span>
            <input
              disabled={isPending}
              type="submit"
              value={isPending ? "Đang gửi..." : "Gửi"}
              id="submit-btn"
              className="mt-4 px-4 text-sm py-1 text-white bg-[#2fb5fa] hover:bg-[#1d98d8] cursor-pointer disabled:cursor-not-allowed"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
