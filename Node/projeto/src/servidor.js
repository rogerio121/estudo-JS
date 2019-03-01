const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) =>{
    res.send({nome: 'Notebook', preco: 2300.00}) //Converter para Json
})

app.listen(porta, () =>{
    console.log(`Servidor rodando na porta ${porta}.    `)
})

