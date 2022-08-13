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


  // Event Box
  const taskBox = addEvent();
  document.body.appendChild(taskBox.addEventDiv);



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

  class Task extends Project {
    constructor(title,description,due,priority) {
      super(title,description,due,priority)
    }

    deleteTask = () => {
      delete this
    }
  }



  const Create = (function() {

    const createProject = () => {


    }

    const getTaskInfo = (newTask,info) => {
      newTask[info] = event.target.value;
      console.log(newTask)
    }

    const setTaskInfo = () => {
      const newTask = createTask()
      taskBox.taskTitle.addEventListener('change', (event) => getTaskInfo(newTask,'title'))
      taskBox.taskDescription.addEventListener('change', (event) => getTaskInfo(newTask,'description'))
      taskBox.taskDate.addEventListener('change', (event) => getTaskInfo(newTask,'due'))
      console.log(newTask);
    }

    const createTask = () => {
      const newTask = new Task();
      taskBox.addEventDiv.style.display = 'flex'

      return newTask
    }

    header.addIcon.addEventListener('click',createTask)


    return {
      createTask,
      setTaskInfo
    }

  })();


  const DisplayInfo = (function() {

    const displayProject = () => {
      console.log('asdasd')
    }

    const displayTask = () => {
      taskBox.taskAddBtn.addEventListener('click', Create.setTaskInfo)
    }

    displayTask()


  })()

})()









