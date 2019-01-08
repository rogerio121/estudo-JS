//pessoa -> 123 -> {...}
const pessoa = {nome: 'Flávia'};
pessoa.nome = 'Rogério';

console.log(pessoa);

//pessoa -> 456 -> {...}
//pessoa = {nome: 'Laura'};

Object.freeze(pessoa);// Congela os dados do obj no ultimo estado

pessoa.nome = ('Cristian');
console.log(pessoa.nome)