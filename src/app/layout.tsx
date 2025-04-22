import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";

import { Sora, Fira_Code, Montserrat } from "next/font/google";
import { Footer } from "./(shared)/components/ui/footer";
import { Header } from "./(shared)/components/ui/header";
import { FeaturedProjects } from "./(shared)/components/ui/featured-projects";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
  variable: "--font-sora",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "Alves blog",
  description: "Todos os meus artigos",
};

const projects = [
  {
    title: "React Query: Gerenciamento de Estado Simplificado",
    description:
      "Um guia completo sobre como usar o React Query para gerenciar o estado da sua aplicação de forma eficiente, com exemplos práticos e casos de uso reais.",
    image: "https://i1.sndcdn.com/visuals-001117448935-bPgIQt-original.jpg",
    url: "https://example.com/react-query",
    author: {
      name: "Maria Silva",
      // avatar: "/placeholder.svg?height=64&width=64",
    },
    type: "article",
  },
  {
    title: "TypeHero - Aprenda TypeScript de forma interativa",
    description:
      "Uma plataforma interativa para aprender TypeScript com exercícios práticos e feedback em tempo real. Perfeito para iniciantes e desenvolvedores experientes.",
    image: "https://i1.sndcdn.com/visuals-001117448935-bPgIQt-original.jpg",
    url: "https://typehero.dev",
    author: {
      name: "João Pereira",
    },
    type: "project",
  },
  {
    title: "ESLint Config Pro - Configurações prontas para seus projetos",
    description:
      "Um conjunto de configurações ESLint pré-configuradas para diferentes tipos de projetos, incluindo React, Node.js, TypeScript e muito mais.",
    image: "https://i1.sndcdn.com/visuals-001117448935-bPgIQt-original.jpg",
    url: "https://github.com/example/eslint-config-pro",
    author: {
      name: "Carlos Mendes",
      avatar: "/placeholder.svg?height=64&width=64",
    },
    type: "tool",
  },
] as const;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${sora.variable} ${firaCode.variable} px-4`}
      >
        <Header />
        {children}
        <FeaturedProjects projects={projects} />
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
