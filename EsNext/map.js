const tecnologias = new Map()

tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.get('React'))
console.log(tecnologias.get('React').framework)

const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor)
}) 

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)