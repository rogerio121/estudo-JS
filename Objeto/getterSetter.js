const sequencia = {
    _valor: 1, //conveção que diz a outros programadores que a variável é privada (uso interno)
    get valor(){ return this._valor++ },
    set valor(valor){ 
        if(valor > this._valor)
            this._valor = valor
    }
}

console.log(sequencia.valor, sequencia.valor); //<-get
sequencia.valor = 1000; //<-set
console.log(sequencia.valor, sequencia.valor);
sequencia.valor = 900; //<-set
console.log(sequencia.valor, sequencia.valor); //<-get