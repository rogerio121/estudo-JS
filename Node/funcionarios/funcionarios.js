const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response =>{
    const funcionarios = response.data
    console.log(findPorPaisSexoEMenorSalario('China', 'F', funcionarios))
})

function findPorPaisSexoEMenorSalario(pais, genero,pessoas){
    let funcionarisoPorPaisESexo = pessoas.filter(pessoa => pessoa.pais == pais && pessoa.genero == genero)
    let funcionarisoPorSalario = funcionarisoPorPaisESexo.reduce(function(salarioMenor, salario){
        if(salarioMenor < salario)
            return salarioMenor
        else
            return salario
    })

    return funcionarisoPorSalario
}




