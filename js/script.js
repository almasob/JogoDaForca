//tela canvas para criação da forca
var telaCanvas = document.querySelector("canvas");
var pincel = telaCanvas.getContext("2d");
var forca = document.querySelector(".divForca");
forca.style.backgroundColor = "#C9F7F7";


 var btnIniciar = document.querySelector(".btnIniciar");
 var btnsIniciais = document.querySelector(".btnsIniciais");
 var btnsJogo = document.querySelector(".btnsNoJogo");
 var letrasPress = document.querySelector(".letrasPress");

//********* AO CLICAR NO BOTAO INICIAR JOGO *************************************************
    btnIniciar.addEventListener("click",   function(){

    //DIV FORCA , BOTÕES NO JOGO e LETRAS PRA PRESSIONAR FICAM VISIVEIS 
    forca.classList.remove("invisivel");
    btnsJogo.classList.remove("invisivel");
    letrasPress.classList.remove("invisivel");


    //BOTOES INICIAIS FICAM INVISIVEIS
    btnsIniciais.classList.add("invisivel");

    //DESENHAMOS A FORCA
    desenhaForca();

    //SORTEAMOS A PALAVRA E TRANSFORMAMOS EM MAIUSCULO
    var palavra = sortearPalavras().toUpperCase();

    //AS LETRAS DA PALAVRA A PRINCIPIO ESTÃO NA MESMA COR DE FUNDO PARA NÃO APARECER
    var corLetras = "red";

    //AQUI É PARA DARMOS A DISTANCIA CERTA A CADA TRAÇO DAS LETRAS
    var distancia = 0;

    //AQUI CRIAMOS OS TRAÇOS E COLOCAMOS AS LETRAS EM CIMA, NA COR DE FUNDO PARA NÃO APARECER A PRINCIPIO
    for(i =0; i < palavra.length; i++){
        desenhaLinhasParaPalavra(distancia);
        letrasDaPalavraNaLinha(distancia,palavra[i],corLetras);
        distancia = distancia + 50;
    };

    console.log(palavra);

 });
