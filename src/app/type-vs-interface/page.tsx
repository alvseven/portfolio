import type { ComponentProps } from "react";

import Link from "next/link";
import Image from "next/image";

import AliasedTypeCannotBeAnObjectLiteral from "./mdx/aliased-type-cannot-be-an-object-literal.mdx";
import TypeWithImplements from "./mdx/a-class-may-only-implement-another-class-or-interface.mdx";
import InterfaceDeclarationMerging from "./mdx/interface-declaration-merging.mdx";
import TypeDeclarationMerging from "./mdx/type-declaration-merging.mdx";
import InterfaceHover from "./interface-hover.png";
import TypeHover from "./type-hover.png";
import InterfaceWithUnions from "./mdx/interface-with-unions.mdx";
import DerivedTypesWithType from "./mdx/derived-types-with-type.mdx";
import DerivedTypesWithInterface from "./mdx/derived-types-with-interface.mdx";
import InterfacesWithDerivedPropertyTypes from "./mdx/interfaces-with-derived-property-types.mdx";
import TypesHasImplicitIndexSignature from "./mdx/types-has-implicit-index-signature.mdx";
import InterfacesDoesNotHaveImplicitIndexSignature from "./mdx/interfaces-does-not-has-implicit-index-signature.mdx";
import InterfaceWithExplicitIndexSignature from "./mdx/interface-with-explicit-index-signature.mdx";

import { AsideNavigationMenu } from "../(shared)/components/ui/aside-navigation-menu";

