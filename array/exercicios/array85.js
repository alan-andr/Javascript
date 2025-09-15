const car = {
    brand: 'Toyota',
    year: 2015
};

const newCar = {...car, year: 2020};

console.log(`Carro antigo: ${JSON.stringify(car)}`);
console.log('----------------------------------------------');
console.log(`Carro novo: ${JSON.stringify(newCar)}`);