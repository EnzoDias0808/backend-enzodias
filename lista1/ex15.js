const catalogo = [
  { id: 1, nome: "Teclado Mecânico", preco: 150.00 },
  { id: 2, nome: "Mouse Óptico", preco: 80.00 },
  { id: 3, nome: "Monitor 24'", preco: 899.00 },
  { id: 4, nome: "Mousepad Gamer", preco: 45.00 },
  { id: 5, nome: "Fone de Ouvido", preco: 120.00 }
];

const produtoId3 = catalogo.find(produto => produto.id === 3);
console.log("a) Produto com ID 3:", produtoId3);

const produtosCaros = catalogo.filter(produto => produto.preco > 100);
console.log("\nb) Produtos acima de R$100:", produtosCaros);

const nomesProdutos = catalogo.map(produto => produto.nome);
console.log("\nc) Lista apenas com os nomes:", nomesProdutos);

console.log("\nd) Catálogo de Produtos Formatado:");
catalogo.forEach(produto => {
  console.log(`Produto [ID ${produto.id}]: ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
});