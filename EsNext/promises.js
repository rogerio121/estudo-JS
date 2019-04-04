function falarDepoisDe(segundos, frase){
    return new Promise( (resolve, reject)=> {
        setTimeout(() => {
            resolve(frase) // o resolve só aceita um parâmetro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Foi depois de um tempo!')
.then(frase => frase.concat(': )'))
.then(outraFrase => console.log(outraFrase))

function falarDepoisDeErro(segundos, frase){
    return new Promise( (resolve, reject)=> {
        setTimeout(() => {
            reject(false)
        }, segundos * 1000)
    })
}

falarDepoisDeErro(3, 'Foi depois de um tempo!')
.then(frase => frase.concat(': )'))
.then(outraFrase => console.log(outraFrase))
.catch(erro => console.log(erro))