var palavras = [];
var btnAleatorio = document.querySelector(".btnAleatorio");

//MAXIMO 25 LETRAS
function sortearPalavras(){
	var tamanhoLista = palavras.length;
	var sorteio = Math.floor(Math.random()*tamanhoLista);
	var palavra = palavras[sorteio];

	//caso ainda tenha alguma palavra no array, a palavra é removida da lista para não se repitir
	if(palavras.length > 0){
			palavras.splice(sorteio,1);
		} else{	//senão, alerta o fato, e a palavra fica vazia, para indicar que não tem mais na lista
			alert("As palavras acabaram... Adicione mais ou atualize a pagina para poder jogar!");
			palavra = "";
			
		}

	return palavra;
};

btnAleatorio.addEventListener("click",function(){
	palavras.push("orangotango","futebol","branco","preto","molho","sensacional","arroz","morango","torta","capacete");
	btnAleatorio.classList.add("invisivel");
	btnIniciar.classList.remove("invisivel");
})










