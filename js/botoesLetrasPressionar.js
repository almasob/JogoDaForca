var palavraSecreta = document.querySelectorAll(".letraSecreta");
var divPalavraSecreta = document.querySelector(".palavraSecreta");
var botoesLetras = document.querySelectorAll(".estiloLetras");
var letrasJas = document.querySelector(".letrasJaPressionadas")

var btnsJogo = document.querySelector(".btnsNoJogo");

var erros = 0;
var acertos = 0;
var erroOuAcerto = false;

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
			if(!temNaLista){
				palavraSecreta[i].classList.remove("esconderLetra");
				palavraSecreta[i].classList.add("sombra");
				achou = true;
				acertos++;
			}
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
		perdeu.classList.add("msgResuldado","msgGanhou");
		letrasPress.appendChild(perdeu);
		erroOuAcerto = true;

	}

	if(!achou && !temNaLista){
		erros++;

	if(erros==1){
		desenhaCabeca();
		desenhaCabecaCel();
	}
	if(erros==2){
		desenhaCorpo();
		desenhaCorpoCel();
	}
	if(erros==3){
		desenhaBracoD();
		desenhaBracoDCel();
	}
	if(erros==4){
		desenhaBracoE();
		desenhaBracoECel();
	}
	if(erros==5){
		desenhaPernaD();
		desenhaPernaDCel();
	}
	if(erros==6){
		desenhaPernaE();
		desenhaPernaECel();
	}
	}



//SE O CORPO FOI PREENCHIDO VOCE PERDEU, TIRA AS LETRAS E COLOCA A PALAVRA CERTA
	if(erros==6){
		botoesLetras.forEach(function(este){
			este.classList.add("invisivel");
		})
		//colocamos esta mensagem
		var perdeu = document.createElement("h1");
		perdeu.textContent = "Voce perdeu!";
		perdeu.classList.add("msgResuldado","msgPerdeu");
		letrasPress.appendChild(perdeu);
		erroOuAcerto = true;

		//exibimos a palavra na forca
		palavraSecreta.forEach(function(mostrar){
			mostrar.classList.remove("esconderLetra");
		})
	}




}




