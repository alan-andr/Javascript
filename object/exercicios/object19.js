const car = {
    make: 'Honda',
    model: 'Civic',
    year: 2022,
    color: 'Black',
    isEletric: false
};

console.log('================ Características do veículo ================')

for(const key in car) {
    console.log(`${key}: ${car[key]}`)
};

const keys = Object.keys(car);

console.log(keys);

const values = Object.values(car);

console.log(values);