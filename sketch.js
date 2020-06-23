let imagemCenario;
let imagemPersonagem;

function preload(){
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imagemCenario, 3);
}

function draw() {
  cenario.exibe();
  image(imagemPersonagem,mouseX,height-150, 110, 135, 0,0, 220,270);
  circle(mouseX,mouseY,50);
  
  cenario.move();
}

class Cenario{
  constructor(imagem, velocidade){
    this.imagem = imagem;
    this.velocidade = velocidade;
    this.x1 = 0;
    this.x2 = width;
  }
  exibe(){
    image(this.imagem, this.x1, 0, width, height);
    image(this.imagem, this.x2 +1, 0, width, height);
  }
  move(){
    this.x1 = this.x1 - this.velocidade;
    this.x2 = this.x2 - this.velocidade;
    if(this.x1 < -width){
      this.x1 = width;
    }
      
    if(this.x2 < -width){
      this.x2 = width;
    }
      
  }
    
  
}