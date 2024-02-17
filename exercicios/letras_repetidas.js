// mostrar quantas letras repetidas aparecem em uma palavra

const palavra = "Abacate com Laranja".toLowerCase().replaceAll(" ", "");
let letras = {}; // object

for(let i = 0; i < palavra.length; i++){
    const letra = letras[palavra[i]];
    if(letra){
        letras[palavra[i]]++;
    }else{
        letras[palavra[i]] = 1;
    }
    
}

// retorna o primeiro indice da letra não  repetida
const chaves = Object.keys(letras);

for(let i = 0; i < chaves.length; i++){
    const letra = chaves[i]
    const indice_letra = letras[letra];
   if(indice_letra === 1){
    console.log(`Encontrado o primeiro indice de número ${indice_letra} de letra ${letra} que não se repete na palavra ${palavra}`);
    break;
   }

}

console.log(letras);