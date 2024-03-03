import NextAuth, { type DefaultSession } from "next-auth";
import { UserWithInfo } from "./types";

declare module "next-auth" {
  interface Session {
    user: UserWithInfo;
  }
  interface Token {}
}
