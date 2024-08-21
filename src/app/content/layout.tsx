import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Todos os meus artigos e conteúdos",
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
