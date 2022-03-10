


window.onload = function () {


    var objBotao = document.getElementById("botao_media");
    objBotao.onclick = function () {
        var objAluno = document.getElementById("nome_aluno")
        var objNota1 = parseFloat(document.getElementById("nota_1").value);
        var objNota2 = parseFloat(document.getElementById("nota_2").value);
        var objNota3 = parseFloat(document.getElementById("nota_3").value);
        var objNota4 = parseFloat(document.getElementById("nota_4").value);

        var media = (objNota1 + objNota2 + objNota3 + objNota4) / 4
        var transformar = media.toFixed(1)
        var mediaFinal = (transformar);

        var objDiv = document.getElementById("resultado");
        var objAprovacao = document.getElementById("aprovacao");

        objDiv.innerHTML = "Nome: " + objAluno.value + " Média: " + parseFloat(mediaFinal)
            if (mediaFinal >= 6.0) 
            { 
                objAprovacao.innerHTML = "APROVADO!(a).";
            
            }
            else
            {
                objAprovacao.innerHTML = "REPROVADO!(a)";
            }
    }
}