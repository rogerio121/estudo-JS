class Lancamento{
    constructor(nome = 'Genério', valor = 0){
        this.nome = nome;
        this.valor = valor;
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes;
        this.ano = ano;
        this.lancamentos = [];
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l));
    }

    sumario(){
        let valorConsolidado = 0;
        this.lancamentos.forEach(l =>{
            valorConsolidado += l.valor;
        })

        return valorConsolidado;
    }
}

const salario = new Lancamento('Salário', 4700);
const internet = new Lancamento('Internet', -100);
const contas = new CicloFinanceiro(6, 2018);
contas.addLancamentos(salario, internet);
console.log(contas.sumario());