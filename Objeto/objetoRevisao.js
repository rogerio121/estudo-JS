const produto = new Object;
produto.nome= 'Cadeira';
produto['marca do produto'] = 'Generica';
produto.preco = 220;

console.log(produto);
delete produto.nome;
delete produto['marca do produto'];
console.log(produto);

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome:'Raul',
        idade: 56,
        endereco:{
            logradouro: 'Rua ABC',
            numero: 123
        }
    }, 
    condutores: [{
        nome: 'Rogério',
        idade: 21
    },
    {
        nome: 'Flávia',
        idade: 20
    }]
}

carro.proprietario.endereco.numero = 1000;
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro);
delete carro.proprietario.endereco
console.log(carro);
console.log(carro.proprietario.endereco);