
let taskTexts = document.querySelectorAll("li")

const quote = document.querySelector(".quote-text")
const author = document.querySelector(".quote-author")
const quoteButton = document.querySelector("button")
const form = document.querySelector("#form")

let box = document.querySelector("#one")  
let checkBoxes = document.querySelector(".collection")



function getQuotes() {
    const quoteurl = "https://goquotes-api.herokuapp.com/api/v1/random?count=1"
    fetch(quoteurl)
    .then(response => response.json())
    .then((data) => {
        quote.innerText = data.quotes[0].text
        author.innerText = data.quotes[0].author
    })
}

function handleChecks() {
   box.addEventListener("change", ()=> {
        if(box.checked) {
            style="color: #0000a0" 
        }else {
            box.style.backgroundColor = "#FF0000"
        }
    })
}
handleChecks()


function postComment() {
    let gratitudeBoxValue= document.getElementById("comments").value
    let grateComment  = document.createTextNode(gratitudeBoxValue)
    let completedComment = document.createElement("p")
    completedComment.appendChild(grateComment)
    document.getElementById("unordered").appendChild(completedComment)
    
}

//  Event Listeners
    quoteButton.addEventListener("click", getQuotes)
    document.addEventListener("submit",(e) => {
    e.preventDefault(),
    postComment()
    form.reset()
    })
    
// 

