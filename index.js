async function fetchdata(userName) {
  let data = await fetch(`https://api.github.com/users/${userName}`)
  if (data.ok) {
    let user = await data.json()
    Showinfo(user)
  } else {
    console.log('User Not FOUND')
  }
}

let mainContainerDiv = document.createElement('div')
mainContainerDiv.classList.add('main')

let devtext = document.createTextNode('Dev Seacrh')
let devh = document.createElement('p')
devh.appendChild(devtext)
devh.classList.add('devh')
mainContainerDiv.appendChild(devh)

let searchdiv = document.createElement('div')
searchdiv.classList.add('searchdiv')

let userNamePlaceholder = document.createElement('input')
userNamePlaceholder.placeholder = 'Kareem-Mohamed-Wardany'
searchdiv.appendChild(userNamePlaceholder)

let searchbutton = document.createElement('button')
searchbutton.textContent = 'Search'
searchdiv.appendChild(searchbutton)
searchbutton.addEventListener('click', () => {
  let resdiv = mainContainerDiv.querySelector('.resdiv')
  if (resdiv) {
    resdiv.remove()
  }
  fetchdata(userNamePlaceholder.value)
})

let Searchimg = document.createElement('img')
Searchimg.src = './imgs/search.png'
Searchimg.classList.add('search')
searchdiv.appendChild(Searchimg)

function Showinfo(user) {
  let searchresdiv = document.createElement('div')
  searchresdiv.classList.add('resdiv')
  mainContainerDiv.appendChild(searchresdiv)

  let UserImage = document.createElement('img')
  UserImage.classList.add('Userimg')
  UserImage.src = user.avatar_url
  searchresdiv.appendChild(UserImage)
  let NameNode = document.createTextNode(user.name)
  let Nameh = document.createElement('p')
  Nameh.appendChild(NameNode)
  Nameh.classList.add('NameH1')
  searchresdiv.appendChild(Nameh)
  let Created = new Date(user.created_at)
  let Months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let joinDate = `Joined ${Created.getDate()} ${
    Months[Created.getMonth()]
  } ${Created.getFullYear()}`
  console.log(joinDate)
  let DateNode = document.createTextNode(joinDate)
  let Dateh = document.createElement('p')
  Dateh.appendChild(DateNode)
  Dateh.classList.add('Dateh')
  searchresdiv.appendChild(Dateh)
  let BioNode = document.createTextNode(user.bio)
  let Bioh = document.createElement('p')
  Bioh.appendChild(BioNode)
  Bioh.classList.add('Bioh')
  searchresdiv.appendChild(Bioh)

  let datadiv = document.createElement('div')
  datadiv.classList.add('Datadiv')
  searchresdiv.appendChild(datadiv)

  let reposNumText = document.createTextNode(user.public_repos)
  let reposNumP = document.createElement('p')
  reposNumP.classList.add('repos')
  reposNumP.appendChild(reposNumText)
  datadiv.appendChild(reposNumP)

  let FollowingNumText = document.createTextNode(user.following)
  let FollowingNumP = document.createElement('p')
  FollowingNumP.classList.add('Following')
  FollowingNumP.appendChild(FollowingNumText)
  datadiv.appendChild(FollowingNumP)

  let FollowersNumText = document.createTextNode(user.followers)
  let FollowersNumP = document.createElement('p')
  FollowersNumP.classList.add('Followers')
  FollowersNumP.appendChild(FollowersNumText)
  datadiv.appendChild(FollowersNumP)
}

mainContainerDiv.appendChild(searchdiv)
document.body.appendChild(mainContainerDiv)
// API Function

// fetchdata('elzerowebschool')
