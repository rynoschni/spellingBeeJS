
//get the div items in the game

const gameBoardDIV = document.getElementById('gameboard')
const loadingBeeDIV = document.getElementById('loadingBee')
const gameDIV = document.getElementById('game')
const wordDIV = document.getElementById('word')
const lettersDIV = document.getElementById('letters')

// get the div items in the wordsBank

const wordsBankDIV = document.querySelector('#wordsBank')
const foundTitle = document.querySelector('#foundTitle')
const wordsDIV = document.querySelector('#words')


//create your buttons

const a_button = document.createElement('button')
a_button.classList.add("button", "is-warning", "m-2")
a_button.setAttribute("value", "A")
a_button.innerHTML = "A"

const b_button = document.createElement('button')
b_button.classList.add("button", "is-warning", "m-2")
b_button.setAttribute("value", "B")
b_button.innerHTML = "B"

const c_button = document.createElement('button')
c_button.classList.add("button", "is-warning", "m-2")
c_button.setAttribute("value", "C")
c_button.innerHTML = "C"

const d_button = document.createElement('button')
d_button.classList.add("button", "is-warning", "m-2")
d_button.setAttribute("value", "D")
d_button.innerHTML = "D"

const e_button = document.createElement('button')
e_button.classList.add("button", "is-warning", "m-2")
e_button.setAttribute("value", "E")
e_button.innerHTML = "E"

const f_button = document.createElement('button')
f_button.classList.add("button", "is-warning", "m-2")
f_button.setAttribute("value", "F")
f_button.innerHTML = "F"

const addButton = document.createElement('div')
addButton.classList.add("button", "is-black")

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        gameDIV.appendChild(addButton)
    }, 3500)
});


//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.
(() => {
    console.log("IFFEE RUNNING")
    setTimeout(() => {
        loadingBeeDIV.classList.toggle("hide");
        wordDIV.classList.toggle("hide")
        wordsBankDIV.classList.toggle("hide")
        lettersDIV.appendChild(a_button)
        lettersDIV.appendChild(b_button)
        lettersDIV.appendChild(c_button) 
        lettersDIV.appendChild(d_button) 
        lettersDIV.appendChild(e_button) 
        lettersDIV.appendChild(f_button) 
    }, 3000)
})()

//Step-3 write the listeners to take a letter and add to your word div

let clickedLetter = ''

a_button.addEventListener('click', (event) => {
    event.preventDefault()
    clickedLetter = a_button.value
    wordDIV.innerHTML += clickedLetter
    console.log(clickedLetter, "button clicked")
})

b_button.addEventListener('click', (event) => {
    event.preventDefault()
    clickedLetter = b_button.value
    wordDIV.innerHTML += clickedLetter
    console.log(clickedLetter, "button clicked")
})

c_button.addEventListener('click', (event) => {
    event.preventDefault()
    clickedLetter = c_button.value
    wordDIV.innerHTML += clickedLetter
    console.log(clickedLetter, "button clicked")
})

d_button.addEventListener('click', (event) => {
    event.preventDefault()
    clickedLetter = d_button.value
    wordDIV.innerHTML += clickedLetter
    console.log(clickedLetter, "button clicked")
})

e_button.addEventListener('click', (event) => {
    event.preventDefault()
    clickedLetter = e_button.value
    wordDIV.innerHTML += clickedLetter
    console.log(clickedLetter, "button clicked")
})

f_button.addEventListener('click', (event) => {
    event.preventDefault()
    clickedLetter = f_button.value
    wordDIV.innerHTML += clickedLetter
    console.log(clickedLetter, "button clicked")
})


//add a function to take your word from the word div and add it to an Array to then add to your Words Bank



