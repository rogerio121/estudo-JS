// Cadeia de prototipos (prototype chain)
Object.prototype.attr0 = 'Z';
const avo = { attr1: 'A' };
const pai = { __proto__: avo, attr2: 'B', attr3: 'C' };
const filho = { __proto__: pai, attr3: 'D' };

console.log(filho.attr1);
console.log(filho.attr0); // Ele encotra pq por default o avo tem prototype como herança 
console.log(filho.attr3); // Aqui acontece o sompreamento, por filho ter o atributo não busca o atributo no pai

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerar(delta){
        if(this.velAtual + delta <= this.velMax)
            this.velAtual += delta;
        else
            this.velAtual = this.velMax
    }, 
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}`
    }
};

const ferrari = {
    modelo: 'F40',
    velMax: 324 // Shadowing (sombreamento)
};

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}` // Super deixa de referenciar o this e referencia o atributo do prototype
    }
};

Object.setPrototypeOf(ferrari, carro);
Object.setPrototypeOf(volvo, carro);  

console.log(ferrari);
console.log(volvo);

volvo.acelerar(100);
console.log(volvo.status());

ferrari.acelerar(300);
console.log(ferrari.status());