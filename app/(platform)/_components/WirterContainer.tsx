import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export const WriterContainer = () => {
  return (
    <div className="flex items-center mb-4 ">
      <div className="flex">
        <Image
          src="https://www.gravatar.com/avatar/d8d6e65667fcdeca659355b80972658c?d=wavatar&f=y"
          width={48}
          height={48}
          alt=""
          className="w-12 h-12 rounded-full"
        />
        <div className="ml-4">
          <Link href="/" className="text-14 ">
            Andy luong
          </Link>
          <div className="pr-2.5 text-[#909399] text-14">
            Until I feared I would lose it, I never loved to read....
          </div>
        </div>
      </div>
      <div>
        <Button
          variant={"secondary"}
          className="text-12 text-gray-700"
          size={"sm"}
        >
          Theo dõi
        </Button>
      </div>
    </div>
  );
};
