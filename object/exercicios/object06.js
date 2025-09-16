const toDoList = [
    { id: 1, description: 'Estudar Programação', isComplete: false },
    { id: 2, description: 'Trabalhar', isComplete: false},
    { id: 3, description: 'Tomar café da manhã', isComplete: true}
];

toDoList.forEach(task => console.log(task.description));

toDoList.forEach(function(arr) {
    if (arr.isComplete === false) {
        console.log(arr.description)
    }
});
