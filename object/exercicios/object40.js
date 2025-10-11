const restaurantMenu = [
    { name: 'Caesar Salad', price: 8.50, category: 'Appetizer', isVegetarian: true },
    { name: 'Chicken Frites', price: 12.00, category: 'Appetizer', isVegetarian: false },
    { name: 'Steak Frites', price: 22.50, category: 'Main Course', isVegetarian: false },
    { name: 'Pasta Primavera', price: 18.00, category: 'Main Course', isVegetarian: true },
    { name: 'Chocolate Lava Cake', price: 7.00, category: 'Dessert', isVegetarian: true }
];

function getVegetarianDishNames(menu) {
    const vegetarianDishes = menu
    .filter(dish => dish.isVegetarian)
    .map(dish => dish.name);

    if (vegetarianDishes.length === 0) {
        return `There are no vegetarian dishes right now.`;
    }

    return vegetarianDishes;
};

function calculateAveragePriceByCategory(menu, categoryName) {
    const findCategory = menu.filter(dish => dish.category.toLowerCase() === categoryName.toLowerCase());

    if (findCategory.length === 0) {
        return `Category not found.`;
    }

    const sumOfDishCategory = findCategory.reduce((total, dish) => total + dish.price, 0);
    const averagePriceOfCategory = sumOfDishCategory / findCategory.length;

    return averagePriceOfCategory;
};

function applyDiscount(menu, discountPercentage = 0) {
    const percentage = ( 100 - discountPercentage ) / 100;

    return menu.map(dish => {
        return {
            ...dish, 
            discountedPrice: (dish.price * percentage)
        };
    });
};
 
const category = 'main course';

const averagePriceCategory = calculateAveragePriceByCategory(restaurantMenu, category);

console.log(getVegetarianDishNames(restaurantMenu));
console.log('==============================================================');
console.log(`Category **${category}** has an average price of $${averagePriceCategory.toFixed(2)}`);
console.log('==============================================================');
console.log(applyDiscount(restaurantMenu, 10));
console.log('==============================================================');
