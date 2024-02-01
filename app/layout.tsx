import "./globals.css";
import { cn } from "@/lib/utils";
import { notoSans } from "./fonts";
import { ProgressBar } from "@/components/progress-bar";
import { metadata } from "@/lib/metadata";
import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";
export { metadata };

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body
          className={cn(
            notoSans.className,
            "selection:bg-[#39f] selection:text-white"
          )}
        >
          {children}
          <ProgressBar />
        </body>
      </html>
    </SessionProvider>
  );
}
