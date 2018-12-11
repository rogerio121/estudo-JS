let comparaComThis =  function(param){
    console.log(this === param);
}

comparaComThis(global);

const obj = {};

comparaComThis = comparaComThis.bind(obj);
comparaComThis(global);
comparaComThis(obj);

//O this no caso de uma arrowFunction não é o global e sim o module.exports, pois o this em arrowFunctions leva
// em conta o contexto em que ela foi criada, ao contrário das functions convencionais que levam em conta o contexto
// de execução. E como essa função foi feita em um módulo dentro da global....
let comparaComThisArrow = param => console.log(this === param);
comparaComThisArrow(global);
comparaComThisArrow(module.exports);

//O this dentro de uma arrowFunction é imutável
comparaComThisArrow = comparaComThisArrow.bind(obj);
comparaComThisArrow(obj);
comparaComThisArrow(module.exports);

