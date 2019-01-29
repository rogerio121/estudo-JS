const alunos = [
    {nome:'Rogério', nota: 9.5 , bolsista: true},
    {nome:'Fabrício', nota: 8.0 , bolsista: true},
    {nome:'Flávia', nota: 7.2, bolsista: false},
    {nome:'Giovanna', nota: 6.5, bolsista: false}
]

const bolsistas = alunos.map(aluno => aluno.bolsista);
// Todos os alunos são bolsista?
let todosOsAlunosSaoBolsistas = bolsistas.reduce(function(inicioArray, fimArray){
    return inicioArray && fimArray
})
console.log(`Todos os alunos são bolsistas?  ${todosOsAlunosSaoBolsistas}`)

// Algum aluno é bolsista?
todosOsAlunosSaoBolsistas = bolsistas.reduce(function(inicioArray, fimArray){
    return inicioArray || fimArray
})
console.log(`Algum aluno é bolsistas?  ${todosOsAlunosSaoBolsistas}`)