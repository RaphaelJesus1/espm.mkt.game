const _dia1 = `
É um novo dia, e antes de sair para trabalhar, você decide por algumas coisas que aprendeu ontem em prática.#

<span class="player">"Hmm, aquele professor realmente adorou meu cachorro quente né? Ele disse para eu focar nas minhas forças e minimizar as fraquezas... Um bom começo seria segmentar o que eu vou vender, eu não posso só oferecer de tudo senão vira uma bagunça! Eu vou fazer do hotdog meu produto principal.</span>#
<span class="player">Mas eu também posso fazer vários estilos de hotdogs. Que tipo eu posso oferecer que realça as forças do meu negócio e minimiza as fraquezas..?"</span>#
codigo montarEscolhas(objEscolhaDog)
`.replace(/\n/g,"").split("#")

/*[OPCAO]
1. HOT DOGS ARTESANAIS
"Vou caprichar em Hot Dogs artesanais. Pode ser mais trabalhoso, mas vai ficar mais gostoso, e essas coisas estão na moda né?"
2. DOGS CONGELADOS
"Se eu ter meus lanches pré-prontos, vou conseguir entregar muito mais rápido"
3. DOG SIMPLES
"Não vou arriscar. Com um dog simples posso manter minha comida gostosa e consistente."
4. DOG DE AÇAÍ
"Se eu quero criar identidade eu preciso inovar. Vou misturar salsicha com açaí!!"

OPCAO 4 RESULTADO:{
Você retorna para a rua da faculdade e apresenta sua proposta de dog de açaí. Os poucos que ousaram provar a receita odiaram, parece que não foi uma boa mistura... De repente, você encontra Márcio que também decide provar seu sanduíche.#
<span class="marcio">Márcio: "Que ideia horrível foi essa? Perdeu totalmente a sua identidade!"</span>#
FIM DE JOGO
}

OUTRAS OPCOES RESULTADO: {
Você decora seu caminhãozinho especificamente como um foodtruck de hotdog e vai até seu local de venda. Dessa vez, muitas pessoas tiveram seu interesse despertado e pararam para provar, e a recepção foi boa! Na hora do almoço, entre a multidão aparece um rosto familiar, o professor Márcio. Ele para para pegar um hotdog.#
<span class="marcio">Márcio: "<span id="nome"></span>, me parece que você realmente andou estudando. Seu caminhãozinho já está mostrando uma proposta mais clara. <span>SE ESCOLHEU ARTESANAL: E esses hotdogs artesanais são uma ótima idéia, você analisou suas forças e fraquezas perfeitamente!</span>#
<span class="marcio">Márcio: "Agora sugiro você pensar em oportunidades e ameaças. Por exemplo, que localização de venda pode ser mais promissora ou arriscada?" Isso tudo é muito importante quando se planeja uma marca. Isso se chama análise SWOT: elencar suas forças, fraquezas, oportunidades e ameaças."</span>#
<span class="player">"Ah, obrigado Márcio. Vou pensar nisso!"</span>#
Márcio acena e sai enquanto come seu hot dog. Hoje o dia foi bem melhor, mas ainda tem muita coisa para por em prática!
} */

const padraoEscolhaDog = `
Você decora seu caminhãozinho especificamente como um foodtruck de hotdog e vai até seu local de venda. Dessa vez, muitas pessoas tiveram seu interesse despertado e pararam para provar, e a recepção foi boa! Na hora do almoço, entre a multidão aparece um rosto familiar, o professor Márcio. Ele para para pegar um hotdog.#
codigo concatenaOpcao('btnProduto',_hotdog.texto )#

<span class="balao marcio">Márcio: "[nome], me parece que você realmente andou estudando. Seu caminhãozinho já está mostrando uma proposta mais clara. [valor]"# 
codigo concatenaDog()#
codigo chamarMarcio()#

<span class="balao marcio">Márcio: "Agora sugiro você pensar em oportunidades e ameaças. Por exemplo, que localização de venda pode ser mais promissora ou arriscada?" Isso tudo é muito importante quando se planeja uma marca. Isso se chama análise SWOT: elencar suas forças, fraquezas, oportunidades e ameaças."</span>#

<span class="player">"Ah, obrigado Márcio. Vou pensar nisso!"</span>#

Márcio acena e sai enquanto come seu hot dog. Hoje o dia foi bem melhor, mas ainda tem muita coisa para por em prática!#
codigo dispensarMarcio()#

codigo mudarDia(_dia2)#
`.replace(/\n/g,"").split("#")

const alternativoEscolhaDog = `
...#
codigo concatenaOpcao('btnProduto',_hotdog.texto )#
Você retorna para a rua da faculdade e apresenta sua proposta de dog de açaí. Os poucos que ousaram provar a receita odiaram, parece que não foi uma boa mistura... De repente, você encontra Márcio que também decide provar seu cachorro-quente.#
<span class="balao marcio">Márcio: "Que ideia horrível foi essa? Perdeu totalmente a sua identidade!"</span>#
codigo chamarMarcio()#
codigo gameover()#
`.replace(/\n/g,"").split("#")

const objEscolhaDog = {
    html: [
        {titulo: "Hot dogs artesanais", valor:"artesanal", cor: "warning", frase:"Vou caprichar em Hot Dogs artesanais. Pode ser mais trabalhoso, mas vai ficar mais gostoso, e essas coisas estão na moda né?"},
        {titulo: "Dogs congelados", valor:"congelado", cor: "info", frase:"Se eu ter meus lanches pré-prontos, vou conseguir entregar muito mais rápido"},
        {titulo: "Dog simples", valor:"simples",cor: "danger", frase:"Não vou arriscar. Com um dog simples posso manter minha comida gostosa e consistente."},
        {titulo: "Dog de açaí", valor:"açaí",cor: "purple", frase:"Se eu quero criar identidade eu preciso inovar. Vou misturar salsicha com açaí!!"}
    ],
    variavel: "_hotdog",
    errada: 4,
    padrao: padraoEscolhaDog,
    alternativo: alternativoEscolhaDog,
}


function concatenaDog(){
    if(_hotdog.texto=="Hot dogs artesanais"){
        return "E esses hotdogs artesanais são uma ótima idéia, você analisou suas forças e fraquezas perfeitamente!"
    }
    return ""
}

