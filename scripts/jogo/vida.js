class Vida {
    constructor(max, inicial) {
        this.max = max;
        this.inicial = inicial;
        this.quantidade = this.inicial;
        this.largura = 30;
        this.altura =30;
        this.margem = this.largura;
    }

    draw(){
        for(let i =0; i < this.quantidade; i++)
        image(imagemCoracao, (i*this.largura*1.5)+this.margem, this.margem ,this.largura ,this.altura );
    }
}