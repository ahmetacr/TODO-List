// Create a header and export it as a node:
export function createHeader() {
  const header = document.createElement('div');
  

  // Header left
  const headerLeft = document.createElement('div');
  const menuIcon = document.createElement('i');
  const homeIcon = document.createElement('i');
  const searchDiv = document.createElement('div');
  const searchIcon = document.createElement('i')
  const searchLabel = document.createElement('label')
  const searchInput = document.createElement('input');

  header.classList.add('header')
  headerLeft.classList.add('headerLeft')
  menuIcon.classList.add('material-icons')
  homeIcon.classList.add('material-icons')
  searchDiv.classList.add('search')
  searchIcon.classList.add('material-icons')

  menuIcon.id = 'menu'
  homeIcon.id = 'home'
  
  menuIcon.textContent = 'menu'
  homeIcon.textContent = 'home'
  searchLabel.textContent = 'search'
  
  searchLabel.setAttribute('for','searchInput')

  searchInput.setAttribute('type','text')
  searchInput.setAttribute('id','searchInput')
  searchInput.setAttribute('placeholder','search')



  searchIcon.appendChild(searchLabel);
  searchDiv.appendChild(searchIcon)
  searchDiv.appendChild(searchInput)

  headerLeft.appendChild(menuIcon)
  headerLeft.appendChild(homeIcon)
  headerLeft.appendChild(searchDiv);

  // Header Right

  const headerRight = document.createElement('div')
  const addIcon = document.createElement('i')
  const personIcon = document.createElement('i')
  const toggleLabel = document.createElement('label')
  const toggleBtn = document.createElement('input')

  headerRight.classList.add('headerRight')
  addIcon.classList.add("material-icons")
  personIcon.classList.add('material-icons')
  toggleBtn.classList.add('toggleTheme')

  addIcon.id = 'add'
  personIcon.id = 'person'

  toggleLabel.setAttribute('for','toggle')
  toggleBtn.setAttribute('type','checkbox')
  toggleBtn.setAttribute('id','toggle')


  addIcon.textContent = 'add'
  personIcon.textContent = 'person'
  toggleLabel.textContent = 'Dark'

  headerRight.appendChild(addIcon)
  headerRight.appendChild(personIcon)
  headerRight.appendChild(toggleLabel)
  headerRight.appendChild(toggleBtn)

  // Add the right and left to the header
  header.appendChild(headerLeft)
  header.appendChild(headerRight)

  return {
    header,
    menuIcon,
    homeIcon,
    addIcon
  }
}