const restaurant = {
    menu: [
        { dish: 'Cheeseburger', isVegetarian: false, price: 12 },
        { dish: 'Veggie Pizza', isVegetarian: true, price: 15 },
        { dish: 'Caesar Salad', isVegetarian: false, price: 10 },
        { dish: 'Pasta Primavera', isVegetarian: true, price: 14 }
    ],

    vegetarianDishes() {
        const veg = this.menu.filter(dish => dish.isVegetarian);

        return veg;
    },

    omnivorousDishes() {
        const omni = this.menu.filter(dish => !dish.isVegetarian);

        return omni;
    }
};

console.log(restaurant.vegetarianDishes());
console.log('==========================================================');
console.log(restaurant.omnivorousDishes());