const carrinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de Lapis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

function x(){
    carrinho.map(function(json){
        objeto = JSON.parse(json);
        console.log(objeto.preco);
    })
}

x();