functiop criaCartao(categoria, pergunta, resposta) {
    let container= document.getElementByld('container')
    let cartao = document.createElement('article')
    cartao.className = 'cartao'
    cartao.innerHTML = '
    <div class = "cartao__ conteudo">
    <h3>$ { categoria} </h3>
    <div class = "cartao__conteudo__pergunta">
        <p> $ {pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    '
    letrespostaEstaVisivel= false
    

}