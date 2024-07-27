import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center m-auto w-2/4 min-h-screen">
      <section className='flex flex-col justify-center items-center gap-32 p-8'>
        <h1 className='text-2xl text-pretty lg:text-4xl'>Seja bem vindo, em breve migrarei todos os meus artigos e conteúdos pra cá</h1>
        <Link className="text-xl lg:text-3xl underline underline-offset-8" href="/content">Artigos e threads</Link>
      </section>
    </main>
  )
}
