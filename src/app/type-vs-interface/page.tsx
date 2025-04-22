import type { ComponentProps } from "react";

import Link from "next/link";
import Image from "next/image";

import Banner from "./(assets)/banner.png";
import InterfaceHover from "./(assets)/interface-hover.png";
import TypeHover from "./(assets)/type-hover.png";

import AliasedTypeCannotBeAnObjectLiteral from "./mdx/aliased-type-cannot-be-an-object-literal.mdx";
import TypeWithImplements from "./mdx/a-class-may-only-implement-another-class-or-interface.mdx";
import InterfaceDeclarationMerging from "./mdx/interface-declaration-merging.mdx";
import TypeDeclarationMerging from "./mdx/type-declaration-merging.mdx";
import InterfaceWithUnions from "./mdx/interface-with-unions.mdx";
import DerivedTypesWithType from "./mdx/derived-types-with-type.mdx";
import DerivedTypesWithInterface from "./mdx/derived-types-with-interface.mdx";
import InterfacesWithDerivedPropertyTypes from "./mdx/interfaces-with-derived-property-types.mdx";
import TypesHasImplicitIndexSignature from "./mdx/types-has-implicit-index-signature.mdx";
import InterfacesDoesNotHaveImplicitIndexSignature from "./mdx/interfaces-does-not-has-implicit-index-signature.mdx";
import InterfaceWithExplicitIndexSignature from "./mdx/interface-with-explicit-index-signature.mdx";
import TypeWithSamePropertyIntersected from "./mdx/type-with-same-property-intersected.mdx";
import InterfaceWithSamePropertyIntersected from "./mdx/interface-with-same-property-intersected.mdx";
import PreferExtendsOverIntersections from "./mdx/prefer-extends-over-intersections.mdx";
import TypeWithThis from "./mdx/type-with-this.mdx";
import FluentApiWithInterface from "./mdx/fluent-api-with-interface.mdx";
import MixinsWithInterface from "./mdx/mixins-with-interface.mdx";
import ThisInProperty from "./mdx/this-in-property.mdx";
import ManuallyTypingProperty from "./mdx/manually-typing-property.mdx";
import ThisAndUnknown from "./mdx/this-and-unknown.mdx";
import UnknownAndIntersections from "./mdx/unknown-and-intersections.mdx";
import FunctionsWithInterface from "./mdx/functions-with-interface.mdx";

import { AsideNavigationMenu } from "../(shared)/components/ui/aside-navigation-menu";
import { JsonLd } from "../(shared)/components/core/json-ld";
import { Breadcrumbs } from "../(shared)/components/ui/breadcrumbs";
import { ArticleMeta } from "../(shared)/components/ui/article-meta";
import {
  type RelatedArticle,
  RelatedArticles,
} from "../(shared)/components/ui/related-articles";

const typescriptArticles: RelatedArticle[] = [
  {
    slug: "typescript-generics",
    title: "Dominando Generics no TypeScript",
    description:
      "Um guia completo sobre como usar generics para criar componentes e funções reutilizáveis.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "25/03/2025",
  },
  {
    slug: "typescript-utility-types",
    title: "Utility Types no TypeScript",
    description:
      "Aprenda a usar os utility types do TypeScript para manipular tipos de forma eficiente.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "15/03/2025",
  },
  {
    slug: "typescript-decorators",
    title: "Decorators no TypeScript",
    description:
      "Entenda como usar decorators para adicionar metadados e comportamentos às suas classes.",
    coverImage: "/placeholder.svg?height=400&width=600",
    date: "05/03/2025",
  },
];

