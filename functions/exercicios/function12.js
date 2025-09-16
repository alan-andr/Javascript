function findByName(arr, name) {
    for (const person of arr) {
        if (person.name === name) {
            return person;
        }
    } 

    return null;
}

const people = [
    {name: 'Alice', age: 25},
    {name: 'Bob', age: 30},
    {name: 'Carlos', age: 20}
];

console.log(findByName(people, 'Bob'));