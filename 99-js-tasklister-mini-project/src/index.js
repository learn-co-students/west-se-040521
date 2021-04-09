document.addEventListener("DOMContentLoaded", () => {
  // your code goes here
  let form = document.getElementById('create-task-form')
  form.addEventListener('submit', newTask)
});


const newTask = function(event) {
  event.preventDefault()
  let input = event.target['new-task-description'].value
  let color = event.target['selectTask'].value
  let user = event.target['new-task-user'].value
  appendTask(input, color, user)
  event.target['new-task-description'].value = ''
  event.target['new-task-user'].value = ''
}

const appendTask = function(input, color, user) {
  // variable declaration
  let ul = document.getElementById('tasks')
  let li = document.createElement('li')
  let deleteBtn = document.createElement('button')
  let editBtn = document.createElement('button')
  
  deleteBtn.innerText = 'X'
  editBtn.innerText = 'EDIT'
  li.innerText = `${user}: ${input} `
  li.id = input
  li.data = user
  li.style.color = color

  // appending
  li.append(deleteBtn, editBtn)
  ul.appendChild(li)

  // event listeners
  editBtn.addEventListener('click', () => editForm(ul, li))
  deleteBtn.addEventListener('click', () => ul.removeChild(li))
}

const editForm = function(ul, li) {
  let form = document.createElement('form')
  let inputField = document.createElement('input')
  let submitBtn = document.createElement('input')

  inputField.type ='text'
  inputField.name = 'editTask'
  inputField.placeholder = li.id

  submitBtn.type = 'submit'
  submitBtn.value = 'Change'

  form.append(inputField, submitBtn)
  li.append(form)

  form.addEventListener('submit', (e) => editTask(e, ul, li))

}

const editTask = function(e, ul, li) {
  e.preventDefault()
  
  li.innerText = `${li.data}: ${e.target.editTask.value} `

  let deleteBtn = document.createElement('button')
  let editBtn = document.createElement('button')
  
  deleteBtn.innerText = 'X'
  editBtn.innerText = 'EDIT'

  li.append(deleteBtn, editBtn)

  editBtn.addEventListener('click', () => editForm(li))
  deleteBtn.addEventListener('click', () => ul.removeChild(li))

}

