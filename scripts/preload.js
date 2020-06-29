function preload() {
    imagemTelaInicial = loadImage('imagens/assets/telaInicial.png');
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemPersonagem = loadImage('imagens/personagem/personagem.png');
    imagemInimigo = loadImage('imagens/inimigos/pixel/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/pixel/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/pixel/gotinha-voadora.png');
    imagemCoracao = loadImage('imagens/assets/coracao.png');
    imagemMagica = loadImage('imagens/personagem/magic.png');
    imagemHipsta = loadImage('imagens/assets/hipsta.png');

    cartucho = loadJSON('cartucho/mapa.json');

    soundtrack = loadSound('sons/trilha_jogo.mp3');
    soundHit= loadSound('sons/breath.mp3');
    soundPulo = loadSound('sons/somPulo.mp3');
    soundRain = loadSound('sons/rain.mp3');


    texto = new Fala();

    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');

    cenario_1_sky = loadImage('imagens/cenario/floresta/sky.png');
    cenario_1_clouds_1 = loadImage('imagens/cenario/floresta/clouds_1.png');
    cenario_1_clouds_2 = loadImage('imagens/cenario/floresta/clouds_2.png');

    //cenario_1_rocks =    loadImage('imagens/cenario/floresta/rocks.png');
    cenario_1_rocks =    loadImage('imagens/cenario/floresta/pixel/sprite_3.png');

    //cenario_1_ground_1 = loadImage('imagens/cenario/floresta/ground_1.png');
    cenario_1_ground_1 = loadImage('imagens/cenario/floresta/pixel/sprite_0.png');

    //cenario_1_ground_2 = loadImage('imagens/cenario/floresta/ground_2.png');
    cenario_1_ground_2 = loadImage('imagens/cenario/floresta/pixel/sprite_1.png');

    //cenario_1_ground_3 = loadImage('imagens/cenario/floresta/ground_3.png');
    cenario_1_ground_3 = loadImage('imagens/cenario/floresta/pixel/sprite_2.png');


    cenario_1_plants = loadImage('imagens/cenario/floresta/plant.png');

}