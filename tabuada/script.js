document.getElementById('enviar').addEventListener('click', function enviarNum() {
    let valorNum = document.getElementById('numero').value;
    let res = document.getElementById('resultado');
    let section = document.getElementsByTagName('section')[0];
    section.style.height = '580px';
    
    if (valorNum.length === 0) {
        alert(`Por favor, preencher o campo "Número"`);
        return;
    }

    let num = Number(valorNum);
    document.getElementById('numero').value = '';
    res.style.color = 'white';
    res.innerHTML = '';
    
    res.innerHTML += `<strong>Tabuada de multiplicação do número ${num}<br></strong>`;
    res.style.backgroundColor = '#344E41';
    res.style.margin = '10px';
    res.style.padding = '10px';
    res.style.borderRadius = '10px';

    for(let contador = 1; contador <= 10; contador++) {
        res.innerHTML += `<strong><br>${num} x ${contador} = ${num*contador}<br></strong>`;
    }

});