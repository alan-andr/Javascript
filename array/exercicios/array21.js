const orders = [
    { id: 101, customer: 'John', amount: 150 },
    { id: 102, customer: 'Mary', amount: 450 },
    { id: 103, customer: 'John', amount: 200 }
];

const summarize = ({id, customer}) => {
    return `Order #${id} - Customer: ${customer}`; 
};

let orderSummarize = orders.map(summarize)

console.log(orderSummarize)