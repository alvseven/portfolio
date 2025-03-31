import { useEffect, useState, type ComponentProps } from "react";

import { AsideNavigationMenu } from "../(shared)/components/ui/aside-navigation-menu";
import { useScrollSpy } from "@/hooks/article-progress";

export default async function Home() {
  const navigationItems: ComponentProps<
    typeof AsideNavigationMenu
  >["navigationItems"] = [
    {
      href: "#presuncao-de-boa-intencao",
      title: "Presunção de boa intenção",
    },
    {
      href: "#comunicacao-defensiva",
      title: "Comunicação defensiva",
    },
    {
      href: "#consideracoes",
      title: "Considerações",
    },
  ];

  const { activeItemIndex } = useScrollSpy()
  
  return (
    <>
      <main className="flex col-span-12 sm:col-span-9 py-8">
        <article className="flex flex-col gap-4 px-4 sm:pr-12 pl-6 xl:pl-0 max-w-full text-justify">
          <h1 className="opacity-100 font-bold text-2xl text-pretty text-title lg:text-3xl tracking-wide">
            Como eu escolhi lidar com pessoas
          </h1>
          <p>
            Como vai você? Eu tenho estado bem, e hoje cá estou eu para
            compartilhar duas regrinhas que busco seguir, elas têm colaborado
            pra minha saúde mental {"(e pra das pessoas ao meu redor também)"}.
            Eu precisava escrever sobre elas, é algo muito importante e vai de
            encontro com quem eu quero ser, se trata de como eu escolhi lidar
            com as pessoas, as regras são muito simples:
            <span className="px-1 text-highlight">
              presunção de boa intenção
            </span>
            e<span className="pl-1 text-highlight">comunicação defensiva</span>.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="presuncao-de-boa-intencao"
          >
            Presunção de boa intenção
          </h4>
          <p>
            A presunção de boa intenção é um princípio que sugere que, ao
            interpretar ações ou palavras de outras pessoas, devemos partir do
            pressuposto de que elas têm boas intenções, a menos que haja
            evidências claras em contrário, ou seja, ninguém é babaca,
            mal-educado ou algo do tipo, até que se prove o contrário, é dar ao
            outro o benefício da dúvida, simples assim.
          </p>
          <p>
            Um exemplo simplório: imagine uma situação em que você organiza um
            encontro com um grupo de amigos, mas uma pessoa responde com um
            &quot;não sei&quot; quando você pergunta se ela vai. Em vez de
            pensar que ela não está interessada ou que não quer ver você, você
            pode considerar que ela pode estar lidando com alguma coisa pessoal
            ou mesmo com um dia corrido.
          </p>
          <p>
            É claro que um simples &quot;não sei&quot; não é muito bacana, mas
            antes de se estressar ou se chatear com isso, que tal mandar uma
            simples mensagem antes? Poderia ser: &quot;Por que não sabe? Houve
            algo? Tá tudo bem?&quot;
          </p>
          <p>
            Novamente, nada é o que parece ser até que de fato seja. Com essa
            abordagem, você consegue evitar muito estresse e dor de cabeça, não
            só para você, mas para os outros também.
          </p>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="comunicacao-defensiva"
          >
            Comunicação defensiva
          </h4>
          <p>
            Foi difícil achar um bom termo pro que vou explicar agora, e já
            adianto: é algo simples em teoria, mas difícil na prática
            {" (pelo menos tem sido pra mim)"}. Durante todo esse tempo que
            venho tentando aplicar isso, por MUITAS vezes tenho que me corrigir.
            E o motivo é óbvio: eu não era acostumado a ser assim, não era assim
            que eu me comunicava.
          </p>
          <p>
            A comunicação defensiva é um estilo de comunicação que busca evitar
            conflitos e proteger as emoções, frequentemente resultando em
            respostas evasivas ou reativas. Em vez de afirmar ou impor ideias,
            esse tipo de comunicação valoriza a escuta ativa, o questionamento e
            o uso de uma linguagem mais tranquila e respeitosa.
          </p>
          <p>Alguns exemplos de comunicação defensiva:</p>
          <ul className="list-disc pl-10 flex flex-col gap-4">
            <li>
              <p className="text-highlight">
                Uso de linguagem suave:
                <span className="text-primary pl-1">
                  utilize uma comunicação que minimize confronto e promova o
                  diálogo. Em vez de afirmar &quot;Isso não é uma boa
                  abordagem&quot;, você pode dizer: &quot;Eu vejo algumas
                  dificuldades nessa abordagem, talvez não seja uma boa ideia,
                  bora discutir isso?&quot;. Palavras como &quot;talvez&quot;,
                  &quot;possivelmente&quot; ou frases como &quot;pode ser
                  que&quot;, &quot;acredito que&quot; ajudam a criar um ambiente
                  onde as pessoas se sentem seguras para compartilhar suas
                  perspectivas, reduzindo a chance de reações defensivas.
                </span>
              </p>
            </li>
            <li>
              <p className="text-highlight">
                Evite generalizar:
                <span className="text-primary pl-1">
                  em vez de falar &quot;você sempre faz isso&quot;, use &quot;eu
                  notei que, em algumas ocasiões, isso aconteceu [...]&quot;.
                  Generalizar soa como uma acusação, um ataque, o que cria uma
                  postura defensiva no outro, ao apontar uma situação específica
                  em vez de generalizar, você ajuda a esclarecer qual é o
                  problema real, promove empatia e incentiva a auto-reflexão.
                </span>
              </p>
            </li>
            <li>
              <p className="text-highlight">
                Questionamento em vez de afirmação:
                <span className="text-primary pl-1 ">
                  evite certezas e busque partir do pressuposto de que você pode
                  estar errado, independentemente de quão seguro esteja de sua
                  posição. É mais seguro fazer perguntas do que fazer
                  afirmações. Em vez de dizer &quot;Você está errado&quot;,
                  tente reformular sua abordagem: &quot;Acredito que não seja
                  bem assim, poderia me explicar seu ponto de vista?&quot;. Essa
                  mudança é convidativa, respeitosa e abre espaço para um
                  diálogo.
                </span>
              </p>
            </li>
          </ul>
          <h4
            className="opacity-100 my-4 text-xl lg:text-2xl"
            id="consideracoes"
          >
            Considerações
          </h4>
          <p>
            Existem várias outras coisas que estou buscando aplicar no intuito
            de melhorar meu relacionamento interpessoal; quem sabe eu não
            escreva sobre elas em outro momento? Mas acredito que essas são as
            principais. Analise, veja o que faz sentido pra você e tente colocar
            em prática. Lembre-se de que é um processo, então tudo bem errar.
          </p>
          <p>
            Curiosamente,
            <span className="px-1 text-highlight">
              presunção de boa intenção
            </span>
            é algo que você deve fazer principalmente com quem é mais próximo a
            você, não faz o menor sentido primeiramente assumir algo negativo de
            alguém que lhe ama. Enquanto isso, o contrário vale para a
            <span className="pl-1 text-highlight">comunicação defensiva</span>,
            que deve ser utilizada principalmente com pessoas menos próximas,
            justamente falando com estranhos que devemos usar as melhores
            palavras possíveis, pois ainda não conhecemos a pessoa, não sabemos
            como ela vai reagir.
          </p>
        </article>
      </main>
      <AsideNavigationMenu activeItemIndex={activeItemIndex} navigationItems={navigationItems} />
    </>
  );
}
