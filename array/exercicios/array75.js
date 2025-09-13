function gettingInfo(...info) { // * Recebendo os dados espalhados
    const [nameInfo, ...hobbies] = info // * Desestruturando o array e pegando o nome e usando rest para pegar os "Hobbies";

    return {
        name: nameInfo,
        hobbies: hobbies
    };
};

const info = ['Alan', 'Programar', 'Jogar', 'Ler'];

console.log(gettingInfo(...info)); // * Mandando os dados já espalhados