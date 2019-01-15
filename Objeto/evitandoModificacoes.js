// Object.preventExtensions, permite alterar valores, excluir atributos mas não permite criar atributos
const produto = Object.preventExtensions({
    nome: 'Qualquer',
    preco: 10,
    tag: 'promoção'
});
console.log('Extensível: ', Object.isExtensible(produto));

produto.nome = 'Borraca';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;

console.log(produto);

// Object.seal, ao contrário do anteriro, só permite alterar valores de atributos
const pessoa = {
    nome: 'Rogério',
    idade: 23
};
Object.seal(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));

pessoa.sobrenome = 'Damião';
delete pessoa.nome;
pessoa.idade = 29;
console.log(pessoa);


// Object.freeze, é a soma dos dois métodos acima, ele não permite nehuma alteração noobjeto 