import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center m-auto w-full md:w-3/4 lg:w-2/4 min-h-[74.5vh]">
      <section className="flex flex-col justify-center items-center gap-12 md:gap-20 p-8">
        <h1 className="font-bold font-sans text-lg text-pretty lg:text-2xl leading-8">
          Seja bem vindo, aos poucos estou construindo esse site e migrando os
          conteúdos pra cá, pegue um café ou um energético e aguarde {":)"}
        </h1>
        <Link
          className="font-mono text-lg lg:text-xl underline underline-offset-8 tracking-wider"
          href="/content"
        >
          Artigos e threads
        </Link>
      </section>
    </main>
  );
}
