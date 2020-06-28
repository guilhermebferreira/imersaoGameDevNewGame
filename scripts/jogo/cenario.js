class Cenario {
    constructor(imagem, velocidade) {
        this.imagem = imagem;
        this.velocidade = velocidade;
        this.x0 = -width;
        this.x1 = 0;
        this.x2 = width;
    }

    exibe() {
        image(this.imagem, this.x0, 0, width, height);
        image(this.imagem, this.x1, 0, width, height);
        image(this.imagem, this.x2 + 1, 0, width, height);
    }

    move() {
        const direction = 1;
        this.x1 = this.x1 - (this.velocidade*direction);
        this.x2 = this.x2 - (this.velocidade*direction);
        if (this.x0 < -width) {
            this.x0 = width;
        }

        if (this.x1 < -width) {
            this.x1 = width;
        }

        if (this.x2 < -width) {
            this.x2 = width;
        }
        //voltando
        /*if(this.x2<)*/

    }


}