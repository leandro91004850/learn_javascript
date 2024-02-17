let funcao = function(){
    let texto= 'executando uma função';
    let soma = 2+2;
    return texto + ' - soma: ' + soma;
}

console.log(funcao());

// Arrow function 
const isArrowFunction =() =>{
    return 2 + 2;
}

console.log(isArrowFunction());