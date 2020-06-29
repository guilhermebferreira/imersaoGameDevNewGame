class Pontuacao{
    constructor() {
        this.pontos = 0;
    }

    exibe(){
        textAlign(RIGHT);
        fill('#fff');
        textSize(50);
        text(parseInt(this.pontos/10), width -30, 50);

    }

    getPontos(){
        return parseInt(this.pontos/10);
    }

    adicionarPonto(valor){
        this.pontos += valor;
    }

    acabou(){
        // return this.pontos > 1000;
        return this.pontos > 8000;
    }

}