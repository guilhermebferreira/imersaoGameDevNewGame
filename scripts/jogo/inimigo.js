class Inimigo extends Animacao {

    constructor(imagem, x, variacaoY, largura, altura, linhas, colunas, limite) {
        const velocidadeDefault = 30;

        super(imagem, x, variacaoY, largura, altura, linhas, colunas, limite);

        this.velocidade = velocidadeDefault;
        this.x = width;

    }


    move() {
        this.x = this.x - this.velocidade;
    }

    aparece() {
        this.x = width;
    }

}
