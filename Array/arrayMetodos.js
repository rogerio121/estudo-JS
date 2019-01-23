const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // Remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton') // Adiciona valor na primeira posição do array
console.log(pilotos);

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);
//remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2); //Gera novo Array a partir do indice passado
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(2, 5); //Gera novo Array a partir do indice passado até o ultimo
console.log(algunsPilotos2);