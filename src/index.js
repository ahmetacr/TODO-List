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
    
    deleteProject = () => {
      delete this
    }
  }

  // Task Class to create a new project
  class Task extends Project {
    constructor(title,description,due,priority) {
      super(title,description,due,priority)
    }

    deleteTask = () => {
      delete this
    }
  }



  const Create = (function() {


    // add task a bastigiimda : create task obj, set task object, display task object, disappear taskBox 

    const createTask = () => {
      DisplayInfo.displayTaskBox();
      const newTask = new Task();
      return newTask
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




    const addTask = (event) => {

      // Create the task
      const newTask = createTask()

      // Set task object
      setTaskInfo(newTask)

      // Display the task object on the page!
      DisplayInfo.displayTask(newTask.title,newTask.due)

      // Disappear the task box
      DisplayInfo.disappearTaskBox()


      event.preventDefault();
      event.target.reset()
    }


    header.addIcon.addEventListener('click',createTask)
    taskBox.taskForm.addEventListener('submit', addTask)

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











