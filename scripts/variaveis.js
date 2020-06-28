let jogo;

let cenaAtual;
let telaInicial;
let cenas;

let imagemCenario;
let imagemPersonagem;
let imagemInimigoGrande;
let imagemInimigoVoador;
let imagemGameOver;
let imagemTelaInicial;
let fonteTelaInicial;
let imagemCoracao;

let cenario;
let personagem;

let vida;
let cartucho = {};

let botaoGerenciador;


let pontuacao;

let soundtrack;
let soundPulo;
let inimigos = [];

const matrizPersonagem = {
    idle: {
        enterState: [0, 1, 2, 3, 4, 5, 6, 5, 3],
        onState: [0, 1, 2, 3, 4, 5, 6, 5, 3],
    },
    running: {
        enterState: [8, 9, 10, 11, 12, 13],
        onState: [8, 9, 10, 11, 12, 13],
    },
    jumping: {
        enterState: [14, 15, 16, 17, 18, 19, 20],
        onState: [18, 19, 20],
    },
};