export default async function Home() {
  const navigationItems = [
    {
      href: "o-comeco-de-tudo",
      title: "O começo de tudo",
    },
    {
      href: "interfaces-so-podem-definir-objetos-types-podem-definir-qualquer-tipo",
      title:
        "Interfaces só podem definir objetos, types podem definir qualquer tipo",
    },
    {
      href: "hover-em-type-vs-em-interface",
      title: "Hover em type vs em interface",
    },
    {
      href: "interfaces-podem-ser-redeclaradas-types-nao",
      title: "Interfaces podem ser redeclaradas, types não",
    },
    {
      href: "interfaces-nao-podem-ser-utilizadas-para-criar-tipos-derivados",
      title: "Interfaces não podem ser utilizadas para criar tipos derivados",
    },
    {
      href: "interfaces-se-comportam-de-maneira-diferente-de-types-ao-compor-objetos",
      title:
        "Interfaces se comportam de maneira diferente de types ao compor objetos",
    },
    {
      href: "types-tem-assinatura-implicita-de-indice",
      title: "Types têm assinatura implícita de índice",
    },
    {
      href: "interfaces-tem-melhor-performance-do-que-types-ao-compor-varios-objetos",
      title:
        "Interfaces têm melhor performance do que types ao compor vários objetos",
    },
    {
      href: "interfaces-tem-this",
      title: `Interfaces têm ${"this"}`,
    },
    {
      href: "qual-usar",
      title: "Usar type ou interface?",
    },
    {
      href: "consideracoes-finais",
      title: "Considerações finais",
    },
  ] as const satisfies ComponentProps<
    typeof AsideNavigationMenu
  >["navigationItems"];

  const articleMeta: ComponentProps<typeof ArticleMeta> = {
    title: "Type vs interface",
    description:
      "Você vai se surpreender com o que encontrei sobre Type Vs Interface. Olha esse artigo! 🤯",
    createdAt: "01/04/2025",
    readingTime: "12 min de leitura",
    coverImage: Banner,
    coverAlt: "TypeScript: Type vs Interface",
  };

  const breadcrumbItems: ComponentProps<typeof Breadcrumbs>["items"] = [
    { label: "Home", href: "/" },
    { label: "Type vs interface" },
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
            coverImage={articleMeta.coverImage}
            coverAlt={articleMeta.coverAlt}
            className="mb-6"
          />

          <p>
            Sim, é mais um artigo sobre type vs interface, quando usar cada um e
            etc, mas eu te prometo que esse vai ser diferente de todos que você
            já viu, exploraremos tópicos básicos {"(que muitos já sabem)"} e até
            os mais avançados {"(que poucos sabem)"}. Também iremos ir um pouco
            mais longe e voltar no tempo, assim entenderemos que essa dúvida nem
            sempre existiu, por pelo menos dois motivos.
          </p>
          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id="o-comeco-de-tudo"
          >
            {navigationItems[0].title}
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
            mais básicas e iremos até as mais avançadas.
          </p>
          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[1].href}
          >
            {navigationItems[1].title}
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
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[2].href}
          >
            {navigationItems[2].title}
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

          <p>
            Uma outra pequena diferença visual é como interfaces e types se
            comportam em mensagens de erro, você pode conferir isso nesse{" "}
            <Link
              href="https://www.typescriptlang.org/play/?#code/PTAEGEHsFsAcEsA2BTATqNrLusgzngIYDm+oA7koqIYuYQJ56gCueyoAUCKAC4AWHAHaFcoSADMaQ0PCG80EwgGNkALk6c5C1EtWgAsqOi1QAb06groEbjWg8vVHOKcAvpokshy3vEgyyMr8kEbQJogAFND2YREAlOaW1soBeJAoAHSIkMTRmbbI8e6aPMiZxJmgACqCGKhY6ABGyDnkFFQ0dIzMbBwCwqIccabcYLyQoKjIEmh8kwN8DLAc5PzwwbLMyAAeK77IACYaQSEjUWY2Q-YAjABMAMwALA+gbsVjNXW8yxySoAADaAA0CCaZbPh1XYqXgOIY0ZgmcK0AA0nyaLFhhGY8F4AHJmEJILCWsgZId4NNfIgGFdcIcUTVfgBlZTOWC8T7kAJ42G4eT+GS42QyRaYbCgXAEEguTzeXyCjDBSAAQSE8Ai0Xsl0K9kcziExDeiQs1lAqSE6SyOTy0AKQ2KHk4p1V6s1OuuoHuzwArMagA"
              className="underline underline-offset-4"
              target="_blank"
            >
              playground.
            </Link>
          </p>

          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[3].href}
          >
            {navigationItems[3].title}
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
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[4].href}
          >
            {navigationItems[4].title}
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
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[5].href}
          >
            {navigationItems[5].title}
          </h4>
          <p>
            Podemos compor objetos de formas diferentes, usando a keyword type,
            precisamos utilizar o operador &apos;&&apos;, que cria uma
            interseção, já com interface, utilizamos a keyword
            &apos;extends&apos;.
          </p>
          <p>
            Apesar de propósitos parecidos, existe uma diferença entre
            &apos;&&apos; e &apos;extends&apos;, ao compor objetos, uma
            interseção cria um novo objeto, sem fazer nenhuma comparação de
            compatibilidade de tipos das propriedades, em casos em que dois ou
            mais objetos possuem uma propriedade com o mesmo nome, os seus tipos
            serão interseccionados, e isso frequentemente resulta em never.
          </p>
          <TypeWithSamePropertyIntersected />
          <p>
            Já com interfaces, as propriedades com os mesmos nomes precisam ter
            os mesmos tipos. Na maioria dos casos, esse comportamento é
            especialmente útil, mas depende do seu cenário.
          </p>
          <InterfaceWithSamePropertyIntersected />
          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2x text-start"
            id={navigationItems[6].href}
          >
            {navigationItems[6].title}
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
            além da propriedade &apos;name&apos;.
          </p>
          <InterfaceWithExplicitIndexSignature />
          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[7].href}
          >
            {navigationItems[7].title}
          </h4>
          <p>
            O TypeScript foi projetado para que as interfaces sejam verificadas
            de maneira mais otimizada, é preferível que usemos interface para
            compor vários objetos ao invés de type, por questões de performance,
            já que as relações entre interfaces são cacheadas, inclusive essa
            performance melhor em interfaces é algo documentado pelo próprio
            time do typescript, e você pode ver mais sobre isso na &nbsp;
            <Link
              href="https://github.com/microsoft/TypeScript/wiki/Performance#preferring-interfaces-over-intersections"
              target="_blank"
              className="underline underline-offset-4"
            >
              wiki do typescript
            </Link>
            .
          </p>
          <PreferExtendsOverIntersections />
          <p>
            Em resumo, quando temos uma interseção com mais de 2 objetos, essa
            diferença de performance começa a ser mais significante, e pra isso
            ser um problema é algo que precisa acontecer várias vezes, não
            precisa ir refatorar suas interseções para usar interfaces (ainda),
            mas faz bem levar isso em conta ao escolher entre um ou outro.
          </p>
          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[8].href}
          >
            {navigationItems[8].title}
          </h4>
          <p>
            Chegamos na minha parte favorita desse artigo, e na mais
            complexa/avançada, aquela que não te contam quando você pergunta a
            diferença entre type vs interface, citarei o termo &apos;Higher
            Kinded Types&apos;, mas não explicarei com profundidade o que são,
            esse é um tema que merece um artigo especial só pra ele.
          </p>
          <p>
            Outra diferença importante que pode fazer toda a diferença na
            escolha entre interfaces e types é que interfaces podem usar o tipo
            &apos;this&apos; na definição de retorno de funções/métodos e também
            em suas propriedades, enquanto types não têm essa capacidade.
          </p>
          <TypeWithThis />
          <p>
            O caso de uso mais comum é a utilização do pattern&nbsp;
            <Link
              href="https://www.sitepoint.com/javascript-like-boss-understanding-fluent-apis/"
              target="_blank"
              className="underline underline-offset-4"
            >
              fluent api
            </Link>
            , que é uma maneira de deixar seu código mais legível e fácil de
            entender, encadeando métodos de uma forma que pareça uma frase ou
            uma série de instruções.
          </p>
          <FluentApiWithInterface />
          <p>
            Com &apos;this&apos; também podemos criar mixins, que são
            classes/objetos que contêm métodos para outras classes/objetos,
            permitindo a adição de funcionalidade sem usar herança.
          </p>
          <MixinsWithInterface />

          <p>
            Também podemos utilizar o &apos;this&apos; em propriedades da
            interface, observemos o comportamento abaixo:
          </p>

          <ThisInProperty />

          <p>
            Isso faz com que a propriedade &apos;fullName&apos; seja do tipo
            string, assim como foi definido em name.
          </p>

          <p>
            O que é interessante mas inútil, certo? Daria pra manualmente tipar
            a propriedade &apos;fullName&apos; como string, ou até mesmo
            referenciar a própria interface, qual a vantagem do
            &apos;this&apos;?
          </p>

          <ManuallyTypingProperty />

          <p>
            Antes, precisamos relembrar um comportamento existente com o tipo
            unknown: ao ser interseccionado com algum outro tipo, o resultado é
            sempre o tipo interseccionado, isto é:
          </p>

          <UnknownAndIntersections />

          <p>
            A grande vantagem vem ao combinar o comportamento do
            &apos;this&apos; e unknown + extends, o &apos;this&apos; sempre
            referencia o último tipo na cadeia de extensões, e qualquer tipo
            interseccionado com unknown se resolve nele mesmo, permitindo a
            construção disso:
          </p>

          <ThisAndUnknown />

          <p>
            A propriedade &apos;values&apos; é do tipo unknown na interface
            &apos;User&apos;, já na interface &apos;Admin&apos; ela passa a ser
            number, já que a propriedade &apos;age&apos; se tornou number.
          </p>

          <p>
            E é esse comportamento que bibliotecas aproveitam pra construir
            Higher Kinded Types, Embora TypeScript não suporte diretamente
            Higher Kinded Types (HKTs), que são comuns em linguagens como
            Haskell e Scala, é assim que podemos fazer para simular alguns
            desses comportamentos.
          </p>

          <p className="text-start">
            Higher Kinded Types (HKTs) são tipos que operam sobre outros tipos.
            Enquanto um tipo normal pode ser&nbsp;
            <span className="text-highlight">string</span>
            &nbsp;ou&nbsp;
            <span className="text-highlight">number</span>, e um tipo genérico
            pode ser algo como&nbsp;
            <span className="text-highlight">{"Array<T>"}</span>&nbsp;ou&nbsp;
            <span className="text-highlight">{"Promise<T>"}</span>, um higher
            kinded type seria algo como&nbsp;
            <span className="text-highlight">{"F<T>"}</span>&nbsp;onde&nbsp;
            <span className="text-highlight">F</span>&nbsp;é um tipo de tipo, ou
            seja, é a abstração da abstração da abstração 😅.
          </p>

          <p>Os tipos podem ser categorizados por ordem/nível:</p>

          <ul className="list-disc pl-10 flex flex-col gap-4">
            <li>
              <p>
                Tipos de primeira ordem: são tipos simples como&nbsp;
                <span className="text-highlight">string</span>,&nbsp;
                <span className="text-highlight">number</span>,&nbsp;
                <span className="text-highlight">boolean</span>, etc.
              </p>
            </li>
            <li>
              <p className="text-start">
                Tipos parametrizados (ou genéricos): são tipos que recebem
                outros tipos como parâmetros, como&nbsp;
                <span className="text-highlight">{"Array<T>"}</span>,&nbsp;
                <span className="text-highlight">{"Promise<T>"}</span>,&nbsp;
                <span className="text-highlight">{"Map<K, V>"}</span>, etc.
              </p>
            </li>

            <li>
              <p>
                Higher kinded types (HKTs): são &apos;tipos de tipos&apos; ou
                &apos;construtores de tipos&apos;. Eles não são tipos completos
                por si só, mas precisam de outros tipos para formar um tipo
                completo
              </p>
            </li>
          </ul>

          <p>Analogamente, isso seria: </p>

          <ul className="list-disc pl-10 flex flex-col gap-4">
            <li>
              <p>
                Um tipo normal é como um valor (ex: 5 ou &apos;hello&apos;).
              </p>
            </li>
            <li>
              <p>
                Um tipo genérico é como uma função que recebe valores&nbsp;
                <var>f</var>
                <var>(x)</var> = <var>x</var> + 1&nbsp;.
              </p>
            </li>

            <li>
              <p>
                Um higher kinded type é como uma função que recebe funções
                &nbsp;
                <var>g</var>
                <var>(f)</var> = <var>f</var>
                <var>(f(x))</var>&nbsp;
              </p>
            </li>
          </ul>

          <p>
            Por ser deveras um tema mais avançado e complexo, também por ser
            algo mais nichado (poucas pessoas precisarão usar isso na vida, já
            que o uso é mais comum em bibliotecas), e dado o tamanho desse
            artigo, irei parar por aqui e deixar sua curiosidade lhe guiar, caso
            queira se aprofundar e ver exemplos de casos de uso disso na
            prática, recomendo que veja o código da biblioteca{" "}
            <Link
              href="https://github.com/Effect-TS/effect/blob/main/packages/effect/src/HKT.ts"
              className="underline underline-offset-4"
              target="_blank"
            >
              effect
            </Link>
            &nbsp;e leia esse&nbsp;
            <Link
              href="https://dev.to/effect/encoding-of-hkts-in-typescript-5c3"
              className="underline underline-offset-4"
              target="_blank"
            >
              artigo
            </Link>
            &nbsp;do próprio mantenedor da biblioteca falando sobre HKTs.
          </p>

          <p>
            Está tudo bem se você não tiver entendido esse último tópico, falha
            minha, já que eu ainda não consigo simplificar esse tema ao ponto de
            trazer um exemplo bem simplório que lhe faça entender a utilidade,
            usuários comuns tendem a não esbarrar nesse tipo de problema, então
            talvez você não deva se preocupar tanto com isso, como eu havia
            dito, um artigo especialmente sobre o assunto é necessário, e isso
            vai ficar pra uma próxima.
          </p>

          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[9].href}
          >
            {navigationItems[9].title}
          </h4>
          <p>Dito tudo isso, e agora? Devo usar type ou interface?</p>
          <p>
            Depende 😁, brincadeiras a parte, existem algumas abordagens que
            você pode adotar:
          </p>
          <ul className="list-disc pl-10 flex flex-col gap-4">
            <li>
              <p>
                Seguir a{" "}
                <Link
                  href="https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces"
                  target="_blank"
                  className="underline underline-offset-4"
                >
                  recomendação
                </Link>{" "}
                do time do TypeScript, que é utilizar interface até que você
                precise de features de type.
              </p>
            </li>
            <li>
              <p>
                O contrário disso, que é utilizar type até que você precise de
                features de interface.
              </p>
            </li>
            <li>
              <p>
                E, por fim, utilizar sempre interface para definir objetos, e
                type para todo o resto.
              </p>
            </li>
          </ul>

          <p>
            Se você estiver construindo uma biblioteca, sugiro que sempre pense
            primeiro em interface para definir objetos, por causa do seu
            comportamento de declaration merging, permitindo que usuários da sua
            biblioteca estendam a interface, mas lembre-se que talvez seus
            usuários não precisem disso, vai depender da API que você está
            construindo.
          </p>

          <h4
            className="opacity-100 mt-3 mb-2 text-xl lg:text-2xl text-start"
            id={navigationItems[10].href}
          >
            {navigationItems[10].title}
          </h4>
          <p>
            Primeiramente, muito obrigado por acompanhar até aqui, eu espero de
            verdade que você tenha aprendido algo novo e saia desse artigo
            sabendo qual deve usar ou não, particularmente, eu alterno entre a
            2° e a 3° opção. Se você achou esse artigo útil, compartilhe com
            alguém, se você tiver alguma dúvida, pode me mandar dm no twitter ou
            no discord (alvseven). Se notou algo de errado, um ponto de
            correção, algum detalhe que faltou, por favor não hesite em me
            contatar.
          </p>

          <p>
            E pra finalizar, talvez eu tenha mentido, também é possível definir
            funções com interfaces, mas é algo não tão idiomático e na maioria
            dos casos você vai encontrar definições de funções utilizando a
            keyword type, se você voltar no primeiro ponto do artigo, verá que
            eu disse que nem sempre a keyword type existiu, dessa forma, era
            comum definir funções com interface, vide exemplo abaixo:
          </p>

          <FunctionsWithInterface />
          <RelatedArticles articles={typescriptArticles} />
        </article>
      </main>

      <AsideNavigationMenu navigationItems={navigationItems} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "TechArticle",
          headline: "TypeScript: Type vs Interface - Uma Análise Profunda",
          description:
            "Descubra as diferenças entre types e interfaces no TypeScript com exemplos práticos.",
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
          image: articleMeta.coverImage,
        }}
      />
    </>
  );
}
