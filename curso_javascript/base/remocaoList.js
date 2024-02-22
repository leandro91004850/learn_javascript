const dados = [
  { nome: "leandro", tel: "619940", codigo: "1234"},
  { nome: "maria", tel: "619941", codigo: "1235"},
  { nome: "jose", tel: "619942", codigo: "1236"}  
];

console.table(dados);
console.log(dados.slice(1, 1)); // realiza uma copia do array
//dados.splice(1, 1); // remove o elemento 1

console.table(dados);