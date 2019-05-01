url = "https://telephone-assessment.herokuapp.com/api/v1/contacts"

const charList = document.querySelector('#characters')

fetch(url)
.then (response => response.json())
.then(json => createCard (json.data))
.catch(error => console.error(error.message))


function createCard (array) {
  array.forEach( character => {
    console.log(character.imageURL);
    li = document.createElement('li')
    img = document.createElement('img')
    img.src = character.imageURL
    span = document.createElement('span')
    span.innerHTML = `${character.name} - ${character.phone}`
    p = document.createElement('p')
    p.innerHTML = character.message
    a = document.createElement('a')
    a.innerHTML = `Leave ${character.name} a message`
    a.setAttribute('href', `contact.html?character=${character.name}`)
    a.setAttribute('character', character.name)

    charList.appendChild(li)
    li.appendChild(img)
    li.appendChild(span)
    li.appendChild(p)
    li.appendChild(a)
  })
}
