
import type { Metadata } from 'next'

import { Akshar } from 'next/font/google'

const akshar = Akshar({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Artigos',
  description: 'Todos os meus artigos e threads sobre typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <title>Typescript articles</title>
      <body className={`${akshar.className} bg-slate-950`}>{children}</body>
    </html>
  )
}
