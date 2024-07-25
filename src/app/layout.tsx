import './globals.css'
import { Analytics } from "@vercel/analytics/react"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'alvseven portfolio',
  description: 'Aqui você poderá encontrar meus artigos, cursos e etc',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-950`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
