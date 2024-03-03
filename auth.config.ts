// import bcrypt from "bcryptjs";
import type { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schema";
import { axiosCient } from "./lib/fetcher";
// import Github from "next-auth/providers/github";
// import Google from "next-auth/providers/google";

// import { LoginSchema } from "@/schemas";
// import { getUserByEmail } from "@/data/user";

export default {
  providers: [
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
    // Github({
    //   clientId: process.env.GITHUB_CLIENT_ID,
    //   clientSecret: process.env.GITHUB_CLIENT_SECRET,
    // }),
    Credentials({
      async authorize(credentials): Promise<User | null> {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          try {
            const rs = await axiosCient.post("/login", validatedFields.data);
            const data = rs.data;
            return data;
          } catch (error) {
            return null;
          }
        }
        return null;
      },
    }),
  ],
  trustHost: true,
} satisfies NextAuthConfig;
