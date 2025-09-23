const userProfile = {
    userId: 'u-54321',
    username: 'jane.dev',
    email: 'jane.dev@example.com',
    isActive: true,
    details: {
        firstName: 'Jane',
        lasName: 'Developer',
        age: 31
    },
    adress: {
        street: '123 Main St',
        city: 'TechVille',
        country: 'USA'
    }
}

const { username, adress: { city } } = userProfile;

function modifyUser(user) {
    user.isOnline = true;

    return user
};

console.log(modifyUser(userProfile));