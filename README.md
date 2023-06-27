<h1 align="center">🙌 Calendário de Folgas</h1>
<img src="https://github.com/joaomsl/skala-days-off/assets/109992990/80961d30-c233-48ac-8805-00fce1634806" alt="Banner">
</br>
</br>

> Alguns amigos meus trabalham para a Skala Cosméticos, porém eles não disponibilizam algo prático para visualizar a sequência semanal de trabalho. Planejar afazeres a longo prazo é um desafio quando não se tem total certeza do futuro, e por isso resolvi dar uma mãozinha.

> ⚠ Apesar de funcionar devo ressaltar que essa é a minha primeira aplicação em React com Typescript. Meu contato com ambas tecnologias foram bem rasas no passado. As gambiarras aqui são como baratas, onde tem uma tem mais 🦟

<p><b>🆕 Preview:</b> Visualize a aplicação no link abaixo:</p>
<a href="https://days-off.pages.dev/" target="_blank" rel="noopener noreferrer">Visualizar aplicação</a>

<h2>📌 Objetivo</h2>
<ul>
    <li>Gerar um calendário de forma progressiva</li>
    <li>É necessário conseguir visualizar meses/anos futuros</li>
    <li>Exibir se aquele determinado dia faz parte da carga semanal de trabalho ou se é folga (podendo variar entre a turma A, B, C e D)</li>
    <li>Um identificador/lembrete para o dia de remuneração</li>
    <li>Ser prático e funcional independente da plataforma</li>
</ul>

<h2>📋 Regras de funcionamento</h2>
<ul>
    <li>Em semanas alternadas os grupos trabalham de segunda a terça-feira e de quinta-feira a domingo</li>
    <li>O dia do pagamento ocorre nos primeiros 5 dias úteis (exceto no domingo e em feriados)</li>
</ul>

<h2>📦 A aplicação</h2>
<p>Depois de muita luta com a regra de negócio (trauma com manipulação de datas adquirida) o projeto já se encontra em pleno funcionamento. Todos os objetivos foram alcançados.</p>

<h3>Tecnologias utilizadas</h3>
<ul>
    <li>
        <p><b>React</b> - A biblioteca mais hypada para uma aplicação reativa</p>
        <ul>
            <li><b>phosphor-icons/react</b> - Ícones</li>
            <li><b>calendar-js</b> - Geração dos dados progressivos do calendário</li>
            <li><b>date-fns</b> - Manipulação de data</li>
        </ul>
    </li>
    <li><b>TailwindCSS</b> - Estilização</li>
    <li><b>HTML, JS/TS, CSS</b> - Já deve imaginar...</li>
</ul>