"use server";
import { signIn } from "@/auth";
import { LoginSchema } from "@/schema";
import { AuthError } from "next-auth";
import { z } from "zod";

export async function authenticate(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return "Thông tin đăng nhập không hợp lệ!";
  }

  const { email, password } = validatedFields.data;
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: "/",
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Sai thông tin đăng nhập.";
        default:
          return "Lỗi server, hãy thử lại sau.";
      }
    }
    throw error;
  }
}
