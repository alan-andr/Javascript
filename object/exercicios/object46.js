let product = {
    id: 1,
    description: 'Product Description',
    price: 0.00,
    stock: 0
};

const { description, price } = product;

if (product.stock > 0) {
    product.status = 'In Stock';
} else {
    product.status = 'Out of Stock';
};

let productDetails = Object.entries(product);

console.log(productDetails)