window.document.getElementById('contar').addEventListener('click', function contar() {
//Entrada de dados como Strings
   let numInicio = document.getElementById('numero1').value;
   let numFim = document.getElementById('numero2').value;
   let passo = document.getElementById('passo').value;
   let res = document.getElementById('res'); 

   
//Validando os dados em strings primeiro
   if (numInicio === '' || numFim === '' || passo === '') {
       res.innerHTML = `Contagem inválida! Insira dados válidos.`
       return;
    }


//Transformando os dados em números    
    numInicio = Number(numInicio);
    numFim = Number(numFim);
    passo = Number(passo);


//Validação de dados
    if ( passo <= 0) {
        alert('Passo inválido! Considerando PASSO 1');
        passo = 1;
    };

        res.innerHTML = 'Contando...<br>';

    if (numInicio <= numFim) {
        //Contagem Progressiva
        while (numInicio <= numFim) {
            res.innerHTML += ` ${numInicio} \u{1F449}`;
            numInicio += passo;
        }
    } else {
        //Contagem Regressiva
        while (numInicio >= numFim) {
            res.innerHTML += ` ${numInicio} \u{1f449}`;
            numInicio -= passo;
        }
    };

    res.innerHTML += " Fim\u{1F3C1}"
});