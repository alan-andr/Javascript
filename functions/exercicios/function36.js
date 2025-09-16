const peopleNames = ['Alan', 'Igor', 'Ivan', 'Augusto', 'Armando', 'Lucas', 'Victor'];

const nameExists = (arr, name) => {
    return arr.some(value => value === name);
}

console.log(nameExists(peopleNames, 'Thiago'));