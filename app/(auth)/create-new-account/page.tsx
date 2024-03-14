import { Metadata } from "next";
import React from "react";
import { CreateAccountForm } from "./components/create-account-form";
import Link from "next/link";
import Image from "next/image";
import { axiosClient } from "@/lib/fetcher";
import { AxiosError } from "axios";
import { cloudinary } from "@/lib/cloudinary";

type Props = {
  searchParams: { token: string | undefined };
};
export const metadata: Metadata = {
  title: "Create new account",
};

const page = async ({ searchParams: { token } }: Props) => {
  let avatars: any[] = [];
  await cloudinary.api
    .resources({
      type: "upload",
      prefix: "spiderum/default-avatars", // add your folder
    })
    .then(function (result) {
      avatars = result?.resources ?? [];
    });
  let errorMessage;
  let email;
  console.log(avatars);
  try {
    const rs = await axiosClient.post("/auth/users/get-email-by-token", {
      token,
    });
    email = rs.data.email;
  } catch (error) {
    if (error instanceof AxiosError) {
      errorMessage = error.response?.data.message;
    }
    return (
      <div className="flex flex-col items-center justify-center h-screen px-6 w-full md:w-[400px] mx-auto">
        <p>{errorMessage ?? "Server error!"}</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 w-full md:w-[400px] mx-auto">
      <Link href="/" aria-label="Trang chủ">
        <Image
          src="/assets/spiderum-logo.png"
          alt="logo"
          width={87}
          height={80}
          className="mb-5"
          priority
        />
      </Link>
      <CreateAccountForm
        email={email}
        avatar={avatars[Math.floor(Math.random() * avatars.length)]?.secure_url}
      />
    </div>
  );
};

export default page;
