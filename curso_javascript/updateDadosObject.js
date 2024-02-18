let tenis ={
    tamanho: 45,
    marca: "Nike",
    made: "chine",
    valor: 2000,
    patrocinio: {
        marca: "Heineken",
        pais: "Alemanha",
        valor: 5000000000
    }
}

tenis.valor = 40; // alterando valores de um object
tenis.garantia = "1 ano"; // adicionando novos itens no object
delete tenis.made; // deletando

console.log(tenis);