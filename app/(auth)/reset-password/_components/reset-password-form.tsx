"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { RegisterSchema, ResetpasswordSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { axiosClient } from "@/lib/fetcher";

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
import { authenticate } from "@/actions/login";

export const ResetPasswordForm = ({ email }: { email: string }) => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof ResetpasswordSchema>>({
    resolver: zodResolver(ResetpasswordSchema),
  });

  const onSubmit = (values: z.infer<typeof ResetpasswordSchema>) => {
    setError("");

    startTransition(async () => {
      try {
        const rs = await axiosClient.post("/reset-password", {
          ...values,
          email,
        });
        console.log("data:", rs.data);

        toast.success("Đổi mật khẩu thành công.");
        console.log({
          email,
          password: values.password,
        });
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
      } catch (e) {
        if (e instanceof AxiosError)
          setError(e.response?.data.message ?? "Something went wrong!");
        else setError("Something went wrong!");
      }
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 w-full md:w-[400px] mx-auto">
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
          className="flex flex-col items-center justify-center w-full gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          {error && (
            <>
              <p className="text-sm text-red-500">{error}</p>
            </>
          )}
          <p>Đặt lại mật khẩu cho {email.split("@")[0]}</p>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl className="w-full">
                  <input
                    className="outline-none border w-full h-10 px-2 py-1.5"
                    type="password"
                    placeholder="Mật khẩu"
                    autoFocus
                    required
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
                    className="outline-none border w-full h-10 px-2 py-1.5"
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    autoFocus
                    required
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex w-full">
            <input
              disabled={isPending}
              type="submit"
              value={isPending ? "Đang lưu" : "Xác nhận đặt lại mật khẩu"}
              id="submit-btn"
              className="w-full px-4 text-sm py-2 text-white bg-[#2fb5fa] hover:bg-[#1d98d8] cursor-pointer disabled:cursor-not-allowed"
            />
          </div>
        </form>
      </Form>
    </div>
  );
};
