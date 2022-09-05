const quote = document.querySelector(".quote-text")
const author = document.querySelector(".quote-author")
const quoteButton = document.querySelector("button")
const form = document.querySelector("#form")



const label = document.querySelectorAll("label")



function getQuotes() {
    const quoteurl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    fetch(quoteurl)
    .then(response => response.json())
    .then((data) => {
        quote.innerText = data.quotes[0].text
        author.innerText = data.quotes[0].author
    })
}

  function handleCheckBoxes() {
    const text = document.getElementById("text")
    const checkbox = document.querySelectorAll("input[name=checkbox]");
    checkbox.forEach(item => {
    item.addEventListener( 'change', function() {
        if(this.checked) {
            text.style.display = "block"
        } else {
            text.style.display = "none";
        }
    });
  })
  }

  handleCheckBoxes()

function postComment() {
    let gratitudeBoxValue= document.getElementById("comments").value
    let grateComment  = document.createTextNode(gratitudeBoxValue)
    let completedComment = document.createElement("p")
    completedComment.appendChild(grateComment)
    document.getElementById("unordered").appendChild(completedComment)   
}

//  Event Listeners
    window.addEventListener('load', getQuotes)
    quoteButton.addEventListener("click", getQuotes)
    document.addEventListener("submit",(e) => {
    e.preventDefault(),
    postComment()
    form.reset()
})
  
