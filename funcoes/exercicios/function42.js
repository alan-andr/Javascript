const costumer = {
    name: 'Felipe',
    age: 30,
    address: {
        street: 'Rua Principal',
        number: 123,
        city: 'São Paulo',
        state: 'SP'
    }
};

function filterUser({...costumer}) {
     const {name, address: { city, state}} = costumer;

     return console.log(`O usuário ${name}, mora em ${city}, ${state}`);
};

filterUser(costumer);