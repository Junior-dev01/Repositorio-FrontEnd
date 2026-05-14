function analisarCartao() {
    let rawNumber = document.getElementById('cardNumber').value;
    let number = rawNumber.replace(/\D/g, ''); 
    
    const panel = document.getElementById('infoPanel');
    
    if (number.length < 13 || number.length > 16) {
        alert("Número inválido. Insira entre 13 e 16 dígitos.");
        return;
    }

    const eValido = validarLuhn(number);
    
   
    const statusTxt = document.getElementById('status');
    statusTxt.innerText = eValido ? "MATEMATICAMENTE VÁLIDO" : "INVÁLIDO";
    statusTxt.className = eValido ? "valido" : "invalido";

    const bandeiraTxt = document.getElementById('bandeira');
    bandeiraTxt.innerText = identificarBandeira(number);

    const setorTxt = document.getElementById('setor');
    setorTxt.innerText = identificarSetor(number[0]);

    
    document.getElementById('iin').innerText = number.substring(0, 8);

    panel.style.display = 'block';
}

function validarLuhn(num) {
    let soma = 0;
    let deveDobrar = false;

   
    for (let i = num.length - 1; i >= 0; i--) {
        let digito = parseInt(num.charAt(i));

        if (deveDobrar) {
            digito *= 2;
            if (digito > 9) digito -= 9;
        }

        soma += digito;
        deveDobrar = !deveDobrar;
    }

    return (soma % 10 === 0);
}

function identificarBandeira(num) {
    if (num.startsWith('4')) return "Visa";
    if (/^5[1-5]/.test(num)) return "MasterCard";
    if (/^3[47]/.test(num)) return "American Express";
    if (num.startsWith('6')) return "Discover/Elo";
    return "Outra / Desconhecida";
}

function identificarSetor(primeiroDigito) {
    const setores = {
        '1': 'Linhas Aéreas',
        '2': 'Linhas Aéreas / Outros',
        '3': 'Viagens e Entretenimento',
        '4': 'Bancário e Financeiro (Visa)',
        '5': 'Bancário e Financeiro (Master)',
        '6': 'Bancário e Comercial',
        '7': 'Indústria de Petróleo',
        '8': 'Saúde e Comunicações',
        '9': 'Governo'
    };
    return setores[primeiroDigito] || 'Setor Não Identificado';
}