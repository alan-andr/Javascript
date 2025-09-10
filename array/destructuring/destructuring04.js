const profile = function({name, profission}) {
    const newData = {name, profission, active: true};
    console.log(newData);
};

const data = {
    name: 'Carlos',
    age: 28,
    profission: 'Dev',
    city: 'São Paulo'
};

profile(data);



