var palavras = ["orangotango","estratosfera","estilo"];

//MAXIMO 25 LETRAS
function sortearPalavras(){
	var tamanhoLista = palavras.length;
	var sorteio = Math.floor(Math.random()*tamanhoLista);
	var palavra = palavras[sorteio];
	return palavra;
};







