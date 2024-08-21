import Link from "next/link";
import { Logo } from "../icons/logo";

export const Header = () => (
  <header className="top-0 z-10 sticky flex justify-between items-center border-slate-800 bg-background px-8 lg:px-12 py-5 border-b border-double w-full">
    <Link href="/" className="animate-pulse">
      <Logo />
    </Link>
    <nav>
      <ul className="flex items-center">
        {/* <li>Primeiro </li>
        <li>Segundo </li>
        <li>Terceiro</li> */}
      </ul>
    </nav>
  </header>
);
