const products = [
    {
        id: 'p001',
        name: 'Laptop Pro 15',
        category: 'Electronics',
        price: 1500
    },
    {
        id: 'p002',
        name: 'The Art of Code',
        category: 'Books',
        price: 50
    },
    {
        id: 'p003',
        name: 'Wireless Mouse',
        category: 'Electronics',
        price: 25
    },
    {
        id: 'p004',
        name: 'Graphic T-Shirt',
        category: 'Apparel',
        price: 20
    },
    {
        id: 'p005',
        name: 'JavaScript: The Good Parts',
        category: 'Books',
        price: 45
    },
    {
        id: 'p006',
        name: 'Noise-Cancelling Headphones',
        category: 'Electronics',
        price: 200
    },
];

const searchByCategory = (products) => {
    let categoryProduct = {};

    for (const { id, name, category, price } of products) {
        
        if (!categoryProduct[category]) {
            categoryProduct[category] = [];
        }

        categoryProduct[category].push({id, name, category, price});
    }

    return categoryProduct;
}

console.log(searchByCategory(products));