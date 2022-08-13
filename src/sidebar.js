// Create and export the sidebar
export function createSidebar() {
  const sidebar = document.createElement('div')

  const dateSection = document.createElement('div')
  
  const today = document.createElement('div')
  const todayIcon = document.createElement('i')
  const todayP = document.createElement('p')
  
  const upcomingDiv = document.createElement('div')
  const calendarIcon = document.createElement('i')
  const upcomingP = document.createElement('p')
  
  
  const projectSection  = document.createElement('div')
  
  const projectHeader = document.createElement('div')
  const projectP = document.createElement('p')
  const addIcon = document.createElement('i')
  
  const projectDiv = document.createElement('div')
  const projectName = document.createElement('div')
  const nameIcon = document.createElement('i')
  const projectNameP = document.createElement('p')
  const deleteIcon = document.createElement('i')
  

  sidebar.classList.add('sidebar')
  dateSection.classList.add('dateSection')
  today.classList.add('today')
  todayIcon.classList.add('material-icons')

  upcomingDiv.classList.add('upcoming')
  calendarIcon.classList.add('material-icons')

  projectSection.classList.add('projectSection')
  projectHeader.classList.add('projectHeader')
  addIcon.classList.add('material-icons')

  projectDiv.classList.add('project')
  projectName.classList.add('projectName')
  nameIcon.classList.add('material-icons')

  deleteIcon.classList.add('material-icons')

  todayIcon.textContent = 'today'
  todayP.textContent = 'Today'

  calendarIcon.textContent = 'calendar_month'
  upcomingP.textContent  = 'Upcoming'

  projectP.textContent = 'Projects'
  addIcon.textContent = 'add'

  nameIcon.textContent = 'arrow_right'
  projectNameP.textContent = 'Project Name'

  deleteIcon.textContent = 'delete'

  projectNameP.id = 'projectName'

  // Append Child
  projectName.appendChild(nameIcon)
  projectName.appendChild(projectNameP)

  projectDiv.appendChild(projectName)
  projectDiv.appendChild(deleteIcon)

  projectHeader.appendChild(projectP)
  projectHeader.appendChild(addIcon)

  projectSection.appendChild(projectHeader)
  projectSection.appendChild(projectDiv)


  today.appendChild(todayIcon)
  today.appendChild(todayP)

  upcomingDiv.appendChild(calendarIcon)
  upcomingDiv.appendChild(upcomingP)

  dateSection.appendChild(today)
  dateSection.appendChild(upcomingDiv)


  sidebar.appendChild(dateSection)
  sidebar.appendChild(projectSection)

  return sidebar
}