export default async function Home() {
  const navigationItems: ComponentProps<
    typeof AsideNavigationMenu
  >["navigationItems"] = [
    {
      href: "#o-comeco-de-tudo",
      title: "O começo de tudo",
    },
    {
      href: "#hover-em-type-vs-em-interface",
      title: "Hover em type vs em interface",
    },
    {
      href: "#interfaces-so-podem-definir-objetos-types-podem-definir-qualquer-tipo",
      title:
        "Interfaces só podem definir objetos, types podem definir qualquer tipo",
    },
    {
      href: "#interfaces-podem-ser-redeclaradas-types-nao",
      title: "Interfaces podem ser redeclaradas, types não",
    },
    {
      href: "#interfaces-nao-podem-ser-utilizadas-para-criar-tipos-derivados",
      title: "Interfaces não podem ser utilizadas para criar tipos derivados",
    },
    {
      href: "#interfaces-se-comportam-de-maneira-diferente-de-types-ao-compor-objetos",
      title:
        "Interfaces se comportam de maneira diferente de types ao compor objetos",
    },
    {
      href: "#types-tem-assinatura-implicita-de-indice",
      title: "Types têm assinatura implícita de índice",
    },
    {
      href: "#interfaces-tem-melhor-performance-do-que-types-ao-compor-varios-objetos",
      title:
        "Interfaces têm melhor performance do que types ao compor vários objetos",
    },
    {
      href: "#interfaces-tem-this-e-isso-possibilita-a-criacao-de-higher-kinded-types",
      title: `Interfaces têm ${"this"} e isso possibilita a criação de Higher Kinded Types`,
    },
  ];

  return (
    <>
      <main className="flex col-span-12 sm:col-span-9 py-8">
        <article className="flex flex-col gap-4 px-4 sm:pr-12 pl-6 xl:pl-0 max-w-full text-justify">
          <h1 className="opacity-100 font-bold text-2xl text-pretty text-title lg:text-3xl tracking-wide">
            Type vs interface
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
            id="o-comeco-de-tudo"
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
            definir objetos? Use&nbsp;
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
            id="interfaces-so-podem-definir-objetos-types-podem-definir-qualquer-tipo"
          >
            Interfaces só podem definir objetos, types podem definir qualquer
            tipo
          </h4>
          <p>
            Essa é uma das principais diferenças, interfaces servem
            exclusivamente pra declarar objetos, e objetos podem ter métodos e
            propriedades, já types podem fazer o mesmo, mas também podem definir
            qualquer outro tipo, como arrays, tuplas, unions, funções, tipos
            literais, mapped types, e até tipos primitivos como string, number,
            boolean, date, etc.
          </p>

          <p>
            Um ponto que vale a ressalva é que interfaces não podem estender
            unions, mesma que seja uma union de objetos, afinal, o que teríamos
            como resultado final seria uma union.
          </p>
          <InterfaceWithUnions />
          <p>
            Outro ponto de atenção é que talvez você tenha visto em sites como
            stackoverflow ou em artigos que apenas interfaces e classes poderiam
            ser usadas como contrato de uma classe, usar type geraria um erro.
          </p>
          <TypeWithImplements />

          <p>
            Mas isso é parcialmente verdade, até a versão 2.1 do typescript usar
            type realmente geraria um erro, nas versões seguintes ambas as
            keywords type e interface servem pra definir contratos e serem
            utilizadas com implements.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="hover-em-type-vs-em-interface"
          >
            Hover em interface vs em type
          </h4>
          <p>
            A primeira diferença visual que podemos notar é que o hover em
            interface e o hover em type são diferentes, enquanto o hover na
            interface mostra apenas o nome da interface, em type é mostrado o
            tipo definido e também o seu nome.
          </p>
          <div className="flex flex-col gap-2 md:gap-4 items-center xl:justify-between xl:flex-row">
            <Image
              src={InterfaceHover}
              alt="Hover em interface mostra apenas o seu nome"
              className="w-11/12"
            />
            <span className="text-2xl font-medium font-mono">VS</span>
            <Image
              src={TypeHover}
              alt="Hover em type mostra seu nome e também o tipo definido"
              className="w-11/12"
            />
          </div>
          <p className="text-start">
            Criando um tipo usando interface é como se estivéssemos criando um
            tipo novo. Por exemplo, se algo é do tipo&nbsp;
            <span className="text-highlight">String</span>&nbsp;
            {"(com letra maiúscula, estamos falando do constructor)"}, o que
            você verá no hover é apenas o nome&nbsp;
            <span className="text-highlight">String</span>&nbsp;
            {"(até mesmo porque"}&nbsp;
            <span className="text-highlight">String</span>&nbsp;
            {"é implementado usando interface)"}&nbsp;e não todos os métodos e
            propriedades que <span className="text-highlight">String</span> tem.
          </p>

          <p>
            Já usando type, é como se estivéssemos criando apenas um&nbsp;
            <Link
              href="https://github.com/microsoft/TypeScript/pull/957#issuecomment-60464140"
              target="_blank"
              className="underline underline-offset-4 mr-px"
            >
              alias
            </Link>
            , pra um tipo que pode ser anônimo ou não.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-podem-ser-redeclaradas-types-nao"
          >
            Interfaces podem ser redeclaradas, types não
          </h4>
          <p>
            Interfaces podem ser declaradas múltiplas vezes e o TypeScript vai
            automaticamente mesclar essas declarações, como se fosse uma única
            interface. Esse processo é chamado de &apos;declaration
            merging&apos;.
          </p>

          <InterfaceDeclarationMerging />

          <p>
            Já usando type, redeclarar irá gerar um erro, isso ocorre porque o
            type é tratado como um alias para um tipo específico (como
            mencionado no tópico acima) e, uma vez definido, não pode ser
            modificado ou estendido através de uma nova declaração.
          </p>

          <TypeDeclarationMerging />

          <p>
            Esse comportamento de &apos;declaration merging&apos; pode ou não
            ser um problema, a depender do seu cenário. Mas geralmente definir
            um tipo novamente com o mesmo nome tende a ser um erro não
            proposital, falaremos mais sobre em breve.
          </p>

          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-nao-podem-ser-utilizadas-para-criar-tipos-derivados"
          >
            Interfaces não podem ser utilizadas para criar tipos derivados
          </h4>
          <p>
            Uma das coisas que sempre digo é que quanto menos tipos manualmente
            você escrever, melhor. Pra isso, constantemente uso e recomendo
            tipos derivados, que geralmente vêm de um valor já existente em
            runtime, através do operador&nbsp;
            <span className="text-highlight">typeof</span>, essa abordagem é
            menos suscetível a erros, reduz a quantidade de código escrito e
            deixa o código mais contundente (tema pra um próximo artigo 👀).
          </p>

          <DerivedTypesWithType />

          <p>
            O problema é que outra limitação da keyword interface é que ela não
            pode ser usada para representar tipos derivados, mesmo que esse tipo
            seja um objeto.
          </p>

          <DerivedTypesWithInterface />

          <p>
            Há uma&nbsp;
            <Link
              href="https://github.com/microsoft/TypeScript/issues/31843"
              target="_blank"
              className="underline underline-offset-4"
            >
              issue aberta
            </Link>
            &nbsp;no repositório do typescript que apesar de não citar
            exatamente o operador&nbsp;
            <span className="text-highlight">typeof</span>&nbsp;como no exemplo,
            segue um princípio parecido, esperançosamente algum dia expressões
            como essa serão permitidas em interfaces, mas atualmente, não
            funcionam.
          </p>

          <p>
            E um disclaimer importante e talvez óbvio: você pode usar
            normalmente&nbsp;<span className="text-highlight">typeof</span>
            &nbsp;em propriedades de interfaces, só não na definição delas.
          </p>

          <InterfacesWithDerivedPropertyTypes />

          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-se-comportam-de-maneira-diferente-de-types-ao-compor-objetos"
          >
            Interfaces se comportam de maneira diferente de types ao compor
            objetos
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
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
            Um comportamento sutil que difere entre type e interface é que types
            têm assinatura implícita de índice, e interfaces não, pergunta: há
            algum erro no código abaixo?
          </p>

          <TypesHasImplicitIndexSignature />

          <p>
            Se disse que &apos;não&apos;, então você acertou! Faz sentido, a
            variável &apos;test&apos; deve ser um objeto que tem propriedades e
            valores do tipo string, e a variável &apos;user&apos; é atribuível a
            isso.
          </p>

          <p>
            Mas e se mudássemos a declaração de &apos;User&apos; para usarmos
            interface ao invés de type?
          </p>
          <InterfacesDoesNotHaveImplicitIndexSignature />
          <p>
            Obteríamos um erro, estranho, né? Lembra que mencionei que
            interfaces podem ser redeclaradas? É esse o causador desse erro, o
            TypeScript sabe que essa interface pode ser redeclarada, e por isso
            não necessariamente ela só terá propriedades e valores do tipo
            string, logo, nenhuma assinatura de índice é definida
            implicitamente.
          </p>

          <p>
            Podemos resolver isso usando uma assinatura explícita de índice, mas
            isso faria com que a interface também aceitasse outras propriedades
            além da propriedade &apos;name&apos;
          </p>

          <InterfaceWithExplicitIndexSignature />

          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-tem-melhor-performance-do-que-types-ao-compor-varios-objetos"
          >
            Interfaces têm melhor performance do que types ao compor vários
            objetos
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="interfaces-tem-this-e-isso-possibilita-a-criacao-de-higher-kinded-types"
          >
            Interfaces têm &quot;this&quot; e isso possibilita a criação de
            Higher Kinded Types
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
            saepe magnam. Nesciunt dolores impedit fugiat, voluptate, laudantium
            recusandae illum laboriosam qui tempore id sed, tenetur harum sequi
            iste porro ipsam.
          </p>
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
