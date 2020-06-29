class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = cartucho.mapa;
        this.fim = false;

        this.texto = new Fala();
    }

    setup() {
        // cenario = new Cenario(imagemCenario, 3);
        personagem = new Personagem(imagemPersonagem, 100, 0, 111, 150, 11, 7, 72, matrizPersonagem);
        const inimigo = new Inimigo(imagemInimigo, width - 52, 0, 52, 52, 7, 4, 28);
        const inimigoGrande = new Inimigo(imagemInimigoGrande, width - 50, 0, 200, 200, 6, 5, 28);
        const inimigoVoador = new Inimigo(imagemInimigoVoador, 0, height / 6, 100, 75, 6, 3, 16);
        const inimigoVoador2 = new Inimigo(imagemInimigoVoador, 0, height / 4, 100, 75, 6, 3, 16);
        const inimigoVoador3 =  new Inimigo(imagemInimigoVoador, 0, height / 2, 100, 75, 6, 3, 16);


        botaoReiniciar = new BotaoReiniciar('Tentar novamente', width / 2, height / 7 * 5);



        magic = new Item(imagemMagica, width / 2 - 25, height / 2, 2 * 96, 2 * 76, 4, 5, 20);
        vida = new Vida(cartucho.configuracao.vidaInicial, cartucho.configuracao.vidaMaxima);
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);
        inimigos.push(inimigoVoador2);
        inimigos.push(inimigoVoador3);

        cenario = new Paralax(cenario_1_sky, cenario_1_clouds_1, cenario_1_clouds_2, cenario_1_rocks, cenario_1_ground_3, cenario_1_ground_2, cenario_1_ground_1, cenario_1_plants);


        pontuacao = new Pontuacao();

        soundtrack.loop();
    }

    keyPressed(key) {
        console.log(key);
        if (key === 'ArrowLeft') {
            personagem.paraImediatamente();
        }
        if (key === 'ArrowUp' || key === ' ') {
            personagem.pula();
            soundPulo.play();
        }
    }

    draw() {

        this.fim = pontuacao.acabou();

        if (keyIsDown(RIGHT_ARROW) && !this.fim) {
            personagem.corre();
        } else {
            personagem.para();
        }

        cenario.exibe();
        cenario.move(personagem.getVelocidade());

        pontuacao.exibe();
        pontuacao.adicionarPonto(personagem.getVelocidade());

        if (this.fim) {
            this.texto.setTexto('Minha busca terminou!', true);
            magic.exibe();
        } else if (pontuacao.getPontos() > 100) {
            this.texto.setTexto('Minha unica escolha, seguir em frente');
        } else if (pontuacao.getPontos() > 80) {
            this.texto.setTexto('Esta em algum lugar nessa floresta');
        } else if (pontuacao.getPontos() > 60) {
            this.texto.setTexto('Unica forma de restaurar o equilibrio');
        } else if (pontuacao.getPontos() > 10) {
            this.texto.setTexto('Preciso encontrar a fonte de poder...');
        }

        this.texto.exibe();

        personagem.exibe();
        personagem.aplicaGravidade();

        vida.draw();
        //exibe mouse
        // circle(mouseX, mouseY, 50);

        //debug();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade + personagem.getVelocidade();

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel && !this.fim) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo) && !this.fim) {
            texto.cuidado();
            vida.perdeVida();
            personagem.ficaInvensivel();
            soundHit.play();

            if (vida.gameOver()) {
                soundtrack.stop();
                soundRain.loop();
                vida.perdeVida();
                botaoReiniciar.draw();
                image(imagemGameOver, width / 4, height / 3, width / 2, height / 4);
                noLoop();
            }
        }


    }
}