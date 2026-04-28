function revelar() {
    document.querySelector('.card-img-top').src = 'img/_vinicius_junior.png';
    
    document.querySelector('#Nome span').innerText = 'Vinícius José Paixão de Oliveira Júnior';
    document.getElementById('Rank').innerText = '9,5';
    document.getElementById('Data_Nas').innerText = 'Nascimento: 12/07/2000 (25 anos)';
    document.getElementById('Alutra').innerText = 'Altura: 1,76 m';
    document.getElementById('Posição ').innerText = 'Posição: Ponta-esquerda / Atacante';

    document.querySelectorAll('.placeholder').forEach(el => {
        el.classList.remove('placeholder', 'col-4', 'col-6');
        el.classList.add('card-text');
    });

    document.querySelectorAll('.placeholder-glow').forEach(el => el.classList.remove('placeholder-glow'));
}
