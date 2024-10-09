import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Type Narrowing vs Type Widening",
  description:
    "Aprenda sobre os conceitos de Type Narrowing e Type Widening no TypeScript com explicações simples e exemplos práticos.",
  keywords:
    "TypeScript, Type Narrowing, Type Widening, Programação, Desenvolvimento Web",
  authors: [{ name: "Alves", url: "https://x.com/typescripting" }],
  openGraph: {
    title: "Type Narrowing vs Type Widening",
    description:
      "Aprenda sobre os conceitos de Type Narrowing e Type Widening no TypeScript com explicações simples e exemplos práticos.",
    url: "https://www.alvseven.com/content/type-narrowing-vs-type-widening",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Type Narrowing vs Type Widening",
    description:
      "Aprenda sobre os conceitos de Type Narrowing e Type Widening no TypeScript com explicações simples e exemplos práticos.",
    creator: "@typescripting",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-cols-12 md:mx-auto sm:mt-6 md:max-w-7xl">
      {children}
    </div>
  );
};

export default Layout;
