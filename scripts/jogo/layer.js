class Layer extends Cenario{

    constructor(imagem) {
        super(imagem, 10);
    }


    move(velocidade) {
        this.x1 = this.x1 - (velocidade);
        this.x2 = this.x2 - (velocidade);

        if (this.x1 < -width) {
            this.x1 = width;
        }

        if (this.x2 < -width) {
            this.x2 = width;
        }

        //correção, devido aos calculos quebrados do paralax
        if(this.x1 < 0 &&  this.x1 > -width){
            this.x2 = width + this.x1;
        }

        if(this.x2 < 0 &&  this.x2 > -width){
            this.x1 = width + this.x2;
        }



    }

}