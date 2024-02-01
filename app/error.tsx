"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import DieImage from "@/public/assets/die.png";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="w-4/5 md:w-2/5 mx-auto ">
        <Image
          src={DieImage}
          sizes="(min-width: 1192px) 40vw, (min-width: 768px) 50vw, 80vw"
          alt="404 image"
          style={{
            objectFit: "cover",
          }}
          priority
        />
      </div>
      <div className="px-4 md:px-12 text-white py-1 md:py-3 text-lg md:text-4xl bg-[#ffbd45] font-bold rounded-xl">
        500
      </div>
      <div className="text-xl md:text-4xl mt-2 font-bold">Sever error</div>
      <div className="text-base md:text-xl  mt-3 font-medium text-center">
        Có lỗi gì đó ở server rồi :(, thử lại sau bạn nhé
      </div>
      <Button variant={"primary"} className="rounded-full mt-3" asChild>
        <Link href="/" className=" md:text-lg">
          Trở về trang chủ
        </Link>
      </Button>
    </div>
  );
}
