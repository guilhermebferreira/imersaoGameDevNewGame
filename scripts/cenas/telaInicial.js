class TelaInicial {
    constructor() {

    }

    draw() {
        this._imagemDeFundo();
        this._texto();
        this._botao();
    }

    _imagemDeFundo(){
        image(imagemTelaInicial, 0, 0, width, height);
    }
    _texto(){
        textAlign(CENTER);
        const fontsize = height / 6;
        textFont(fonteTelaInicial);
        textSize(fontsize);
        text('As aventuras dE', width / 2, (fontsize*2) + fontsize/4);

        textSize(fontsize + fontsize/4);
        text('HipstA', width / 2, fontsize *3  + fontsize/4);
    }

    _botao(){
        botaoGerenciador.draw();
    }
}