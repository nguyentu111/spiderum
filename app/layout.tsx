import "./globals.css";
import { cn } from "@/lib/utils";
import { notoSans } from "./fonts";
import { ProgressBar } from "@/components/progress-bar";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
import { metadata } from "@/lib/metadata";
import { Toaster } from "@/components/ui/sonner";
import QueryProvider from "@/components/providers/query-provider";

export { metadata };
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <QueryProvider>
        <html lang="en">
          <body
            className={cn(
              notoSans.className,
              "selection:bg-[#39f] selection:text-white"
            )}
          >
            {children}
            <ProgressBar />
            <Toaster />
          </body>
        </html>
      </QueryProvider>
    </SessionProvider>
  );
}
