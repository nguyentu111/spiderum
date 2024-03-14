// import bcrypt from "bcryptjs";
import type { NextAuthConfig, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "./schema";
import { axiosClient } from "./lib/fetcher";
// import Github from "next-auth/providers/github";
// import Google from "next-auth/providers/google";
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
          try {
            const rs = await axiosClient.post("/login", validatedFields.data);
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
