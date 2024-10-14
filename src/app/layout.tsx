import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";

import { Sora, Fira_Code, Montserrat } from "next/font/google";
import { Footer } from "./(shared)/components/ui/footer";
import { Header } from "./(shared)/components/ui/header";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${sora.variable} ${firaCode.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
