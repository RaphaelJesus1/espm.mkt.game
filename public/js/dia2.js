const _dia2 = `
No dia seguinte, e antes de começar o trabalho, você sabe que precisa trabalhar um dos conceitos que encontrou pesquisando.#
<span class="player">"Hoje preciso trabalhar em um ponto que vi que era muito importante: escolher uma boa localização para o meu food truck
juntamente com uma análise do macroambiente"</span>#

Você abre suas anotações e lembra que a análise do macroambiente é nada mais nada menos que ver mundanças e tendências
da região que você está vendendo, nesse caso a cidade de São Paulo, além do país e do mundo. Essa análise inclui fatores
em que se relacionam seu negócio e o ambiente como fatores econômicos, demográficos, naturais, tecnológicos, 
político legais e socioculturais.#

Você estuda melhor esses fatores e chega a algumas conclusões, que você anota em um papel.#

<b>Político:</b> Projeto de Lei 216/19 regulamenta o funcionamento em todo o território nacional dos food trucks, 
controlado pelo Contran. O food truck também deve estar de acordo com as normas sanitárias e de prevenção de incêndios.
"Meu food truck está adequado! Ainda bem!"

<b>Natural:</b> Se o lançamento do food truck for em uma estação do ano sem chuvas, as vendas serão maiores, 
já que os clientes consomem os lanches em espaços abertos. 
"Pela previsão do tempo, o sol vai aparecer nos horários que trabalho nesse mês inteiro! Ufa!"

<b>Sociocultural:</b> A rotina caótica das grandes cidades estimula o consumo de alimentos 
fáceis de serem comidos a caminho de casa. 
"Preciso de um local movimentado!"#

Após isso você decide procurar alguém que pode lhe dar dicas de locais para vender seus produtos.#
Você encontra alguém que lhe parece familiar de costas... Ao se aproximar, a pessoa vira revelando ser:#

<span class="supla">Supla: "Hello! Oi! Tudo bem com você?"</span>#

<span class="player">"Supla! Que surpresa agradável! Sou muito seu fã! Meu nome é <span class="nome"></span></span>"#

<span class="marcio">Supla: "Prazer te conhecer <span class="nome"></span>! O que você se tá procurando? Quer tirar uma picture? Uma foto?"</span>#
<span class="player">"Isso seria muito legal! Mas na verdade queria ajuda com uma coisa... Sei que você é um paulistano notório e conhece bem a cidade, não?"</span>#

<span class="supla">Supla: "Sure! O papito aqui adora São Paulo! Tô sem nenhum compromisso e estaria muito grato de ajudar uma fã!"</span>#
Você mostra o papel onde deixou suas anotações, e explica seu problema para o Supla.#

<span class="supla">Supla: "Now that's a problem. Eu conheço lugares muuuuito maneiros pra seu negócio! Partiu? C'mon, vamos!"</span>#
Você segue Supla para os locais que ele pensou.#

(Chega no parque gastronomico)
<span class="supla">Supla: "Esse é um Parque Gastronômico bem chique! Muitos aqui pagam bem e gostam de take good pictures pra postar nas redes!"</span>#

(Chega no metrô ana rosa)
<span class="supla">Supla: "Aqui é o caminho pro metrô. O povo pode curtir comer one good hot dog aqui, a pressa da fome e algo rápido e barato ajuda muito nessas horas!"</span>#

(Chega embaixo da ponte estaiada)
<span class="supla">Supla: "Um grande marco a ponte estaiada, I smell sucess! Sinto cheiro do sucesso! E também do pobre rio Pinheiros... Aqui vem uma galera comer"</span>#

(Chega perto da ESPM)
<span class="supla">Supla: "Hey! E aqui é perto de onde você já tava, não? Os alunos vão cair pelos seus hotdogs! Vão sempre querer!"</span>#

Supla para, tira uma foto com você e agradece sua confiança nele.#
<span class="supla">Supla: "Então? O que vai ser? What's your decision? Qual sua decisão?"</span>#

[OPCAO]
1. PARQUE GASTRONOMICO
"Acredito que meu produto combine bem com o local do Parque Gastronomico"
2. METRÔ
"O metrô! Vou prosperar com toda a movimentação do lugar!"
3. ABAIXO DA PONTE
"Gostei da ideia da ponte! Um grande cartão postal para uma grande ideia!"
4. FACULDADE
"Perto da faculdade me sinto confortável! Muitos irão vir comer depois das aulas!"

OPCAO 3 RESULTADO:{
    Você move para abaixo da ponte. A falta de visibilidade do local atrapalha muito os negócios, o trânsito barulhento
    e estressante não atrai clientes. Além do péssimo cheiro do rio.
    Bem que o Supla sentiu um cheiro estranho, e infelizmente não era o grande sucess que pensava que era.
    
    Poucos te visitam e você sem opções de pagar as contas, fecha em poucos dias. 
    
    FIM DE JOGO
    }
OUTRAS OPÇOES{
    Você move seu food truck para o local escolhido.
    Supla te visita e pede um de seus hot dogs.
    Supla: "Delicious! Delícia de lanche! Curti muito seus lanches e desejo o melhor pra ti. Good luck! Boa Sorte <span id="nome"></span>!"
    Você agradece Supla e depois de trabalhar volta para casa sabendo que sua jornada de marketeiro ainda não acabou.
}
`.replace(/\n/g,"").split("#")