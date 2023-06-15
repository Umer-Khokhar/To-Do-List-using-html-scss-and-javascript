const toDoInp = document.getElementById('to-do-input')
const toDoItem = document.getElementById('to-do-item')


// Making the function to make li items dynamically and to remove and done 

let myFunction = (data) => {
  let listItem = document.createElement('li')
  listItem.innerHTML = `${data} <img src="remove.png" alt="remove" width="23px">`
  toDoInp.value = ''

  
  // To Mark as Done
  listItem.addEventListener('click', e => {
    listItem.classList.toggle('done')
  })
  
  //To delete the list item
  listItem.querySelector('img').addEventListener('click', e => {
    listItem.remove()
    localStorageFun() //to call localStorage to remove from local storage also
  })
  toDoItem.appendChild(listItem)
  localStorageFun() // calling the local storage function
}

toDoInp.addEventListener('keyup', e => {
  if (e.key === "Enter") {
    const inputValue = toDoInp.value.trim()
    if (inputValue !== '') {
      myFunction(inputValue)
    }
  }
})

window.addEventListener('load',e => {
  let myLocalStorage = JSON.parse(localStorage.getItem('myStorage'))

  if (myLocalStorage) {
    myLocalStorage.forEach(item => {
      myFunction(item)
    });
  }
})

function localStorageFun() {
  const listItem = toDoItem.querySelectorAll('li')
  const items = Array.from(listItem).map(value => {
    return value.textContent
    })
  localStorage.setItem("myStorage",JSON.stringify(items))
}