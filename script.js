'use strict';
//get the div items in the game
const gameDiv = document.getElementById("game");
const wordDiv = document.getElementById("word");
const letterDiv = document.getElementById("letters");
const loadDiv = document.getElementById("loadingBee");

// get the div items in the wordsBank
const wordsBankDiv = document.querySelector("#wordsBank");
const foundTitleDiv = document.querySelector("#foundTitle");
const wordsDiv = document.querySelector("#words");

//create your buttons
const a_button = document.createElement("button");
a_button.setAttribute("id", "a_button");
a_button.setAttribute("value", "A");
a_button.classList.add("button","is-warning", "m-2");
a_button.innerHTML = "A";

const b_button = document.createElement("button");
b_button.setAttribute("id", "b_button");
b_button.setAttribute("value", "B");
b_button.classList.add("button", "is-warning", "m-2");
b_button.innerHTML = "B";

const c_button = document.createElement("button");
c_button.setAttribute("id", "c_button");
c_button.setAttribute("value", "C");
c_button.classList.add("button", "is-warning", "m-2");
c_button.innerHTML = "C";

const d_button = document.createElement("button");
d_button.setAttribute("id", "d_button");
d_button.setAttribute("value", "D");
d_button.classList.add("button", "is-warning", "m-2");
d_button.innerHTML = "D";

const e_button = document.createElement("button");
e_button.setAttribute("id", "e_button");
e_button.setAttribute("value", "E");
e_button.classList.add("button", "is-warning", "m-2");
e_button.innerHTML = "E";

const addButton = document.createElement('div');
addButton.setAttribute("id", "add-button");
addButton.classList.add("button", "is-black");
addButton.innerHTML = "ADD";

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loader!! :)

//using EventListener "DOMContentLoaded", load the add buttons
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    gameDiv.appendChild(addButton);
  }, 2500);

  console.log("DOM LOADED");
});

//using an IFFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.

(() => {
  console.log("IFFE LOADED");
  setTimeout(() => {
    loadDiv.classList.toggle("hide");
    wordDiv.classList.toggle("hide");
    wordsBankDiv.classList.toggle("hide");
    letterDiv.appendChild(a_button);
    letterDiv.appendChild(b_button);
    letterDiv.appendChild(c_button);
    letterDiv.appendChild(d_button);
    letterDiv.appendChild(e_button);
  }, 2000);
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

const wordsBankArray = []

let wordCount = 0

foundTitleDiv.innerHTML = `You have found ${wordCount} words!`;
console.log('wordCount', wordCount)
wordsBankDiv.appendChild(foundTitleDiv);

addButton.addEventListener('click', (e) => {
  e.preventDefault();
  wordsBankArray.push(wordDiv.innerHTML)
  console.log("wordsBankArray", wordsBankArray)

   let wordMapDIV = document.createElement('div');
      wordMapDIV.setAttribute('id', `${wordCount}`);
      wordMapDIV.className = 'words-bank';
  wordMapDIV.innerHTML = wordsBankArray[`${wordCount}`];
  wordsBankDiv.appendChild(wordMapDIV);
  wordCount++;
  foundTitleDiv.innerHTML = `You have found ${wordCount} words!`;
  wordDiv.innerHTML = '';
})


