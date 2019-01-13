const pai = {nome: 'Pedro', corCabelo: 'Preto'};

const filha1 = Object.create(pai);
filha1.nome = 'Ana';
console.log(filha1.corCabelo);

filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable:true}
});

console.log(filha2.nome);
filha2.nome = 'Carla';
console.log(`${filha2.nome} tem cabelos ${filha2.corCabelo}`);

console.log(Object.keys(filha1));
console.log(Object.keys(filha2));

// Assim posso ver se o atributo é do objeto ou veio por herança
for(let key in filha2){
    filha2.hasOwnProperty(key) ? console.log(key) : console.log(`Por herança: ${key}`);
}