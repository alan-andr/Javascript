document.getElementById('calcular').addEventListener('click', () => {
    let divRes = document.getElementById('resultado');
    let res = document.createElement('p');
    res.setAttribute('id', 'resultado');

    let divMensagem = document.getElementById('mensagens');
    let resMensagem = document.createElement('p');
    resMensagem.setAttribute('id','mensagens');

    let valor1 = document.getElementById('num1');
    let valor2 = document.getElementById('num2');

    if (valor1.value.trim() === '' || valor2.value.trim() === '') {
        resMensagem.textContent = 'Por favor, preencha os campos vazios!';
        divMensagem.appendChild(resMensagem);
        return;
    }

    let num1 = Number(valor1.value);
    let num2 = Number(valor2.value);

    if (num1 < 0 || num2 < 0) {
        resMensagem.textContent = 'Por favor, insira um positivo!';
        divMensagem.appendChild(resMensagem);
    }

    function somar (a, b) {
        return a + b;
    }

    function media (a , b) {
        return  (a + b ) / 2;
    }

    res.textContent += `A soma das notas é ${somar(num1, num2)}`;
    res.textContent += `A média das notas é ${media(num1, num2)}`;
    divRes.appendChild(res);
})
