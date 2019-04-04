for (let letra of 'Rogério'){
    console.log(letra) 
}

const assuntosEcman = ['Map', 'Set', 'Promise']

for (let i in assuntosEcman){
    console.log(i)
}

for (let assunto of assuntosEcman){
    console.log(assunto)
}

const assuntoMap = new Map([
    ['Map', {abordao: true}],
    ['Set', {abordao: true}],
    ['Promise', {abordao: false}]
])

for (let assunto of assuntoMap){
    console.log(assunto)
}

for (let chave of assuntoMap.keys()){
    console.log(chave)
}

for (let valor of assuntoMap.values()){
    console.log(valor)
}

for (let [chave, valor] of assuntoMap.entries()){
    console.log(chave, valor)
}