// formula = peso /  (altura * altura)

let peso = 66;
let altura = 1.74;

let imc = Number(peso / (altura * altura).toFixed(2));

switch(true){
    case imc <= 17:
        console.log('Muito abaixo do peso');
        break;
    case imc >= 17 && imc <= 18.49:
        console.log('Abaixo do peso');
        break;
    case imc >= 18.5 && imc <= 24.99:
        console.log('Peso normal');
        break;
    case imc >= 25 && imc <= 29.99:
        console.log('Acima do peso');
        break;
    case imc >= 30 && imc <= 34.99:
        console.log('Obesidade grau 1');
        break;
    default:
        console.log('Obesidade grau 3');
        break;
}