require('./global')

console.log(MeuGlobal.saudacao())

console.log(MeuGlobal.nome)

MeuGlobal.nome = "Mudou!!"

//Uma saida para esse problema é usar o Object.freez
console.log(MeuGlobal.nome)