const btnAdd = document.getElementById('adicionar');

btnAdd.addEventListener('click', () => {
    let nomeTarefa = document.getElementById('texto').value.trim();
    let divMensagem = document.getElementById('mensagem');
    let p = document.createElement('p');

    divMensagem.innerHTML = '';

    if (nomeTarefa.trim() === "") {
        p.textContent = 'Por favor, preencha o campo vazio!';
        divMensagem.appendChild(p);
        return;
    }
    
    const inputCheckbox = document.createElement('input');
    inputCheckbox.type = 'checkbox';
    inputCheckbox.name = 'tarefa';
    inputCheckbox.value = nomeTarefa;
    
    nomeTarefa = nomeTarefa.toUpperCase();

    const label = document.createElement('label');
    label.appendChild(inputCheckbox);
    label.appendChild(document.createTextNode(nomeTarefa));

    let lista = document.getElementById('lista');
    lista.appendChild(label).appendChild(document.createElement('br'));
})