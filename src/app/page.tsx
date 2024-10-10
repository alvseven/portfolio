import Link from "next/link";
import type { ComponentProps } from "react";

import { BrainIcon } from "./(shared)/components/icons/brain";
import { Article } from "./(shared)/components/ui/article";

export default function Home() {
  const articles: Array<ComponentProps<typeof Article>> = [
    {
      id: 0,
      title: "Type vs interface [WIP]",
      url: "/type-vs-interface",
      source: "Blog",
    },
    {
      id: 1,
      title: "Como eu escolhi lidar com pessoas",
      url: "/como-eu-escolhi-lidar-com-pessoas",
      source: "Blog",
      icon: <BrainIcon className="md:block hidden w-6 h-6" />,
    },
    {
      id: 2,
      title: "Type narrowing vs type widening",
      url: "/type-narrowing-vs-type-widening",
      source: "Blog",
    },
    {
      id: 3,
      title: "Homomorphic and non homomorphic mapped types",
      url: "https://x.com/typescripting/status/1749839845348737123",
      source: "Twitter",
    },
    {
      id: 4,
      title: "8 ways to use the Extract utility type",
      url: "https://x.com/typescripting/status/1735656532296020204",
      source: "Twitter",
    },
    {
      id: 5,
      title: "Understanding the satisfies operator",
      url: "https://x.com/typescripting/status/1784904251589685262",
      source: "Twitter",
    },
    {
      id: 6,
      title: "What is the 'as const' type assertion",
      url: "https://x.com/typescripting/status/1676736066378772481",
      source: "Twitter",
    },
    {
      id: 7,
      title: "Optional tuple elements",
      url: "https://x.com/typescripting/status/1696536080739438988",
      source: "Twitter",
    },
    {
      id: 8,
      title: "Function overloads",
      url: "https://x.com/typescripting/status/1683309751776452608",
      source: "Twitter",
    },
    {
      id: 9,
      title: "Named/Labeled tuple elements",
      url: "https://x.com/typescripting/status/1723039943247659390",
      source: "Twitter",
    },
    {
      id: 10,
      title: "The Pick utility type",
      url: "https://medium.com/@alvseven/tipos-%C3%BAteis-no-typescript-conhecendo-o-pick-ac00dc26d882",
      source: "Medium",
    },
    {
      id: 11,
      title: "The Partial utility type (and also a recursive Partial)",
      url: "https://medium.com/@alvseven/tipos-%C3%BAteis-no-typescript-conhecendo-o-partial-9088396fefb1",
      source: "Medium",
    },
  ];

  return (
    <section className="flex  justify-center items-center m-auto w-full md:w-3/4 lg:w-2/4 min-h-[74.5vh]">
      <main className="flex flex-col justify-center items-center m-auto min-h-[78vh] font-sans">
        <section className="flex flex-col items-start gap-4 p-8">
          {articles.map((article) => (
            <Article
              key={article.id}
              title={article.title}
              url={article.url}
              source={article.source}
              icon={article?.icon}
            />
          ))}
        </section>
      </main>
    </section>
  );
}
