function validarCPF() {
    const input = document.getElementById('cpfInput');
    const display = document.getElementById('resultado');
    
    
    let cpf = input.value.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        exibirResultado(false);
        return;
    }

    if (checarDigitos(cpf)) {
        exibirResultado(true);
    } else {
        exibirResultado(false);
    }
}

function checarDigitos(cpf) {
    let soma = 0;
    let resto;

   
    for (let i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    
    soma = 0;
    for (let i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    }
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

function exibirResultado(valido) {
    const display = document.getElementById('resultado');
    if (valido) {
        display.innerHTML = "CPF Válido";
        display.className = "valido";
    } else {
        display.innerHTML = "CPF Inválido";
        display.className = "invalido";
    }
}