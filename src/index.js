import './style.css';
import { compareAsc, format } from 'date-fns'
import { deleteTODO } from './delete_todo.js';
import { createHeader } from './header.js'
import { addEvent } from './addEvent';
import { addProject } from './addProject';
import { createSidebar } from './sidebar.js';

(function() {
  // Define Icons
  const iconLink = document.createElement('link')
  iconLink.setAttribute('rel','stylesheet')
  iconLink.setAttribute('href','https://fonts.googleapis.com/icon?family=Material+Icons')
  document.head.appendChild(iconLink)

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
  const taskBox = addEvent();
  document.body.appendChild(taskBox.taskForm);

  // Project Box
  const projectBox = addProject();
  document.body.appendChild(projectBox.projectForm)




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
    }
  }



  const Create = (function() {

    const createProject = () => {
      const newProject = new Project()
      return newProject
    }

    const _createProjectBox = () => {
      DisplayInfo.displayProjectBox();
    }

    const setProjectInfo = (newProject) => {
      newProject.title = document.getElementById('projectTitleInput').value
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
      projectNameP.textContent = title
      projectDeleteIcon.textContent = 'delete'

      projectName.appendChild(projectIcon)
      projectName.appendChild(projectNameP)

      project.appendChild(projectName)
      project.appendChild(projectDeleteIcon)

      return project
    }

    const createProjectDetails = (project) => {
      const projectDisplayBox = document.createElement('div')
      const projectName = document.createElement('p')
      const projectDescription = document.createElement('p')
      const projectDate = document.createElement('p')
      
      projectDisplayBox.classList.add('projectDisplayBox')
      projectDisplayBox.id = project.title

      projectName.id = 'projectName'
      projectDescription.id = 'projectDescription'
      projectDate.id = 'projectDate'

      projectName.textContent = project.title
      projectDescription.textContent = project.description
      projectDate.textContent = `Project is Due: ${project.due}` 

      projectDisplayBox.appendChild(projectName)
      projectDisplayBox.appendChild(projectDescription)
      projectDisplayBox.appendChild(projectDate)

      return projectDisplayBox
    }

    const _manageProject = (event) => {
      // Prevent from reloading page!
      event.preventDefault()

      // Create the project
      const newProject = createProject()

      // Set project object
      setProjectInfo(newProject)

      // Display the project object on the sidebar!
      DisplayInfo.displayProject(newProject.title)

      // Disappear the project box from the sidebar
      DisplayInfo.disappearProjectBox()

      // Display the CLICKED project object on the main page!
      document.querySelector(`#${newProject.title}`).addEventListener('click',(event) => {
        const activeProject = document.querySelector('.active')
        if(activeProject) activeProject.classList.remove('active');
        DisplayInfo.displayProjectInfo(newProject)
        event.currentTarget.classList.add('active')
      })

      // Delete Project
      document.querySelector(`#${newProject.title} > i`).addEventListener('click',_deleteProject)

      // Reset the form!
      event.target.reset()
    } 

    const _deleteProject = (event) => {
      const removedProject = event.path[1]
      const projectSection = document.querySelector('.projectSection')
      const projectOnTheScreen = document.querySelector('.mainPage > div')
      if (projectOnTheScreen !== null) {
        if (projectOnTheScreen.id == event.path[1].id) {
          document.querySelector('.mainPage').removeChild(projectOnTheScreen)
        }
      }
      projectSection.removeChild(removedProject)
      console.log('PROJECT REMOVED',removedProject)
      event.stopPropagation()
    }

    const _cancelProject = () => {
      projectBox.projectForm.reset()
      DisplayInfo.disappearProjectBox()
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
      DisplayInfo.displayTaskBox();
    }

    const setTaskInfo = (newTask) => {
      newTask.title = document.getElementById('taskTitleInput').value
      newTask.description = document.getElementById('taskDescriptionInput').value
      newTask.due = document.getElementById('taskDateInput').value
    }

    const createTaskDiv = (title,due) => {
      const task = document.createElement('div')
      
      const taskName = document.createElement('div')
      const titleHolder = document.createElement('p')
      const taskTitleP = document.createElement('p')
      
      const taskDueDate = document.createElement('div')
      const dueDateHolder = document.createElement('p')
      const taskDueP = document.createElement('p')

      const taskCheckbox = document.createElement('input')

      task.classList.add('task')
      taskName.classList.add('taskName')
      taskDueDate.classList.add('taskDueDate')

      task.id = `${title}`
      taskTitleP.id = 'taskTitle'
      taskDueP.id = 'taskDue'

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
      task.appendChild(taskCheckbox)

      return task
    }

    const _manageTask = (event) => {
      // Create the task
      const newTask = createTask()

      // Set task object
      setTaskInfo(newTask)

      // Display the task object on the page!
      DisplayInfo.displayTask(newTask.title,newTask.due)

      // Disappear the task box
      DisplayInfo.disappearTaskBox()

      // delete task
      document.getElementById(`${newTask.title}`).addEventListener('change',_deleteTask)

      // Prevent from reloading page!
      event.preventDefault();
      event.target.reset()
    }

    const _deleteTask = (event) => {
      console.log('TASK REMOVED: ',event.path[1])
      document.querySelector('.mainPage').removeChild(event.path[1])
      event.stopPropagation()
    }

    const _cancelTask = () => {
      taskBox.taskForm.reset();
      DisplayInfo.disappearTaskBox()
    }

    const _listenTask = () => {
      header.addIcon.addEventListener('click',_createTaskBox)
      taskBox.taskForm.addEventListener('submit', _manageTask)
      taskBox.taskCancelBtn.addEventListener('click',_cancelTask)
    }

    const _listen =  (function() {
      _listenProject()
      _listenTask()
    })()

    return {
      createTask,
      setTaskInfo,
      createTaskDiv,
      createProject,
      createProjectDiv,
      setProjectInfo,
      createProjectDetails
    }

  })();


  const DisplayInfo = (function() {

    const displayProjectBox = () => {
      projectBox.projectForm.style.display = 'block'
    }

    const disappearProjectBox = () => {
      projectBox.projectForm.style.display = 'none'
    }

    const displayProject = (title) => {
      const project = Create.createProjectDiv(title)
      document.querySelector('.projectSection').appendChild(project)
    }

    const displayProjectInfo = (project) => {
      if (document.querySelector('.mainPage').innerHTML) clearMainPage()
      const projectDiv = Create.createProjectDetails(project)
      document.querySelector('.mainPage').appendChild(projectDiv)
    }

    const displayTaskBox = () => {
      taskBox.taskForm.style.display = 'block'
    }

    const disappearTaskBox = () => {
      taskBox.taskForm.style.display = 'none'
    }

    const displayTask = (title,due) => {
      const task = Create.createTaskDiv(title,due)  
      mainPage.appendChild(task)
    }

    const manageTasksDisplay = (display) => {
      document.querySelectorAll('.task').forEach(task => task.style.display = display)
    }

    const clearMainPage = () => {
      document.querySelector('.mainPage').innerHTML = ''
    }

    return {
      displayTaskBox,
      disappearTaskBox,
      displayTask,
      displayProjectBox,
      disappearProjectBox,
      displayProject,
      displayProjectInfo
    }
  })()
})()











