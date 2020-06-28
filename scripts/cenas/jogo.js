class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = cartucho.mapa;
    }

    setup() {
        // cenario = new Cenario(imagemCenario, 3);
        personagem = new Personagem(imagemPersonagem, 100, 0, 111, 150, 11, 7, 72, matrizPersonagem);
        const inimigo = new Inimigo(imagemInimigo, width - 52, 0, 52, 52, 7, 4, 28);
        const inimigoGrande = new Inimigo(imagemInimigoGrande, width - 50, 0, 200, 200, 6, 5, 28);
        const inimigoVoador = new Inimigo(imagemInimigoVoador, 0, height - 200, 100, 75, 6, 3, 16);
        vida = new Vida(cartucho.configuracao.vidaInicial, cartucho.configuracao.vidaMaxima);
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);

        cenario = new Paralax(cenario_1_sky,cenario_1_clouds_1, cenario_1_clouds_2,cenario_1_rocks,cenario_1_ground_1,cenario_1_ground_2,cenario_1_ground_2,cenario_1_plants);


        pontuacao = new Pontuacao();

        soundtrack.loop();
    }

    keyPressed(key) {
        console.log(key);
        if (key === 'ArrowUp' || key === ' ') {
            personagem.pula();
            soundPulo.play();
        }
    }

    draw() {

        cenario.exibe();
        cenario.move(10);

        pontuacao.exibe();
        pontuacao.adicionarPonto();

        personagem.exibe();
        personagem.aplicaGravidade();

        vida.draw();
        circle(mouseX, mouseY, 50);

        debug();

        const linhaAtual = this.mapa[this.indice];
        const inimigo = inimigos[linhaAtual.inimigo];
        const inimigoVisivel = inimigo.x < -inimigo.largura;

        inimigo.velocidade = linhaAtual.velocidade;

        inimigo.exibe();
        inimigo.move();

        if (inimigoVisivel) {
            this.indice++;
            inimigo.aparece();
            if (this.indice > this.mapa.length - 1) {
                this.indice = 0;
            }
        }

        if (personagem.estaColidindo(inimigo)) {
            console.log('Colidiu');
            vida.perdeVida();
            personagem.ficaInvensivel();

            if (vida.gameOver()) {
                vida.perdeVida();
                image(imagemGameOver, width / 4, height / 4, width / 2, height / 2);
                noLoop();
            }
        }

    }
}