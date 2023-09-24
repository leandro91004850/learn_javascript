var jogador1 = 0;
var jogador2 = 0;
var placar;

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
