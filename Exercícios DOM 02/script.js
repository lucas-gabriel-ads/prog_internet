document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);

    var botaosoma = document.getElementById('calc');
    botaosoma.addEventListener('click', soma);
});

function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    if (conteudo === ''){
        alert("Campo vazio!")
    }
    document.getElementById('conteudo').innerHTML = conteudo;
}

function soma(){
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    if (num1 === '' || num2 === ''){
        alert("Informe números nos dois campos!");
        return;
    }
    if (isNaN(num1) || isNaN(num2)){
        alert("Apenas Números!");
        return;
    }
    document.getElementById('result').innerHTML = parseInt(num1) + parseInt(num2);
}