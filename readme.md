# Spelling BEE

Today, we are going to make a simple spelling bee web app.  This will have multiple steps involved and we can continue with is as we learn.  So, lets get started!!

#### First things first. Some git and GitHub.
 1. Fork this repo!!
 2. Clone your fork to your computer.
 3. Open the newly downloaded local repo in VS Code.
 4. Using LiveServer, open the index.html in a browser.

 >NOTE: We are using Bulma as a CSS framework (similar to Bootstrap).  Visit the docs [here](https://bulma.io).  A separate sytlesheet is available for personal styling.

 ## Now to building!

### Step 1

First, we are going to add basic structure to our JS and then add the buttons we need to make it clickable.

 1. Add JS code to make the current HTML elements available to JS as new variables.
> Hint: think about the DOM.  so use document.xxxxxx

 2. Create 6 buttons for your letters.  Hard code some letters for now. EX:

            const a_button = document.xxxxxx
            a_button.innerHTML = "A";
            
 3. Each button should be a ***button*** element and need to have a class attribute added of ***button is-warning m-2***, and a ***value*** attribute for the letter you are choosing.  

 4. Create an ***ADD*** button with the a class attribute of ***button is-black***

 >NOTE:  YOU WILL NOT SEE THEM YET!!

 ### Step 2

Now that we have the elements available and the buttons in JS, lets first do a some content loading.  We are going to use two loaders just to show them both.  In practice, you probably would not do this.

  1.  Add an event listener with ***DOMContentLoaded*** that does that has a ***setTimeout*** of 3.5 sec that appends the ***ADD*** button to the ***game DIV***.  
  
          setTimeout(()=>{},***YOUR TIME IN MILLISECONDS***)
  2.  Add an Immediately Invoked Function Expression (IIFE - pronounced "IF'Y").  This IIFE will also load a ***setTimeout*** for 3 seconds that will

      - toggle a class hide for the ***loading DIV***, ***word DIV***, &  the ***words bank DIV***.  This will give animation feel.
      - appends your letter buttons to your ***letter DIV***.
>NOTE:  The difference in the times is just to make the loading more visible.

### Step 3

Next, lets add the listeners to add the letters from our buttons to the ***word DIV***, where we can see our word built by clicking on the letter buttons.

  1. Create an empty variable to "store" your clicked letter.
  2. Make an ***event listener*** for each of your 6 letter buttons.  Use the value we set in Step 1 and the empty variable to append the ***word DIV innerHTML***.
