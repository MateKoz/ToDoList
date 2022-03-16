const todoInput = document.querySelector(`.todo-input`)
const errorInfo = document.querySelector(`.error-info`)
const addBtn = document.querySelector(`.btn-add`)
const ulList = document.querySelector(`.todolist ul`);
let newTodo

let todoToEdit
let popup = document.querySelector(`.popup`)
let popupInfo = document.querySelector(`.popup-info`)
let popupInput = document.querySelector(`.popup-input`)
let popupAddBtn = document.querySelector(`.accept`)
let popupCloseBtn = document.querySelector(`.cancel`)

//Funkcja dodaje nowego taska.
const addNewTask = () => {
    if (todoInput.value !== ``) {
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

//Funkcja tworzy nowego LI wraz z buttonami (complete, edit, delete).
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


const checkClick = e => {
    if (e.target.matches(`.complete`)) {
        e.target.closest(`li`).classList.toggle(`completed`);
        e.target.classList.toggle(`completed`)

    } else if (e.target.matches(`.edit`)) {
        editTodo(e);

    } else if (e.target.matches(`.delete`)) {
        console.log(`delete`)
        deleteTask(e);
    }
}

//Funkcja która wyświetla popup do edycji taska.
const editTodo = (e) => {
    todoToEdit = e.target.closest(`li`)
    popupInput.value = todoToEdit.firstChild.textContent
    popup.style.display = `flex`;
}

//Funkcja zamykająca popup do edycji taska.
const closePopup = () => {
    popup.style.display = `none`;
    popupInfo.textContent = ``

}

//Edycja wybranego taska.
const changeTodoText = () => {
    if (popupInput.value !== ``) {
        todoToEdit.firstChild.textContent = popupInput.value;
        popup.style.display = `none`;
        popupInfo.textContent = ``;

    } else {
        popupInfo.textContent = `Musisz podac jakąś treść!`
    }
}

//Usuwanie taska z listy.
const deleteTask = (e) => {
    e.target.closest(`li`).remove();
    const allTodos = ulList.querySelectorAll(`li`);
    if (allTodos.length === 0) {
        errorInfo.textContent = `Brak zadań na liście`
    }
}

//Dodawanie nowego taska przez nacisnięcie ENTER;
const enterKeyCheck = e => {
    if(e.key === `Enter`) {
        addNewTask()
    }
}

todoInput.addEventListener('keyup', enterKeyCheck)
popupAddBtn.addEventListener(`click`, changeTodoText);
popupCloseBtn.addEventListener(`click`, closePopup);
addBtn.addEventListener(`click`, addNewTask);
ulList.addEventListener(`click`, checkClick);




