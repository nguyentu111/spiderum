"use client";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState, useTransition } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/actions/login";
import { LoginSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const LoginForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");

    startTransition(() => {
      authenticate(values)
        .then((errorMessage) => {
          if (errorMessage) {
            form.reset();
            setError(errorMessage);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col items-center justify-center w-full"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl className="w-full">
                <input
                  className="outline-1 outline-[#ccc] border w-full h-10 px-2 py-1.5"
                  type="text"
                  placeholder="Tên đăng nhập hoặc email"
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
                  className="outline-1 outline-[#ccc] border w-full h-10 px-2 py-1.5 mt-4"
                  type="password"
                  placeholder="Mật khẩu"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <input
          disabled={isPending}
          type="submit"
          value={"Đăng nhập"}
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
