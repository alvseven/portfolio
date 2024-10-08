import type { Metadata } from "next";

export const metadata: Metadata = {
  title: " ",
  description: ".",
  keywords: "typescript, type, interface",
  authors: [{ name: "Alves", url: "https://alvseven.com" }],
  openGraph: {
    title: " ",
    description: ".",
    url: "https://www.alvseven.com/type-vs-interface-deep-dive",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "",
    description: ".",
    creator: "@typescripting",
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
