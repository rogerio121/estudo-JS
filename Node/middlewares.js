// padrão middleware (chain of responsability)

const passo1 = (contexto, next) => {
    contexto.valor1 = 'mid1'
    next()
}

const passo2 = (contexto, next) => {
    contexto.valor2 = 'mid2'
    next()
}

const passo3 = (contexto, next) => {
    contexto.valor3 = 'mid3'
}


const executar = (contexto, ...middlewares) => {
    const executarPasso = indice => {
        middlewares && indice < middlewares.length &&
           middlewares[indice](contexto, () => executarPasso(indice + 1))
    }
    executarPasso(0)
}

const contextoTeste = {}
executar(contextoTeste, passo1, passo2, passo3)
console.log(contextoTeste)