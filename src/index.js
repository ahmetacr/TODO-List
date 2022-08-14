import './style.css';
import { compareAsc, format } from 'date-fns'
import { deleteTODO } from './delete_todo.js';
import { createHeader } from './header.js'
import { addEvent } from './addEvent';
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
      console.log('REMOVED: ',event.path[1])
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

    _listenTask()


    return {
      createTask,
      setTaskInfo,
      createTaskDiv
    }

  })();


  const DisplayInfo = (function() {

    const displayProject = () => {
      console.log('asdasd')
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




    return {
      displayTaskBox,
      disappearTaskBox,
      displayTask
    }
  })()

})()











