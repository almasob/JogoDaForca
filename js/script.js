//tela canvas para criação da forca
var telaCanvas = document.querySelector("canvas");
var pincel = telaCanvas.getContext("2d");
var forca = document.querySelector(".divForca");
forca.style.backgroundColor = "#C9F7F7";


 var btnIniciar = document.querySelector(".btnIniciar");
 var btnsIniciais = document.querySelector(".btnsIniciais");
 var letrasPress = document.querySelector(".letrasPress");

//********* AO CLICAR NO BOTAO INICIAR JOGO *************************************************
    btnIniciar.addEventListener("click",   function(){

    //DIV FORCA , BOTÕES NO JOGO e LETRAS PRA PRESSIONAR FICAM VISIVEIS 
    forca.classList.remove("invisivel");
    btnsJogo.classList.remove("invisivel");
    letrasPress.classList.remove("invisivel");
    letrasJas.classList.remove("invisivel");


    //BOTOES INICIAIS FICAM INVISIVEIS
    btnsIniciais.classList.add("invisivel");

    //DESENHAMOS A FORCA
    desenhaForca();

    //SORTEAMOS A PALAVRA E TRANSFORMAMOS EM MAIUSCULO
    var palavra = sortearPalavras().toUpperCase();

    //AQUI CRIAMOS A PALAVRA SECRETA NA FORCA, INVISIVEL A PRINCIPIO
        montarPalavraSecreta(palavra);




 });



    //MONTAR PALAVRA NA FORCA A DIV TEM QUE TER A CLASSE LETRASECRETA E ESCONDERLETRA
    function montarPalavraSecreta(palavra){
        for(i =0; i < palavra.length; i++){
            var div = document.createElement("div");
            div.classList.add("letraSecreta", "esconderLetra");
            div.textContent = palavra[i];
            divPalavraSecreta.appendChild(div);
        }
    }


