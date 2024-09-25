import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como eu escolhi lidar com pessoas",
  description:
    "Nesse breve artigo eu compartilho as regrinhas que sigo para manter uma boa convivência com as pessoas ao meu redor, o que também me ajuda a evitar estresse e manter a paz, faz bem pra mim e pra todos ao meu redor",
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
