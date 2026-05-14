function simularVenda() {
    
    const venda = Number(document.getElementById('valorVenda').value);
    const bandeira = document.getElementById('bandeira').value;
    const qtdParcelas = parseInt(document.getElementById('parcelas').value);
    const resumoDiv = document.getElementById('resumo');

    if (!venda || venda <= 0 || !qtdParcelas) {
        alert("Por favor, insira valores válidos.");
        return;
    }

    
    let taxaBandeiraPercentual;
    switch (bandeira) {
        case 'visa':
            taxaBandeiraPercentual = 0.02;
            break;
        case 'master':
            taxaBandeiraPercentual = 0.0185;
            break;
        case 'elo':
            taxaBandeiraPercentual = 0.03;
            break;
        default:
            taxaBandeiraPercentual = 0;
    }

    const valorTaxaBandeira = venda * taxaBandeiraPercentual;


    const jurosTotais = venda * (0.0035 * qtdParcelas);

    
    const taxaFixaTotal = 12.50 * qtdParcelas;

    
    const valorTotal = venda + valorTaxaBandeira + jurosTotais + taxaFixaTotal;
    const valorParcela = valorTotal / qtdParcelas;

    
    resumoDiv.style.display = 'block';
    resumoDiv.innerHTML = `
        <div class="resumo-item"><span>Taxa Bandeira:</span> <span>R$ ${valorTaxaBandeira.toFixed(2)}</span></div>
        <div class="resumo-item"><span>Juros Totais:</span> <span>R$ ${jurosTotais.toFixed(2)}</span></div>
        <div class="resumo-item"><span>Taxas Fixas:</span> <span>R$ ${taxaFixaTotal.toFixed(2)}</span></div>
        <div class="resumo-item total"><span>Cada Parcela:</span> <span>R$ ${valorParcela.toFixed(2)}</span></div>
        <div class="resumo-item total"><span>Valor Total:</span> <span>R$ ${valorTotal.toFixed(2)}</span></div>
    `;
}