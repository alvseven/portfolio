"use client";

import Link from "next/link";
import { Logo } from "../icons/logo";
import { ArrowGoBackIcon } from "../icons/arrow-go-back";
import { usePathname, useRouter } from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const pathname = usePathname();
  const isBasePath = pathname === "/";

  return (
    <header className="top-0 z-10 sticky flex justify-between items-center border-slate-800 bg-background px-8 lg:px-12 py-5 border-b border-double w-full">
      <Link href="/" className="animate-pulse">
        <Logo />
      </Link>
      <nav>
        <ul className="flex items-center">
          {!isBasePath && (
            <li>
              <button
                onClick={() => {
                  router.back();
                }}
              >
                <ArrowGoBackIcon className="w-6 h-6" />
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
