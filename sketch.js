function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(12);
    jogo = new Jogo();
    telaInicial = new TelaInicial();
    jogo.setup();
    cenaAtual = 'telaInicial';

    botaoGerenciador = new BotaoGerenciador('Iniciar', width/2,height/7*4);

    cenas = {
        jogo,
        telaInicial
    };

}

function keyPressed() {
    jogo.keyPressed(key);
}

function debug() {

    noFill();
    const precisao = .7;

    inimigos.forEach(inimigo => {
        rect(
            inimigo.x,
            inimigo.y,
            inimigo.largura * precisao,
            inimigo.altura * precisao
        );
    });

    rect(
        personagem.x,
        personagem.y,
        personagem.largura * precisao,
        personagem.altura * precisao)
}

function draw() {
    cenas[cenaAtual].draw();

}
