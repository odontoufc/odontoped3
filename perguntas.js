// perguntas.js

const dbPerguntas = [
    // --- SETOR VERDE: FUNÇÕES DOS DENTES ---
    {
        id: 1,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Além de triturar os alimentos sólidos para a criança crescer saudável, como os dentes de leite ajudam na comunicação?",
        opcoes: {
            A: "Eles ajudam na posição correta da língua para articular palavras e sons.",
            B: "Eles não têm nenhuma influência na fala da criança.",
            C: "Eles servem apenas para melhorar a audição."
        },
        respostaCorreta: "A",
        explicacao: "O mediador deve reforçar que a fala e a dicção dependem diretamente dos dentes para que a criança consiga pronunciar os sons corretamente."
    },
    {
        id: 2,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Por que cuidar dos dentes de leite afeta o bem-estar emocional da criança?",
        opcoes: {
            A: "Porque dentes saudáveis ajudam a criança a sorrir e a se relacionar sem vergonha (estética e autoestima).",
            B: "Porque não cuidar dos dentes deixa a criança mais inteligente.",
            C: "Porque os dentes de leite definem a cor do cabelo da criança."
        },
        respostaCorreta: "A",
        explicacao: "É importante lembrar aos pais que a estética e a autoestima estão ligadas à saúde bucal infantil, permitindo que a criança socialize sem medo."
    },
    {
        id: 8,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Por que dizemos que o dente de leite serve como um 'guia' ou 'molda-espaço' natural?",
        opcoes: {
            A: "Porque ele determina a cor e o tamanho definitivo da gengiva da criança.",
            B: "Porque ele guarda o espaço exato e direciona o dente permanente para nascer no lugar certo.",
            C: "Porque ele empurra os outros dentes para fora da boca."
        },
        respostaCorreta: "B",
        explicacao: "O dente de leite atua como um marcador de lugar. Perdê-lo antes da hora faz com que o espaço se feche, bloqueando o dente permanente."
    },
    {
        id: 9,
        cor: "Verde",
        categoria: "Funções dos Dentes",
        pergunta: "Qual é o papel fundamental dos dentes de leite na alimentação e nutrição?",
        opcoes: {
            A: "Eles servem apenas para a criança aprender a usar talheres e copos.",
            B: "Eles apenas deixam a criança com vontade de comer doces.",
            C: "Eles permitem que a criança triture bem os alimentos sólidos, o que é essencial para a digestão e o crescimento."
        },
        respostaCorreta: "C",
        explicacao: "A mastigação correta é a primeira fase da digestão. Dentes com dor ou cárie dificultam a alimentação e afetam o desenvolvimento infantil."
    },

    // --- SETOR AZUL: FASES E TROCAS ---
    {
        id: 3,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "Quantos dentes compõem a dentição decídua (dentes de leite) completa?",
        opcoes: {
            A: "32 dentes.",
            B: "12 dentes.",
            C: "20 dentes."
        },
        respostaCorreta: "C",
        explicacao: "São 20 dentes temporários que aparecem entre os 6 meses e os 3 anos de idade."
    },
    {
        id: 4,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "O que caracteriza a fase da Dentição Permanente?",
        opcoes: {
            A: "São os dentes que duram apenas até a adolescência.",
            B: "São 32 dentes definitivos que nos acompanharão pelo resto da vida, exigindo cuidado dobrado.",
            C: "É a fase em que os dentes de leite e permanentes dividem espaço na boca."
        },
        respostaCorreta: "B",
        explicacao: "O mediador deve reforçar que os dentes permanentes não são substituídos naturalmente, logo a higiene e os cuidados devem ser redobrados."
    },
    {
        id: 10,
        cor: "Azul",
        categoria: "Fases e Troca de Dentes",
        pergunta: "Em qual faixa etária costuma ocorrer a chegada dos primeiros dentes de leite e quando essa fase se completa?",
        opcoes: {
            A: "Começa aos 6 meses e se completa por volta dos 3 anos de idade.",
            B: "Começa aos 3 anos e se completa aos 10 anos.",
            C: "A criança já nasce com todos os dentes de leite escondidos, eles aparecem em apenas 1 mês."
        },
        respostaCorreta: "A",
        explicacao: "A erupção dos dentes de leite inicia-se nos primeiros meses de vida, geralmente pelos dentinhos da frente, e se completa aos 3 aninhos."
    },

    // --- SETOR AMARELO: SITUAÇÕES PRÁTICAS E ACOMPANHAMENTO ---
    {
        id: 5,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Seu filho tem 7 anos e você percebeu que ele possui dentes de leite e dentes maiores (permanentes) ao mesmo tempo. O que isso significa?",
        opcoes: {
            A: "É um sinal de alerta e todos os dentes de leite devem ser extraídos imediatamente.",
            B: "É a fase da Dentição Mista, uma transição normal onde convivem dentes de leite e permanentes.",
            C: "Significa que ele não escovou os dentes direito."
        },
        respostaCorreta: "B",
        explicacao: "Aproveite para explicar que essa fase começa por volta dos 6 anos e é marcada pela troca gradativa dos dentes."
    },
    {
        id: 6,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Para garantir que a troca dos dentes ocorra bem e prevenir cáries, qual atitude o responsável deve tomar?",
        opcoes: {
            A: "Esperar a criança sentir dor para procurar ajuda.",
            B: "Fazer o acompanhamento regular com o dentista para que ele monitore a troca e intervenha no momento certo.",
            C: "Apenas pedir para a criança escovar com mais força."
        },
        respostaCorreta: "B",
        explicacao: "O dentista não apenas trata problemas, mas avalia a mordida e previne problemas de alinhamento e mastigação antes que se agravem."
    },
    {
        id: 12,
        cor: "Amarelo",
        categoria: "Desafio ou Situação Prática",
        pergunta: "Durante a 'dentição mista', o que o Odontopediatra (dentista) avalia principalmente nas consultas de rotina?",
        opcoes: {
            A: "Apenas se a criança está escolhendo a cor certa da escova de dentes.",
            B: "Ele monitora a sequência em que os dentes estão caindo e nascendo, a mordida (oclusão) e age preventivamente.",
            C: "Ele antecipa e arranca todos os dentes de leite de uma vez para os permanentes nascerem mais rápido."
        },
        respostaCorreta: "B",
        explicacao: "O acompanhamento profissional durante a troca dentária garante que a mordida se desenvolva de forma equilibrada, evitando aparelhos ortodônticos complexos depois."
    },

    // --- SETOR VERMELHO: CONSEQUÊNCIAS ---
    {
        id: 7,
        cor: "Vermelho",
        categoria: "Consequência da Perda Precoce",
        pergunta: "Se os dentes vizinhos se inclinarem para o espaço de um dente de leite perdido muito cedo, qual é uma provável consequência?",
        opcoes: {
            A: "O dente permanente não será afetado de nenhuma maneira.",
            B: "O paciente poderá precisar de tratamentos ortodônticos mais complexos no futuro.",
            C: "O espaço vazio se fechará naturalmente sem causar nenhum problema."
        },
        respostaCorreta: "B",
        explicacao: "Ao bloquear a saída do dente permanente, surgem problemas de alinhamento e mastigação que exigirão o uso de aparelhos ortodônticos."
    },
    {
        id: 11,
        cor: "Vermelho",
        categoria: "Consequência da Perda Precoce",
        pergunta: "Muitos pensam: 'É só um dente de leite, vai cair mesmo, não precisa tratar a cárie'. Por que esse pensamento está errado?",
        opcoes: {
            A: "Porque a cárie é uma infecção que causa dor e pode prejudicar ou até impedir a formação do dente permanente abaixo dele.",
            B: "Porque o dente de leite com cárie nunca mais vai cair.",
            C: "Esse pensamento está correto, não é necessário gastar com tratamento."
        },
        respostaCorreta: "A",
        explicacao: "A infecção no dente de leite não fica só nele; ela pode descer pela raiz e danificar permanentemente o dente definitivo que está nascendo."
    }
];
