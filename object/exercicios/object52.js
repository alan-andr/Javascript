const car = {
    brand: 'Toyota',
    model: 'Corolla',
    year: 2020,

    introduceCar() {
        return `Meu carro é um ${this.brand} ${this.model} de ${this.year}`;
    }
};

console.log(car.introduceCar());
