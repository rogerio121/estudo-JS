//operador ... rest(juntar)/spread(espalhar)
//usar de rest como parâmetro de função 

//usar spread como objeto
const funcionario = { nome: 'Maria', salario: 12348.99 } 
const clone = {active: true, ...funcionario}
console.log(clone)

//usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', 'Rafael', ...grupoA]
console.log(grupoFinal)