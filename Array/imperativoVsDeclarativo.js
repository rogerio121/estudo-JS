const alunos = [
    {nome: 'Rogério', nota: 10},
    {nome: 'Fabrício', nota: 9}
]

//Imperativo - Foca no COMO fazer
let total1 = 0;
for(let i = 0; i < alunos.length; i++){
    total1 += alunos[i].nota
}

console.log(total1 / alunos.length)

//Declarativo - Foca no OQUE fazer
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual 
const total2 = alunos.map(getNota).reduce(soma)

console.log(total2 / alunos.length)