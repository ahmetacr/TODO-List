// Export the add event function
export function addEvent() {

  // Create the form
  const taskForm = document.createElement('form')
  taskForm.classList.add('taskForm');


  const addEventDiv = document.createElement('div')

  const formHeader = document.createElement('h2')
  
  const inputsDiv = document.createElement('div')
  const taskTitle = document.createElement('input')
  const taskDescription = document.createElement('input')
  const taskDate = document.createElement('input')

  const selectDiv = document.createElement('div')
  const selectLabel = document.createElement('label')
  const selectProject = document.createElement('select')
  const inboxOption = document.createElement('option')

  selectDiv.classList.add('selectDiv')

  selectLabel.setAttribute('for','select-project')
  inboxOption.setAttribute('selected','')
  
  selectProject.id = 'select-project'
  inboxOption.value = 'Inbox'
  inboxOption.textContent = 'Inbox'


  selectProject.appendChild(inboxOption)

  selectDiv.appendChild(selectLabel)
  selectDiv.appendChild(selectProject)

  const addButtons = document.createElement('div')
  const taskCancelBtn = document.createElement('button')
  const taskAddBtn = document.createElement('button')

  formHeader.classList.add('formHeader')
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

  formHeader.textContent = 'CREATE TASK'
  taskCancelBtn.textContent = 'Cancel'
  taskAddBtn.textContent = 'Add Task'


  inputsDiv.appendChild(taskTitle)
  inputsDiv.appendChild(taskDescription)
  inputsDiv.appendChild(taskDate)

  inputsDiv.appendChild(selectDiv)

  addButtons.appendChild(taskCancelBtn)
  addButtons.appendChild(taskAddBtn)

  addEventDiv.appendChild(formHeader)
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