"use client";

import Image from "next/image";
import { useMediaQuery } from "usehooks-ts";

export const BannerImage = () => {
  const isWideScreen = useMediaQuery("(min-width: 768px)");
  return (
    <Image
      src={
        isWideScreen ? "/assets/homebanner.png" : "/assets/banner_mobile.png"
      }
      sizes="100vw"
      alt="home banner"
      className="object-cover z-10"
      priority={true}
      fill
    />
  );
};
