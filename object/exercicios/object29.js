const salesData = [
  { productId: 'P001', productName: 'Laptop Pro', quantity: 45, price: 1200.00, category: 'Electronics' },
  { productId: 'P002', productName: 'Coffee Maker', quantity: 150, price: 75.50, category: 'Home Appliances' },
  { productId: 'P003', productName: 'Gaming Mouse', quantity: 250, price: 49.99, category: 'Electronics' },
  { productId: 'P004', productName: 'Ergonomic Chair', quantity: 30, price: 350.00, category: 'Furniture' },
  { productId: 'P005', productName: 'Wireless Keyboard', quantity: 120, price: 89.90, category: 'Electronics' },
  { productId: 'P006', productName: 'Blender', quantity: 90, price: 120.75, category: 'Home Appliances' }
];

function analyzeSalesData(arrSalesData) {
    const totalRevenue = arrSalesData.reduce((total, product) => total + (product.price * product.quantity), 0);

    const totalUnitsSold = arrSalesData.reduce((total, unit) => total + unit.quantity, 0);

    const bestSellingProduct = arrSalesData.reduce((max, product) => max.quantity > product.quantity ? max : product);

    let totalSalesPerCategory = {};

    for (const { category, price, quantity } of arrSalesData) {
        if (!totalSalesPerCategory[category]) {
            totalSalesPerCategory[category] = 0;
        }

        totalSalesPerCategory[category] += price * quantity;
    }

    return {
        totalRevenue: totalRevenue,
        totalUnitsSold: totalUnitsSold,
        bestSellingProduct: bestSellingProduct.productName,
        categorySales: totalSalesPerCategory
    }
};

const salesAnalysis = analyzeSalesData(salesData);
console.log(salesAnalysis);