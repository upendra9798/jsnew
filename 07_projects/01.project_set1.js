// PROJECT1- COLOR CHANGER

// project link
// https://stackblitz.com/edit/dom-project-chaiaurcode-gxahkavp?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html

//SOLUTION CODE

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
   button.addEventListener('click', function (e) {
   //button.addEventListener('click', ...):  // Adds a click event listener to each button. When a button is clicked, the code inside this function executes.
  //function (e):The callback function receives an event object e when the button is clicked.

    console.log(e); //Logs the entire event object to the console for debugging.
    console.log(e.target);//Logs the element that was clicked (the button) to the console. e.target refers to the HTML element that triggered the event.
    switch (e.target.id) {
      case 'grey': {
        body.style.backgroundColor = e.target.id;
        break;
      }
      case 'white': {
        body.style.backgroundColor = 'white';
        break;
      }
      case 'blue': {
        body.style.backgroundColor = 'blue';
        break;
      }
      case 'yellow': {
        body.style.backgroundColor = 'yellow';
        break;
      }
      case 'purple': {
        body.style.backgroundColor = 'purple';
        break;
      }
      //Or we can also use if in place of switch
    }
  });
});
