let imagemCenario;
let imagemPersonagem;
let soundtrack;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  soundtrack = loadSound('sons/trilha_jogo.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(30)
  
  soundtrack.loop();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
  circle(mouseX,mouseY,50);
}
