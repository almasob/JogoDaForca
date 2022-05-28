var palavras = ["arroz","feijão","batata","papagaio","orangotango","sensacional","maravilhosamente","feijoada","bebedouro","residencial"];

//MAXIMO 16 LETRAS
function sortearPalavras(){
	var tamanhoLista = palavras.length;
	var sorteio = Math.floor(Math.random()*tamanhoLista);
	var palavra = palavras[sorteio];
	return palavra;
};





