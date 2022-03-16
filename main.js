const todoInput = document.querySelector(`.todo-input`)
const errorInfo = document.querySelector(`.error-info`)
const addBtn = document.querySelector(`.btn-add`)
const ulList = document.querySelector(`.todolist ul`);
let newTodo



const addNewTask = () => {
    if(todoInput.value !== ``) {
        newTodo = document.createElement(`li`);
        newTodo.textContent = todoInput.value;
        createToolsLi()

        ulList.append(newTodo)

        todoInput.value = ``;
        errorInfo.textContent = ``;
    } else {
        errorInfo.textContent = 'Wpisz treść zadania'
    }
}

const createToolsLi = () => {
    const toolsPanel = document.createElement(`div`);
    toolsPanel.classList.add(`tools`);
    newTodo.append(toolsPanel)

    const completeButton = document.createElement(`button`);
    completeButton.classList.add(`complete`);

    completeButton.innerHTML = `<i class="fas fa-check"></i>`
    const editButton = document.createElement(`button`);
    editButton.classList.add(`edit`);

    editButton.textContent = 'Edytuj'
    const deleteButton = document.createElement(`button`);
    deleteButton.classList.add('delete');

    deleteButton.innerHTML = `<i class="fas fa-times"></i>`;
    toolsPanel.append(completeButton, editButton, deleteButton);
}

addBtn.addEventListener(`click`, addNewTask)





