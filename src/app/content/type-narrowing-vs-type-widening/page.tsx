import Link from "next/link";

import Intro from "./mdx/intro.mdx";
import NarrowingExample from "./mdx/narrowing-example.mdx";
import NarrowingExampleFix from "./mdx/narrowing-example-fix.mdx";
import ConstExample from "./mdx/const-example.mdx";
import LetExample from "./mdx/let-example.mdx";
import LetExampleFix from "./mdx/let-example-fix.mdx";

export default async function Home() {
  return (
    <>
      <main className="flex col-span-12 sm:col-span-9 py-8">
        <article className="flex flex-col gap-4 px-4 sm:pr-12 pl-6 xl:pl-0">
          <h1 className="opacity-100 font-bold text-3xl text-pretty text-title lg:text-4xl tracking-wide">
            Type narrowing e type widening no typescript
          </h1>
          <Intro className="rounded-3xl" />
          <p className="text-lg lg:text-2xl">
            Cansado de ouvir o termo
            <span className="px-2 text-highlight">type narrowing</span>
            ou
            <span className="px-2 text-highlight">type widening</span>e não
            entender muito bem o que é? Neste artigo entenderemos esses
            importantes conceitos e veremos exemplos práticos de cada caso
          </p>

          <h4 className="opacity-100 my-4 text-xl lg:text-3xl" id="narrowing">
            Type Narrowing
          </h4>
          <p className="text-lg lg:text-2xl">
            Para entendermos ambos os conceitos, vamos começar da seguinte
            forma: imagine que alguém lhe disse a seguinte frase:
            <i>&quot;Vou lhe dar um carro de presente&quot;</i>
          </p>

          <p className="text-lg lg:text-2xl">
            Perceba que <i>&quot;um carro &quot;</i> pode ser qualquer carro,
            você não sabe cor, marca, modelo, se é um carro elétrico, nem mesmo
            se ele é de verdade ou de brinquedo
          </p>

          <p className="text-lg lg:text-2xl">
            Agora imaginemos a seguinte frase:
            <i>
              &quot;Vou lhe dar um carro de controle remoto, uma ferrari
              vermelha&quot;
            </i>
          </p>

          <p className="text-lg lg:text-2xl">
            Perceba que agora temos um conjunto de possibilidades muito menor,
            agora você tem muito mais informação sobre o tal carro
          </p>

          <p className="text-lg lg:text-2xl">
            Quando temos uma informação muito ampla e reduzimos ela a uma coisa
            mais específica, isso é
            <span className="pl-1 text-highlight">narrowing</span>
          </p>

          <h4 className="opacity-100 my-4 text-xl lg:text-3xl" id="widening">
            Type Widening
          </h4>

          <p className="text-lg lg:text-2xl">
            Type widening é justamente o contrário de type narrowing
          </p>

          <p className="text-lg lg:text-2xl">
            Agora imagine a seguinte frase:
            <i>
              &quot;O carro que lhe dei de presente quebrou, mas vou lhe dar um
              outro&quot;
            </i>
          </p>

          <p className="text-lg lg:text-2xl">
            Perceba que antes tínhamos uma ferrari vermelha, de controle remoto,
            agora novamente não sabemos que tal carro é esse, vai ser a mesma
            ferrari? Ainda será uma ferrari? A cor ainda será vermelha? Ainda
            será de controle remoto?
          </p>

          <p className="text-lg lg:text-2xl">
            Tornar uma informação mais específica em uma informação mais ampla,
            isso é <span className="pl-1 text-highlight">widening</span>
          </p>

          <h4
            className="opacity-100 my-4 text-xl lg:text-3xl"
            id="practical-examples"
          >
            Narrowing e Widening na prática
          </h4>

          <p className="text-lg lg:text-2xl">
            Vejamos esse exemplo: temos uma função que recebe um parâmetro que
            pode ser uma string, ou um número, ou um booleano
          </p>

          <NarrowingExample />

          <p className="text-lg lg:text-2xl">
            Se usássemos métodos de string em um número, iríamos ter um erro em
            runtime o que precisamos aqui é reduzir o conjunto de
            possibilidades, só iremos usar um método de string se esse parâmetro
            for uma string, tornando o código seguro, precisamos fazer type
            narrowing
          </p>

          <NarrowingExampleFix />

          <p className="text-lg lg:text-2xl">
            Agora vamos entender o que é type widening vejamos esse outro
            exemplo: declaramos uma variável com o valor &quot;alves&quot;,
            usando a keyword const, após isso podemos observar um comportamento
            interessante, o typescript inferiu que o tipo dessa variável é
            exatamente &quot;alves&quot;
          </p>

          <ConstExample />

          <p className="text-lg lg:text-2xl">
            E se pararmos pra analisar, faz sentido, não? variáveis declaradas
            com const não podem ter seu valor reatribuído, esse valor nunca vai
            mudar, então foi possível inferir &quot;alves&quot;
          </p>

          <p className="text-lg lg:text-2xl">
            Mas quando declaramos a variável com let, o typescript não infere o
            tipo exatamente como &quot;alves&quot;, em vez disso, ele infere o
            tipo como string e novamente, faz sentido, não? podemos reatribuir o
            valor de uma variável declarada com let
          </p>

          <LetExample />

          <p className="text-lg lg:text-2xl">
            Antes tínhamos algo mais específico, agora temos algo mais amplo, o
            que antes era somente a string &quot;alves&quot; agora pode ser
            qualquer string o typescript fez type widening
          </p>

          <p className="text-lg lg:text-2xl">
            Talvez você esteja se perguntando, mas não pode ser qualquer coisa?
            em vez de string, o tipo não deveria ser any? unknown? porque eu
            posso reatribuir pra qualquer coisa, certo?
          </p>

          <p className="text-lg lg:text-2xl">
            Sim, você está certo, mas nesse caso, o typescript tenta ser seu
            amigo, e o tipo vai ser o mais abrangente possível, mas baseado no
            valor inicial da variável
          </p>

          <p className="text-lg lg:text-2xl">
            Se você quer realmente que seja qualquer coisa, e que você possa
            reatribuir o valor da sua variável que antes era uma string pra um
            valor booleano por exemplo, você precisa explicitamente declarar os
            possíveis tipos da variável
          </p>

          <LetExampleFix />

          <p className="text-lg lg:text-2xl">
            E com isso, chegamos ao fim desse artigo, eu espero que tenha ficado
            claro o que signfica cada termo, e como isso é aplicado no
            typescript, compartilhe esse artigo se foi útil, o link do
            playground está no último item do menu lateral, até a próxima
          </p>
        </article>
      </main>
      <aside className="md:block hidden mt-8 lg:ml-4 py-2 min-w-fit lg:min-w-[18rem] font-sans text-xl">
        <div className="md:block top-24 sticky border-slate-600 hidden border-l border-l-double">
          <ul className="flex flex-col gap-6 py-4 w-full">
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link className="font-medium text-sm group" href="#narrowing">
                <span className="group-hover:text-title block text-lg lg:text-xl transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Type narrowing
                </span>
              </Link>
            </li>
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link className="font-medium text-sm group" href="#widening">
                <span className="group-hover:text-title block text-lg lg:text-xl transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Type widening
                </span>
              </Link>
            </li>
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link
                className="font-medium text-sm group"
                href="#practical-examples"
              >
                <span className="group-hover:text-title block text-lg lg:text-xl transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Narrowing e widening na prática
                </span>
              </Link>
            </li>
            <li className="flex items-center hover:border-slate-400 pl-4 hover:border-l">
              <Link
                className="font-medium text-sm hover:underline hover:underline-offset-4 group"
                href="https://www.typescriptlang.org/play/#code/PTAEDMFcDsGMBcCWB7aoAmyDKyC2BTeAC0WgHMAKANwEMAbSfALlAGd4AnUs0AH1GiRcAI3wc+oYcmR18NaAEpQAbwBQIUAEgOhSBzS0G+AHTxkAVQAOlsQGEarfBQXqwAX1WeNUOElQZsPEIScmp6RhZ2LnIJQRExCSkZOUUVV1AMxHAKeABPG2RwUENGUABeCtAAIijuKqU1DQzmnXg9A3CTMysbDntHZ3SMjybQVvbQAHIAOQBj5AhkRFBLZFZWAFuqfDpQWFRtjngEyxoOGlBIazFYB3xJ9I8vMH3odlB8SHLq+m3WKueoFk8A+XzKPzofwBgOBoMinG4iWksnk3yqv3w-0Bn2+nEYniAA"
              >
                <span className="group-hover:text-title block text-lg lg:text-xl transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Playground com os exemplos
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
