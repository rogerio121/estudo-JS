const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // Retorna todas os nomes dos atributos do objeto
console.log(Object.values(pessoa)); // Retorna todos os valores dos atributos do objeto 
console.log(Object.entries(pessoa)); // Retorna todos os nomes e valores dos atributos separados po arrays

// VV Diferente da definição comum, nesse caso eu posso definir características da propriedade  VV
Object.defineProperty(pessoa, 'dataDeNascimento',{
    enumerable: true,
    writable: false,
    value:'01/01/2019'
}); 

pessoa.dataDeNascimento = '01/01/2017'; // Por o atributo ser "writable: false" ele não recebe esse valor
console.log(pessoa.dataDeNascimento);

// Object.assing (ECMAScript 2015), ele concatena objetos
const destino = {a: 1};
const obj1 = {b: 1};
const obj2 = {c: 3, a: 4}; // Caso tenha um atributo repetido, por ex p "a" ele irá sobrescrever
const objConcatenado = Object.assign(destino, obj1, obj2);
console.log(objConcatenado);

Object.freeze(objConcatenado) // Ele congela o objeto, tornando-o imutável
objConcatenado.c = 1234;
console.log(objConcatenado)