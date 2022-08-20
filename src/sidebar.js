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
  
  sidebar.classList.add('sidebar')
  dateSection.classList.add('dateSection')
  today.classList.add('today')
  todayIcon.classList.add('material-icons')

  upcomingDiv.classList.add('inbox')
  calendarIcon.classList.add('material-icons')

  projectSection.classList.add('projectSection')
  projectHeader.classList.add('projectHeader')
  addIcon.classList.add('material-icons')

  todayIcon.textContent = 'today'
  todayP.textContent = 'Today'

  calendarIcon.textContent = 'inbox'
  upcomingP.textContent  = 'Inbox'

  projectP.textContent = 'Projects'
  addIcon.textContent = 'add'

  projectHeader.appendChild(projectP)
  projectHeader.appendChild(addIcon)

  projectSection.appendChild(projectHeader)

  today.appendChild(todayIcon)
  today.appendChild(todayP)

  upcomingDiv.appendChild(calendarIcon)
  upcomingDiv.appendChild(upcomingP)

  dateSection.appendChild(upcomingDiv)
  dateSection.appendChild(today)


  sidebar.appendChild(dateSection)
  sidebar.appendChild(projectSection)

  return sidebar
}
