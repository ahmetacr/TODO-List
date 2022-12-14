import './style.css';
import { compareAsc, format } from 'date-fns'
import { deleteTODO } from './delete_todo.js';
import { createHeader } from './header.js'
import { addEvent as taskForm } from './taskForm';
import { addProject as projectForm } from './projectForm';
import { createSidebar } from './sidebar.js';

/**
 * Add these functions
 * Edit and see the details of a task coming from local storage
 * 
 * 
 */   


(function() {
  // Define Icons
  const iconLink = document.createElement('link')
  iconLink.setAttribute('rel','stylesheet')
  iconLink.setAttribute('href','https://fonts.googleapis.com/icon?family=Material+Icons')
  document.head.appendChild(iconLink)

  // Add a hidden background
  const hiddenBG = document.createElement('div');
  hiddenBG.classList.add('hiddenBG')
  document.body.appendChild(hiddenBG)

  // Add header 
  const header = createHeader();
  document.body.appendChild(header.header);

  // Create the sidebar
  const sidebar = createSidebar();
  const container = document.createElement('div')
  container.classList.add('container')
  document.body.appendChild(container)
  container.appendChild(sidebar);

  // Create the main page
  const mainPage = document.createElement('div')
  mainPage.classList.add('mainPage')
  container.appendChild(mainPage)

  // Event Box
  const taskBox = taskForm();
  document.body.appendChild(taskBox.taskForm);

  // Project Box
  const projectBox = projectForm();
  document.body.appendChild(projectBox.projectForm)

  // Init the page with saved tasks


  // Project Class to create a new project
  class Project {
    constructor(title,description,due,priority) {
      this.title = title
      this.description = description
      this.due = due
      this.priority = priority
    }
  }

  // Task Class to create a new project
  class Task extends Project {
    constructor(title,description,due,priority) {
      super(title,description,due,priority)
      this.toProject = this.toProject
    }
  }

  const Create = (function() {

    const createProject = () => {
      const newProject = new Project()
      return newProject
    }

    const _createProjectBox = () => {
      DisplayInfo.displayProjectForm();
    }

    const setProjectInfo = (newProject) => {
      newProject.title = document.getElementById('projectTitleInput').value.replaceAll(' ','-')
      newProject.description = document.getElementById('projectDescriptionInput').value
      newProject.due = document.getElementById('projectDateInput').value
    }

    const createProjectDiv = (title) => {
      const project = document.createElement('div')
      const projectName = document.createElement('div')
      const projectIcon = document.createElement('i')
      const projectNameP = document.createElement('p')
      const projectDeleteIcon = document.createElement('i')

      project.classList.add('project')
      projectName.classList.add('projectName')
      projectIcon.classList.add('material-icons')
      projectDeleteIcon.classList.add('material-icons')

      project.id = title

      projectIcon.textContent = 'arrow_right'
      projectNameP.textContent = title.replaceAll('-',' ')
      projectDeleteIcon.textContent = 'delete'

      projectName.appendChild(projectIcon)
      projectName.appendChild(projectNameP)

      project.appendChild(projectName)
      project.appendChild(projectDeleteIcon)

      return project
    }

    const createProjectDetails = (project) => {
      const projectDisplayBox = document.createElement('div')
      const nameAndDate = document.createElement('div')
      const projectName = document.createElement('p')
      const projectDescription = document.createElement('p')
      const projectDate = document.createElement('p')
      
      projectDisplayBox.classList.add('projectDisplayBox')
      nameAndDate.classList.add('nameAndDate')
      projectDisplayBox.id = project.title

      projectName.id = 'projectName'
      projectDescription.id = 'projectDescription'
      projectDate.id = 'projectDate'

      projectName.textContent = project.title.replaceAll('-',' ')
      projectDescription.textContent = project.description
      projectDate.textContent = `${project.due}` 

      nameAndDate.appendChild(projectName)
      nameAndDate.appendChild(projectDate)

      projectDisplayBox.appendChild(nameAndDate)
      projectDisplayBox.appendChild(projectDescription)

      return projectDisplayBox
    }

    const _manageProject = (event) => {
      // Prevent from reloading page!
      event.preventDefault()

      // Create the project
      const newProject = createProject()

      // Set project object
      setProjectInfo(newProject)

      // Set Project to local store
      setProjectToLocalStorage(newProject)

      // Display the project object on the sidebar!
      DisplayInfo.displayProject(newProject.title)

      // Disappear the project box from the sidebar
      DisplayInfo.disappearProjectForm()

      // Add the project on the main page
      const projectDiv = Create.createProjectDetails(newProject)
      projectDiv.style.display = 'none'
      document.querySelector('.mainPage').prepend(projectDiv) 

      // Display the CLICKED project object on the main page!
      document.querySelector(`.projectSection #${newProject.title}`).addEventListener('click',(event) => {

        // If the clicked one is active do nothing!
        if (event.currentTarget.classList.contains('active')) {
          console.log('This project is already active!')
          console.log(event.currentTarget.classList)
        } else {
          DisplayInfo.displayProjectInfo(projectDiv)
          console.log(projectDiv)
          projectDiv.classList.add('activeProject')
          document.querySelectorAll('.task').forEach(task => task.style.display = 'none')
          document.querySelectorAll(`.mainPage div[data-project="${newProject.title}"]`).forEach(task => task.style.display = 'flex')

          let activeProject = document.querySelector('.active')
          if (activeProject) { 
            activeProject.classList.remove('active')
            document.querySelector(`.mainPage > #${activeProject.id}`).style.display = 'none'
            document.querySelector(`.mainPage > #${activeProject.id}`).classList.remove('activeProject')
          }
          event.currentTarget.classList.add('active')        
        }
      })
      // Add the project name to the Select options of task creation
      DisplayInfo.addProjecttoTaskForm(newProject.title)

      // Delete Project
      document.querySelector(`#${newProject.title} > i`).addEventListener('click',(event) => _deleteProject(newProject.title,event))

      // Reset the form!
      event.target.reset()
    } 

    const _deleteProject = (title,event) => {
      const removedProject = event.path[1]
      document.getElementById('select-project').removeChild(document.querySelector(`option[value="${removedProject.id}"`))

      const projectSection = document.querySelector('.projectSection')
      const projectOnTheScreen = document.querySelector(`.mainPage > #${removedProject.id}`)
      if (projectOnTheScreen !== null) {
        if (projectOnTheScreen.id == event.path[1].id) {
          // Remove the project on the screen
          document.querySelector('.mainPage').removeChild(projectOnTheScreen)
          // delete the realted tasks
          document.querySelectorAll(`.mainPage div[data-project="${projectOnTheScreen.id}"]`).forEach(task => {
            localStorage.removeItem(`Task ${task.id}`)
            document.querySelector('.mainPage').removeChild(task)
          })
        }
      }
      localStorage.removeItem(`Project ${title}`)
      projectSection.removeChild(removedProject)
      console.log('PROJECT REMOVED',removedProject)
      event.stopPropagation()
    }

    const _cancelProject = () => {
      projectBox.projectForm.reset()
      DisplayInfo.disappearProjectForm()
    }

    const _listenProject = () => {
      document.querySelector('.projectHeader > i').addEventListener('click', _createProjectBox)
      projectBox.projectForm.addEventListener('submit', _manageProject)
      projectBox.projectCancelBtn.addEventListener('click',_cancelProject)
    }

    const createTask = () => {
      const newTask = new Task();
      return newTask
    }

    const _createTaskBox = () => {
      DisplayInfo.displayTaskForm();
    }

    const setTaskInfo = (newTask) => {
      newTask.title = taskBox.taskTitle.value
      // newTask.title = document.getElementById('taskTitleInput').value
      newTask.description = document.getElementById('taskDescriptionInput').value
      newTask.due = document.getElementById('taskDateInput').value
      newTask.toProject = document.getElementById('select-project').value
    }

    const createTaskDiv = (title,due,toProject) => {
      const task = document.createElement('div')
      
      const taskName = document.createElement('div')
      const titleHolder = document.createElement('p')
      const taskTitleP = document.createElement('p')
      
      const taskDueDate = document.createElement('div')
      const dueDateHolder = document.createElement('p')
      const taskDueP = document.createElement('p')

      const editIcon = document.createElement('i')
      const taskCheckbox = document.createElement('input')

      editIcon.classList.add('material-icons')
      task.classList.add('task')
      taskName.classList.add('taskName')
      taskDueDate.classList.add('taskDueDate')

      task.setAttribute('data-project',toProject)

      editIcon.id = 'editIcon'
      task.id = `${title}`
      taskTitleP.id = 'taskTitle'
      taskDueP.id = 'taskDue'

      editIcon.textContent = 'edit'
      titleHolder.textContent = 'Task Title:'
      dueDateHolder.textContent = 'Due Date:'

      taskTitleP.textContent = title
      taskDueP.textContent = due

      taskCheckbox.type = 'checkbox'
      taskCheckbox.id = 'taskCheckBox'

      taskName.appendChild(titleHolder)
      taskName.appendChild(taskTitleP)

      taskDueDate.appendChild(dueDateHolder)
      taskDueDate.appendChild(taskDueP)

      task.appendChild(taskName)
      task.appendChild(taskDueDate)
      task.appendChild(editIcon)
      task.appendChild(taskCheckbox)

      return task
    }

    const _manageTask = (event) => {
      event.preventDefault()
      
      // Create the task
      const newTask = createTask()

      // Set task object
      setTaskInfo(newTask)

      // Display the task object on the page!
      const task = Create.createTaskDiv(newTask.title,newTask.due,newTask.toProject) 
      mainPage.appendChild(task)
      DisplayInfo.displayTask(newTask.toProject)

      // Add it to the local storage
      setTaskToLocalStorage(newTask)

      // Disappear the task box
      DisplayInfo.disappearTaskForm()

      // Edit task
      document.getElementById('editIcon').addEventListener('click',(event) => _editTask(event,newTask))

      // delete task
      document.getElementById(`${newTask.title}`).addEventListener('change',(event) => _deleteTask(newTask.title,event))

      // Prevent from reloading page!
      event.target.reset()
    }

    const _editTask = (event,newTask) => {
      const editTaskForm = taskForm();
      console.log('worked')

      editTaskForm.taskForm.style.display = 'flex'
      editTaskForm.taskForm.classList.add('fade-in')

      editTaskForm.formHeader.textContent = 'EDIT TASK'

      editTaskForm.inputsDiv.removeChild(editTaskForm.selectDiv)
      mainPage.appendChild(editTaskForm.taskForm)

      editTaskForm.taskTitle.removeAttribute('required')
      editTaskForm.taskDescription.removeAttribute('required')
      editTaskForm.taskDate.removeAttribute('required')

      editTaskForm.taskForm.addEventListener('submit',(event) => _updateTask(event,newTask,editTaskForm))
      editTaskForm.taskCancelBtn.addEventListener('click',() => {
        editTaskForm.taskForm.reset()
        editTaskForm.taskForm.style.display = 'none'
      })
    }

    const _updateTask = (event,newTask,editTaskForm) => {
      event.preventDefault()

      if (editTaskForm.taskTitle.value !== '') {
        newTask.title = editTaskForm.taskTitle.value
      }

      if (editTaskForm.taskDescription.value !== '') {
        newTask.description = editTaskForm.taskDescription.value
      }

      if (editTaskForm.taskDate.value !== '') {
        newTask.due = editTaskForm.taskDate.value
      }

      document.getElementById('taskTitle').textContent = newTask.title
      document.getElementById('taskDue').textContent = newTask.due

      console.log('New Title: ',newTask.title)
      console.log('New Description: ',newTask.description)
      console.log('New Date: ',newTask.due)

      editTaskForm.taskForm.classList.remove('fade-in')
      mainPage.removeChild(editTaskForm.taskForm)
      event.target.reset()
    }

    const setTaskToLocalStorage = (newTask) => {
      localStorage.setItem(`Task ${newTask.title}`,JSON.stringify(newTask))
    }

    const setProjectToLocalStorage = (newProject) => {
      localStorage.setItem(`Project ${newProject.title}`,JSON.stringify(newProject))
    }

    const getItemFromLocalStore = () => {
      for(let i=0;i<localStorage.length; i++) {
        if (localStorage.key(i).includes('Task')) {

          let taskTitle = localStorage.key( i );
          let taskDetail = JSON.parse( localStorage.getItem( taskTitle ) );
          let storedTask = Create.createTaskDiv(taskDetail.title,taskDetail.due,taskDetail.toProject)
  
          mainPage.appendChild(storedTask)
  
          DisplayInfo.displayTask(taskDetail.toProject)

          document.getElementById(`${taskDetail.title}`).addEventListener('change',(event) => _deleteTask(taskDetail.title,event))
        }
        // document.getElementById('editIcon').addEventListener('click',(event) => _editTask(event,taskDetail))
      }
    }

    const getProjectFromLocalStore = () => {
      for(let i=0;i<localStorage.length; i++) {
        if (localStorage.key(i).includes('Project')) {
          let projectTitle = localStorage.key( i );
          let projectDetail = JSON.parse( localStorage.getItem( projectTitle ) );
  
          DisplayInfo.displayProject(projectDetail.title)

          const projectDiv = Create.createProjectDetails(projectDetail)
          projectDiv.style.display = 'none'
          document.querySelector('.mainPage').prepend(projectDiv) 

          // Display the CLICKED project object on the main page!
          document.querySelector(`.projectSection #${projectDetail.title}`).addEventListener('click',(event) => {
            // If the clicked one is active do nothing!
            if (event.currentTarget.classList.contains('active')) {
              console.log('This project is already active!')
              console.log(event.currentTarget.classList)
            } else {
              DisplayInfo.displayProjectInfo(projectDiv)
              console.log(projectDiv)
              projectDiv.classList.add('activeProject')
              document.querySelectorAll('.task').forEach(task => task.style.display = 'none')
              document.querySelectorAll(`.mainPage div[data-project="${projectDetail.title}"]`).forEach(task => task.style.display = 'flex')
    
              let activeProject = document.querySelector('.active')
              if (activeProject) { 
                activeProject.classList.remove('active')
                document.querySelector(`.mainPage > #${activeProject.id}`).style.display = 'none'
                document.querySelector(`.mainPage > #${activeProject.id}`).classList.remove('activeProject')
              }
              event.currentTarget.classList.add('active')        
            }
          })

          // Add the project name to the Select options of task creation
          DisplayInfo.addProjecttoTaskForm(projectDetail.title)

          // Delete Project
          document.querySelector(`#${projectDetail.title} > i`).addEventListener('click',(event) => _deleteProject(projectDetail.title,event))
        }
      }
    }

    const _deleteTask = (title,event) => {
      console.log('TASK REMOVED: ',event.path[1])
      localStorage.removeItem(`Task ${title}`)
      document.querySelector('.mainPage').removeChild(event.path[1])
      event.stopPropagation()
    }

    const _cancelTask = () => {
      taskBox.taskForm.reset();
      DisplayInfo.disappearTaskForm()
    }

    const createMainPage = () => {
      DisplayInfo.displayMainPage()
    }

    const createTodayDiv = () => {
      const todayDiv = document.createElement('div')
      const todayHeader = document.createElement('h1')

      todayDiv.classList.add('todayDiv')
      todayHeader.id = 'todayHeader'

      todayHeader.textContent = 'Today'

      todayDiv.appendChild(todayHeader)

      return todayDiv
    }

    const _listenMainPage = () => {
      document.getElementById('home').addEventListener('click', createMainPage)
    }

    const _listenTask = () => {
      header.addIcon.addEventListener('click',_createTaskBox)
      taskBox.taskForm.addEventListener('submit', _manageTask)
      taskBox.taskCancelBtn.addEventListener('click',_cancelTask)
    }

    const _listen =  (function() {
      _listenProject()
      _listenTask()
      _listenMainPage()
    })()

    return {
      createTask,
      setTaskInfo,
      createTaskDiv,
      createProject,
      createProjectDiv,
      setProjectInfo,
      createProjectDetails,
      createTodayDiv,
      getItemFromLocalStore,
      getProjectFromLocalStore
    }

  })();

  const DisplayInfo = (function() {

    const displayProjectForm = () => {
      projectBox.projectForm.style.cssText = 'display:block;'
      projectBox.projectForm.classList.add('fade-in')
      hiddenBG.style.cssText = 'z-index:1; opacity:0.5'
    }

    const disappearProjectForm = () => {
      projectBox.projectForm.style.cssText = 'display:none;'
      projectBox.projectForm.classList.remove('fade-in')
      hiddenBG.style.cssText = 'z-index:-1; opacity:0'
    }

    const displayProject = (title) => {
      const project = Create.createProjectDiv(title)
      document.querySelector('.projectSection').appendChild(project)
    }

    const displayProjectInfo = (projectDiv) => {
      projectDiv.style.display = 'flex'
    }

    const displayTaskForm = () => {
      taskBox.taskForm.style.display = 'block'
      taskBox.taskForm.classList.add('fade-in')
      hiddenBG.style.cssText = 'z-index:1; opacity:0.5'
    }

    const disappearTaskForm = () => {
      taskBox.taskForm.style.display = 'none'
      taskBox.taskForm.classList.remove('fade-in')
      hiddenBG.style.cssText = 'z-index:-1; opacity:0'
    }

    const displayTask = (toProject) => {
      //  eger ekranda bir proje varsa ve bu projeye task ekleniyorsa o halde display flex olarak eklenmeli

      const tasksOfProject = (document.querySelectorAll(`.mainPage div[data-project="${toProject}"]`))
      tasksOfProject.forEach(task => task.style.display = 'none')
      // Bu alttaki if statemetlarda sadece ilk taski eklerken ekranda proje var mi ona bakiyorum
      // su anda ekranda bir proje var mi ve varsa eger bu projenin id'siyle benim taskimin data-project'i uyuyor mu 
      if (document.querySelector('.mainPage > div')) {
        document.querySelectorAll('.projectDisplayBox').forEach(project => {
          if (project.classList.contains('activeProject')) {
            tasksOfProject.forEach(task => {
              if (task.getAttribute('data-project') == project.id) {
                console.log('Task Added')
                task.style.display = 'flex'
              }
              else {
                task.style.display = 'none'
              }
            })
          }
        })
      }
    }

    const manageTasksDisplay = (display) => {
      document.querySelectorAll('.task').forEach(task => task.style.display = display)
    }

    const manageProjectDisplay = (display) => {
      if (document.querySelector('.projectDisplayBox')) document.querySelector('.projectDisplayBox').style.display = display
    }

    const displayMainPage = () => {
      manageTasksDisplay('flex')
      manageProjectDisplay('none')
    }

    const displayTodayDiv = () => {
      const todayDiv = Create.createTodayDiv()
      todayDiv.style.display = 'block'
    }

    const addProjecttoTaskForm = (projectName) => {
      const projectOption = document.createElement('option')
      projectOption.textContent = projectName
      projectOption.value = projectName
      document.querySelector('#select-project').appendChild(projectOption)
    }

    return {
      displayTaskForm,
      disappearTaskForm,
      displayTask,
      displayProjectForm,
      disappearProjectForm,
      displayProject,
      displayProjectInfo,
      displayMainPage,
      addProjecttoTaskForm,
    }
  })()


  Create.getItemFromLocalStore()
  Create.getProjectFromLocalStore()
})()
