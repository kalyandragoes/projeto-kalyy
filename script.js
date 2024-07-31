const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Para o sociologo Max Weber, os conflitos sociais seriam resultados das posiçoẽs assimétricas que os indivíduos ocupam na sociedade. Ela chamou de clase, estamento e partido ás diferentes esferas:quais essas opçoẽs voces conhecem?",
        alternativas: [
            const       {
                       texto: "Econômica !",
                       afirmacao: "No início ficou com medo do que essa tecnologia pode fazer. "
                   },
                   {
                       texto: "Socias"
                       afirmacao: "Quis saber como usar IA no seu dia a dia."
                   },
                   {
                       texto: "Política "
                       afirmacao: "Quis saber como usar IA no seu dia a dia."
                   },
               ],   
           },
           {
               enunciado: "O programa auxílio Brasil criado em 2023, é um progroma de transferência de renda que reuniu outros auxílios existentes. Atualmente, o valor médio recebido por família e de R$ 600,00. É correto afirmar que o programa tem qual objetivo?",
               alternativas: [
                   {
                       texto:"Reduzir ás taxas de mortalidade intantil"
                       afirmacao: " Ao reduzir a taxa, estiver se o risco de um nascido. Vivo morrer antes de chegar a um ano de vida"
                   },
                   {
                       texto: "Garantir o acesso a serviços essenciais",
                       afirmacao: "Garantir o serviço essenciais garantir atividade de produção, distribuição e comercialização"
                   }
               ]
           },
           {
               enunciado: "Quais as causas de desigualdade social?",
               alternativas: [
                   {
                       texto: "Pobresa",
                       afirmacao: "Pobresa seria muitas pessoas passando necessidade"
                   },
                   {
                       texto: "Concentração de renda",
                       afirmacao: "Concentração de renda seria dinheiro para áreas desnecessárias"
                   }
               ]
           },
       ];
       
    {
        enunciado: "Ao final da discussão, você precisou criar uma imagem no computador que representasse o que pensa sobre IA. E agora?",
        alternativas: [
            {
                texto: "Criar uma imagem utilizando uma plataforma de design como o Paint.",
                afirmacao: "Notou também que muitas pessoas não sabem ainda utilizar as ferramentas tradicionais e decidiu compartilhar seus conhecimentos de design utilizando ferramentas de pintura digital para iniciantes."
            },
            {
                texto: "Criar uma imagem utilizando um gerador de imagem de IA.",
                afirmacao: "Acelerou o processo de criação de trabalhos utilizando geradores de imagem e agora consegue ensinar pessoas que sentem dificuldades em desenhar manualmente como utilizar também!"
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();