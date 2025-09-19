const userProfile = {
    username: 'john.doe',
    email: 'john.doe@example.com',
    age: 28,
    isActive: true,
    address: {
        street: '123 Main St',
        city: 'Springfield',
        state: 'IL',
        zipCode: '62701'
    }
};

console.log(`User: ${userProfile.username} is currently active: ${userProfile.isActive}. They live at ${userProfile.address.street}, ${userProfile.address.city}.`);

console.log(`The user's age: ${userProfile.age}`);