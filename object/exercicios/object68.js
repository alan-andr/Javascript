const project = {
  projectName: 'Website Redesign',
  client: 'Innovate Corp.',
  dueDate: '2025-12-31',
  teamMembers: ['Alice', 'Bob', 'Charlie'],
  tasks: [
    { taskId: 1, description: 'Design homepage mockup', status: 'completed' },
    { taskId: 2, description: 'Develop user authentication', status: 'in_progress' },
    { taskId: 3, description: 'Create database schema', status: 'in_progress' },
    { taskId: 4, description: 'Setup server environment', status: 'pending' },
    { taskId: 5, description: 'Write API documentation', status: 'pending' },
    { taskId: 6, description: 'Final QA testing', status: 'pending' },
    { taskId: 7, description: 'Deploy to production', status: 'pending' }
  ]
};

function getProjectStatus(project) {
    const statusCounts = {};

    for (const task of project.tasks) {
        const status = task.status;
        
        if (statusCounts[status]) {
            statusCounts[status]++;
        } else {
            statusCounts[status] = 1;
        }
    }

    return statusCounts;
}

console.log(getProjectStatus(project));