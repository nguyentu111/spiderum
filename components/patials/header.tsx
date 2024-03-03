"use client";
import { Facebook } from "@/components/icons/Facebook";
import { Search } from "@/components/icons/Search";
import { Spotify } from "@/components/icons/Spotify";
import { Youtube } from "@/components/icons/Youtube";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HeaderAccount } from "./header-account";
import { HeaderCategory } from "./header-category";
import { Container } from "@/components/container";
import { useSearch } from "@/hooks/use-search";
import { HeaderSearch } from "./header-search";
import { cn } from "@/lib/utils";
import { ResponsiveLogo } from "../responsive-logo";
import { useSession } from "next-auth/react";
interface HeaderProps {
  hasSearch?: boolean;
  hasMessage?: boolean;
  hasCategories?: boolean;
  hasSocials?: boolean;
  hasNewPostBtn?: boolean;
  hasShadow?: boolean;
  hasEmptySection?: boolean;
  fixed?: boolean;
}
export const Header = ({
  hasCategories,
  hasMessage,
  hasSearch,
  hasSocials,
  hasNewPostBtn,
  hasShadow,
  hasEmptySection,
  fixed,
}: HeaderProps) => {
  const isOpen = useSearch((state) => state.isOpen);
  const onOpen = useSearch((state) => state.onOpen);
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <nav
      style={{
        boxShadow: hasShadow ? "4px 4px 20px rgba(0,0,0,.1)" : undefined,
      }}
      className={cn(fixed && "fixed top-0 right-0 left-0", " relative")}
    >
      <Container className="py-2 z-[999]">
        {hasSearch && isOpen ? (
          <HeaderSearch />
        ) : (
          <MainHeader
            isSignedIn={!!user}
            onOpen={onOpen}
            hasMessage={hasMessage}
            hasSocials={hasSocials}
            hasNewPostBtn={hasNewPostBtn}
            hasSearch={hasSearch}
          />
        )}
      </Container>
      {user && hasCategories ? (
        <Container className="hidden lg:block">
          <HeaderCategory />
        </Container>
      ) : null}
      {hasEmptySection && <div className="h-[3.5rem] w-full"></div>}
    </nav>
  );
};

const MainHeader = ({
  isSignedIn,
  onOpen,
  hasMessage,
  hasNewPostBtn,
  hasSocials,
  hasSearch,
}: {
  isSignedIn: boolean;
  onOpen: () => void;
  hasSocials?: boolean;
  hasMessage?: boolean;
  hasNewPostBtn?: boolean;
  hasSearch?: boolean;
}) => {
  return (
    <div className="h-12 flex items-center justify-between">
      <div className="flex items-center w-full">
        <ResponsiveLogo />
        {hasSocials && (
          <div className="hidden md:flex border-l-[1px] ml-4 pl-2 mr-auto">
            <div className="flex">
              <a
                href="https://www.facebook.com/Spiderum"
                className="w-8 h-8 flex items-center justify-center mr-2"
                aria-label="Facebook"
              >
                <Facebook className="text-gray-500" size={24} />
              </a>
              <a
                aria-label="Youtube"
                href="https://www.youtube.com/spiderum"
                className="w-8 h-8 flex items-center justify-center mr-2"
              >
                <Youtube className="text-gray-500" size={24} />
              </a>
              <a
                aria-label="Spotify"
                href="https://anchor.fm/spiderum"
                className="w-8 h-8 flex items-center justify-center mr-2"
              >
                <Spotify className="text-gray-500" size={24} />
              </a>
            </div>
          </div>
        )}

        <div className="flex ml-auto items-center">
          {hasSearch && (
            <Button
              aria-label="Tìm kiếm"
              onClick={onOpen}
              variant="ghost"
              size="lg"
              className="w-10 flex items-center justify-center mx-1"
            >
              <Search
                className="text-gray-400"
                width={25}
                height={25}
                viewBox="0 0 500 500"
              />
            </Button>
          )}

          {isSignedIn ? (
            <>
              <HeaderAccount
                hasMessage={hasMessage}
                hasNewPostBtn={hasNewPostBtn}
              />
            </>
          ) : (
            <div className="flex items-center justify-between ml-2">
              <Link
                href={"/register"}
                className="hidden md:block mr-4"
                aria-label="Đăng kí"
              >
                Đăng kí
              </Link>
              <Button
                className="px-6 py-2 rounded-full "
                variant={"primary"}
                size={"lg"}
                asChild
              >
                <Link href={"/login"} className="" aria-label="Đăng nhập">
                  Đăng nhập
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
