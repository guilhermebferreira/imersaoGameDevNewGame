class Personagem extends Animacao {

    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite);

        this.gravidade = 6;
        this.velocidadePulo = 0;
        this.alturaDoPulo = -50;
        this.baseJump = height - altura - this.baseY;
        this.pulos = 0;

    }

    exibe() {
        this.x = mouseX;
        image(this.imagem, this.x, this.y, this.largura, this.altura, this.matriz[this.frameAtual][0], this.matriz[this.frameAtual][1], this.larguraSprite, this.alturaSprite);
        this.anima();
    }

    pula() {
        if(this.pulos < 3){
            this.velocidadePulo = this.alturaDoPulo;
            this.pulos++;
        }
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadePulo;
        this.velocidadePulo = this.velocidadePulo + this.gravidade;

        if (this.y > this.baseJump) {
            this.y = this.baseJump
            this.pulos = 0;
        }

    }

    estaColidindo(inimigo) {
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

}