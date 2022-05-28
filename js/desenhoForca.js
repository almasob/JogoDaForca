  function desenhaForca(){
    pincel.strokeStyle = "black";
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

 function desenhaCabeca(){
    pincel.beginPath();
    pincel.arc(400,80,30,0,2*3.14);
    pincel.stroke();
 }

 function desenhaCorpo(){
    pincel.beginPath();
    pincel.moveTo(400,110);
    pincel.lineTo(400,240);
    pincel.stroke();
 }

function desenhaBracoD(){
    pincel.beginPath();
    pincel.moveTo(400,140);
    pincel.lineTo(350,200);
    pincel.stroke();
 }

function desenhaBracoE(){
    pincel.beginPath();
    pincel.moveTo(400,140);
    pincel.lineTo(450,200);
    pincel.stroke();
 }

function desenhaPernaE(){
    pincel.beginPath();
    pincel.moveTo(400,240);
    pincel.lineTo(450,300);
    pincel.stroke();
 }
function desenhaPernaD(){
    pincel.beginPath();
    pincel.moveTo(400,240);
    pincel.lineTo(350,300);
    pincel.stroke();
 }


