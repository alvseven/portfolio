import type { ComponentProps } from "react";
import { Article } from "./(components)/article";

export default async function Home() {
  const articles: Array<ComponentProps<typeof Article>> = [
    {
      id: 1,
      title: "Type narrowing vs Type Widening",
      url: "/content/type-narrowing-vs-type-widening",
      source: "",
    },
    {
      id: 2,
      title: "Homomorphic and non homomorphic mapped types",
      url: "https://x.com/typescripting/status/1749839845348737123",
      source: "Twitter",
    },
    {
      id: 3,
      title: "8 ways to use the Extract utility type",
      url: "https://x.com/typescripting/status/1735656532296020204",
      source: "Twitter",
    },
    {
      id: 4,
      title: "Understanding the satisfies operator",
      url: "https://x.com/typescripting/status/1784904251589685262",
      source: "Twitter",
    },
    {
      id: 5,
      title: "What is the 'as const' type assertion",
      url: "https://x.com/typescripting/status/1676736066378772481",
      source: "Twitter",
    },
    {
      id: 6,
      title: "Optional tuple elements",
      url: "https://x.com/typescripting/status/1696536080739438988",
      source: "Twitter",
    },
    {
      id: 7,
      title: "Function overloads",
      url: "https://x.com/typescripting/status/1683309751776452608",
      source: "Twitter",
    },
    {
      id: 8,
      title: "Named/Labeled tuple elements",
      url: "https://x.com/typescripting/status/1723039943247659390",
      source: "Twitter",
    },
    {
      id: 9,
      title: "The Pick utility type",
      url: "https://medium.com/@alvseven/tipos-%C3%BAteis-no-typescript-conhecendo-o-pick-ac00dc26d882",
      source: "Medium",
    },
    {
      id: 10,
      title: "The Partial utility type (and also a recursive Partial)",
      url: "https://medium.com/@alvseven/tipos-%C3%BAteis-no-typescript-conhecendo-o-partial-9088396fefb1",
      source: "Medium",
    },
  ];

  return (
    <main className="flex flex-col justify-center items-center m-auto min-h-[78vh] font-sans">
      <section className="flex flex-col items-start gap-4 p-8">
        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            url={article.url}
            source={article.source}
          />
        ))}
      </section>
    </main>
  );
}
