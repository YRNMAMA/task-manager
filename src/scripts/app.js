const taskList = [];
let filterStatus = 'all';
let searchQuery = '';
let sortOption = 'none';

// Salvataggio in LocalStorage
function saveTasksToStorage() {
    localStorage.setItem('tasks', JSON.stringify(taskList));
}

function loadTasksFromStorage() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
        taskList.splice(0, taskList.length, ...JSON.parse(storedTasks));
    }
}

// Renderizzazione
function renderTasks() {
    const taskContainer = document.getElementById('task-container');
    taskContainer.innerHTML = '';

    let filteredTasks = taskList.filter(task => {
        const matchesStatus = filterStatus === 'all' || task.status === filterStatus;
        const matchesSearch = task.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    // Ordinamento
    if (sortOption === 'priority') {
        const order = { high: 1, medium: 2, low: 3 };
        filteredTasks.sort((a, b) => order[a.priority] - order[b.priority]);
    } else if (sortOption === 'dueDate') {
        filteredTasks.sort((a, b) => new Date(a.dueDate || Infinity) - new Date(b.dueDate || Infinity));
    }

    filteredTasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>
                ${task.name} - ${task.status} - ${task.priority} - ${task.dueDate || 'Nessuna scadenza'}
            </span>
            <button onclick="editTask('${task.id}')">Edit</button>
            <button onclick="removeTask('${task.id}')">Remove</button>
            <button onclick="toggleStatus('${task.id}')">
                ${task.status === 'completed' ? 'Undo' : 'Complete'}
            </button>
        `;
        taskContainer.appendChild(taskElement);
    });
}

// Aggiunta
function addTask(name, priority = 'medium', dueDate = '') {
    const newTask = {
        id: Date.now().toString(),
        name,
        status: 'to do',
        priority,
        dueDate
    };
    taskList.push(newTask);
    saveTasksToStorage();
    renderTasks();
}

// Rimozione
function removeTask(id) {
    const index = taskList.findIndex(task => task.id === id);
    if (index > -1) {
        taskList.splice(index, 1);
        saveTasksToStorage();
        renderTasks();
    }
}

// Modifica
function editTask(id) {
    const task = taskList.find(task => task.id === id);
    const newName = prompt('Modifica nome task:', task.name);
    if (newName) {
        task.name = newName;
        saveTasksToStorage();
        renderTasks();
    }
}

// Toggle completamento
function toggleStatus(id) {
    const task = taskList.find(task => task.id === id);
    task.status = task.status === 'completed' ? 'to do' : 'completed';
    saveTasksToStorage();
    renderTasks();
}

// Filtraggio e Ricerca
function filterTasks(status) {
    filterStatus = status;
    renderTasks();
}

function searchTasks(query) {
    searchQuery = query;
    renderTasks();
}

// Eventi
document.getElementById('add-task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const priority = document.getElementById('priority-select').value;
    const dueDate = document.getElementById('due-date').value;
    if (taskName) {
        addTask(taskName, priority, dueDate);
        document.getElementById('task-name').value = '';
        document.getElementById('due-date').value = '';
    }
});

document.getElementById('filter-select').addEventListener('change', function(event) {
    filterTasks(event.target.value);
});

document.getElementById('search-input').addEventListener('input', function(event) {
    searchTasks(event.target.value);
});

document.getElementById('sort-select').addEventListener('change', function(event) {
    sortOption = event.target.value;
    renderTasks();
});

// Inizializzazione
loadTasksFromStorage();
renderTasks();
