const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao);
    }
}


pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre programação funcional e programação orientada a objeto

// o bind resolve esse conflito dizendo que o this do contexto é o objeto pessoa
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
