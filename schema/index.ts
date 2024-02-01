import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email không hợp lệ",
  }),
  password: z.string().min(5, {
    message: "Mật khẩu ít nhất 5 kí tự",
  }),
});
