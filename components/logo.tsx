import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <Link href="/" className="block" aria-label="Trang chủ">
      <div className="items-center gap-x-2 ">
        <Image src="/logo.png" alt="Logo" height={25} width={110} priority />
      </div>
    </Link>
  );
};
