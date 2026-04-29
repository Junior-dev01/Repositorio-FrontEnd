const produtos = {
			"123": {"nome": "lepo", "preco":9.90},
			"456": {"nome": "vapo", "preco":19.90},
			"789": {"nome": "la-ele", "preco":29.90},
			"147": {"nome": "ai-dentu", "preco":39.90}
		};

let carrinho = [];


const audio = new Audio("myinstants.mp3");

window.onload = () => { 
			document.getElementById("cod").focus();
		};

function addProduto(){
			const codElement = document.getElementById("cod");
			const qtdElement = document.getElementById("qtd");
			
			const codValue = codElement.value;
			const qtdValue = qtdElement.value;

			if(!produtos[codValue]){
						alert("Produto nao Cadastrado");
						return;
			}
			
			const produtoBase = produtos[codValue];
			
			const item = { 
					nome: produtoBase.nome,
					preco: produtoBase.preco,
					quantidade: qtdValue,
					subTot: produtoBase.preco * qtdValue
				};

			carrinho.push(item);
			audio.currentTime = 0;
			audio.play();
			
			codElement.value = "";
			qtdElement.value = 1;
		
			atualizaTela();
}

			function atualizaTela(){
			
						const list = document.getElementById("lista");

						let total = 0;

						carrinho.forEach((item,index) => {
										total += item.subTot;
										const li = document.createElement("li");
										li.className = "list-group-item";
										
										li.innerHTML = `<div class ="d-flex"> <strong>${item.nome}</strong> <small>${item.quantidade} X ${item.valor} = <strong> ${item.subTot}</strong></small></div>`; 
lista.appendChild(li); 
});

	
}
