const checkBoxes = document.querySelectorAll("input[name=checkbox")
let taskTexts = document.querySelectorAll("li")

const quote = document.querySelector(".quote-text")
const author = document.querySelector(".quote-author")
const quoteButton = document.querySelector("button")


function getQuotes() {
    const quoteurl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    fetch(quoteurl)
    .then(response => response.json())
    .then((data) => {
        quote.innerText = data.quotes[0].text
        author.innerText = data.quotes[0].author
    })
}


//  Event Listeners
document.addEventListener("DOMContentLoaded", () => {
   quoteButton.addEventListener("click", getQuotes)

})






