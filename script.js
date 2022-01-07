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

//create your buttons (then adding id for each and classes, then name the button to be visible on the page)
const a_button = document.createElement("button"); //creat a brand new button
a_button.setAttribute("id", "a_button"); //setAtribute is to set a value or id, in here we set an id for a_button that we created
a_button.setAttribute("value", "A"); // set a value 'A' for a_button
a_button.classList.add("button","is-warning", "m-2"); //adding multiple classes at once
a_button.innerText = "A"; //This is to name the button, if i put N, it will be named N, but it still generate A (it's just a name)

const b_button = document.createElement("button");
b_button.setAttribute("id", "b_button");
b_button.setAttribute("value", "B");
b_button.classList.add("button", "is-warning", "m-2");
b_button.innerHTML = "B"; // also we can use a_button.innerText

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

const f_button = document.createElement("button");
f_button.setAttribute("id", "f_button");
f_button.setAttribute("value", "F");
f_button.classList.add("button", "is-warning", "m-2");
f_button.innerHTML = "F";

const addButton = document.createElement('div'); //is to creat the Add button
addButton.setAttribute("id", "add-button"); // setting an id for the div called add-button
addButton.classList.add("button", "is-black"); //adding a class called , then changing the color using bulma 
addButton.innerHTML = "ADD"; //naming the button, also we can use addButton.innerText

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons
document.addEventListener("DOMContentLoaded", (e) => {
  setTimeout(() => {
    gameDiv.appendChild(addButton);
  }, 3500); // the Add button, black line will appeare after 3.5 sec

  console.log("DOM LOADED");
});
//test commet
//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.

(() => {
  console.log("IFFE LOADED");
  setTimeout(() => {

    //toggleClass() method toggles between adding and removing one or more class names from the selected elements 
    loadDiv.classList.toggle("hide"); 
    wordDiv.classList.toggle("hide");
    wordsBankDiv.classList.toggle("hide");
    
    //calling the buttons, each button was defined previously and added classes and ids for each one
    letterDiv.appendChild(a_button);  
    letterDiv.appendChild(b_button);
    letterDiv.appendChild(c_button);
    letterDiv.appendChild(d_button);
    letterDiv.appendChild(e_button);
    letterDiv.appendChild(f_button);

  }, 3000); //buttons from A to F will appeare after 3 sec
})();


//Step-3 write the listeners to take a letter and add to your word div
let clickedLetter = ''; //we use let because it will be change
// Note: 
//`const` is a signal that the identifier won't be reassigned. 
//`let` is a signal that the variable may be reassigned, such as a counter in a loop, or a value swap in an algorithm.

a_button.addEventListener("click", (event) => { // e or event, it's just a parameter
  event.preventDefault(); // it's to shut any default behaviour that might the browser do
  clickedLetter = a_button.value; // assign a value to clickedletter
  wordDiv.innerHTML += clickedLetter; // '+' let us to add the same value as many as we need
  console.log(clickedLetter, 'button clicked') //not neccesarly, it's just for testing, we can remove this line
})
b_button.addEventListener("click", (event) => { // e or event
  event.preventDefault(); // it's to shutt the default behaviour that might the browser do
  clickedLetter = b_button.value; // assign a value to clickedletter
  wordDiv.innerHTML += clickedLetter; //
  console.log(clickedLetter, 'button clicked')
})
c_button.addEventListener("click", (event) => { // e or event
  event.preventDefault(); // it's to shutt the default behaviour that might the browser do
  clickedLetter = c_button.value; // assign a value to clickedletter
  wordDiv.innerHTML += clickedLetter; //
  console.log(clickedLetter, 'button clicked')
})
d_button.addEventListener("click", (event) => { // e or event
  event.preventDefault(); // it's to shutt the default behaviour that might the browser do
  clickedLetter = d_button.value; // assign a value to clickedletter
  wordDiv.innerHTML += clickedLetter; //
  console.log(clickedLetter, 'button clicked')
})
e_button.addEventListener("click", (event) => { // e or event
  event.preventDefault(); // it's to shutt the default behaviour that might the browser do
  clickedLetter = e_button.value; // assign a value to clickedletter
  wordDiv.innerHTML += clickedLetter; //
  console.log(clickedLetter, 'button clicked')
})
f_button.addEventListener("click", (event) => { // e or event
  event.preventDefault(); // it's to shutt the default behaviour that might the browser do
  clickedLetter = f_button.value; // assign a value to clickedletter
  wordDiv.innerHTML += clickedLetter; //
  console.log(clickedLetter, 'button clicked')
})


//add a function to take your word from the word div and add it to an Array to then add to your Words Bank

const wordsBankArray = []; // array to store the submitted words
let wordCount = 0; // we have 0 words for now
foundTitleDiv.innerHTML = `You have found ${wordCount} words!`; //innerHtml is a DOM manipulation
wordsBankDiv.appendChild(foundTitleDiv);


addButton.addEventListener('click', (e) => {
  e.preventDefault();
  wordsBankArray.push(wordDiv.innerHTML);
  console.log("wordBankArray", wordsBankArray) // testing if submit button push words into the wordsBankArray / see inspect

  let newWordDiv = document.createElement("div");
  newWordDiv.setAttribute('id', `${wordCount}`); //setAttribute is to add an id for newWordDiv
  //wordCount is the id for this div

  //the lin down below is to pull out the array and putting it in newWordArray
  newWordDiv.classList.add("is-size-2"); // setting the size for the new word that will appeare in the right box
  newWordDiv.innerHTML = wordsBankArray[wordCount]; 
  wordsBankDiv.appendChild(newWordDiv);
  wordCount ++;
  foundTitleDiv.innerHTML = `You have found ${wordCount} words!`; //to change the message from 0 to what ever we add / number of added words inside the array

  wordDiv.innerHTML = "";
})