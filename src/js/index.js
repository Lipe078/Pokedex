window.alert('Explore a Pokédex') // caixa de comentário 

const btnAvancar = document.getElementById('btn-avancar')
const btnVoltar = document.getElementById('btn-voltar')
const cartoes = document.querySelectorAll('.cartao'); 
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado'); // Esconder cartão selecionado
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add("selecionado"); // buscar Elemento na classe Id do HTML 
}

btnAvancar.addEventListener('click', function () {

    if(cartaoAtual === cartoes.length - 1 ) return;

    esconderCartaoSelecionado();
    
    cartaoAtual++; // fazer aparecer o proximo cartão da lista
    mostrarCartao(cartaoAtual);
}); 

btnVoltar.addEventListener('click', function () {

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--; // fazer aparecer o cartão anterior da lista
    mostrarCartao(cartaoAtual);
}); 



