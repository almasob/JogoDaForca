var btnDesistir = document.querySelector(".btnDesistir");
var btnNovoJogo = document.querySelector(".btnNovoJogo");

btnDesistir.addEventListener("click",function(){

	btnsJogo.classList.add("invisivel");
	forca.classList.add("invisivel");
	letrasJas.classList.add("invisivel");
	divPalavraSecreta.classList.add("invisivel");
	letrasPress.classList.add("invisivel");
	
	btnsIniciais.classList.remove("invisivel");


	limpaLetras();


})

function limpaLetras(){
	pincel.strokeStyle = "#C9F7F7";
	pincel.beginPath();
	pincel.moveTo(10,420);
	pincel.lineTo(800,420);
	pincel.lineWidth = 90;
	pincel.stroke();
	pincel.closePath();

}
