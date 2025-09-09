window.document.getElementById('verificar').addEventListener('click', function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fAno = document.getElementById('txtano');
    var res = document.getElementById('res');
    
    if ( fAno.value.length == 0 || Number(fAno.value) > ano) {

        window.alert('[ERRO] Verifique os dados e tente novamente!');

    } else {

        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        var genero = ``;
        var img = document.createElement('img');
        img.setAttribute('id','foto');
        img.style.display = 'block';
        img.style.margin = 'auto';

        if (fsex[0].checked) {
            genero = 'Homem';

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','crianca-h.png');
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','jovem-h.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adulto-h.png');
            } else {
                //Idoso
                img.setAttribute('src','idoso.png');
            };

        } else if (fsex[1].checked) {
            genero = 'Mulher'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src','crianca-m.png');
            } else if (idade >= 10 && idade < 21) {
                //Jovem
                img.setAttribute('src','jovem-m.png');
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src','adulto-m.png');
            } else {
                //Idoso
                img.setAttribute('src','idosa.png');
            };
        };

        document.querySelector('section').style.height = '550px';
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos de idade.`;
        res.style.padding = '10px'
        res.appendChild(img);

    };
});