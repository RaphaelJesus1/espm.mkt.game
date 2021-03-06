const _dia2 = `
<span class="narrador">No dia seguinte, e antes de começar o trabalho, você sabe que precisa trabalhar um dos conceitos que encontrou pesquisando.</span>#
<span class="player">"Hoje preciso trabalhar em um ponto que vi que era muito importante: escolher uma boa localização para o meu food truck 
juntamente com uma análise do macroambiente"</span>#

<span class="narrador">Você abre suas anotações e lembra que a análise do macroambiente é nada mais nada menos que ver mudanças e tendências 
da região que você está vendendo, nesse caso a cidade de São Paulo, além do país e do mundo. Essa análise inclui fatores 
em que se relacionam seu negócio e o ambiente como fatores econômicos, demográficos, naturais, tecnológicos,  
político legais e socioculturais.</span>#

<span class="narrador">Você estuda melhor esses fatores e chega a algumas conclusões, que você anota em um papel.</span>#

<span class="narrador"><b>Político:</b> Projeto de Lei 216/19 regulamenta o funcionamento em todo o território nacional dos food trucks,  
controlado pelo Contran. O food truck também deve estar de acordo com as normas sanitárias e de prevenção de incêndios.</span>#
<span class="player">"Meu food truck está adequado! Ainda bem!"</span>#

<span class="narrador"><b>Natural:</b> Se o lançamento do food truck for em uma estação do ano sem chuvas, as vendas serão maiores, 
já que os clientes consomem os lanches em espaços abertos.</span>#
<span class="player">"Pela previsão do tempo, o sol vai aparecer nos horários que trabalho nesse mês inteiro! Ufa!"</span>#

<span class="narrador"><b>Sociocultural:</b> A rotina caótica das grandes cidades estimula o consumo de alimentos 
fáceis de serem comidos a caminho de casa.</span>#
<span class="player">"Preciso de um local movimentado!"</span>#

<span class="narrador">Após isso você decide procurar alguém que pode lhe dar dicas de locais para vender seus produtos.</span>#
<span class="narrador">Você encontra alguém que lhe parece familiar de costas... Ao se aproximar, a pessoa vira revelando ser:</span>#

<span class="balao supla">Supla: "Hello! Oi! Tudo bem com você?"</span>#
codigo chamarSupla()#

<span class="player">"Supla! Que surpresa agradável! Sou muito seu fã! Meu nome é [nome]</span>"#

<span class="balao supla">Supla: "Prazer te conhecer [nome]! O que você tá procurando? Quer tirar uma picture? Uma foto?"</span>#
<span class="player">"Isso seria muito legal! Mas na verdade queria ajuda com uma coisa... Sei que você é um paulistano notório e conhece bem a cidade, não?"</span>#

<span class="balao supla">Supla: "Sure! O papito aqui adora São Paulo! Tô sem nenhum compromisso e estaria muito grato de ajudar um fã!"</span>#
<span class="narrador">Você mostra o papel onde deixou suas anotações, e explica seu problema para o Supla.</span>#

<span class="balao supla">Supla: "Now that's a problem. Eu conheço lugares muuuuito maneiros pra seu negócio! Partiu? C'mon, vamos!"</span>#
<span class="narrador">Você segue Supla para os locais que ele pensou.</span>#

(Chega no parque gastronomico)<br>
<span class="balao supla">Supla: "Esse é um Parque Gastronômico bem chique! Muitos aqui pagam bem e gostam de take good pictures pra postar nas redes!"</span>#
codigo mudarBg("bg-parque")#

(Chega no metrô ana rosa)<br>
<span class="balao supla">Supla: "Aqui é o caminho pro metrô. O povo pode curtir comer one good hot dog aqui, a pressa da fome e algo rápido e barato ajuda muito nessas horas!"</span>#
codigo mudarBg("bg-metro")#

(Chega embaixo da ponte estaiada)<br>
<span class="balao supla">Supla: "Um grande marco a ponte estaiada, I smell sucess! Sinto cheiro do sucesso! E também do pobre rio Pinheiros... Aqui vem uma galera comer"</span>#
codigo mudarBg("bg-ponte")#

(Chega perto da ESPM)<br>
<span class="balao supla">Supla: "Hey! E aqui é perto de onde você já tava, não? Os alunos vão cair pelos seus hotdogs! Vão sempre querer!"</span>#
codigo mudarBg("bg-tech")#

<span class="narrador">Supla para, tira uma foto com você e agradece sua confiança nele.</span>#
<span class="balao supla">Supla: "Então? O que vai ser? What's your decision? Qual sua decisão?"</span>#
codigo montarEscolhas(objEscolhaLocal)#
`.replace(/\n/g,"").split("#")


const alternativoEscolhaLocal = `
    ...#
    codigo dispensarSupla()#
    codigo concatenaOpcao('btnLocal',_local.texto )#
    <span class="narrador">Você move para abaixo da ponte. A falta de visibilidade do local atrapalha muito os negócios, o trânsito barulhento
    e estressante não atrai clientes. Além do péssimo cheiro do rio.</span>#
    codigo mudarBg("bg-ponte")#
    

    <span class="narrador">Bem que o Supla sentiu um cheiro estranho, e infelizmente não era o grande sucess que pensava que era.</span>#
    
    <span class="narrador">Poucos te visitam e você, sem opções de pagar as contas, fecha em poucos dias.</span>#
    
    codigo gameover()
`.replace(/\n/g,"").split("#")

const padraoEscolhaLocal = `
    ...#
    codigo dispensarSupla()#
    codigo concatenaOpcao('btnLocal',_local.texto )#
    <span class="narrador">Você move seu food truck para o local escolhido.</span>#
    codigo mudarBg(_local.valor)#
    <span class="narrador">Supla te visita e pede um de seus hot dogs.</span>#
    codigo chamarSupla()#
    <span class="balao supla">"Delicious! Delícia de lanche! Curti muito seus lanches e desejo o melhor pra ti. Good luck! Boa Sorte [nome]!"</span>#
    <span class="narrador">Você agradece Supla e depois de trabalhar volta para casa sabendo que sua jornada de marketeiro ainda não acabou.</span>#
    codigo dispensarSupla()#

    ...#

    codigo mudarDia(_dia3)
`.replace(/\n/g,"").split("#")


const objEscolhaLocal = {
    html: [
        {titulo: "Embaixo da Ponte", valor:"ponte", cor: "warning", frase:"Gostei da ideia da ponte! Um grande cartão postal para uma grande ideia!"},
        {titulo: "Metrô", valor:"metro", cor: "info", pontos:{artesanal:-1,congelado:1,simples:0}, frase:"O metrô! Vou prosperar com toda a movimentação do lugar!"},
        {titulo: "Parque Gastronômico", valor:"parque", cor: "danger", pontos:{artesanal:1,congelado:-1,simples:0}, frase:"Acredito que meu produto combine bem com o local do Parque Gastronomico"},
        {titulo: "Faculdade", valor:"tech", cor: "purple", pontos:{artesanal:0,congelado:-1,simples:1}, frase:"Perto da faculdade me sinto confortável! Muitos irão vir comer depois das aulas!"}
    ],
    variavel: "_local",
    varPontos: "_hotdog",
    errada: 1,
    padrao: padraoEscolhaLocal,
    alternativo: alternativoEscolhaLocal
}