const supplierDetails = {
    supplierName: 'Global Books Inc',
    contactPerson: 'John Doe',
    location: 'New York',
    deliveryTime: '5-7 business days',
    paymentTerms: 'Net 30'
};

for(const key in supplierDetails) {
    console.log(`${key}: ${supplierDetails[key]}`)
};

