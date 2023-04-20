// selecione o botão usando o método getElementById
var botao = document.getElementById("botao");

// adicione um evento de clique ao botão
botao.addEventListener("click", function() {
// selecione o parágrafo usando o método getElementById
var paragrafo = document.getElementById("paragrafo");
// altere o texto do parágrafo
paragrafo.textContent = "O texto deste parágrafo foi alterado!";
});

// seleciona o botao
var limpar = document.getElementById("limpar");
// adiciona um evento ao clicar no botao
limpar.addEventListener("click", function() {
    // seleciona o conteudo do paragrafo
    var p = document.getElementById("paragrafo");
    // substitui o conteudo do paragrafo por ""
    p.innerHTML = "";
});

// seleciona o botao
var dark = document.getElementById("dark");
// adiciona um evento ao clicar no botao
dark.addEventListener("click", function(){
    // altera a cor do background para branco
    document.body.style.background = 'black';
    // altera a cor da fonte para preto
    document.body.style.color = 'white';
})

// seleciona o botao
var light = document.getElementById("light");
// adiciona um evento ao clicar no botao
light.addEventListener("click", function(){
    // altera a cor do background para branco
    document.body.style.background = 'white';
    // altera a cor da fonte para preto
    document.body.style.color = 'black';
})