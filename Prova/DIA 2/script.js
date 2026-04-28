function add() {
    const container = document.getElementById("Cards");

    const novoCard = `
        <div class="card" style="width: 22rem;">
            <img src="img/Lucas_Paqueta.webp" class="card-img-top" alt="Lucas Paquetá">
            <div class="card-body">
                <h5 id="Nome" class="card-title">
                    <span class="card-title">Lucas Tolentino Coelho de Lima</span>
                    <span id="Rank" class="badge text-bg-secondary">8,8</span>
                </h5>
                <p class="card-text">
                    <span id="Data_Nas"><strong>Nascimento:</strong> 27/08/1997 (28 anos)</span><br>
                    <span id="Alutra"><strong>Altura:</strong> 1,80 m</span><br>
                    <span id="Posição "><strong>Posição:</strong> Meio-campista</span><br>
                </p>
            </div>
        </div>
    `;

    container.innerHTML += novoCard;

    container.classList.add("gap-3");
    container.classList.add("flex-wrap");
}