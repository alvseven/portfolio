import Link from "next/link";
import type { ComponentProps } from "react";

import AliasedTypeCannotBeAnObjectLiteral from "./mdx/aliased-type-cannot-be-an-object-literal.mdx";

import { AsideNavigationMenu } from "../content/(components)/aside-navigation-menu";

export default async function Home() {
  const navigationItems: ComponentProps<
    typeof AsideNavigationMenu
  >["navigationItems"] = [
    {
      href: "#consideracoes",
      title: "Hover em interface vs em type",
    },
    {
      href: "#consideracoes",
      title: "Interfaces só podem definir objetos",
    },
    {
      href: "#consideracoes",
      title: "Interfaces não podem ser usadas para criar tipos derivados",
    },
    {
      href: "#consideracoes",
      title:
        "Interfaces não podem estender unions, mesmo que seja uma union de objetos",
    },
    {
      href: "#consideracoes",
      title: "Interfaces podem ser redeclaradas",
    },
    {
      href: "#types-tem-assinatura-implicita-de-indice",
      title: "Types têm assinatura implícita de índice",
    },
    {
      href: "#consideracoes",
      title: "Interfaces se comportam de maneira diferente ao compor objetos",
    },
    {
      href: "#consideracoes",
      title: "Interfaces tem melhor performance ao compor vários objetos",
    },
    {
      href: "#consideracoes",
      title:
        "Interfaces tem 'this' e isso possibilita a criação de Higher Kinded Types",
    },
  ];

  return (
    <>
      <main className="flex col-span-12 sm:col-span-9 py-8">
        <article className="flex flex-col gap-4 px-4 sm:pr-12 pl-6 xl:pl-0 max-w-full">
          <h1 className="opacity-100 font-bold text-3xl text-pretty text-title lg:text-4xl tracking-wide">
            Type vs interface deep dive
          </h1>
          <p>
            Sim, é mais um artigo sobre type vs interface, quando usar cada um e
            etc, mas eu te prometo que esse vai ser diferente de todos que você
            já viu, exploraremos tópicos básicos {"(que muitos já sabem)"} e até
            os mais avançados {"(que poucos sabem)"}. Também iremos ir um pouco
            mais longe e voltar no tempo, assim entenderemos que essa dúvida nem
            sempre existiu, por pelo menos dois motivos.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="hover-em-interface-vs-em-type"
          >
            O começo de tudo
          </h4>
          <p>
            Um ponto que sempre é importante ao olhar pro typescript é analisar
            a sua história, muitas pessoas apenas usam features e pensam que
            aquilo sempre existiu, mas até mesmo as coisas que mais fazem
            sentido e parecem mais óbvias não existiam até um tempo atrás, e o
            ponto é justamente esse, a keyword &quot;type&quot; para declaração
            de tipos foi lançada apenas na&nbsp;
            <Link
              className="underline underline-offset-4"
              href="https://devblogs.microsoft.com/typescript/announcing-typescript-1-4/"
              target="_blank"
            >
              versão 1.4 do typescript&nbsp;
            </Link>
            {"(6 versões após a primeira versão)"}.
          </p>

          <p>
            Enquanto isso, interfaces sempre existiram. Você provavelmente sabe
            que interfaces só podem definir objetos&nbsp;
            {"(se não sabe, não tem problema, discorreremos sobre logo logo)"},
            sendo assim, como definíamos strings literais, tipos condicionais e
            etc? Simples, isso nem existia ainda, a criação da keyword type
            possibilitou a adição de outras várias features.
          </p>

          <p>
            Esse é o primeiro motivo da dúvida não existir antigamente. E o
            segundo motivo? Bom, acontece que a ideia era que types fossem
            usados para definir vários tipos diferentes como tuplas, unions,
            funções, arrays, e etc, mas NÃO objetos literais&nbsp;
            {"(assim como fazemos em interfaces)"}, na primeira implementação da
            keyword type,&nbsp;
            <Link
              href="https://github.com/microsoft/TypeScript/pull/957#issuecomment-60690671"
              className="underline underline-offset-4"
              target="_blank"
            >
              usar type para objetos literais geraria uma mensagem de erro.
            </Link>
          </p>

          <AliasedTypeCannotBeAnObjectLiteral />

          <p>
            Dessa forma seria tranquilo decidir qual usar ou não, precisa
            definir objetos? Use{" "}
            <span className="text-highlight pl-px">interface</span>, pro resto,
            use <span className="text-highlight pl-px">type</span>, a ideia por
            trás disso era justamente evitar confusão, mas isso acabou mudando.
          </p>

          <p>
            Após investigar, não consegui reproduzir a mensagem de erro acima,
            então presumo que antes da versão 1.4 ser oficialmente lançada, isso
            foi removido.
          </p>

          <p>
            {" "}
            Aliás, aqui está a&nbsp;
            <Link
              href="https://github.com/microsoft/TypeScript/pull/957"
              target="_blank"
              className="underline underline-offset-4"
            >
              pull request
            </Link>
            &nbsp;da implementação da keyword&nbsp;
            <span className="text-highlight px-px">type, </span>bem como a&nbsp;
            <Link
              href="https://github.com/microsoft/TypeScript/pull/1025"
              target="_blank"
              className="underline underline-offset-4"
            >
              pull request
            </Link>
            &nbsp;que permite que types sejam usados para definir objetos
            literais, e também a&nbsp;
            <Link
              href="https://github.com/microsoft/TypeScript/pull/998"
              target="_blank"
              className="underline underline-offset-4"
            >
              discussão
            </Link>
            &nbsp;desse tema.&nbsp;
          </p>

          <p>
            Show, entendemos a história por trás disso tudo, mas e agora? Nos
            sobra uma dúvida, qual usar? O próprio time do typescript documentou
            algumas diferenças entre&nbsp;
            <Link
              href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces"
              target="_blank"
              className="underline underline-offset-4"
            >
              type vs interface
            </Link>
            , mas com certeza não todas elas, agora finalmente entraremos no
            assunto, explicarei as diferenças, começaremos com as diferenças
            mais básicas e iremos até as mais avançadas, bora lá?
          </p>

          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="hover-em-interface-vs-em-type"
          >
            Hover em interface vs em type
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            recusandae accusamus explicabo facilis reprehenderit velit nihil!
            Repudiandae cum eligendi, inventore officia dolor suscipit natus,
            repellendus, doloremque voluptatem qui cumque voluptas!
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-so-podem-definir-objetos"
          >
            Interfaces só podem definir objetos
          </h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            culpa dolor obcaecati id maiores architecto ad provident facere
            quod, officiis, qui rerum inventore eos quos sint sequi ducimus.
            Voluptate, sint.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-podem-ser-redeclaradas"
          >
            Interfaces podem ser redeclaradas
          </h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis
            quasi in recusandae fuga doloremque vero, ex beatae odio culpa harum
            asperiores. Et temporibus commodi error consectetur eligendi placeat
            nisi. Quibusdam.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-nao-podem-ser-usadas-para-criar-tipos-derivados"
          >
            Interfaces não podem ser usadas para criar tipos derivados
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="types-tem-assinatura-implicita-de-indice"
          >
            Types têm assinatura implícita de índice
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interface-se-comportam-de-maneira-diferente-ao-compor-objetos"
          >
            Interfaces se comportam de maneira diferente ao compor objetos
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-tem-melhor-performance-ao-compor-varios-objetos"
          >
            Interfaces tem melhor performance ao compor vários objetos
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-tem-this"
          >
            Interfaces tem &quot;this&quot; e isso possibilita a criação de
            Higher Kinded Types
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
        </article>
      </main>
      <AsideNavigationMenu navigationItems={navigationItems} />
    </>
  );
}
