import type { ComponentProps } from "react";

import Link from "next/link";

import Array from "./mdx/arrays.mdx";
import Tuple from "./mdx/tuples.mdx";
import LabeledTuple from "./mdx/labeled-tuple.mdx";
import StringOrNumberArray from "./mdx/string-or-number-array.mdx";
import TuplesFixesExcessElements from "./mdx/tuples-fixes-excess-elements.mdx";
import TuplesFixesElementsOrder from "./mdx/tuples-fixes-elements-order.mdx";
import RestLabeledTuple from "./mdx/rest-labeled-tuple.mdx";

import { AsideNavigationMenu } from "../(shared)/components/ui/aside-navigation-menu";
import { JsonLd } from "../(shared)/components/core/json-ld";
import { Breadcrumbs } from "../(shared)/components/ui/breadcrumbs";
import { ArticleMeta } from "../(shared)/components/ui/article-meta";

export default async function Home() {
  const navigationItems = [
    {
      href: "o-que-sao-tuplas",
      title: "O que são tuplas?",
    },
    {
      href: "o-problema-com-tuplas-anonimas",
      title: "O problema com tuplas anônimas",
    },
    {
      href: "tuplas-nomeadas",
      title: "Tuplas nomeadas",
    },
    {
      href: "consideracoes-finais",
      title: "Considerações finais",
    },
  ] as const satisfies ComponentProps<
    typeof AsideNavigationMenu
  >["navigationItems"];

  const articleMeta: ComponentProps<typeof ArticleMeta> = {
    title: "Tuplas nomeadas",
    description:
      "Aprenda como tornar seu código mais descritivo e legível com tuplas nomeadas no TypeScript",
    createdAt: "10/11/2023",
    readingTime: "3 min de leitura",
  };

  const breadcrumbItems: ComponentProps<typeof Breadcrumbs>["items"] = [
    { label: "Home", href: "/" },
    { label: "Tuplas nomeadas" },
  ];

  return (
    <>
      <main className="flex col-span-12 sm:col-span-9 py-8">
        <article className="flex flex-col gap-4 px-4 sm:pr-12 pl-6 xl:pl-0 max-w-full">
          <Breadcrumbs items={breadcrumbItems} className="mb-6" />
          <ArticleMeta
            description={articleMeta.description}
            title={articleMeta.title}
            createdAt={articleMeta.createdAt}
            readingTime={articleMeta.readingTime}
            coverAlt={articleMeta.coverAlt}
            className="mb-6"
          />
          <p>
            Você já se deparou com uma tupla no TypeScript e não conseguiu
            entender o que cada elemento representava? Neste artigo, vamos
            explorar como as tuplas nomeadas podem tornar seu código mais
            legível e expressivo.
          </p>
          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id="o-que-sao-tuplas"
          >
            {navigationItems[0].title}
          </h4>
          <p>
            Tuplas são uma estrutura de dados parecida com arrays, mas com uma
            diferença fundamental: elas têm um número fixo de elementos,&nbsp;
            <span className="text-highlight">string[]</span> representa um array
            com um número indefinido de strings.
          </p>

          <Array />

          <p>
            Já&nbsp;<span className="text-highlight">[string, string]</span>{" "}
            representa uma tupla com exatamente duas strings - uma na primeira
            posição e outra na segunda.
          </p>

          <Tuple />

          <p>
            Enquanto arrays são mais permissivos e a ordem dos elementos não
            importa, em tuplas o comportamento é o oposto - a ordem é fixa e
            deve ser respeitada.
          </p>
          <p>
            Como você definiria uma lista em que o primeiro elemento é uma
            string e o segundo é um número? Com arrays, você poderia escrever
            algo como&nbsp;
            <span className="text-highlight">(string | number)[]</span> ou&nbsp;
            <span className="text-highlight">Array&lt;string | number&gt;</span>
            :
          </p>

          <StringOrNumberArray />

          <p>
            O problema é que essa abordagem permitiria um número indefinido de
            strings e numbers dentro do array, e a posição deles não seria fixa
            - algo como&nbsp;
            <span className="text-highlight">[21, &apos;21&apos;]</span> seria
            permitido. Para esse cenário, o que você precisa é de uma tupla:
          </p>

          <TuplesFixesExcessElements />

          <TuplesFixesElementsOrder />

          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id="o-problema-com-tuplas-anonimas"
          >
            {navigationItems[1].title}
          </h4>
          <div className="flex flex-col gap-3">
            <p>
              O grande problema das tuplas anônimas como&nbsp;
              <span className="text-highlight">[string, number]</span> é a falta
              de clareza. Ao encontrar isso no código, podemos ter algumas
              dúvidas como:
            </p>

            <ul className="list-disc pl-6 flex flex-col gap-2">
              <li>
                <p>O que a primeira string representa?</p>
              </li>
              <li>
                <p>E o number? É um ID? Uma idade? Um timestamp?</p>
              </li>
            </ul>

            <p>
              Funciona para o compilador, mas nem sempre para humanos que leem o
              código. É aí que as&nbsp;
              <span className="text-highlight">tuplas nomeadas</span>
              &nbsp; brilham, elas trazem contexto diretamente na definição do
              tipo.
            </p>
          </div>

          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id="tuplas-nomeadas"
          >
            {navigationItems[2].title}
          </h4>

          <p>
            Tuplas nomeadas (labeled/named tuples) são uma feature introduzida
            na&nbsp;
            <Link
              href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#labeled-tuple-elements"
              target="_blank"
              className="underline underline-offset-4"
            >
              versão 4.0 do TypeScript.
            </Link>
            &nbsp;Com elas, podemos dar nomes aos elementos das tuplas, tornando
            o código mais descritivo e fácil de entender.
          </p>
          <p>
            A sintaxe é simples: basta colocar um nome antes do tipo do
            elemento, seguido de dois pontos:
          </p>

          <LabeledTuple />

          <p>
            Também podemos usar isso em funções que recebem um parâmetro que é
            um spread de uma tupla, observe nesse&nbsp;
            <Link
              href="https://www.typescriptlang.org/play/?#code/PTAEDMFcDsGMBcCWB7apYCcCmBDeWBVAZywwAoA6KgBxwxwFsiAuUAbSPg0WgHMAaUNEgMARqQC6ASlABvAL4AoRSFAATLEVjIGWaPlBZQtIiVDJQDZJDPVkGdIgY51RzLnzFSKsO7yESB2VVKDgkVHRsfy9yKgpaeiZWNhtSADlGLFZObj5BHF4soRFxDGk5JR9XLR09AyMTMwsrVON7R2dXSI8A71U-T0DQRSA"
              target="_blank"
              className="underline underline-offset-4"
            >
              playground
            </Link>
            &nbsp; como ficam os parâmetros da nossa função&nbsp;
            <span className="text-highlight">createUser</span> sem os elementos
            nomeados, e como ficam com os elementos nomeados.
          </p>
          <p>
            E caso tenha surgido a dúvida, sim, também podemos nomear elementos
            rest de uma tupla, talvez você imagine que a sintaxe é algo
            como&nbsp;
            <span className="text-highlight">rest: ...type[]</span>, mas na
            verdade a sintaxe é assim:
          </p>

          <RestLabeledTuple />

          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id="consideracoes-finais"
          >
            {navigationItems[3].title}
          </h4>

          <p>
            Um detalhe importante de se lembrar é que tuplas nomeadas tem um
            propósito de documentação, não muda na prática no uso de tuplas não
            nomeadas, além do que falei aqui.
          </p>
          <p>
            Outro ponto importante: quando tuplas nomeadas chegaram, na versão
            4.0, todos os elementos da tupla deveriam ser anônimos (não
            nomeados), ou nomeados, mas isso já não é mais verdade, a partir da
            &nbsp;
            <Link
              href="https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-2.html#named-and-anonymous-tuple-elements"
              target="_blank"
              className="underline underline-offset-4"
            >
              versão 5.2
            </Link>
            &nbsp;podemos ter ambos, e você pode conferir a implementação disso
            &nbsp;
            <Link
              href="https://github.com/microsoft/TypeScript/pull/53356"
              target="_blank"
              className="underline underline-offset-4"
            >
              nessa pull request
            </Link>
            .
          </p>
          <p>
            Tuplas nomeadas são uma ferramenta poderosa para melhorar a
            legibilidade do seu código, use-as com sabedoria e até uma próxima{" "}
            {":)"}
          </p>
        </article>
      </main>
      <AsideNavigationMenu navigationItems={navigationItems} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline:
            "Tuplas nomeadas no TypeScript - Melhore a legibilidade do seu código",
          description:
            "Aprenda como usar tuplas nomeadas para tornar seu código TypeScript mais descritivo e fácil de entender.",
          author: {
            "@type": "Person",
            name: "Alves",
            url: "https://alvseven.com",
          },
          publisher: {
            "@type": "Organization",
            name: "Alvseven",
            logo: {
              "@type": "ImageObject",
              url: "https://www.alvseven.com/icon.ico",
            },
          },
          datePublished: articleMeta.createdAt,
          dateModified: articleMeta.createdAt,
        }}
      />
    </>
  );
}
