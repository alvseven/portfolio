import Link from "next/link"

import { TypescriptIcon } from "@/app/shared/components/icons/typescript"

type ArticleProps = {
    title: string
    url: string
}

export function Article({ title, url }: ArticleProps) {
    return (
        <div className="flex gap-4 items-center w-full">
            <TypescriptIcon width={24} height={24} />
            <Link href={url} target='_blank'>{title}</Link>
        </div>
    )
}