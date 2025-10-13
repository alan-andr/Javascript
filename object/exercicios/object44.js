const ingredientList = [
  { name: "Carrot", category: "Vegetable" },
  { name: "Apple", category: "Fruit" },
  { name: "Milk", category: "Dairy" },
  { name: "Spinach", category: "Vegetable" },
  { name: "Cheese", category: "Dairy" },
  { name: "Banana", category: "Fruit" }
];

function groupIngredientsByCategory(ingredientList) {
    return ingredientList.reduce((acc, ingredient) => {
        if (!acc[ingredient.category]) {
            acc[ingredient.category] = [];
        }

        acc[ingredient.category].push(ingredient.name);
        
        return acc;
    }, {});
};

console.log(groupIngredientsByCategory(ingredientList));