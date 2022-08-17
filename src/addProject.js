// Create a project box

export function addProject() {
    // Create the form
    const projectForm = document.createElement('form')
    projectForm.classList.add('projectForm');
  
  
    const addProjectDiv = document.createElement('div')
    
    const inputsDiv = document.createElement('div')
    const projectTitle = document.createElement('input')
    const projectDescription = document.createElement('input')
    const projectDate = document.createElement('input')
  
    const addButtons = document.createElement('div')
    const projectCancelBtn = document.createElement('button')
    const projectAddBtn = document.createElement('button')
  
    addProjectDiv.classList.add('addEvent')
    inputsDiv.classList.add('inputs')
    addButtons.classList.add('addButtons')
  
    projectTitle.setAttribute('type','text')
    projectDescription.setAttribute('type','text')
    projectDate.setAttribute('type','date')
  
    projectCancelBtn.setAttribute('type','button')
    projectAddBtn.setAttribute('type','submit')
  
    projectTitle.setAttribute('required','')
    projectDescription.setAttribute('required','')
    projectDate.setAttribute('required','')
  
    projectTitle.id = 'projectTitleInput'
    projectDescription.id = 'projectDescriptionInput'
    projectDate.id = 'projectDateInput'
  
  
    projectTitle.setAttribute('placeholder','Title of the project')
    projectDescription.setAttribute('placeholder','Description')
  
    projectCancelBtn.id = 'projectCancelBtn'
    projectAddBtn.id = 'projectAddBtn'
  
    projectCancelBtn.textContent = 'Cancel'
    projectAddBtn.textContent = 'Add Project'
  
  
    inputsDiv.appendChild(projectTitle)
    inputsDiv.appendChild(projectDescription)
    inputsDiv.appendChild(projectDate)
  
    addButtons.appendChild(projectCancelBtn)
    addButtons.appendChild(projectAddBtn)
  
    addProjectDiv.appendChild(inputsDiv)
    addProjectDiv.appendChild(addButtons)
  
  
    projectForm.appendChild(addProjectDiv);
    
    return {
      projectForm: projectForm,
      projectTitle: projectTitle,
      projectDescription: projectDescription,
      projectDate: projectDate,
      projectCancelBtn: projectCancelBtn,
      projectAddBtn: projectAddBtn
    }
}