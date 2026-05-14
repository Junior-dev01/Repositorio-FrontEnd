function calcularOrcamento() {
    const valorPacote = Number(document.getElementById('pacote').value);
    const qtdPessoas = parseInt(document.getElementById('qtdPessoas').value);
    const display = document.getElementById('resultado');

    if (isNaN(qtdPessoas) || qtdPessoas <= 0) {
        alert("Por favor, insira uma quantidade válida de pessoas.");
        return;
    }

    
    const custoBruto = valorPacote * qtdPessoas;

    
    const taxaServico = custoBruto * 0.10;
    const subtotalComTaxa = custoBruto + taxaServico;

    
    let desconto = 0;
    if (qtdPessoas > 100) {
        desconto = subtotalComTaxa * 0.05;
    }

    const totalFinal = subtotalComTaxa - desconto;

    
    display.style.display = "block";
    display.innerHTML = `
        <div class="linha-resumo">
            <span>Custo Bruto:</span>
            <span>R$ ${custoBruto.toFixed(2)}</span>
        </div>
        <div class="linha-resumo">
            <span>Taxa de Serviço (10%):</span>
            <span>R$ ${taxaServico.toFixed(2)}</span>
        </div>
        <div class="linha-resumo desconto">
            <span>Desconto Fidelidade:</span>
            <span>- R$ ${desconto.toFixed(2)}</span>
        </div>
        <div class="linha-resumo total-final">
            <span>Total Final:</span>
            <span>R$ ${totalFinal.toFixed(2)}</span>
        </div>
    `;
}