import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Understanding satisfies keyword",
  description:
    "Aprenda a utilizar a keyword satisfies, que problema ela resolve e seus casos de uso de maneira simples",
  keywords: "TypeScript, satisfies, Programação, Desenvolvimento Web",
  authors: [{ name: "Alves", url: "https://x.com/typescripting" }],
  openGraph: {
    title: "Understanding satisfies keyword",
    description:
      "Aprenda a utilizar a keyword satisfies, que problema ela resolve e seus casos de uso de maneira simples",
    url: "https://www.alvseven.com/content/type-narrowing-vs-type-widening",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding satisfies keyword",
    description:
      "Aprenda a utilizar a keyword satisfies, que problema ela resolve e seus casos de uso de maneira simples",
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
