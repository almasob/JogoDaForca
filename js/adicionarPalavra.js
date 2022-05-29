var btnAdicionar = document.querySelector(".btnAdd");
var btnSalvar = document.querySelector(".btnSalvar");
var btnVoltar = document.querySelector(".btnVoltar");
var divAddPalavras = document.querySelector(".divAddPalavras");
var inputAdd = document.querySelector(".inputAdd");



btnAdicionar.addEventListener("click",function(){
	btnsIniciais.classList.add("invisivel");
	divAddPalavras.classList.remove("invisivel");
	divMsgInicial.classList.add("invisivel");
	inputAdd.focus();
})


btnSalvar.addEventListener("click",function(){
		var palavra = inputAdd.value;
		//aqui é uma forma de tirar os acentos da palavra caso tenha
		var semAcento = palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, ""); 

	

	if(palavra != ""){
		btnIniciar.classList.remove("invisivel");
		palavras.push(semAcento);
		inputAdd.value = "";
	}

	inputAdd.focus();
})



btnVoltar.addEventListener("click",function(){
	btnsIniciais.classList.remove("invisivel");
	divAddPalavras.classList.add("invisivel");
	
	})