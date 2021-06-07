const _dia3 = `<span class="narrador">Depois de uma boa noite de sono, você já sente animado para prosseguir com seu plano de marketing.</span>#
<span class="narrador">Você dirige seu food truck até o lugar que decidiu ficar anteriormente.</span>#
<span class="narrador">Ao estacionar você percebe que outro food truck, está perto da região.</span>#

<span class="player">"Nossa! Não tinha visto que tinham concorrentes aqui..."</span>#
<span class="narrador">Olhando melhor, você vê que seu concorrente vende hambúrgueres que chamam bastante atenção.</span>#

[valor]#
codigo concatenaLocal()#

<span class="player">"Caramba, por essa eu não esperava... Bem, isso obviamente não é o fim do mundo."</span>#
<span class="narrador">Lembrando alguns conselhos do seu amigo Márcio, você chega em algumas conclusões:</span>#
<span class="player">"Tenho que focar no que sou forte, identificar minhas oportunidades aqui e tomar vantagem sobre minha concorrência. Assim eu vou ir muito bem com minhas vendas!"</span> #

<span class="player"> "O food truck dele tem uma decoração bem bonita. Não importa se o meu cachorro quente é bom, se as pessoas olharem para o caminhãozinho dele e ficarem com vontade de comer hambúrguer, não vão nem querer vir aqui! Eu tenho que criar uma proposta de valor para que as pessoas queiram comer a minha comida! Mas isso pode ser um investimento custoso..."</span>#
codigo montarEscolhas(objEscolhaPreco)
`.replace(/\n/g,"").split("#")


// OPÇÃO 
// 1. Vou decorar o food truck e fazer uma apresentação muito especial. Se meus hotdogs oferecerem uma experiência diferenciada, posso cobrar preços mais altos aqui.
// 2. Vou abaixar meus preços e gastos, mesmo que custe abaixar um pouco a qualidade.
// 3. Minha proposta será verdadeira. Meu produto é bom e logo vou manter meus preços, não tem porque fingir seu algo que não sou.
// 4. Posso economizar bastante com meus custos de produção e investir tudo na imagem, assim eu posso subir os preços mesmo assim.

const padraoEscolhaPreco =
`
...#
codigo concatenaOpcao('btnPreco',_preco.texto )#
<span class="narrador">Você volta para casa e prepara as coisas de acordo com a proposta de valor que pensou, e no próximo dia retorna para colher os resultados disso.</span>#
<span class="narrador">Os clientes que  acabam optando pelo seu produto ficam muito satisfeitos pelo que estão consumindo de acordo com o que estão pagando.</span># 
<span class="narrador">A concorrência ainda persiste, entretanto suas decisões fizeram com que você ganhasse espaço na região.</span>#
<span class="player"> "Parece que minhas decisões estão dando frutos! Estou muito perto de terminar esse processo."</span>
<span class="narrador">Seu dia foi um de muitas decisões difíceis e situações desafiadoras, mas necessários para chegar ao fim desse processo e prosperar, <span id="nome"></span></span>#

...#

codigo mudarDia(_dia4)
`.replace(/\n/g,"").split("#")



const alternativoEscolhaPreco = `
...#
codigo concatenaOpcao('btnPreco',_preco.texto )#
<span class="narrador">O número de pessoas interessadas inicialmente aumenta, mas após vender alguns lanches, os clientes acharam seu produto muito caro para um produto de tão baixa qualidade.</span>#
<span class="narrador">Eles passam a recomendar não ir comer em seu estabelecimento, espalhando opiniões negativas em redes sociais, fóruns de discussão e apps de restaurantes. Seu concorrente se beneficiou dos clientes revoltados e ganhou novos clientes rapidamente com a fama negativa do seu food truck.</span>#
<span class="narrador">Você inclusive observa Márcio e Supla comendo da sua concorrência, observando o grande erro que cometeu e o que o levou a chegar a esse ponto.</span>#
<span class="narrador">Em pouco tempo você fecha, por falta de clientes.</span>#
codigo gameover()
`.replace(/\n/g,"").split("#")

const objEscolhaPreco = {
    html: [
        {titulo: "Melhorar a experiência e aumentar preço", valor:"melhorar", cor: "warning", frase:" Vou decorar o food truck e fazer uma apresentação muito especial. Se meus hotdogs oferecerem uma experiência diferenciada, posso cobrar preços mais altos aqui."},
        {titulo: "Abaixar custos e preços", valor:"abaixar", cor: "info", frase:"Vou abaixar meus preços e gastos, mesmo que custe abaixar um pouco a qualidade."},
        {titulo: "Manter os preços", valor:"manter", cor: "danger", frase:" Minha proposta será verdadeira. Meu produto é bom e logo vou manter meus preços, não tem porque fingir seu algo que não sou."},
        {titulo: "Diminuir custos e aumentar preço", valor:"diminuir", cor: "purple", frase:" Posso economizar bastante com meus custos de produção e investir tudo na imagem, assim eu posso subir os preços mesmo assim."}
    ],
    variavel: "_preco",
    errada: 4,
    padrao: padraoEscolhaPreco,
    alternativo: alternativoEscolhaPreco
}

function concatenaLocal(){
    if(_local.texto=="Parque Gastronômico"){
        return "Os hambúrgueres parecem ser bem bonitos.";
    }else if(_local.texto=="Metrô"){
        return "Os hambúrgueres parecem ser feitos de forma bem rápida e bem baratos para o que oferecem.";
    }
    return "";
}