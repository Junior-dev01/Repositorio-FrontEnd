const btnCalcular = document.getElementById('btnCalcular');

btnCalcular.addEventListener('click', () => {
    const nome = document.getElementById('nomeAluno').value;
    const n1 = Number(document.getElementById('nota1').value);
    const n2 = Number(document.getElementById('nota2').value);
    const n3 = Number(document.getElementById('nota3').value);
    const resultadoDiv = document.getElementById('resultado');

    
    if (nome === "" || isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultadoDiv.innerHTML = "Por favor, preencha todos os campos corretamente.";
        resultadoDiv.className = "resultado-box";
        return;
    }

    const media = (n1 + n2 + n3) / 3;
    let situacao = "";
    let classeCSS = "";
    let mensagemExtra = "";

    if (media >= 7) {
        situacao = "Aprovado";
        classeCSS = "aprovado";
    } else if (media >= 4 && media < 7) {
        situacao = "Exame";
        classeCSS = "exame";
        const falta = 10 - media;
        mensagemExtra = `<br>Faltam <strong>${falta.toFixed(2)}</strong> para atingir 10.`;
    } else {
        situacao = "Reprovado";
        classeCSS = "reprovado";
    }

    resultadoDiv.className = `resultado-box ${classeCSS}`;
    resultadoDiv.innerHTML = `
        <strong>Aluno:</strong> ${nome}<br>
        <strong>Média:</strong> ${media.toFixed(2)}<br>
        <strong>Situação:</strong> ${situacao}
        ${mensagemExtra}
    `;
});