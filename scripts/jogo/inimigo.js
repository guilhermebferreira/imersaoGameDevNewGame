class Inimigo extends Animacao {

    constructor(imagem, x, variacaoY, largura, altura, linhas, colunas, limite) {
        const velocidadeDefault = 30;

        super(imagem, x, variacaoY, largura, altura, linhas, colunas, limite);

        this.velocidade = velocidadeDefault;
        this.x = width;
        this.delay = 0;

    }

    aparece(){
        this.x = width;
    }

    setDelay(delay){
        this.delay = delay;
    }

    move() {
        this.x = this.x - this.velocidade +this.delay ;
    }

    aparece() {
        this.x = width;
    }

}
