const alunos = [
    {nome:'Rogério', nota: 9.5 , bolsista: true},
    {nome:'Fabrício', nota: 8.0 , bolsista: true},
    {nome:'Flávia', nota: 7.2, bolsista: false},
    {nome:'Giovanna', nota: 6.5, bolsista: false}
]

// Transformo alunos em somente notas
console.log(alunos.map(a => a.nota))

// Exemplo de reduce
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
});

//Exemplo de reduce com valor inicial 10
const resultado2 = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 10);