import { Article } from './(components)/article';

type Article = {
  id: number
  title: string
  url: string
}

export default async function Home() {

  const articles: Array<Article> = [
    {
      id: 1,
      title: "Homomorphic and isomorphic mapped types",
      url: "https://x.com/typescripting/status/1749839845348737123"
    },
    {
      id: 2,
      title: "Named/Labeled tuple elements",
      url: "https://x.com/typescripting/status/1723039943247659390"
    },
    {
      id: 3,
      title: "8 ways to use the Extract utility type",
      url: "https://x.com/typescripting/status/1735656532296020204"
    },
    {
      id: 4,
      title: "Understanding the satisfies operator",
      url: "https://x.com/typescripting/status/1784904251589685262"
    },
    {
      id: 5,
      title: "What is the 'as const' type assertion",
      url: "https://x.com/typescripting/status/1676736066378772481"
    },
    {
      id: 6,
      title: "Optional tuple elements",
      url: "https://x.com/typescripting/status/1696536080739438988"
    },
    {
      id: 7,
      title: "Function overloads",
      url: "https://x.com/typescripting/status/1683309751776452608"
    },
    {
      id: 8,
      title: "Type narrowing vs type widening",
      url: "https://x.com/typescripting/status/1744709184715706585"
    },
    {
      id: 9,
      title: "The Pick utility type",
      url: "https://medium.com/@alvseven/tipos-%C3%BAteis-no-typescript-conhecendo-o-pick-ac00dc26d882"
    },
    {
      id: 10,
      title: "The Partial utility type (and also a recursive Partial)",
      url: "https://medium.com/@alvseven/tipos-%C3%BAteis-no-typescript-conhecendo-o-partial-9088396fefb1"
    }
  ];

  return (
    <main className="flex flex-col justify-center items-center m-auto min-h-screen">
      <section className='flex flex-col items-start gap-4 p-8'>
        {articles.map(article => <Article key={article.id} title={article.title} url={article.url} />)}
      </section>
    </main>
  )
}
