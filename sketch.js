let imagemCenario;
let imagemPersonagem;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  image(imagemCenario, -mouseX, 0, width, height);
  image(imagemCenario, width-mouseX, 0, width, height);
  image(imagemPersonagem,mouseX,height-150, 110, 135, 0,0, 220,270);
  circle(mouseX,mouseY,50);
}