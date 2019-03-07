const schedule = require('node-schedule')

//Na função abaixo a semana é um array que vaide 0 a 6 (dom a sáb)

//Tareda executada a cada 5 segundos,a partir das 22h todas as quartas(3)
const tarefa1 = schedule.scheduleJob('*/5 * 22 * * 3', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

setTimeout(function(){
    tarefa1.cancel()
    console.log('Tarefa 1 cancelada')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(1,5)] // De segunda a sexta
regra.hour = 22
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('Executando tarefa 2!', new Date().getSeconds())
})