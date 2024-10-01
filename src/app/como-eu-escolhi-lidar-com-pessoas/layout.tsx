import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Como eu escolhi lidar com pessoas",
  description:
    "Descubra como a presunção de boa intenção e a comunicação defensiva podem melhorar seus relacionamentos e promover saúde mental.",
  keywords:
    "relacionamentos, saúde mental, comunicação, presunção de boa intenção, comunicação defensiva, desenvolvimento pessoal",
  authors: [{ name: "Alves", url: "https://alvseven.com" }],
  openGraph: {
    title: "Como eu escolhi lidar com pessoas",
    description:
      "Aprenda a aplicar a presunção de boa intenção e a comunicação defensiva para transformar suas interações e fortalecer suas relações.",
    url: "https://www.alvseven.com/como-eu-escolhi-lidar-com-pessoas",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Como eu escolhi lidar com pessoas",
    description:
      "Descubra como a presunção de boa intenção e a comunicação defensiva podem melhorar seus relacionamentos e promover saúde mental.",
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
