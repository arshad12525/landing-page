document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const taskList = document.getElementById('taskList');

    const addTask = () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            const li = document.createElement('li');
            li.innerHTML = `
                ${taskText} <button class="removeButton">?</button>
            `;
            li.querySelector('.removeButton').addEventListener('click', () => {
                taskList.removeChild(li);
            });
            taskList.appendChild(li);
            taskInput.value = '';
            taskInput.focus();
        }
    };

    addTaskButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});
