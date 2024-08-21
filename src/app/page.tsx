import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center m-auto w-2/4 min-h-[78vh]">
      <section className="flex flex-col justify-center items-center gap-32 p-8">
        <h1 className="font-bold font-sans text-2xl text-pretty lg:text-4xl leading-8">
          Seja bem vindo, estou aos poucos migrando todos os meus conteúdos para
          aqui, esse site ainda está em construção, pegue um café ou um
          energético e aguarde
        </h1>
        <Link
          className="font-mono text-xl lg:text-3xl underline underline-offset-8 tracking-wider"
          href="/content"
        >
          Artigos e threads
        </Link>
      </section>
    </main>
  );
}
