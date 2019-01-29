const produtos = [
    {nome: 'NoteBoock', preco: 2499, fragio: true},
    {nome: 'MacBoock', preco: 4199,fragio: true},
    {nome: 'Copo de vidro', preco: 12.49,fragio: true},
    {nome: 'Copo de plástico', preco: 18.99,fragio: true}
]

const produtosFrageis = produto => produto.fragio
const produtosCaros = produto => produto.preco >= 500

console.log(produtos.filter(produtosCaros))
console.log(produtos.filter(produtosFrageis))