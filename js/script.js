
//tela canvas para criação da forca
var telaCanvas = document.querySelector("canvas");
var pincel = telaCanvas.getContext("2d");
var forca = document.querySelector(".divForca");
forca.style.backgroundColor = "#C9F7F7";



 var btnIniciar = document.querySelector(".btnIniciar");
  var botoes = document.querySelector(".btnsIniciais");

//
 btnIniciar.addEventListener("click",   function(){
    forca.classList.remove("invisivel");
    botoes.classList.add("invisivel");
    desenhaForca();
    
 });



  function desenhaForca(){
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(170,350);
    pincel.lineTo(230,350);
    pincel.moveTo(200,350);
    pincel.lineTo(200,20);
    pincel.lineTo(400,20);
    pincel.lineTo(400,50);
    pincel.lineWidth = 5;
    pincel.stroke();
 }   
