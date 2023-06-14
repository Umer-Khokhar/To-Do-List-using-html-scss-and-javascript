const toDoIn = document.getElementById('to-do-input')
const toDoItem = document.getElementById('to-do-item')


toDoIn.addEventListener('keyup', e => {
    if (e.key === "Enter") {
        // myFun(toDoIn.value);
        const listItem = document.createElement('li')
        listItem.innerHTML = `${toDoIn.value} <img id="remove" src="remove.png" alt="remove" width="23px">`
        
        toDoItem.appendChild(listItem)
        listItem.addEventListener('click', e => {
            listItem.classList.toggle('done')
        })
        toDoIn.value = ''

        listItem.querySelector('img').addEventListener('click', e => {
            listItem.remove()
        } )
    }
})
localStorage.setItem(toDoItem, JSON.stringify(myObj));

// function myFun(item) {
//     const listItem = document.createElement('li')
//     listItem.innerHTML = `${item} <img src="remove.png" alt="remove" width="23px">`
    
//     toDoItem.appendChild(listItem)

// }