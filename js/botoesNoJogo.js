var btnDesistir = document.querySelector(".btnDesistir");
var btnNovoJogo = document.querySelector(".btnNovoJogo");

btnDesistir.addEventListener("click",function(){

	erros=0;
	acertos=0;

	btnsJogo.classList.add("invisivel");
	forca.classList.add("invisivel");
	letrasJas.classList.add("invisivel");
	divPalavraSecreta.classList.add("invisivel");
	letrasPress.classList.add("invisivel");

	btnsIniciais.classList.remove("invisivel");

	divPalavraSecreta.innerHTML="";
	letrasJas.innerHTML= "";
	limparTela();

	//remover mensagem "msgResuldado" caso tenha
	if(erroOuAcerto){
		var msg = document.querySelector(".msgResuldado");
		msg.remove();
		erroOuAcerto = false;
	}



	//torna novamente visivel as letras para pressionar
	botoesLetras.forEach(function(este){
	este.classList.remove("invisivel");
	})



})



//NOVO JOGO *********************************************
btnNovoJogo.addEventListener("click",function(){
	divPalavraSecreta.innerHTML="";
	letrasJas.innerHTML= "";
	limparTela();
	desenhaForca();
	erros=0;
	acertos=0;
	var palavra = sortearPalavras().toUpperCase();
	montarPalavraSecreta(palavra);



	//torna novamente visivel as letras para pressionar
	botoesLetras.forEach(function(este){
	este.classList.remove("invisivel");
	})

	//remover mensagem "msgResuldado" caso tenha
	if(erroOuAcerto){
		var msg = document.querySelector(".msgResuldado");
		msg.remove();
		erroOuAcerto = false;
	}

})


function limparTela(){
	pincel.clearRect(0,0,800,425);
}


