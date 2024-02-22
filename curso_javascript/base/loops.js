const myArray = [1, 2, 3, 4, 5, 6];
const myArrayObj = [
  {
    nome: "Dener",
    sobreNome: "Troquatte",
  },
  {
    nome: "Nay",
    sobreNome: "Troquatte",
  },
  {
    nome: "José",
    sobreNome: "Troquatte",
  },
];

/* for ([inicialização]; [condição]; [expressão final])
 for (let i = 0; i < myArrayObj.length; i++) {
   console.log(myArrayObj[i].nome, myArrayObj[i].sobreNome);
 }
*/

/* // for Of
 for (let item of myArrayObj) {
   console.log(item);
 }*/

// for in

 for (let item in myArrayObj) {
   console.log(myArrayObj[item].nome);
}