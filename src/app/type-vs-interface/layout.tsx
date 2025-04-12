import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Type vs Interface no TypeScript: Uma Análise Profunda",
  description:
    "Comparação completa entre types e interfaces no TypeScript, explorando principais diferenças, casos de uso e melhores práticas com TypeScript.",
  keywords:
    "typescript, type vs interface, interfaces typescript, type aliases, diferença type interface typescript, quando usar type typescript, quando usar interface typescript, typescript tutorial, typescript avançado, melhores práticas typescript 2025",
  authors: [{ name: "Alves", url: "https://alvseven.com" }],
  openGraph: {
    title: "Type vs Interface no TypeScript: Uma Análise Profunda",
    description:
      "Explore as principais diferenças entre types e interfaces do TypeScript com exemplos práticos.",
    url: "https://www.alvseven.com/type-vs-interface-deep-dive",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Type vs Interface no TypeScript: Uma Análise Profunda",
    description:
      "Explore as principais diferenças entre types e interfaces do TypeScript com exemplos práticos.",
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
