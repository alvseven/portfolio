"use client";

import Link from "next/link";
import { Logo } from "../icons/logo";
import { ArrowGoBackIcon } from "../icons/arrow-go-back";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="top-0 z-10 sticky flex justify-between items-baseline border-slate-800 bg-background px-8 lg:px-12 py-5 border-b border-double w-full">
      <Link href="/" className="animate-pulse">
        <Logo />
      </Link>
      <nav>
        <ul className="flex items-center">
          {pathname.includes("/content/") && (
            <li>
              <Link className="font-mono text-lg lg:text-xl" href="/content">
                <ArrowGoBackIcon className="w-6 h-6" />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
