var palavraSecreta = document.querySelectorAll(".letraSecreta");
var divPalavraSecreta = document.querySelector(".palavraSecreta");
var botoesLetras = document.querySelectorAll(".estiloLetras");
var letrasJas = document.querySelector(".letrasJaPressionadas")

var btnsJogo = document.querySelector(".btnsNoJogo");

var erros = 0;
var acertos = 0;

//pegando o valor da letra clicada e comparando com cada letra da PALAVRA SECRETA escondida. Caso seja igual, a letra é mostrada
function chuteLetra(letra){
	var palavraSecreta = document.querySelectorAll(".letraSecreta");
	var achou = false;

	var letraJP = document.querySelectorAll(".letraJP");
	

	var temNaLista = false;

	//se tiver na lista fica TRUE
		letraJP.forEach(function(lista){
			if(lista.textContent == letra){
				temNaLista = true;
			}
		})

		//SE TIVER NA LISTA ELE ALERTA,SENÃO ELE ADICIONA AO QUADRO
		if(temNaLista){
			alert("LETRA JÁ UTILIZADA! TENTE OUTRA!")
		} else{
			var letraJa = document.createElement("div");
			letraJa.classList.add("letraJP");
			letraJa.textContent = letra;
			letrasJas.appendChild(letraJa);
		}
	




		//comparamos a letra pressionada com as letras da palavra secreta
	for(i= 0; i < palavraSecreta.length; i++){
		if(letra == palavraSecreta[i].textContent){
			palavraSecreta[i].classList.remove("esconderLetra");
			achou = true;
			acertos++;
		} 
	}

	//*********** SE VOCE ACERTOU A PALAVRA, ENTÃO A MENSAGEM DE VOCE GANHOU
	if(acertos == palavraSecreta.length){
		botoesLetras.forEach(function(este){
			este.classList.add("invisivel");
		})
		//colocamos esta mensagem
		var perdeu = document.createElement("h1");
		perdeu.textContent = "VOCE GANHOU!";
		perdeu.classList.add("msgGanhou");
		letrasPress.appendChild(perdeu);


	}

	if(!achou && !temNaLista)erros++;

	if(erros==1)desenhaCabeca();
	if(erros==2)desenhaCorpo();
	if(erros==3)desenhaBracoD();
	if(erros==4)desenhaBracoE();
	if(erros==5)desenhaPernaD();
	if(erros==6)desenhaPernaE();

//SE O CORPO FOI PREENCHIDO VOCE PERDEU, TIRA AS LETRAS E COLOCA A PALAVRA CERTA
	if(erros==6){
		botoesLetras.forEach(function(este){
			este.classList.add("invisivel");
		})
		//colocamos esta mensagem
		var perdeu = document.createElement("h1");
		perdeu.textContent = "Voce perdeu!";
		perdeu.classList.add("msgPerdeu");
		letrasPress.appendChild(perdeu);

		//exibimos a palavra na forca
		palavraSecreta.forEach(function(mostrar){
			mostrar.classList.remove("esconderLetra");
		})
	}




}




