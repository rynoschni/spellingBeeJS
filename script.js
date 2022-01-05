'use strict';
//get the div items in the game
const gameBoardDIV = document.getElementById('gameboard');
const loadingBeeDIV = document.getElementById('loadingBee');
const gameDIV = document.getElementById('game');
const wordDIV = document.getElementById('word');
const lettersDIV = document.getElementById('letters');

// get the div items in the wordsBank
const wordsBankDIV = document.querySelector('#wordsBank');
const foundTitle = document.querySelector('#foundTitle');
const wordsDIV = document.querySelector('#words')

//create your buttons
const a_button = document.createElement('button');
a_button.innerHTML = "A";
a_button.classList.add("button", "is-warning?", "m-2");
a_button.setAttribute.add("value", "A");

const a_button = document.createElement('button');
b_button.innerHTML = "B";
b_button.classList.add("button", "is-warning?", "m-2");
b_button.setAttribute.add("value", "B");

const a_button = document.createElement('button');
c_button.innerHTML = "C";
c_button.classList.add("button", "is-warning?", "m-2");
c_button.setAttribute.add("value", "C");

const a_button = document.createElement('button');
d_button.innerHTML = "D";
d_button.classList.add("button", "is-warning?", "m-2");
d_button.setAttribute.add("value", "D");

const a_button = document.createElement('button');
e_button.innerHTML = "E";
e_button.classList.add("button", "is-warning?", "m-2");
e_button.setAttribute.add("value", "E");

const a_button = document.createElement('button');
f_button.innerHTML = "F";
f_button.classList.add("button", "is-warning?", "m-2");
f_button.setAttribute.add("value", "F");

//write the function to add the buttons to your HTML on page load
//** NOTE: setTimeout is just to slow the load so you can see it. but you could use it to add a CSS loaders and other neat stuff!! :)

//using EventListener "DOMContentLoaded", load the add buttons


//using an IIFE, load the letter button
//Why did I put the letters in the IFFE??  HINT: LOOK AT THE CONSOLE LOG AND SEE WHEN IT FIRES.


//Step-3 write the listeners to take a letter and add to your word div


//add a function to take your word from the word div and add it to an Array to then add to your Words Bank



