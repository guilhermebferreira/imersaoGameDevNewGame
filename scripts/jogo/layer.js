class Layer extends Cenario{

    constructor(imagem) {
        super(imagem, 10);
    }


    move(velocidade) {
        const direction = 1;
        this.x1 = this.x1 - (velocidade*direction);
        this.x2 = this.x2 - (velocidade*direction);

        if (this.x1 < -width) {
            this.x1 = width;
        }

        if (this.x2 < -width) {
            this.x2 = width;
        }

    }

}