class Animacao {
    constructor(imagem, x, variacaoY, largura, altura, linhas, colunas, limite) {

        this.baseY = 30;

        // this.linhas = parseInt( imagem.height / alturaSprite);
        // this.colunas = parseInt( imagem.width / larguraSprite);
        this.linhas = linhas;
        this.colunas = colunas;

        this.alturaSprite = parseInt(imagem.height / linhas);
        this.larguraSprite = parseInt(imagem.width / colunas);

        // this.matriz = matriz;
        this.imagem = imagem;
        this.largura = largura;
        this.altura = altura;
        this.x = x;
        this.variacaoY = variacaoY;
        this.y = height - this.altura - this.variacaoY - this.baseY;
        // this.larguraSprite = larguraSprite;
        // this.alturaSprite = alturaSprite;

        this.frameAtual = 0;
        this.limite = limite;
    }


    //essas formulas substitue a matriz do personagem
    getFaramePositionX(){
        return parseInt((this.frameAtual%this.colunas) * this.larguraSprite);
    }
    getFaramePositionY(){
        return parseInt(this.frameAtual/this.colunas) * this.alturaSprite;
    }

    exibe() {
        image(
            this.imagem,
            this.x,
            this.y,
            this.largura,
            this.altura,
            this.getFaramePositionX(),
            this.getFaramePositionY(),
            this.larguraSprite,
            this.alturaSprite
        );
        this.anima();
    }

    anima() {

        this.frameAtual++;
        if (this.frameAtual >= this.limite) {
            this.frameAtual = 0;
        }
    }


}