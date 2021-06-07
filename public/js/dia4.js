const _dia4 = `
Amanhece mais uma vez, e você ainda estudando para melhorar ainda mais. Você já está construindo um púbico próprio, mas percebe que ainda precisa divulgar seu produto para fazer sua marca conhecida para novas pessoas. Pesquisando sobre o próximo passo da estratégia de marketing, o mercado alvo, está claro que divulgar para um público específico é a melhor forma de consolidar uma clientela.#
<span class="player"> "Hm, promover meus hotdogs é um investimento, mas não dá para atirar para todos os lados porque seria muito caro. Considerando a identidade de marca que estou construindo, qual seria a melhor forma de divulgar meu food truck?"</span>#
codigo montarEscolhas(objEscolhaPromocao)
`.replace(/\n/g,"").split("#")



const alternativoEscolhaPromocao = `
...#
codigo concatenaOpcao('btnPromocao',_promocao.texto )#
Você dedica um bom tempo divulgando para os seus amigos próximos. Mesmo que eles sejam clientes fiéis, isso não aumentou muito o público do seu negócio, e com tempo até mesmo seus amigos vão aparecendo menos e menos. O dinheiro vai ficando apertando, todo dia o prejuízo vai aumentando, até que você não consegue mais se manter. Seu food truck fracassa.#

codigo gameover()#
`.replace(/\n/g,"").split("#")


const padraoEscolhaPromocao = `
[valor]#
codigo concatenaGremio()#
codigo concatenaOpcao('btnPromocao',_promocao.texto )#
Durante os próximos dias, parece que sua promoção teve resultado, mas é necessario mais algum tempo para analisar realmente quanto sucesso suas escolhas te trouxeram.#
...#
Após terminar de atender um cliente, um rosto familiar vêm à frente. É o professor Márcio. Ele pede um cachorro quente como fez naqueles dois primeiros dias quando o conheceu. Ele parece impressionado com a fila que vê.#
<span class="balao marcio">"Bom trabalho, <span id="nome"></span>, me parece que seu negócio está indo muito bem por enquanto!"</span>#
codigo chamarMarcio()#
<span class="player">"Márcio, quanto tempo! E obrigado! Sim, eu procurei pelos os conceitos de estratégia de marketing em prática hehe. Depois de ter pensado melhor no meu produto eu decidi que meu ponto de venda seria aqui. Mas aí me deparei com um concorrente, então tive que pensar numa proposta de valor que me diferenciasse dele. E agora já estou divulgando meu caminhãozinho por aí!"</span>#
<span class="balao marcio">"Então você se tornou um marqueteiro nato! Pensou no produto, na praça, no preço e na promoção. Esses são os 4 Ps de marketing! E escolheu eles com base nas suas análises, desde você mesmo com a SWOT, até a do ambiente, da concorrência e de mercado-alvo!"</span>#
<span class="player">"É mesmo, nem eu tinha percebido isso! Mas eu não teria nem pensado em ir atrás disso tudo se não fosse você."</span>#

<span class="balao marcio">"Isso não tira o seu mérito! Mas as coisas não acabam por aí, tem muito mais coisa que você pode pensar para continuar crescendo no futuro. Minha recomendação a partir daqui é definir seus objetivos SMART."</span> #

<span class="player">"Mas o que seria exatamente SMART?"</span>#

<span class="balao marcio">"A metodologia SMART está relacionada com a definição dos seus objetivos futuros dentro do seus negócio, a fim de deixá-los alinhados ao que é possível realizar com seu negócio e o mercado que o engloba.
Basicamente vai deixar seus objetivos dentro de espectativas reais!"</span>#

<span class="player">"Legal! E como funciona essa metodologia?"</span>#

<span class="balao marcio">"É só seguir o acrônimo S.M.A.R.T! Ele mostra as características que seus objetivos traçados devem obedecer.</span>#
<span class="balao marcio">Em inglês temos: S de Specific, que significa ser específicos. M de Measurable, que quer dizer mensuráveis. A de Attainable, que traduz para atingíveis. R de Realistic, que nada mais é que realistas. E finalmente T de Time-bound,o mesmo que ter prazos.</span>#
<span class="balao marcio">Com isso seus objetivos vão ser mais claros, deixando de ser amplos como "vender mais" e passando a ter prazos, números e rumos bem mais definidos."</span>#

<span class="player">"Caramba, que aula que você me deu agora! Definitivamente vou por em prática tudo que você me ensinou!"</span>#

Márcio sorri e acena para você. Você retribui e analisa tudo que passou nos últimos dias.#
codigo dispensarMarcio()#

<span class="player">"Caramba! Que jornada hein? Agora é só esperar para ver o que o futuro me aguarda..."</span>#
codigo fim()
`.replace(/\n/g,"").split("#")


function concatenaGremio(){
    if(_local.texto=="Faculdade" && _promocao.texto =="Divulgar no Instagram"){
        return "Você conversa com o grêmio da faculdade e vocês acordam em um desconto para os estudantes. Considerando que é um público regular durante todos os dias da semana, isso lhe garante uma estabilidade nas vendas que assegura a manutenção do seu foodtruck.";
    }
    return proximoTexto();
}


const objEscolhaPromocao = {
    html: [
        {titulo: "Divulgar no Instagram", valor:"instagram", cor: "warning", pontos:{metro:-1, parque:1, tech:1 }, frase:"As redes sociais são a tendência, posso atrair um público bem moderninho!"},
        {titulo: "Parcerias com estabelecimentos próximos", valor:"parcerias", cor: "info", pontos:{metro:1, parque:-1, tech:0}, frase:"Eu posso usar o prestígio dos estabelecimentos daqui ao meu favor!"},
        {titulo: "Contar sobre o negócio para amigos próximos", valor:"amigos", cor: "danger", pontos:{metro:0, parque:0, tech:1}, frase:"Não tem ninguém que eu confio mais que meus amigos!"},
        {titulo: "Distribuir panfletos", valor:"panfletos", cor: "purple", frase:"É uma opção bem barata mas mesmo assim efetiva!"}
    ],
    variavel: "_promocao",
    varPontos: "_local",
    errada: 3,
    padrao: padraoEscolhaPromocao,
    alternativo: alternativoEscolhaPromocao
}

