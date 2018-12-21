// IIFE -> Imediately Invoked Function Expression

//Assim criamos um módulo, e assim tudo que for criado aqui, ficar aqui. Desse jeito não tocamos
//o escopo global
(function (){
    console.log('Será executada na hora!');
    console.log('Foge do escopo mais abrangente!');
})()