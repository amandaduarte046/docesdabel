document.querySelectorAll('.adicionar').forEach(button => {
    button.addEventListener('click', () => {
        const produto = button.parentElement;
        const nome = produto.dataset.nome;
        const preco = parseFloat(produto.dataset.preco);
        
        // Adiciona o produto ao carrinho
        adicionarAoCarrinho(nome, preco);
    });
});

const carrinho = [];
let total = 0;

function adicionarAoCarrinho(nome, preco) {
    carrinho.push({ nome, preco });
    total += preco;
    atualizarCarrinho();
}

function atualizarCarrinho() {
    const listaCarrinho = document.getElementById('lista-carrinho');
    listaCarrinho.innerHTML = '';

    carrinho.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)}`;

        // Botão de remover item do carrinho
        const removerButton = document.createElement('button');
        removerButton.textContent = 'Remover';
        removerButton.style.marginLeft = '10px'; // Adiciona espaço entre o nome e o botão

        // Adiciona evento para remover item
        removerButton.addEventListener('click', () => {
            removerDoCarrinho(index);
        });

        li.appendChild(removerButton);
        listaCarrinho.appendChild(li);
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function removerDoCarrinho(index) {
    // Subtrai o preço do item removido do total
    total -= carrinho[index].preco;
    
    // Remove o item do array do carrinho
    carrinho.splice(index, 1);
    
    // Atualiza a exibição do carrinho
    atualizarCarrinho();
}
