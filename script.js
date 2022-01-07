'use strict';
//get the div items in the game
const gameBoardDIV = document.getElementById('gameboard');
const loadingBeeDIV = document.getElementById('loadingBee');
const gameDIV = document.getElementById('game');
const eventA = document.getElementById('word');
const lettersDIV = document.getElementById('letters');

// get the div items in the wordsBank
const wordsBankDIV = document.querySelector('#wordsBank');
const foundTitle = document.querySelector('#foundTitle');
const wordsDIV = document.querySelector('#words')

//create your buttons
const a_button = document.createElement('button');
a_button.innerHTML = "A";
a_button.classList.add("button", "is-warning?", "m-2");
a_button.setAttribute("value", "A");

const b_button = document.createElement('button');
b_button.innerHTML = "B";
b_button.classList.add("button", "is-warning?", "m-2");
b_button.setAttribute("value", "B");

const c_button = document.createElement('button');
c_button.innerHTML = "C";
c_button.classList.add("button", "is-warning?", "m-2");
c_button.setAttribute("value", "C");

const d_button = document.createElement('button');
d_button.innerHTML = "D";
d_button.classList.add("button", "is-warning?", "m-2");
d_button.setAttribute("value", "D");

const e_button = document.createElement('button');
e_button.innerHTML = "E";
e_button.classList.add("button", "is-warning?", "m-2");
e_button.setAttribute("value", "E");

const f_button = document.createElement('button');
f_button.innerHTML = "F";
f_button.classList.add("button", "is-warning?", "m-2");
f_button.setAttribute("value", "F");

const addButton = document.createElement('div');
addButton.classList.add("button", "is-black");

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(()=>{
        gameDIV.appendChild(addButton);
    }, 3500);
});

//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.
(() => {
    setTimeout(() => {
        loadingBeeDIV.classList.toggle("hide");
        eventA.classList.toggle("hide");
        wordsBankDIV.classList.toggle("hide");
        lettersDIV.appendChild(a_button);
        lettersDIV.appendChild(b_button);
        lettersDIV.appendChild(c_button);
        lettersDIV.appendChild(d_button);
        lettersDIV.appendChild(e_button);
        lettersDIV.appendChild(f_button);
    }, 3000);
})();

//Step-3 write the listeners to take a letter and add to your word div
let clickedLetter = '';

a_button.addEventListener("click", (eventA) => {
    eventA.preventDefault();
    clickedLetter = a_button.value;
    wordsDIV.innerHTML += clickedLetter;
    console.log(clickedLetter, "button clicked");
});

b_button.addEventListener("click", (eventB) => {
    eventB.preventDefault();
    clickedLetter = b_button.value;
    wordsDIV.innerHTML += clickedLetter;
    console.log(clickedLetter, "button clicked");
});
c_button.addEventListener("click", (eventC) => {
    eventC.preventDefault();
    clickedLetter = c_button.value;
    wordsDIV.innerHTML += clickedLetter;
    console.log(clickedLetter, "button clicked");
});
d_button.addEventListener("click", (eventD) => {
    eventD.preventDefault();
    clickedLetter = d_button.value;
    wordsDIV.innerHTML += clickedLetter;
    console.log(clickedLetter, "button clicked");
});
e_button.addEventListener("click", (eventE) => {
    eventE.preventDefault();
    clickedLetter = e_button.value;
    wordsDIV.innerHTML += clickedLetter;
    console.log(clickedLetter, "button clicked");
});
f_button.addEventListener("click", (eventF) => {
    eventF.preventDefault();
    clickedLetter = f_button.value;
    wordsDIV.innerHTML += clickedLetter;
    console.log(clickedLetter, "button clicked");
});
//add a function to take your word from the word div and add it to an Array to then add to your Words Bank



