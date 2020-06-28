class Paralax {

    constructor(sky, clouds_1, clouds_2, background_1,background_2,background_3,background_4, decoration ) {
        this.sky = new Layer(sky);
        this.clouds_1 = new Layer(clouds_1);
        this.clouds_2 = new Layer(clouds_2);
        this.background_1 = new Layer(background_1);
        this.background_2 = new Layer(background_2);
        this.background_3 = new Layer(background_3);
        this.background_4 = new Layer(background_4);
        this.decoration = new Layer(decoration);
        this.x0 = -width;
        this.x1 = 0;
        this.x2 = width;
    }
    // Paralax(sky,clouds_1, clouds_2, rocks, ground_1, ground_2, ground_3, plant )

    move(velocidade) {

        this.clouds_1.move(parseInt(velocidade/8));
        this.clouds_2.move(parseInt(velocidade/4));
        this.background_1.move(parseInt(velocidade/8));
        this.background_2.move(parseInt(velocidade/4));
        this.background_3.move(parseInt(velocidade/2));

        this.background_4.move(velocidade);
        this.decoration.move(parseInt(velocidade*2));

    }


    exibe() {
        this.sky.exibe();
        this.clouds_1.exibe();
        this.clouds_2.exibe();
        this.background_1.exibe();
        this.background_2.exibe();
        this.background_3.exibe();
        this.background_4.exibe();
        this.decoration.exibe();
    }
}