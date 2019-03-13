//Arrow function
const soma = (a, b) => a + b // caso a função tenha um corpo '{}' é preciso usar o 'return', do contrpario o retorno é implícito
console.log(soma(2, 3))


//Arrow function (this)
const lexico1 = () => console.log(this === module.exports)
// Não é possivel mudar o contexto da arrow function mesmo com o bind
const lexico2 = lexico1.bind({})
lexico1()
lexico2()


// parametros default
function log(texto = 'Node'){
    console.log(texto)
}

log()
log(undefined)
log(null)
log('Rogério')


// operador rest
function total (...numeros){
    let total = 0 
    numeros.forEach(n => total +=n)
    return total
    
}

console.log(total(2,3,4,5))