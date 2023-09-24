var jogador1 = 0;
var jogador2 = 0;
var placar;


jogador1 = prompt("Jogador 1: Digite um número de 1 a 6");
jogador2 = prompt("Jogador 2: Digite um número de 1 a 6");
placar = parseInt(jogador1) + parseInt(jogador2);
alert(`O resultado da soma dos números é ${placar}`);

if (jogador1 > jogador2) {
    placar = "Jogador 1 ganhou!";
    console.log(placar);
}else if(jogador1 == jogador2){
    placar = "Empate";
    console.log(placar);
}else{
    placar = "Jogador 2 ganhou!";
    console.log(placar);
}