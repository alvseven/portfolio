import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen w-2/4 flex-col items-center justify-center m-auto">
      <section className='flex flex-col gap-32 items-center justify-center p-8'>
        <h1 className='text-2xl lg:text-4xl text-pretty'>Seja bem vindo, em breve migrarei todos os meus artigos e conteúdos pra cá</h1>
        <Link className="lg:text-3xl text-xl underline underline-offset-8" href="/articles">Artigos e threads</Link>
      </section>
    </main>
  )
}
