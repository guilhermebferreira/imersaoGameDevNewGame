function preload() {
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGameOver = loadImage('imagens/assets/gameover.png');
    imagemPersonagem = loadImage('imagens/personagem/personagem.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemCoracao = loadImage('imagens/assets/coracao.png');

    cartucho = loadJSON('cartucho/mapa.json');

    soundtrack = loadSound('sons/trilha_jogo.mp3');
    soundPulo = loadSound('sons/somPulo.mp3');

    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

}