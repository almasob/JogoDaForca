var btnDesistir = document.querySelector(".btnDesistir");
var btnNovoJogo = document.querySelector(".btnNovoJogo");

btnDesistir.addEventListener("click",function(){

	btnsJogo.classList.add("invisivel");
	forca.classList.add("invisivel");
	forcaCel.classList.add("invisivel","invisivelCel");
	letrasJas.classList.add("invisivel");
	divPalavraSecreta.classList.add("invisivel");
	letrasPress.classList.add("invisivel");

	btnsIniciais.classList.remove("invisivel");
	divPalavraSecreta.innerHTML="";
	letrasJas.innerHTML="";
	var h1 = document.createElement("h1");
	h1.textContent = "Letras já utilizadas..."
	letrasJas.appendChild(h1);
	limparTela();
	limparTelaCel();

	//remover mensagem "msgResuldado" caso o tenha
	if(erroOuAcerto){
		var msg = document.querySelector(".msgResuldado");
		msg.remove();
		erroOuAcerto = false;
	}



	//torna novamente visivel as letras para pressionar
	botoesLetras.forEach(function(este){
	este.classList.remove("invisivel");
	})

	erros=0;
	acertos=0;

})



	//NOVO JOGO *********************************************
btnNovoJogo.addEventListener("click",function(){
	
	//limpa quadro de letras ja utilizadas e div palavra secreta
	divPalavraSecreta.innerHTML="";
	letrasJas.innerHTML= "";
	
	//adiciona o titulo do quadro de letras ja utilizadas
	var h1 = document.createElement("h1");
	h1.textContent = "Letras já utilizadas..."
	letrasJas.appendChild(h1);
	
	//limpa tela da forca e depois desenha somente a forca sem os erros
	limparTela();
	limparTelaCel();
	desenhaForca();
	desenhaForcaCel();

	//sorteamos e montamos a nova palavra
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
	//zeramos erros e acertos
	erros=0;
	acertos=0;

	//se não tiver palavras na lista, remove as letras para pressionar
	if(palavra == ""){
		letrasPress.classList.add("invisivel");
	}
	

})


function limparTela(){
	pincel.clearRect(0,0,800,425);
}

function limparTelaCel(){
	pincelCel.clearRect(0,0,300,400);
}


