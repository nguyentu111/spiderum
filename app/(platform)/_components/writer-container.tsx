"use client";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { followWriter, unfollowWriter } from "@/lib/queries";
import { UserWithInfo } from "@/types";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const WriterContainer = ({ user }: { user: UserWithInfo }) => {
  const { checkAuth, session } = useAuth();
  const [isFollowed, setIsFollowed] = useState(user.is_followed);
  const mutateFollow = useMutation({
    mutationFn: followWriter,
  });
  const mutateUnFollow = useMutation({
    mutationFn: unfollowWriter,
  });
  const handleFollow = () => {
    checkAuth();
    setIsFollowed(true);
    mutateFollow.mutate({
      data: { target_id: user.id },
      token: session.data?.user.token!,
    });
  };
  const handleUnFollow = () => {
    checkAuth();
    setIsFollowed(false);
    mutateUnFollow.mutate({
      data: { target_id: user.id },
      token: session.data?.user.token!,
    });
  };
  return (
    <div className="flex items-center mb-4 ">
      <div className="flex">
        <Image
          src={user.avatar_url!}
          width={48}
          height={48}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <Link href={`/user/${user.username}`} className="text-14 ">
            {user.alias}
          </Link>
          <div className="pr-2.5 text-[#909399] text-14">
            Until I feared I would lose it, I never loved to read....
          </div>
        </div>
      </div>
      <div>
        {isFollowed ? (
          <Button
            variant={"secondary"}
            className="text-12 text-blue-500"
            size={"sm"}
            onClick={handleUnFollow}
          >
            Đang theo dõi
          </Button>
        ) : (
          <Button
            variant={"secondary"}
            className="text-12 text-gray-700"
            size={"sm"}
            onClick={handleFollow}
          >
            Theo dõi
          </Button>
        )}
      </div>
    </div>
  );
};
