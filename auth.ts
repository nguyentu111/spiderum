import NextAuth, { Session, NextAuthConfig, User } from "next-auth";
import authConfig from "@/auth.config";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {},
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
    async jwt({ token, account, user, session, trigger }) {
      if (user) {
        //@ts-ignore
        token.user = user.user;
        //@ts-ignore
        token.user.token = user.token;
      }
      if (trigger == "update") {
        console.log(token, session);
        //@ts-ignore
        return { ...token, user: { ...session.user, token: token.user.token } };
      }
      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
} satisfies NextAuthConfig);
