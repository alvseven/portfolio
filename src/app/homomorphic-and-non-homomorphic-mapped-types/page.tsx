import type { ComponentProps } from "react";
import Link from "next/link";

import Intro from "./mdx/intro.mdx";
import HomomorphicMappedTypeExample from "./mdx/homomorphic-mapped-type-example.mdx";
import IsomorphicMappedTypeExample from "./mdx/isomorphic-mapped-type-example.mdx";

import { AsideNavigationMenu } from "../(shared)/components/ui/aside-navigation-menu";

import { ExternalRedirectIcon } from "@/app/(shared)/components/icons/external-redirect";

export default async function Home() {
  const navigationItems: ComponentProps<
    typeof AsideNavigationMenu
  >["navigationItems"] = [
    {
      href: "#homomorphic-mapped-type",
      title: "O que é um homomorphic mapped type?",
    },
    {
      href: "#non-homomorphic-mapped-type",
      title: "O que é um non homomorphic mapped type?",
    },
    {
      href: "https://www.typescriptlang.org/play/?#code/PTAEDMFcDsGMBcCWB7aoAmyDKyC2BTeAC0WgHMAKANwEMAbSfALlAGd4AnUs0AH1GiRcAI3wcAlKADeAKBCgAkB0KQOaWg3wA6eMgCqABwNiAwjVb4K4uWAC+Mh-KhwkqDNjyES5avUYt2LnI+ASFRCWkbUGjEcAp4AE9jZHBQDUZQAF5s0AAiQO5cyVl5aLLleFV1P21dQ2MOMwsrKOj7UtAKqtAAcgA5AGPkCGREUANkVlYAW6p8OlBYVDmOeDFxmg4aUEgjMVhzfB6o+0cwJeh2NJqsvIB2XLPQOkJrzVvch4col-g3-zYnG4IUEInWmXujyi6XwtzuDiAA",
      title: "Playground com os exemplos",
      withExternalRedirect: true,
    },
  ];

  return (
    <>
      <main className="flex col-span-12 sm:col-span-9 py-8">
        <article className="flex flex-col gap-4 px-4 sm:pr-12 pl-6 xl:pl-0 max-w-full">
          <h1 className="opacity-100 font-bold text-2xl text-pretty text-title lg:text-3xl tracking-wide">
            Homomorphic mapped types and non homomorphic mapped types
          </h1>
          <Intro className="rounded-3xl" />
          <p>
            Então quer dizer que nunca te contaram sobre
            <span className="px-px md:px-1 text-highlight">
              homomorphic mapped types
            </span>
            e
            <span className="px-px md:px-1 text-highlight">
              non homomorphic mapped types
            </span>
            ? Esses conceitos existem dentro de mapped types e são extremamente
            importantes, vamos explorar o motivo por trás de comportamentos que,
            à primeira vista, parecem estranhos, onde às vezes os modificadores
            <span className="px-px md:px-1 text-highlight">
              (&apos;readonly&apos;
            </span>
            e
            <span className="px-px md:px-1 text-highlight">&apos;?&apos;)</span>
            são mantidos em mapped types, e às vezes não.
          </p>
          <p>
            Observação: antes de continuarmos, é importante que você já saiba o
            que são mapped types, fechou?
          </p>

          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="homomorphic-mapped-type"
          >
            O que é um homomorphic mapped type?
          </h4>

          <p>
            Um homomorphic mapped type é um mapped type onde o compilador
            consegue saber que você está mapeando as propriedades de um objeto
            já existente, sendo assim, o compilador consegue manter os
            modificadores dessas propriedades.
          </p>

          <p>
            Agora na prática, bora ver um exemplo de um mapped type que é
            homomórfico:
          </p>

          <HomomorphicMappedTypeExample />

          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="non-homomorphic-mapped-type"
          >
            O que é um non homomorphic mapped type
          </h4>

          <p>
            Um mapped type não homomórfico é o contrário de um mapped type
            homomórfico, é quando o mapped type não mantém os modificadores,
            vejamos um exemplo:
          </p>

          <IsomorphicMappedTypeExample />

          <p>
            Após ver o código acima, talvez a seguinte dúvida possa surgir:
            {`"você disse que os modificadores não são mantidos, e realmente não foram, mas por qual motivo a propriedade age teve o tipo inferido como number | undefined, se o modificador "?" não foi mantido?"`}
          </p>

          <Link
            className="underline underline-offset-4 group"
            href="https://www.typescriptlang.org/play/?#code/PTAEDMFcDsGMBcCWB7aoAmyDKyC2BTeAC0WgHMAKANwEMAbSfALlAGd4AnUs0AH1GiRcAI3wcAlKADeAKBCgAkB0KQOaWg3wA6eMgCqABwNiAwjVb4K4uWAC+Mh-KhwkqDNjyES5avUYt2LnI+ASFRCWkbUGjEcAp4AE9jZHBQDUZQAF5s0AAiQO5cyVl5aLLleFV1P21dQ2MOMwsrKOj7UtAKqtAAcgA5AGPkCGREUANkVlYAW6p8OlBYVDmOeDFxmg4aUEgjMVhzfB6o+0cwJeh2NJqsvIB2XLPQOkJrzVvch4col-g3-zYnG4IUEInWmXujyi6XwtzuDiAA"
            target="_blank"
          >
            <span className="group-hover:text-title block font-medium font-mono text-xl tracking-wider transform transition-transform group-hover:translate-x-[3px] ease-in-out">
              Playground com os exemplos
              <ExternalRedirectIcon className="lg:inline hidden pl-2" />
            </span>
          </Link>
        </article>
      </main>
      <AsideNavigationMenu navigationItems={navigationItems} />
    </>
  );
}
