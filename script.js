"use strict";
//get the div items in the game
const gameDiv = document.getElementById("game");
const wordDiv = document.getElementById("word");
const letterDiv = document.getElementById("letters");

// get the div items in the wordsBank
const wordsBankDiv = document.querySelector("#wordsBank");
const foundTitleDiv = document.querySelector("#foundTitle");
const wordsDiv = document.querySelector("#words");

//create your buttons
const a_button = document.createElement("button");
a_button.setAttribute("id", "a_button");
a_button.setAttribute("value", "A");
a_button.classList.add("letter-button");
a_button.innerHTML = "A";

const b_button = document.createElement("button");
b_button.setAttribute("id", "b_button");
b_button.setAttribute("value", "B");
a_button.classList.add("letter-button");
b_button.innerHTML = "B";

const c_button = document.createElement("button");
c_button.setAttribute("id", "c_button");
c_button.setAttribute("value", "C");
c_button.classList.add("letter-button");
c_button.innerHTML = "C";

const d_button = document.createElement("button");
d_button.setAttribute("id", "d_button");
d_button.setAttribute("value", "D");
d_button.classList.add("letter-button");
d_button.innerHTML = "D";

const e_button = document.createElement("button");
e_button.setAttribute("id", "e_button");
e_button.setAttribute("value", "E");
e_button.classList.add("letter-button");
e_button.innerHTML = "E";

const addButton = document.createElement('button');
addButton.setAttribute("id", "add-button");
addButton.innerHTML = "ADD";

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loader!! :)

//using EventListener "DOMContentLoaded", load the add buttons
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    letterDiv.appendChild(addButton);
    
  }, 1500);

  console.log("DOM LOADED");
});

//using an IFFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.

(() => {
  console.log("IFFE LOADED");
  setTimeout(() => {
    letterDiv.appendChild(a_button);
    letterDiv.appendChild(b_button);
    letterDiv.appendChild(c_button);
    letterDiv.appendChild(d_button);
    letterDiv.appendChild(e_button);
  }, 1500);
})();

//write the function to take a letter and add to your word div
let clickedLetter = ''

a_button.addEventListener('click', (e) => {
  e.preventDefault();
  clickedLetter = a_button.value
  wordDiv.innerHTML += clickedLetter
  console.log("button clicked",clickedLetter)
})

b_button.addEventListener("click", (e) => {
  e.preventDefault();
  clickedLetter = b_button.value;
  wordDiv.innerHTML += clickedLetter;
  console.log("button clicked", clickedLetter);
});

c_button.addEventListener("click", (e) => {
  e.preventDefault();
  clickedLetter = c_button.value;
  wordDiv.innerHTML += clickedLetter;
  console.log("button clicked", clickedLetter);
});

d_button.addEventListener("click", (e) => {
  e.preventDefault();
  clickedLetter = d_button.value;
  wordDiv.innerHTML += clickedLetter;
  console.log("button clicked", clickedLetter);
});

e_button.addEventListener("click", (e) => {
  e.preventDefault();
  clickedLetter = e_button.value;
  wordDiv.innerHTML += clickedLetter;
  console.log("button clicked", clickedLetter);
});



//add a function to take your word from the word div and add it to an Array to then add to your Words Bank



