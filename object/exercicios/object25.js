const apiResponse = [
    {
        id: 'user-01',
        name: 'Alice',
        email: 'alice@example.com',
        location: 'New York'
    },
    {
        id: 'user-02',
        name: 'Bob',
        email: 'bob@example.com',
        location: 'London'
    },
    {
        id: 'user-03',
        name: 'Charlie',
        email: 'charlie@example.com',
        location: 'Tokyo'
    }
];

function normalizeUser(usesArray) {
    let normalized = {};

    for (const { id, ...rest } of usesArray) {
        
        if (!normalized[id]) {
            normalized[id] = {};
        }

        normalized[id] = {...rest};
    }

    return normalized;
};

console.log(normalizeUser(apiResponse));