// Export the add event function
export function addEvent() {

  // Create the form
  const taskForm = document.createElement('form')
  taskForm.classList.add('taskForm');


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

  taskCancelBtn.setAttribute('type','button')
  taskAddBtn.setAttribute('type','submit')

  taskTitle.setAttribute('required','')
  taskDescription.setAttribute('required','')
  taskDate.setAttribute('required','')

  taskTitle.id = 'taskTitleInput'
  taskDescription.id = 'taskDescriptionInput'
  taskDate.id = 'taskDateInput'


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


  taskForm.appendChild(addEventDiv);
  
  return {
    taskForm,
    taskTitle,
    taskDescription,
    taskDate,
    taskCancelBtn,
    taskAddBtn
  }
}