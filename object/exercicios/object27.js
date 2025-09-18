const car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,

    detail: function() {
        return `O carro ${this.model}, ano ${this.year}, da fabricante ${this.make}`;
    }
}

car.ageOfCar = function() {
    let getDate = new Date();
    let year = getDate.getFullYear();

    let carAge = year - this.year;
    
    return `O carro tem ${carAge} anos`;
}

console.log(car.detail());
console.log(car.ageOfCar());