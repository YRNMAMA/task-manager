function validateTaskName(name) {
    return name && name.trim().length > 0;
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}

function filterTasksByStatus(tasks, status) {
    return tasks.filter(task => task.status === status);
}

function searchTasks(tasks, searchTerm) {
    return tasks.filter(task => task.name.toLowerCase().includes(searchTerm.toLowerCase()));
}

export { validateTaskName, formatDate, filterTasksByStatus, searchTasks };