"use client";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";
import { Logo } from "./logo";
import { ClientOnly } from "./client-only";

export const ResponsiveLogo = () => {
  const isPc = useMediaQuery("(min-width: 1192px)");

  return (
    <>
      {isPc ? (
        <Logo />
      ) : (
        <Link href="/" className="block" aria-label="Trang chủ">
          <div className="items-center gap-x-2 ">
            <Image src="/logo.png" alt="Logo" height={47} width={40} />
          </div>
        </Link>
      )}
    </>
  );
};
