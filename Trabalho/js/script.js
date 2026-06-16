/* =========================================================
   Conex — Script da página (script.js)
   Interações de Rastreamento e Formulário de Contato (index.html)
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {

    // ----- Rastreamento de container -----
    const btnTrack = document.getElementById('btnTrack');
    const containerInput = document.getElementById('containerInput');

    // Só adiciona o evento se os elementos existirem nesta página
    if (btnTrack && containerInput) {
        btnTrack.addEventListener('click', function () {
            const codigo = containerInput.value.trim();
            if (codigo === '') {
                alert('Por favor, digite o número do BL ou do Container.');
            } else {
                alert('Buscando informações para o código: ' + codigo);
            }
        });
    }

    // ----- Formulário de contato -----
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nome = document.getElementById('formNome').value;
            const email = document.getElementById('formEmail').value;
            const servico = document.getElementById('formServico').value;
            const mensagem = document.getElementById('formMensagem').value;

            console.log('Formulário enviado:', { nome, email, servico, mensagem });

            alert('Obrigado, ' + nome + '! Sua solicitação foi enviada com sucesso.');
            contactForm.reset();
        });
    }

});
