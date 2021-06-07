const _intro = `
<span class="player">“Ah, mas que dia lindo! O sol está batendo forte e me dando todas as energias para este longo dia que será hoje… Eu espero que dê tudo certo!”</span>#

<span class="player">“As contas estavam ficando apertadas lá em casa, então eu tive que arranjar alguma forma de arranjar dinheiro. Eu não tenho muita coisa que possa ajudar, mas tenho um ótimo carisma e boas habilidades para cozinhar. E ah, é claro, esse velho caminhãozinho que me acompanhou a vida toda. Agora vou fazer dele um novo negócio!”</span>#

<span class="player">“Acho que essas decorações ficaram lindas! Sem falar das comidinhas que estão dentro dele. Fiz de tudo aqui, não defini um tema ainda, mas com certeza pelo menos algo vai chamar a atenção de quem passar por perto.”</span>#
	
<span class="player">“Se eu conseguir vender pelo menos alguma coisa, já estou feliz por hoje. É o primeiro dia do meu food truck, afinal. Estou só testando como que tudo isso funciona. Não sei bem o que esperar, mas estou confiante que vai dar tudo certo!”</span>#
	
…#

<span class="narrador">Você passa a tarde toda ao dispor de potenciais clientes que estejam caminhando pela calçada, mas ninguém até agora parou para comprar nada. Você começa a se perguntar se está fazendo alguma coisa errada. Será que as comidas estão cheirando mal? Mas sempre lhe disseram que você cozinhava bem…</span>#

…#

<span class="narrador">Está chegando no fim da tarde, e o sol já está dourando os prédios. Já faz um tempo que não passa ninguém pela rua, então você está pensando em dar o fora. Até que um sujeito sai de dentro da faculdade lá na outra quadra. Ele olha para seu caminhão, e vira a rua para te encontrar.</span>#

<span class="balao marcio">Cliente: “Opa, tudo bem? Isso são lanches que você está vendendo aí?”</span>#
codigo chamarMarcio()#

<span class="player">“Hã? Ah, são sim senhor! Vai querer alguma coisa?”</span>#

<span class="narrador">Você realmente não esperava um cliente a esse ponto. Este homem te tomou totalmente de surpresa, e você nem sabe direito como responder… Ele dá uma boa olhada nos produtos, com um sorriso tenro no rosto.</span>#

<span class="balao marcio">Cliente: “Olha só, você tem cachorros-quentes! Eu com certeza vou querer um.</span>#

<span class="player">“É-é pra já! Err, aqui está…”</span>#
<span class="narrador">Você lhe entrega um hotdog e ele dá uma bela mordida, saboreando com enorme entusiasmo. Imediatamente, ele pede por mais cinco! Ele paga tudo e ainda te dá todo o troco.</span>#

<span class="balao marcio">Cliente: Meu deus, isso está maravilhoso! Foi você que fez mesmo? Qual é seu nome?</span>#

<span class="player">“Eu me chamo...”</span>#
codigo montarInput("_nomeJogador")#

<span class="balao marcio">Cliente: “É um prazer, eu me chamo Márcio. Eu sou professor de marketing naquela faculdade ali de trás. Cachorro-quente é o meu lanche favorito, e eu preciso de dizer que este foi o melhor que eu já provei! Você tem potencial! Vai vender pra caramba aqui por perto!”</span>#

<span class="player">“Na verdade... estou aqui a tarde toda, e você foi meu primeiro cliente.”#

<span class="narrador">Márcio te olha instigado, e dá uma boa olhada no seu caminhãozinho.</span>#

<span class="balao marcio">Márcio: “É o seu primeiro dia fazendo isso, não é? Nunca te vi por aqui antes. É, [nome], você ainda tem muito o que aprender. Para fazer sucesso, não adianta ter uma comida boa, você precisa saber como apresentá-la. Trate esse seu negócio como uma marca, e faça uma Estratégia de Marketing para seu negócio.”</span>#

<span class="balao marcio">Márcio: “Esse jeito simples mas gostoso de cozinhar é seu diferencial. Mas me parece que é difícil conseguir fazer muita coisa sozinho. Lembre-se, foque nas suas forças para tentar minimizar suas fraquezas. Você vai longe!”</span>#

<span class="narrador">Márcio acena e caminha para longe, antes de você ter tempo de dizer adeus. Você acena de volta, mas ele já está cruzando a esquina. Esse encontro foi realmente muito estranho…</span>#
codigo dispensarMarcio()#
	
<span class="player">“Será mesmo que tenho esse potencial? O que ele quis dizer com Estratégia de Marketing? Preciso saber mais…”</span>#

<span class="narrador">Você volta para casa pouco depois, e passa a noite pesquisando sobre Estratégias de Marketing. Se tem algo que pode me ajudar, deve ser isso!</span>#

...#

codigo mudarDia(_dia1)
`.replace(/\n/g,"").split("#")