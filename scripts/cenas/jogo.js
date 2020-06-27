class Jogo {
    constructor() {
        this.indice = 0;
        this.mapa = cartucho.mapa;
    }

    setup() {
        cenario = new Cenario(imagemCenario, 3);
        personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 0, 110, 135, 220, 270);
        const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 0, 52, 52, 104, 104, 30);
        const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width - 50, 0, 200, 200, 400, 400, 12);
        const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, 0, height - 200, 100, 75, 200, 150, 30);
        vida = new Vida(cartucho.configuracao.vidaInicial,cartucho.configuracao.vidaMaxima);
        inimigos.push(inimigo);
        inimigos.push(inimigoGrande);
        inimigos.push(inimigoVoador);


        pontuacao = new Pontuacao();

        soundtrack.loop();
    }

    keyPressed(key) {
        if (key === 'ArrowUp' || key === ' ') {
            personagem.pula();
            soundPulo.play();
        }
    }

    draw() {

        cenario.exibe();
        cenario.move();

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
            if (this.indice > this.mapa.length -1) {
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