var telaCanvasCel = document.querySelector("#canvasCel");
var pincelCel = telaCanvasCel.getContext("2d");
var forcaCel = document.querySelector(".divForcaCel");

 function desenhaForcaCel(){
    pincelCel.strokeStyle = "#513315";
    pincelCel.beginPath();
    pincelCel.shadowBlur = 10;
    pincelCel.shadowOffsetX = 5;
    pincelCel.shadowOffsetY = 5;
    pincelCel.shadowColor = "blueviolet";
    pincelCel.moveTo(50,275);  //-35 +100
    pincelCel.lineTo(80,275); //-35 +100
    pincelCel.moveTo(65,275); //-35 +100  
    pincelCel.lineTo(65,110); //-35 +100
    pincelCel.lineTo(165,110); //-35 +100
    pincelCel.lineTo(165,125); //-35 +100
    pincelCel.lineWidth = 2;
    pincelCel.stroke();
 }   

 function desenhaCabecaCel(){
    pincelCel.beginPath();
    pincelCel.arc(165,140,15,0,2*3.14);
    pincelCel.stroke();
 }

 function desenhaCorpoCel(){
    pincelCel.beginPath();
    pincelCel.moveTo(165,155);
    pincelCel.lineTo(165,220);
    pincelCel.stroke();
 }

function desenhaBracoDCel(){
    pincelCel.beginPath();
    pincelCel.moveTo(165,170);
    pincelCel.lineTo(140,200);
    pincelCel.stroke();
 }

function desenhaBracoECel(){
    pincelCel.beginPath();
    pincelCel.moveTo(165,170);
    pincelCel.lineTo(190,200);
    pincelCel.stroke();
 }

function desenhaPernaECel(){
    pincelCel.beginPath();
    pincelCel.moveTo(165,220);
    pincelCel.lineTo(190,250);
    pincelCel.stroke();
 }
function desenhaPernaDCel(){
    pincelCel.beginPath();
    pincelCel.moveTo(165,220);
    pincelCel.lineTo(140,250);
    pincelCel.stroke();
 }


