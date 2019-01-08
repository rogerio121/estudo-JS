//Usando anotação literal
const obj1 = {};
console.log(obj1);


//Object em js
console.log(typeof Object,typeof new Object);
const Obj2 = new Object;
console.log(Obj2);


//Função construtora
function Produto (nome, preco, desconto){
    this.nome = nome;

    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15);
const p2 = new Produto('NoteBook', 2998.99, 0.25);
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


//Função Factory
function criaFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const f1 = criaFuncionario('João', 7980, 4);
const f2 = criaFuncionario('Maria', 11400, 1);

console.log(f1.getSalario(), f2.getSalario());


// Object.create
const filha = Object.create(null);
filha.nome = 'Laura';
console.log(filha);


//Uma função que retorna um objeto
const fromJSON = JSON.parse('{"info" : "Sou um JSON"}');
console.log(fromJSON.info);