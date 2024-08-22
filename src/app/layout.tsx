import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

import type { Metadata } from "next";

import { Barlow_Condensed, Fira_Code, Montserrat } from "next/font/google";
import { Footer } from "./shared/components/ui/footer";
import { Header } from "./shared/components/ui/header";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  display: "swap",
  weight: "600",
  variable: "--font-barlow-condensed",
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
  title: "alvseven portfolio",
  description: "Work in progress ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${barlowCondensed.variable} ${firaCode.variable}`}
      >
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
