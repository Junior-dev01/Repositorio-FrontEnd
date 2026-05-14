const guestInput = document.getElementById('guestInput');
const guestList = document.getElementById('guestList');

function addGuest() {
    const name = guestInput.value.trim();

    if (name === "") {
        alert("Digite um nome válido!");
        return;
    }

    const li = document.createElement('li');

    li.innerHTML = `
        <span class="guest-name">${name}</span>
        <div class="actions">
            <button class="btn-concluir" onclick="concluir(this)">Concluir</button>
            <button class="btn-editar" onclick="editar(this)">Editar</button>
            <button class="btn-excluir" onclick="excluir(this)">Excluir</button>
        </div>
    `;

    guestList.appendChild(li);
    guestInput.value = "";
}

function concluir(button) {
    const span = button.parentElement.parentElement.querySelector('.guest-name');
    span.classList.toggle('classe-riscado');
}

function editar(button) {
    const span = button.parentElement.parentElement.querySelector('.guest-name');
    const novoNome = prompt("Editar nome do convidado:", span.innerText);
    
    if (novoNome !== null && novoNome.trim() !== "") {
        span.innerText = novoNome.trim();
    }
}

function excluir(button) {
    if (confirm("Deseja remover este convidado da lista VIP?")) {
        const li = button.parentElement.parentElement;
        li.remove();
    }
}


guestInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addGuest();
});