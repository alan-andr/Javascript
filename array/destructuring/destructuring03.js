const printUser = ({name, city}) => {
    console.log('----------- Dados do Usuário ------------');
    console.log('Nome: ', name,'\nCidade: ', city);
    console.log('-----------------------------------------');
};

const user = {
    name: 'Ana',
    age: 25,
    city: 'Rio de Janeiro'
};

printUser(user);