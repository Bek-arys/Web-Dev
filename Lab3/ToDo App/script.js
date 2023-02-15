window.addEventListener('DOMContentLoaded', function() {
    let taskNumber = 0;
    const taskName = this.document.querySelector('#new-task-wrapper');
    const addBtn = this.document.querySelector('#add');
    const taskList = this.document.querySelector('.task-list-wrapper');

    addBtn.addEventListener('click', function() {
        const id = generateId();
        const task = document.createElement('div');
        task.classList.add('task-wrapper');
        task.setAttribute('task-id', id);

        const newTaskCheckbox = document.createElement('input');
        newTaskCheckbox.setAttribute('type', 'checkbox');
        newTaskCheckbox.setAttribute('onClick', `completeTask(${id})`);

        const txt = document.createElement('p');
        txt.innerText = taskName.value;
        taskName.value = "";

        const delBtn = document.createElement('img');
        delBtn.setAttribute('src', '/Lab3/ToDo App/assets/rubbish-bin-icon.svg');
        delBtn.setAttribute('alt', 'delete');
        delBtn.setAttribute('onClick', `removeTask(${id})`);


        task.append(newTaskCheckbox);
        task.append(txt);
        task.append(delBtn);

        taskList.append(task);
    });
});

function completeTask(id) {
    const div = document.querySelector(`.task-wrapper[task-id="${id}"]`);
    div.classList.toggle('cross');
}

function removeTask(id) {
    const div = document.querySelector(`.task-wrapper[task-id="${id}"]`);
    div.remove();
}

function generateId() {
    return Math.floor(Math.random() * 100 / Math.random() * 2);
}