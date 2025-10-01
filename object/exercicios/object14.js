const userMappings = {
    'user_101': 'alex',
    'user_102': 'bruna',
    'user_103': 'carlos',
    'user_104': 'diana'
};

function reverseUser(user) {
    let newUser = {}

    for (const key in user) {
        newUser[user[key]] = key
    }

    return newUser;
}

console.log(reverseUser(userMappings));