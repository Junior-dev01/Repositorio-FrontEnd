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
        
        // Função que abre o site do Shipfinder
        function realizarRastreio() {
            const codigo = containerInput.value.trim();
            if (codigo === '') {
                alert('Por favor, digite o número do BL ou do Container antes de buscar.');
            } else {
                // Abre o site do ShipFinder em uma nova aba
                window.open('https://www.shipfinder.com/', '_blank');
            }
        }

        // Adiciona evento de clique ao botão
        btnTrack.addEventListener('click', realizarRastreio);

        // Permite que o usuário aperte "Enter" no teclado para buscar
        containerInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Evita qualquer comportamento padrão
                realizarRastreio();
            }
        });
    }

    // ----- Formulário de contato com integração Formspree -----
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Não deixa a pagina recarregar!

            // Captura o botão para dar um feedback visual de "Enviando..."
            const btnSubmit = contactForm.querySelector('button[type="submit"]');
            const textoOriginalBotao = btnSubmit.textContent;
            btnSubmit.textContent = 'Enviando...';
            btnSubmit.disabled = true;

            // Coleta todos os dados do formulário automaticamente usando o atributo "name" do HTML
            const formData = new FormData(contactForm);

            // Envia os dados para o Formspree via AJAX (em segundo plano)
            fetch(contactForm.action, {
                method: contactForm.method,
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Se o Formspree aceitou o envio com sucesso
                    const nome = document.getElementById('formNome').value;
                    alert('Obrigado, ' + nome + '! Sua solicitação foi enviada com sucesso.');
                    contactForm.reset(); // Limpa os campos do formulário
                } else {
                    // Se o Formspree retornar algum erro de validação
                    alert('Ops! Houve um problema ao enviar o formulário. Verifique os dados e tente novamente.');
                }
            })
            .catch(error => {
                // Se houver erro de rede/internet
                alert('Erro de conexão. Verifique sua internet e tente novamente.');
            })
            .finally(() => {
                // Restaura o botão ao estado original, independentemente de ter dado certo ou errado
                btnSubmit.textContent = textoOriginalBotao;
                btnSubmit.disabled = false;
            });
        });
    }

});
