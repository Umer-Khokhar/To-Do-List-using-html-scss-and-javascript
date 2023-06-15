const toDoIn = document.getElementById('to-do-input');
      const toDoItem = document.getElementById('to-do-item');
      let toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

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

          // Store the updated to-do list in local storage
          toDoList.push(toDoIn.value);
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
        }
      });

      // Load the to-do list from local storage on page load
      toDoList.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item} <img id="remove" src="remove.png" alt="remove" width="23px">`;

        toDoItem.appendChild(listItem);
        listItem.addEventListener('click', e => {
          listItem.classList.toggle('done');
        });

        listItem.querySelector('img').addEventListener('click', e => {
          listItem.remove();
        });
      });