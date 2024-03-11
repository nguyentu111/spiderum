import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

export const useAuth = () => {
  const session = useSession();
  const router = useRouter();
  const route = usePathname();
  const checkAuth = () => {
    if (!session.data?.user) router.push(`/login?callbackUrl=${route}`);
  };
  return {
    session,
    checkAuth,
  };
};
