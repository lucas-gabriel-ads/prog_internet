document.addEventListener('DOMContentLoaded', function () {
    var botaoExibir = document.getElementById('botaoExibir');
    botaoExibir.addEventListener('click', exibirConteudo);

    var botaosoma = document.getElementById('calc');
    botaosoma.addEventListener('click', soma);

    var showimg = document.getElementById('showimg');
    showimg.addEventListener("click", exibirImg);
    var limpaimg = document.getElementById('limparimg')
    limpaimg.addEventListener("click", function (){
        document.getElementById('imagem').innerHTML = '';
    })

    var seletor = document.getElementById("seletor");
    seletor.addEventListener("change", imagemselecionada);

    var checar = document.getElementById('check');
    checar.addEventListener("click", testecheck())

    var lowup = document.getElementById("upperlower");
    lowup.addEventListener("change", upperLower);
});

function upperLower() {
    var up = document.getElementById("upper")
    var low = document.getElementById("lower")
    var texto = documento.getElementById("texto")

    if (up.selected){
        texto.innerHTML = texto.innerHTML.toUpperCase();
    }else if (low.selected){
        texto.innerHTML = texto.innerHTML.toLowerCase();
    }
}   

function testecheck() {
    var opc = document.getElementsByName('foods');
    for (var i=0; i<opc.length; i++){
        if (opc[i].checked){
            document.getElementById("cont").innerHTML = "Marcou mizeravi";
        }
    }
}

function imagemselecionada() {
    var mario = document.getElementById("marioop")
    var luigi = document.getElementById("luigiop")
    var cogumelo = document.getElementById("cogumeloop")
    var def = document.getElementById("default")
    
    if (def.selected){
        document.getElementById("imgselected").innerHTML = '';
    }else{
        var image2 = document.createElement('img')
        image2.id = "image2";
        if (mario.selected){
            image2.src = ("imagens/" + (document.getElementById("marioop")).value);
        }else if (luigi.selected){
            image2.src = ("imagens/" + (document.getElementById("luigiop")).value);
        }else if (cogumelo.selected){
            image2.src = ("imagens/" + (document.getElementById("cogumeloop")).value);
        }
        document.getElementById("imgselected").innerHTML = '';
        document.getElementById("imgselected").appendChild(image2);
    }
}

function exibirImg() {
    var nomeimg = document.getElementById("img").value;
    if (nomeimg === '') {
        alert("Informe o nome da imagem!")
        return;
    }
    var image = document.createElement('img')
    image.id = "image";
    image.src = ("imagens/" + (document.getElementById("img")).value);
    image.alt = ("imagens/" + (document.getElementById("img")).value);
    document.getElementById("imagem").innerHTML = '';
    document.getElementById("imagem").appendChild(image);
}

function exibirConteudo() {
    var conteudo = document.getElementById('caixaDeTexto').value;
    if (conteudo.trim() === ''){
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