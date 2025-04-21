import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuplas Nomeadas no TypeScript: Melhore a Legibilidade do Seu Código",
  description:
    "Aprenda como usar tuplas nomeadas no TypeScript para tornar seu código mais descritivo e fácil de entender, com exemplos práticos e casos de uso.",
  keywords:
    "typescript, tuplas nomeadas, labeled tuples, named tuples, typescript 4.0, typescript 5.2, tipos typescript, legibilidade código, boas práticas typescript, tipos avançados typescript, tuples vs arrays",
  authors: [{ name: "Alves", url: "https://alvseven.com" }],
  openGraph: {
    title:
      "Tuplas Nomeadas no TypeScript: Melhore a Legibilidade do Seu Código",
    description:
      "Domine tuplas nomeadas no TypeScript e torne seu código mais expressivo e auto-documentado.",
    url: "https://www.alvseven.com/tuplas-nomeadas",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Tuplas Nomeadas no TypeScript: Melhore a Legibilidade do Seu Código",
    description:
      "Aprenda a usar tuplas nomeadas para código mais claro e documentado no TypeScript",
    creator: "@typescripting",
  },
  category: "Programação",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-12 md:mx-auto sm:mt-6 md:max-w-7xl">
      {children}
    </div>
  );
}
