function proximo() {

    const secA = document.getElementById("grupoa");
    secA.querySelector("h3").innerText = "Seleções Grupo D";
    secA.querySelector("ul").innerHTML = `
        <li>Estados Unidos</li>
        <li>Paraguay</li>
        <li>Austrália</li>
        <li>Turquia</li>

    `;

    secA.querySelector("p").innerHTML = "<strong>Fatos:</strong> Os EUA jogam em casa, vantagem histórica em Copas. Austrália enfrenta frequentemente seleções sul-americanas em torneios.";



    const secB = document.getElementById("grupob");
    secB.querySelector("h3").innerText = "Seleções Grupo E";
    secB.querySelector("ul").innerHTML = `
        <li>Alemanha</li>
        <li>Equador</li>
        <li>Costa do Marfim</li>
        <li>Curaçao</li>
    `;

    secB.querySelector("p").innerHTML = "<strong>Fatos:</strong> Alemanha costuma dominar fases de grupos. Equador e Costa do Marfim têm estilos físicos semelhantes.";

    

    const secC = document.getElementById("grupoc");
    secC.querySelector("h3").innerText = "Seleções Grupo F";
    secC.querySelector("ul").innerHTML = `
        <li>Holanda</li>
        <li>Japão</li>
        <li>Tunísia</li>
        <li>Suécia</li>
    `;

    secC.querySelector("p").innerHTML = "<strong>Fatos:</strong> Brasil, Marrocos e Escócia já dividiram grupo em 1998. Brasil nunca perdeu para a Escócia em Copas.";

    const btn = document.getElementById("btn-proximo");
    btn.innerText = "Cards Atualizados";
    btn.ariaDisabled = true;
    btn.style.backgroundColor = "gray";


    const navA = document.getElementById("nav-a");
    navA.innerText = "Grupo D";
    const navB = document.getElementById("nav-b");
    navB.innerText = "Grupo E";
    const navC = document.getElementById("nav-c");
    navC.innerText = "Grupo F";


}