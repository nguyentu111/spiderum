import { z } from "zod";
export const LoginSchema = z.object({
  email: z.string(),
  password: z.string().min(5, {
    message: "Mật khẩu ít nhất 5 kí tự.",
  }),
});
export const RegisterSchema = z.object({
  email: z.string().email("Email không hợp lệ."),
});
export const CreateAccountSchema = z
  .object({
    username: z
      .string()
      .min(6, "Tên tài khoản phải bao gồm 6-30 ký tự")
      .max(30, "Tên tài khoản phải bao gồm 6-30 ký tự"),
    alias: z.string(),
    password: z.string().min(8, "Mật khẩu ít nhât 8 kí tự"),
    password_confirmation: z.string(),
  })
  .superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Mật khẩu nhập lại không khớp",
        path: ["password_confirmation"],
      });
    }
  });
export const ResetpasswordSchema = z
  .object({
    password: z.string().min(8, "Mật khẩu ít nhât 8 kí tự"),
    password_confirmation: z.string(),
  })
  .superRefine(({ password_confirmation, password }, ctx) => {
    if (password_confirmation !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Mật khẩu nhập lại không khớp",
        path: ["password_confirmation"],
      });
    }
  });
export const CreateSerieSchema = z.object({
  name: z.string().min(6, "Tên ít nhât 6 kí tự"),
  description: z.string().optional(),
});
export const updateAccountSchema = z.object({
  alias: z.string().min(6, "Tên ít nhât 6 kí tự"),
  description: z
    .string()
    .max(150, "Mô tả không quá 150 kí tự")
    .optional()
    .nullable(),
  wallpaper: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  day: z.string(),
  month: z.string(),
  year: z.string(),
  gender: z.enum(["male", "female"]),
});
