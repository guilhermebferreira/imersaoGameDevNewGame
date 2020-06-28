class Personagem {

    constructor(imagem, x, variacaoY, largura, altura, linhas, colunas, limite, matrizAnimacao) {


        this.baseY = 30;

        // this.linhas = parseInt( imagem.height / alturaSprite);
        // this.colunas = parseInt( imagem.width / larguraSprite);
        this.linhas = linhas;
        this.colunas = colunas;

        this.alturaSprite = parseInt(imagem.height / linhas);
        this.larguraSprite = parseInt(imagem.width / colunas);

        // this.matriz = matriz;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = height - this.altura - this.variacaoY - this.baseY;
        // this.larguraSprite = larguraSprite;
        // this.alturaSprite = alturaSprite;

        this.frameAtual = 0;
        this.limite = limite;

        this.frameIndice = 0;
        this.matrizAnimacao = matrizAnimacao;
        this.gravidade = 6;
        this.velocidadePulo = 0;
        this.alturaDoPulo = -50;
        this.baseJump = height - altura - this.baseY;
        this.pulos = 0;

        this.velocidade = 0;
        this.velocidadeMax = 50;

        this.invencivel = false;

        this.enteringState = true;
        this.state = 'idle';

        this.enterState();

    }

    getVelocidade() {

        console.log(this.velocidade);
        return this.velocidade;
    }

    //essas formulas substitue a matriz do personagem
    getFaramePositionX() {
        return parseInt((this.frameAtual % this.colunas) * this.larguraSprite);
    }

    getFaramePositionY() {
        return parseInt(this.frameAtual / this.colunas) * this.alturaSprite;
    }

    exibe() {
        this.x = mouseX;
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.getFaramePositionX(), this.getFaramePositionY(), this.larguraSprite, this.alturaSprite);
        this.anima();
    }

    corre() {
        if (this.velocidade < this.velocidadeMax) {
            this.velocidade += 8;
        }


    }

    para() {
        if (this.velocidade > 0) {
            this.velocidade -= 8;
        } else {
            this.velocidade = 0;
        }
    }

    paraImediatamente() {
        this.velocidade = 0;
    }

    pula() {
        if (this.pulos < 3) {
            this.setState('jumping');

            this.enterState();
            this.velocidadePulo = this.alturaDoPulo;
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if (this.y > this.baseJump) {
            this.y = this.baseJump;
            this.pulos = 0;

            this.checkState();
        }

    }

    ficaInvensivel() {
        this.invencivel = true;
        setTimeout(() => {
            this.invencivel = false;
        }, 1000);
    }

    checkState() {
        if (this.velocidade > 0 && this.pulos == 0) {
            this.setState('running');
        }
        if (this.velocidade == 0 && this.pulos == 0) {
            this.setState('idle');
        }

    }

    estaColidindo(inimigo) {

        if (this.invencivel) {
            return false;
        }

        const precisao = .7;
        const colisao = collideRectRect(
            this.x,
            this.y,
            this.largura * precisao,
            this.altura * precisao,
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
        );

        return colisao;

    }

    setState(state) {
        if (this.state != state) {
            console.log('enter:', this.state);
            this.state = state;
            this.enterState();
        }
    }

    getState() {
        console.log('state', this.state);
        console.log('frameAtual', this.frameAtual);
        return this.state;
    }

    enterState() {
        this.enteringState = true;
        this.frameIndice = 0;
        this.frameAtual = this.matrizAnimacao[this.getState()].enterState[this.frameIndice];
        this.limite = this.matrizAnimacao[this.getState()].enterState.length;
    }

    exibe() {
        //depois testar isso aqui
        //let direction = -1;

        // translate(this.x , 0);
        // scale(direction, 1);


        this.checkState();


        image(
            this.imagem,
            this.x,
            this.y,
            this.largura,
            this.altura,
            this.getFaramePositionX(),
            this.getFaramePositionY(),
            this.larguraSprite,
            this.alturaSprite
        );


        this.anima();
    }

    anima() {


        this.frameIndice++;
        if (this.frameIndice >= this.limite) {
            this.frameIndice = 0;
            if (this.enteringState) {
                this.enteringState = false;
                this.frameAtual = this.matrizAnimacao[this.getState()].onState[this.frameIndice];
                this.limite = this.matrizAnimacao[this.getState()].onState.length;
            }
        }

        if (this.enteringState) {

            this.frameAtual = this.matrizAnimacao[this.getState()].enterState[this.frameIndice];
        } else {

            this.frameAtual = this.matrizAnimacao[this.getState()].onState[this.frameIndice];
        }
    }

}