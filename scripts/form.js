
const name = document.querySelector('#name')
const messageForm = document.querySelector('#message-form')

let url = new URL(document.location);
let params = new URLSearchParams(url.search);
let character = params.get("character")

name.value = character

messageForm.addEventListener('submit', function(event){
  event.preventDefault();

  const input = document.querySelector("#message")
  const message = input.value

  const body = {
    "data": {
        "character": character,
        "message": message
    }
}
  const bodyString = JSON.stringify(body)

  fetch("https://quiet-bayou-99554.herokuapp.com/api/v1/contacts", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: bodyString
  })
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(error => console.error(error.message))
})
