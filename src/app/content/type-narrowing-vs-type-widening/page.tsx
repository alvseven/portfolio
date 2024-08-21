import Image from "next/image";

import Banner from "@/../public/images/type-narrowing-vs-type-widening.ts.png";
import Link from "next/link";
import { ArrowRightIcon } from "@/app/shared/components/icons/arrow-right";

export default async function Home() {
  return (
    <>
      <main className="flex col-span-12 sm:col-span-9 py-8 sm:pr-12">
        <article className="flex flex-col gap-4 px-4">
          <h1 className="opacity-100 font-bold text-3xl text-pretty text-title lg:text-4xl tracking-wide">
            Type narrowing e type widening no typescript
          </h1>
          <Image className="rounded-3xl" src={Banner} alt="" />
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
        </article>
      </main>
      <aside className="md:block hidden mt-8 lg:ml-4 min-w-[13rem] lg:min-w-[18rem] font-sans text-xl">
        <div className="top-24 sticky w-fit">
          <ul className="flex flex-col gap-4 w-full">
            <li>
              <Link
                className="flex items-start space-x-2 pt-3 font-medium text-sm group"
                href="#narrowing"
              >
                <span className="group-hover:text-title block">
                  <ArrowRightIcon className="w-4 lg:w-6 h-4 lg:h-6 fill-slate-400" />
                </span>
                <span className="group-hover:text-title block text-lg lg:text-xl transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Type narrowing
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-start space-x-2 pt-3 font-medium text-sm group"
                href="#widening"
              >
                <span className="group-hover:text-title block">
                  <ArrowRightIcon className="w-4 lg:w-6 h-4 lg:h-6 fill-slate-400" />
                </span>
                <span className="group-hover:text-title block text-lg lg:text-xl transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Type widening
                </span>
              </Link>
            </li>
            <li>
              <Link
                className="flex items-start space-x-2 pt-3 font-medium text-sm group"
                href="#practical-examples"
              >
                <span className="group-hover:text-title block">
                  <ArrowRightIcon className="w-4 lg:w-6 h-4 lg:h-6 fill-slate-400" />
                </span>
                <span className="group-hover:text-title block text-lg lg:text-xl transform transition-transform group-hover:translate-x-[3px] ease-in-out">
                  Narrowing e widening na prática
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}
