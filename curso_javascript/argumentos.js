const funcaoArgumento = function(num, num2){
    if(typeof num === 'number' && typeof num === 'number') return num + num2
    else return "Você passou um dado inválido como argumento."
}

console.log(funcaoArgumento(2, 4));