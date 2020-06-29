class BotaoReiniciar extends BotaoGerenciador{

    constructor(texto, x, y) {
        super(texto,x,y);
        this.botao = createButton(this.texto);
        this.botao.mousePressed(()=>{
            location.reload();
        });
        this.botao.addClass('botao-tela-inicial')
    }

}