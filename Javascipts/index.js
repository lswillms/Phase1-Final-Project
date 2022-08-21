let quote = []

//Node getters
const getQuoteButton = document.getElementById("quoteGrab")



//Event Handlers
const fetchRandomQuote = ()=> {
  fetch("https://goquotes-api.herokuapp.com/api/v1/random?count=1")
  .then(resp => resp.json())
  .then(data => console.log(data.quotes))
}

fetchRandomQuote()

const fetchQuoteList = () => {
  fetch("http://localhost:3000/posts", {
  method: "POST",
  headers: {
    "Accept": "application/json",
    "Content-Type" : "application/json",
  },
  body: JSON.stringify({quote: quote})
})
  .then(resp => resp.json())
  .then (data => quote)
}

function initializePage() {
 fetchRandomQuote()
}
initializePage()


// //DOMContentLoaded
// document.addEventListener("DOMContentLoaded", () => {
//   randomQuoteClickEvent()
// })

// // //Event Listeners
// getQuoteButton.addEventListener("click", fetchQuoteList())

