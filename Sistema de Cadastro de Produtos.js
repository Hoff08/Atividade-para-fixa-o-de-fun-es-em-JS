// Array para armazenar os produtos
let produtos = [];

// Função para adicionar um novo produto
function adicionarProduto(nome, preco, quantidade) {
    if (nome && preco > 0 && quantidade > 0) {
        produtos.push({ nome, preco, quantidade });
        console.log("Produto adicionado com sucesso!");
    } else {
        console.log("Erro: Todos os campos devem estar preenchidos e o preço/quantidade devem ser maiores que 0.");
    }
}

// Função para listar todos os produtos cadastrados
function listarProdutos() {
    console.log("Produtos cadastrados:");
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. Nome: ${produto.nome}, Preço: R$${produto.preco}, Quantidade: ${produto.quantidade}`);
    });
}

// Função para calcular e exibir o valor total dos produtos em estoque
function calcularValorEstoque() {
    let valorTotal = produtos.reduce((total, produto) => total + (produto.preco * produto.quantidade), 0);
    console.log(`Valor total do estoque: R$${valorTotal}`);
}

// Exemplo de uso das funções
adicionarProduto("Arroz", 20, 5);
adicionarProduto("Feijão", 10, 3);
listarProdutos();
calcularValorEstoque();
