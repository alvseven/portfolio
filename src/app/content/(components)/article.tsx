import Link from "next/link";

import { TypescriptIcon } from "@/app/shared/components/icons/typescript";
import { TwitterIcon } from "@/app/shared/components/icons/twitter";
import { MediumIcon } from "@/app/shared/components/icons/medium-icon";

export type ArticleProps = {
  id?: number;
  title: string;
  source: "Twitter" | "Medium" | (string & {});
  url: string;
};

export function Article({ title, source, url }: ArticleProps) {
  return (
    <div className="flex items-center gap-4 w-full text-xl">
      <TypescriptIcon className="md:block hidden w-6 h-6" />
      <Link
        href={url}
        target={
          source === "Twitter" || source === "Medium" ? "_blank" : "_self"
        }
        className="hover:underline hover:underline-offset-2"
      >
        {title}
      </Link>
      {source === "Medium" && (
        <MediumIcon className="md:block hidden w-5 h-5" />
      )}
      {source === "Twitter" && (
        <TwitterIcon className="md:block hidden w-5 h-5" />
      )}
    </div>
  );
}
