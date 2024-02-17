let jogador1 = 0;
let jogador2 = 0;
let placar;

switch (true) {
    case jogador1 > jogador2:
        placar = 'jogador 1 ganhou';
        break;
    case jogador1 < jogador2:
        placar = 'jogador 2 ganhou';
        break;

    default:
        placar = 'empate';
        break;
}

console.log(placar); 
