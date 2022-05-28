var btnAdicionar = document.querySelector(".btnAdd");
var btnSalvar = document.querySelector(".btnSalvar");
var btnVoltar = document.querySelector(".btnVoltar");
var divAddPalavras = document.querySelector(".divAddPalavras");


btnAdicionar.addEventListener("click",function(){
	btnsIniciais.classList.add("invisivel");
	divAddPalavras.classList.remove("invisivel");
})


btnSalvar.addEventListener("click",function(){
	var inputAdd = document.querySelector(".inputAdd");
	var palavra = inputAdd.value;
	palavras.push(palavra);
	inputAdd.value = "";
})



btnVoltar.addEventListener("click",function(){
	btnsIniciais.classList.remove("invisivel");
	divAddPalavras.classList.add("invisivel");
	
	})