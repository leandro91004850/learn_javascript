let objeto = {
    valor_string: 'string',
    valor_int: 10,
    valor_float: 10.5,
    valor_boolean: true,
    valor_array: [1, 2, 3],
    valor_objeto: {
        valor_string: 'string',
        valor_int: 10,
        valor_float: 10.5,
        valor_boolean: true,
        valor_array: [1, 2, 3]
    }
};

//console.log(objeto);

var valor_array = objeto.valor_objeto;
console.log(valor_array);