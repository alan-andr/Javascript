document.getElementById('tabuada').addEventListener('click', function tabuada () {
    let valorNum = document.getElementById('txtn').value;
    let tab = document.getElementById('seltab');

    if (valorNum.length === 0) {
        window.alert('Por favor, digite um número!');
    } else {
        let num = Number(valorNum);
        let contador = 1;

        tab.innerHTML = '';

        while (contador <= 10) {
            let item = document.createElement('option');
            item.text = `${num} x ${contador} = ${num * contador}`;
            item.value = `tab${contador}`;
            tab.appendChild(item);
            contador++;
        };
    };

});