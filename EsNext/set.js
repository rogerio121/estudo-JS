//Não aceita repetição e não é indexada
const times = new Set();
times.add('São Paulo')
times.add('Vasco')
times.add('Palmeiras')
times.add('Corintians')
times.add('São Paulo')

//São paulo não aparece pois já exitia no set 
console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('Vasco'))
times.delete('Vasco')
console.log(times.has('Vasco'))  

const nomes = ['Rogério', 'Flávia', 'Fabrício', 'Rogério']
const nomesSet = new Set(nomes)
console.log(nomesSet)

