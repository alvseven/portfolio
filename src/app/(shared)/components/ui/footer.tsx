import Image from "next/image";
import Link from "next/link";

import { TwitterIcon } from "../icons/twitter";
import { GithubIcon } from "../icons/github";
import { LinkedinIcon } from "../icons/linkedin";

import AlvesSignature from "@/../public/images/alves-signature.png";

export const Footer = () => {
  return (
    <footer className="border-slate-800 bg-background py-4 border-t border-double">
      <div className="flex sm:flex-row flex-col items-center gap-8 sm:gap-0 px-8 lg:px-12">
        <div className="flex-1">
          <Image
            src={AlvesSignature}
            className="max-w-[160px] max-h-[70px]"
            alt="My signature of my name"
          />
        </div>
        <div className="flex flex-none justify-end items-center gap-10">
          <Link
            className="align-bottom font-sans text-title text-xl hover:underline"
            href="https://x.com/typescripting"
            target="_blank"
          >
            <TwitterIcon />
          </Link>
          <Link
            className="font-sans text-title text-xl hover:underline"
            href="https://github.com/alvseven"
            target="_blank"
          >
            <GithubIcon />
          </Link>
          <Link
            className="font-sans text-title text-xl hover:underline"
            href="https://linkedin.com/in/alves7"
            target="_blank"
          >
            <LinkedinIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
};
