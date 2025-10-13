const bookInventory = {
  "978-0321765723": {
    title: "The C++ Programming Language",
    author: "Bjarne Stroustrup",
    price: 69.99,
    stock: 5
  },
  "978-0132350884": {
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    price: 45.99,
    stock: 12
  },
  "978-0262033848": {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    price: 92.50,
    stock: 8
  },
  "978-1449331818": {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    price: 25.00,
    stock: 0
  }
};

function calculateTotalInventoryValue(inventory) {
    const values = Object.values(inventory)
    .filter(book => book.stock > 0)
    .reduce((total, book) => total + (book.price * book.stock), 0);

    return values;
};

const totalInventoryValue = calculateTotalInventoryValue(bookInventory);

console.log(`Total inventory value is $${totalInventoryValue.toFixed(2)}`);