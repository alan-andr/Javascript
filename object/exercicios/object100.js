const tasks = {
    'taskt-01': {
        description: 'Buy groceries for the week',
        priority: 'High',
        isCompleted: false
    },
    'task-02': {
        description: 'Complete the JavaScript project report',
        priority: 'High',
        isCompleted: true
    },
    'task-03': {
        description: 'Call the client to confirm the meeting',
        priority: 'Medium',
        isCompleted: false
    },
    'task-04': {
        description: 'Schedule a dentist appointment',
        priority: 'Low',
        isCompleted: false
    }
};

function displayPendingTasks(tasks) {
    for (const key in tasks) {
        if (!tasks[key].isCompleted) {
            console.log(tasks[key].description);
        }
    }
};

function countTotalTasks(tasks) {
    let counter = 0;

    for (const key in tasks) {
        counter += 1;
    }

    return `Total tasks: ${counter}`;
};

function getTaskDescriptions(tasks) {
    let taskDescriptions = [];

    for (const key in tasks) {
        taskDescriptions.push(tasks[key].description); 
    }

    return taskDescriptions;
};

displayPendingTasks(tasks);

console.log('========================================');

console.log(countTotalTasks(tasks));

console.log('========================================');

console.log(getTaskDescriptions(tasks));