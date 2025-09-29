const carWorkshop = {
    cars: [
        { owner: 'Carlos', model: 'Civic', problem: 'Troca de embreagem', cost: 2500 },
        { owner: 'Marina', model: 'Corolla', problem: 'Pintura', cost: 1500 },
        { owner: 'João', model: 'Gol', problem: 'Freios', cost: 800 },
        { owner: 'Ana', model: 'Onix', problem: 'Troca de Óleo', cost: 200 }
    ],

    totalCostRepair() {
        const totalCost = this.cars.reduce((total, car) => total + car.cost, 0);

        return `Total cost: R$${totalCost.toFixed(2)}`;
    },

    findClientCar(clientName) {
        const client = this.cars.find(car => car.owner.toLowerCase() === clientName.toLowerCase());

        if (!client) {
            return `${clientName}'s car not found`;
        }

        return `${clientName}'s ${client.model} precisa de ${client.problem}, custo: R$${client.cost.toFixed(2)}`;
    }
};

console.log(carWorkshop.totalCostRepair());

console.log(carWorkshop.findClientCar('Carlos'));