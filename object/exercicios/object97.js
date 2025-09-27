const productSales = {
    productName: 'Wireless Headphones',
    january: 120,
    february: 150,
    march: 200,
    april: 180
};

function getSalesData(sales) {
    const { productName, ...monthlySales } = sales;
    const months = Object.keys(monthlySales);
    const salesFigures = Object.values(monthlySales);

    const salesReport = Object.entries(monthlySales).map(([month, sales]) => {
        return `Month: ${month}, Sales: ${sales}`;
    });

    return {
        months,
        salesFigures,
        salesReport
    };
};

console.log(getSalesData(productSales));