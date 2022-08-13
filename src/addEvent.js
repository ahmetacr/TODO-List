// Export the add event function
export function addEvent() {
  const addEventDiv = document.createElement('div')
  
  const inputsDiv = document.createElement('div')
  const taskTitle = document.createElement('input')
  const taskDescription = document.createElement('input')
  const taskDate = document.createElement('input')

  const addButtons = document.createElement('div')
  const taskCancelBtn = document.createElement('button')
  const taskAddBtn = document.createElement('button')

  addEventDiv.classList.add('addEvent')
  inputsDiv.classList.add('inputs')
  addButtons.classList.add('addButtons')

  taskTitle.setAttribute('type','text')
  taskDescription.setAttribute('type','text')
  taskDate.setAttribute('type','date')

  taskTitle.id = 'taskTitle'
  taskDescription.id = 'taskDescription'
  taskDate.id = 'taskDate'


  taskTitle.setAttribute('placeholder','Title of the task')
  taskDescription.setAttribute('placeholder','Description')

  taskCancelBtn.id = 'taskCancelBtn'
  taskAddBtn.id = 'taskAddBtn'

  taskCancelBtn.textContent = 'Cancel'
  taskAddBtn.textContent = 'Add Task'


  inputsDiv.appendChild(taskTitle)
  inputsDiv.appendChild(taskDescription)
  inputsDiv.appendChild(taskDate)

  addButtons.appendChild(taskCancelBtn)
  addButtons.appendChild(taskAddBtn)

  addEventDiv.appendChild(inputsDiv)
  addEventDiv.appendChild(addButtons)
  
  return {
    addEventDiv,
    taskTitle,
    taskDescription,
    taskDate,
    taskCancelBtn,
    taskAddBtn
  }
}