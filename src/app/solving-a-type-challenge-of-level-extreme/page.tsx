import Link from "next/link";

import InclusiveRange from "./mdx/inclusive-range.mdx";

export default async function Home() {
  return (
    <>
      <section className="flex flex-col items-start gap-4">
        <h1 className="font-bold text-xl">
          Resolvendo um type challenge de nível extreme
        </h1>

        <div className="place-content-center w-full h-52 overflow-y-auto scrollbar">
          <InclusiveRange />
        </div>
        <hr className="w-full h-px size-px" />

        <p>
          No artigo de hoje, resolveremos um type challenge considerado bem
          difícil, um dos 17 existentes de nível extreme no{" "}
          <Link
            href="https://github.com/type-challenges/type-challenges"
            className="underline underline-offset-4"
          >
            repositório type challenges
          </Link>
          , para isso, utilizarei e explicarei alguns conceitos como:
        </p>

        <ul className="pl-6 list-disc">
          <li>
            <p>Assignability</p>
          </li>
          <li>
            <p>Recursion</p>
          </li>
          <li>
            <p>Conditional types</p>
          </li>
          <li>
            <p>Unions</p>
          </li>
          <li>
            <p>Tuples</p>
          </li>
          <li>
            <p>Infer keyword</p>
          </li>
          <li>
            <p>Default type parameters</p>
          </li>
          <li>
            <p>The never type</p>
          </li>
        </ul>
      </section>

      <article className="flex flex-col items-start gap-4 max-w-[834px] text-opacity-80">
        <h3 className="font-bold text-lg">O que é um type challenge?</h3>

        <p>
          Antes de começarmos, precisamos entender o que é um type challenge,
          como ele funciona e qual o seu intuito
        </p>

        <p>
          Um type challenge é como um desafio de algoritmo, mas focado em tipos.
          Ele exige que você utilize suas habilidades de tipagem para resolver
          problemas específicos
        </p>

        <p>
          Esses desafios são ótimos para aprimorar seu conhecimento e
          entendimento das tipagens, pois forçam você a pensar de maneira
          diferente e a aplicar conceitos de maneira prática. Resolver um type
          challenge não apenas melhora suas habilidades técnicas, mas também
          aprofunda seu conhecimento em typescript.
        </p>
      </article>
    </>
  );
}
