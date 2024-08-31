import Link from "next/link";

import Intro from "./mdx/intro.mdx";
import NarrowingExample from "./mdx/narrowing-example.mdx";
import NarrowingExampleFix from "./mdx/narrowing-example-fix.mdx";
import ConstExample from "./mdx/const-example.mdx";
import LetExample from "./mdx/let-example.mdx";
import LetExampleFix from "./mdx/let-example-fix.mdx";
import { ExternalRedirectIcon } from "@/app/shared/components/icons/external-redirect";

export default async function Home() {
  return (
    <>
      <main className="flex col-span-12 sm:col-span-9 py-8">
        <article className="flex flex-col gap-4 px-4 sm:pr-12 pl-6 xl:pl-0 max-w-full">
          <h1 className="opacity-100 font-bold text-3xl text-pretty text-title lg:text-4xl tracking-wide">
            Type narrowing e type widening no typescript
          </h1>
          <Intro className="rounded-3xl" />
          <p>
            Cansado de ouvir os termos
            <span className="px-1 md:px-2 text-highlight">type narrowing</span>e
            <span className="px-1 md:px-2 text-highlight">type widening</span>
            sem entender bem o que significam? Neste artigo, você compreenderá
            esses importantes conceitos e verá exemplos práticos de cada caso.
          </p>

          <h4 className="opacity-100 my-4 text-xl lg:text-2xl" id="narrowing">
            Type Narrowing
          </h4>

          <p>
            Para entender ambos os conceitos, comecemos com o seguinte cenário:
            imagine que alguém lhe disse:
            <i>&quot;Vou lhe dar um carro de presente&quot;</i>.
          </p>
          <p>
            Observe que <i>&quot;um carro&quot;</i> pode ser qualquer carro.
            Você não sabe a cor, marca, modelo, se é elétrico, ou mesmo se é um
            carro real ou de brinquedo.
          </p>
          <p>
            Agora, considere esta frase:
            <i>
              &quot;Vou lhe dar um carro de controle remoto, uma ferrari
              vermelha&quot;
            </i>
            .
          </p>
          <p>
            Perceba que agora temos um conjunto de possibilidades muito menor.
            Você tem muito mais informações sobre o tal carro.
          </p>
          <p>
            Tornar uma informação ampla em uma informação mais específica, isso
            é<span className="pl-1 text-highlight">narrowing</span>.
          </p>

          <h4 className="opacity-100 my-4 text-xl lg:text-2xl" id="narrowing">
            Type Widening
          </h4>

          <p>Type widening é justamente o contrário de type narrowing.</p>
          <p>
            Agora, imagine a seguinte situação:
            <i>
              &quot;O carro que lhe dei de presente quebrou, mas vou lhe dar
              outro&quot;
            </i>
            .
          </p>
          <p>
            Note que antes tínhamos uma ferrari vermelha de controle remoto.
            Agora, novamente, não sabemos que carro é esse. Será a mesma
            ferrari? Ainda será uma ferrari? A cor ainda será vermelha? Ainda
            será de controle remoto?
          </p>
          <p>
            Tornar uma informação específica em uma informação mais ampla, isso
            é <span className="pl-1 text-highlight">widening</span>.
          </p>

          <h4 className="opacity-100 my-4 text-xl lg:text-2xl" id="narrowing">
            Narrowing e Widening na prática
          </h4>

          <p>
            Vejamos este exemplo: temos uma função que recebe um parâmetro que
            pode ser uma string ou um número.
          </p>

          <NarrowingExample />

          <p>
            Se usássemos métodos de string em um número, teríamos um erro em
            runtime. O que precisamos aqui é reduzir o conjunto de
            possibilidades. Só iremos usar um método de string se esse parâmetro
            for uma string, tornando o código seguro. Precisamos fazer
            <span className="pl-1 text-highlight">type narrowing</span>.
          </p>

          <NarrowingExampleFix />

          <p>
            Agora, vamos entender o que é type widening. Observe este outro
            exemplo: declaramos uma variável com o valor &quot;7&quot; usando a
            keyword const. Após isso, podemos observar um comportamento
            interessante: o typescript inferiu que o tipo dessa variável é
            exatamente &quot;7&quot;.
          </p>

          <ConstExample />

          <p>
            Se pararmos para analisar, faz sentido, não? Variáveis declaradas
            com const não podem ter seu valor reatribuído. Esse valor nunca vai
            mudar, então foi possível inferir &quot;7&quot;.
          </p>
          <p>
            Mas quando declaramos a variável com let, o typescript não infere o
            tipo exatamente como &quot;7&quot;. Em vez disso, ele infere o tipo
            como string. E novamente, faz sentido, não? Podemos reatribuir o
            valor de uma variável declarada com let.
          </p>

          <LetExample />

          <p>
            Antes tínhamos algo mais específico, agora temos algo mais amplo. O
            que antes era somente a string &quot;alves&quot; agora pode ser
            qualquer string. O typescript fez
            <span className="pl-1 md:pl-2 text-highlight">type widening</span>.
          </p>

          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="let-type-inference"
          >
            Inferência de tipos em variáveis declaradas com &quot;let&quot;
          </h4>

          <p>
            Talvez você esteja se perguntando: mas não pode ser qualquer coisa?
            Em vez de string, o tipo não deveria ser any? Ou unknown? Porque eu
            posso reatribuir para qualquer coisa, certo?
          </p>
          <p>
            Sim, você está certo, mas nesse caso, o typescript tenta ser seu
            amigo. O tipo será o mais abrangente possível, mas baseado no valor
            inicial da variável.
          </p>
          <p>
            Se você realmente quer que seja qualquer coisa, e que possa
            reatribuir o valor da sua variável que antes era uma string para um
            número, por exemplo, você precisa explicitamente declarar os
            possíveis tipos da variável.
          </p>

          <LetExampleFix />

          <p>
            Com isso, chegamos ao fim deste artigo. Espero que tenha ficado
            claro o que significa cada termo e como isso é aplicado no
            typescript. Compartilhe este artigo se ele foi útil, até uma próxima
            {`${":)"}`}
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
      <aside className="md:block hidden mt-8 lg:ml-4 px-4 py-2 min-w-fit lg:min-w-[18rem] font-sans text-xl">
        <div className="md:block top-24 sticky border-slate-600 hidden pr-8 border-l border-l-double">
          <ul className="flex flex-col gap-6 py-4 w-full">
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link className="font-medium text-sm group" href="#narrowing">
                <span className="group-hover:text-title block lg:text-lg transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Type Narrowing
                </span>
              </Link>
            </li>
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link className="font-medium text-sm group" href="#widening">
                <span className="group-hover:text-title block lg:text-lg transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Type widening
                </span>
              </Link>
            </li>
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link
                className="font-medium text-sm group"
                href="#practical-examples"
              >
                <span className="group-hover:text-title block lg:text-lg transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Narrowing e widening na prática
                </span>
              </Link>
            </li>
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link
                className="font-medium text-sm group"
                href="#let-type-inference"
              >
                <span className="group-hover:text-title block lg:text-lg transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Inferência de tipos em variáveis declaradas com
                  &quot;let&quot;
                </span>
              </Link>
            </li>
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link
                className="font-medium text-sm underline underline-offset-4 group"
                href="https://www.typescriptlang.org/play/?#code/PTAEDMFcDsGMBcCWB7aoAmyDKyC2BTeAC0WgHMAKANwEMAbSfALlAGd4AnUs0AH1GiRcAI3wcAlKADeAKBCgAkB0KQOaWg3wA6eMgCqABwNiAwjVb4K4uWAC+Mh-KhwkqDNjyES5avUYt2LnI+ASFRCWkbUGjEcAp4AE9jZHBQDUZQAF5s0AAiQO5cyVl5aLLleFV1P21dQ2MOMwsrKOj7UtAKqtAAcgA5AGPkCGREUANkVlYAW6p8OlBYVDmOeDFxmg4aUEgjMVhzfB6o+0cwJeh2NJqsvIB2XLPQOkJrzVvch4col-g3-zYnG4IUEInWmXujyi6XwtzuDiAA"
                target="_blank"
              >
                <span className="group-hover:text-title block lg:text-lg transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Playground com os exemplos
                  <ExternalRedirectIcon className="lg:inline hidden pl-2" />
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
