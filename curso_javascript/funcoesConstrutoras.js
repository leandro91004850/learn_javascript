class Nome {
    constructor(name, sobrenome) {
        this.name = name;
        this.sobrenome = function () {
            const nomeCompleto = `${this.name} ${sobrenome}`;
            return nomeCompleto;
        };
    }
}

const aluno01 = new Nome("leandro", "almeida"); // instanciando

console.log(aluno01.sobrenome());