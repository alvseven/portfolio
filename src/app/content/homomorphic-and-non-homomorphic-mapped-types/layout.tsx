import type { ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homomorphic Mapped Types",
  description:
    "Aprenda sobre os conceitos de homomorphic mapped types no TypeScript com explicações simples e exemplos práticos.",
  keywords:
    "TypeScript, Type Narrowing, Type Widening, Programação, Desenvolvimento Web",
  authors: [{ name: "Alves", url: "https://x.com/typescripting" }],
  openGraph: {
    title: "Homomorphic Mapped Types",
    description:
      "Aprenda sobre os conceitos de homomorphic mapped types no TypeScript com explicações simples e exemplos práticos.",
    url: "https://www.alvseven.com/content/homomorphic-mapped-types",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homomorphic Mapped Types",
    description:
      "Aprenda sobre os conceitos de homomorphic mapped types no TypeScript com explicações simples e exemplos práticos.",
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
