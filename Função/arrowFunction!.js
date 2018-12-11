// Com Parametro
let dobro = function(a){
    return 2 * a;
}

dobro = (a) =>{
    return 2 * a;
}

dobro = a => 2 * a; //return implícito

console.log(dobro(Math.PI));



// Sem parametro
let ola = function(){
    return "Olá";
}

ola = () => {
    return "Olá";
}

ola = _ => "Olá" // possui parametro

console.log(ola())