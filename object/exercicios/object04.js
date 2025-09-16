const car = {
    brand: 'Volkswagen',
    model: 'Polo',
    currentSpeed: 0,

    accelerate: function(howMuchAccelerate) {
        this.currentSpeed += howMuchAccelerate;
    },

    displayStatus: function() {
        console.log(`O carro ${this.brand} ${this.model} está a ${this.currentSpeed} Km/h`);
    }
};

car.displayStatus();
car.accelerate(100);
car.displayStatus();
car.accelerate(50);
car.displayStatus();