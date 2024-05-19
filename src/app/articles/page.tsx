import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col gap-4 min-h-screen justify-center items-center m-auto">
      <Link href="https://x.com/typescripting/status/1749839845348737123" target='_blank'>Homomorphic and isomorphic mapped types</Link>
      <Link href="https://x.com/typescripting/status/1723039943247659390" target='_blank'>Named/Labeled tuple elements</Link>
      <Link href="https://x.com/typescripting/status/1735656532296020204" target='_blank'>8 ways to use the Extract utility type</Link>
      <Link href="https://x.com/typescripting/status/1784904251589685262" target='_blank'>Understanding the satisfies operator</Link>
      <Link href="https://x.com/typescripting/status/1676736066378772481" target='_blank'>What is the &apos;as const&apos; type assertion</Link>

    </main>
  )
}
