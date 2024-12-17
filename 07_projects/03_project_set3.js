// Project 3- Digital Clock

// Project link
// https://stackblitz.com/edit/dom-project-chaiaurcode-gxahkavp?file=3-DigitalClock%2Fchaiaurcode.js


// const clock=document.querySelector('#clock')
const clock = document.getElementById('clock')


// setInterval(function(){},Time Interval)
setInterval(function(){
  let date =new Date()
// console.log(date.toLocaleTimeString())
clock.innerHTML = date.toLocaleTimeString()
},1000) //1000-1sec, 2000-2sec
