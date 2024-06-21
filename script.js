const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const todoText = todoInput.value.trim();
    
    if (todoText !== '') {
        addTodo(todoText);
        todoInput.value = '';
    }
});

function addTodo(todoText) {
    const todoItem = document.createElement('li');
    todoItem.innerText = todoText;
    
    const deleteButton = document.createElement('span');
    deleteButton.innerText = ' ❌';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        todoItem.remove();
    });
    
    todoItem.appendChild(deleteButton);
    todoList.appendChild(todoItem);
}


