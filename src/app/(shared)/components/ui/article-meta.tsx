"use client";

import { type StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import { CalendarDays, Clock } from "lucide-react";

import { ShareButton } from "./share-button";

interface ArticleMetaProps {
  title: string;
  description: string;
  createdAt: string;
  updatedAt?: string;
  readingTime: string;
  coverImage: string | StaticImageData;
  coverAlt: string;
  className?: string;
}

export function ArticleMeta({
  title,
  description,
  createdAt,
  updatedAt,
  readingTime,
  coverImage,
  coverAlt,
  className,
}: ArticleMetaProps) {
  const pathname = usePathname();

  return (
    <>
      <h1 className="opacity-100 font-bold text-2xl  text-pretty text-title lg:text-3xl tracking-wide">
        {title}
      </h1>

      <div className={`relative hidden flex-col mt-1 md:flex ${className}`}>
        {/* <div className="w-full rounded-lg overflow-hidden shadow-md">
          <Image
            src={coverImage}
            alt={coverAlt}
            className="w-full object-cover"
            priority
          />
          </div> */}

        <div className="flex-wrap gap-4 text-sm text-muted-foreground mt-2 justify-between flex">
          <div className="flex items-center justify-center gap-1.5">
            <CalendarDays className="h-4 w-4" />
            <p className="font-mono text-sm mt-1">{createdAt}</p>
          </div>

          {updatedAt && (
            <div className="flex items-center justify-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              <p className="font-mono text-sm mt-1">
                Atualizado em {updatedAt}
              </p>
            </div>
          )}

          <div className="flex items-centet gap-4">
            <div className="items-center justify-center gap-1.5 flex">
              <Clock className="h-4 w-4" />
              <p className="font-mono text-sm mt-1">{readingTime}</p>
            </div>
            <ShareButton
              url={pathname}
              description={description}
              className="mt-2 sm:mt-0"
            />
          </div>
        </div>
      </div>
    </>
  );
}
