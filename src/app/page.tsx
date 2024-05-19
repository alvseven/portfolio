import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Link href="/articles">Artigos e threads sobre typescript</Link>
    </main>
  )
}
