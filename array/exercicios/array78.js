const personalData = {name: 'Alan', age: 23};
const contact = {email: 'alanexemplo@gmail.com', phone: '84994437890'};

const allUnited = {...personalData, ...contact, city: 'Natal'};

console.log(`Dados pessoais: ${JSON.stringify(personalData)}`);
console.log('-------------------------------------------');
console.log(`Contato: ${JSON.stringify(contact)}`);
console.log('-------------------------------------------');
console.log(`Todas as informações: ${JSON.stringify(allUnited)}`);