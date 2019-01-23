const aprovados = ['Rogério', 'Michel', 'Marcio', 'Flávia'];

//Nos parãmetros passados num foreach a primeira posição é o dado, 
//a segunda é o indíce e a terceira é o array
aprovados.forEach(function(nome, indice){
    console.log(`${indice +1}) ${nome}`);
});

aprovados.forEach(nome =>console.log(` ${nome}`));

const exibirAprobados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprobados);