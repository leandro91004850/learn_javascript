const listar = [100, 2, 10, 150, 200, 50, 40, 30, 20, 10, 5, 1];

console.log(listar.sort((a, b) => a - b)); // ordena o array de forma crescente
console.log(listar.sort((b, a) => b - a).reverse()); // ordenar de forma descrescente

const objArray = [
    {
      nome: "Dener Troquatte",
    },
    {
      nome: "Nay Troquatte",
    },
    {
      nome: "José Troquatte",
    },
    {
      nome: "Isabel Troquatte",
    },
    {
      nome: "Marcio Troquatte",
    },
    {
      nome: "Valentina Troquatte",
    },
  ];
  
  console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome))); // ordena ordem alfabética
  console.log(objArray.sort((a, b) => a.nome.localeCompare(b.nome)).reverse());