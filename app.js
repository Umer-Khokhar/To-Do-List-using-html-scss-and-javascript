const toDoIn = document.getElementById('to-do-input');
const toDoItem = document.getElementById('to-do-item');

toDoIn.addEventListener('keyup', e => {
  if (e.key === "Enter") {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${toDoIn.value} <img id="remove" src="remove.png" alt="remove" width="23px">`;

    toDoItem.appendChild(listItem);
    listItem.addEventListener('click', e => {
      listItem.classList.toggle('done');
    });
    toDoIn.value = '';

    listItem.querySelector('img').addEventListener('click', e => {
      listItem.remove();
    });

    // Add the item to local storage
    const todoList = localStorage.getItem('todoList');
    let todos = [];

    if (todoList) {
      todos = JSON.parse(todoList);
    }

    todos.push(toDoIn.value);
    localStorage.setItem('todoList', JSON.stringify(todos));
  }
});
