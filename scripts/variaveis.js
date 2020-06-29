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
let imagemMagica;
let imagemHipsta;

let cenario;
let personagem;
let magic;
let texto;

let vida;
let cartucho = {};

let botaoGerenciador;
let botaoReiniciar;


let pontuacao;

let soundtrack;
let soundPulo;
let soundHit;
let soundRain;
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


let cenario_1_sky;
let cenario_1_clouds_1;
let cenario_1_clouds_2;
let cenario_1_rocks;
let cenario_1_ground_1;
let cenario_1_ground_2;
let cenario_1_ground_3;
let cenario_1_plants;