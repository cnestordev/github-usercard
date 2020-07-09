import axios from 'axios'

const cardsDiv = document.querySelector('.cards')

const gitUrl = 'https://api.github.com/users'
axios.get(`${gitUrl}/cnestordev`).then(res => {
  const data = res.data
  cardsDiv.appendChild(gitCardMaker(data))
})


const followersArray = ["tetondan", "dustinmyers", "justsml", "luishrd", "bigknell"];
followersArray.forEach(user => {
  axios.get(`${gitUrl}/${user}`).then(res => {
    const data = res.data
    cardsDiv.appendChild(gitCardMaker(data))
  })
})


function gitCardMaker(gitObj) {
  //create elements
  const card = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const header = document.createElement('h3')
  const p1 = document.createElement('p')
  const p2 = document.createElement('p')
  const p3 = document.createElement('p')
  const p4 = document.createElement('p')
  const p5 = document.createElement('p')
  const p6 = document.createElement('p')
  const anchor = document.createElement('a')

  //add attributes to elements
  card.classList.add('card')
  image.setAttribute('src', gitObj['avatar_url'])
  cardInfo.classList.add('card-info')
  header.classList.add('name')
  p1.classList.add('username')
  anchor.setAttribute('href', gitObj['html_url'])

  //set text content of elements
  header.textContent = gitObj.name
  p1.textContent = gitObj.login
  p2.textContent = `Location: ${gitObj.location}`
  p3.textContent = `Profile:`
  p4.textContent = `Followers: ${gitObj.followers}`
  p5.textContent = `Following: ${gitObj.following}`
  p6.textContent = `Bio: ${gitObj.bio}`
  anchor.textContent = gitObj['html_url']

  //append elements
  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(header)
  cardInfo.appendChild(p1)
  cardInfo.appendChild(p2)
  cardInfo.appendChild(p3)
  p3.appendChild(anchor)

  cardInfo.appendChild(p4)
  cardInfo.appendChild(p5)
  cardInfo.appendChild(p6)

  //return parent element
  return card
}