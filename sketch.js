let imagemCenario;
let imagemPersonagem;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let soundtrack;
let soundPulo;
const matrizInimigo = [
    [0, 0],
    [104, 0],
    [208, 0],
    [312, 0],
    [0, 104],
    [104, 104],
    [208, 104],
    [312, 104],
    [0, 208],
    [104, 208],
    [208, 208],
    [312, 208],
    [0, 312],
    [104, 312],
    [208, 312],
    [312, 312],
    [0, 418],
    [104, 418],
    [208, 418],
    [312, 418],
    [0, 522],
    [104, 522],
    [208, 522],
    [312, 522],
    [0, 626],
    [104, 626],
    [208, 626],
    [312, 626],
];


const matrizPersonagem = [
    [0, 0],
    [220, 0],
    [440, 0],
    [660, 0],
    [0, 270],
    [220, 270],
    [440, 270],
    [660, 270],
    [0, 540],
    [220, 540],
    [440, 540],
    [660, 540],
    [0, 810],
    [220, 810],
    [440, 810],
    [660, 810],
];

const matrizInimigoGrande = [
    [0,0],
    [400,0],
    [800,0],
    [1200,0],
    [1600,0],
    [0,400],
    [400,400],
    [800,400],
    [1200, 400],
    [1600, 400],
    [0,800],
    [400, 800],
    [800, 800],
    [1200, 800],
    [1600, 800],
    [0, 1200],
    [400, 1200],
    [800, 1200],
    [1200, 1200],
    [1600, 1200],
    [0, 1600],
    [400, 1600],
    [800, 1600],
    [1200, 1600],
    [1600, 1600],
    [0, 2000],
    [400, 2000],
    [800, 2000],
];

const matrizInimigoVoador = [
    [0,0],
    [200, 0],
    [400, 0],
    [0, 150],
    [200, 150],
    [400, 150],
    [0, 300],
    [200, 300],
    [400, 300],
    [0, 450],
    [200, 450],
    [400, 450],
    [0, 600],
    [200, 600],
    [400, 600],
    [0, 750],
];

function preload() {
    imagemCenario = loadImage('imagens/cenario/floresta.png');
    imagemGameOver = loadImage('imagens/assets/gameover.png');
    imagemPersonagem = loadImage('imagens/personagem/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    soundtrack = loadSound('sons/trilha_jogo.mp3');
    soundPulo = loadSound('sons/somPulo.mp3');

}


function setup() {

    createCanvas(windowWidth, windowHeight);
    cenario = new Cenario(imagemCenario, 3);
    personagem = new Personagem(matrizPersonagem, imagemPersonagem, 0, 0,110, 135, 220, 270);
    inimigo = new Inimigo(matrizInimigo, imagemInimigo, width - 52, 0,52, 52, 104, 104, 30,30);
    inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width + 50, 0, 200,200,400,400, 12, 400);
    inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, 0,height -200, 100,75,200,150,30,40);
    frameRate(40);

    soundtrack.loop();
}

function keyPressed() {
    console.log(key);
    if (key === 'ArrowUp' || key === ' ' ) {
        personagem.pula();
        soundPulo.play();
    }
}

function debug() {

    noFill();
    const precisao = .7;
    rect(
        inimigo.x,
        inimigo.y,
        inimigo.largura * precisao,
        inimigo.altura * precisao
    );
    rect(
        personagem.x,
        personagem.y,
        personagem.largura * precisao,
        personagem.altura * precisao)
}

function draw() {
    cenario.exibe();
    cenario.move();
    personagem.exibe();


    personagem.aplicaGravidade();
    inimigo.exibe();
    inimigo.move();

    inimigoGrande.exibe();
    inimigoGrande.move();

    inimigoVoador.exibe();
    inimigoVoador.move();



    circle(mouseX, mouseY, 50);

    debug();

    if (personagem.estaColidindo(inimigo)) {
        console.log('Colidiu');
        image(imagemGameOver, width/4, height/4, width/2, height/2);
        noLoop()
    }
}
