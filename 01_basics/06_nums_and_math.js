//**************** NUMBERS *******************************
const score = 400
// console.log(score)

const number = new Number(100)  //IT will be only number , it can't be string or other things
// console.log(number)

// console.log(number.toString().length);
// console.log(number.toFixed(2));   //Give num up to 2 decimal

// const otherNum = 324.832
const otherNum = 3234.832

// console.log(otherNum.toPrecision(3));    //Will give 3 numbers

const hundreds = 1000000
// console.log(hundreds.toLocaleString());  //it convert num in standard form -> 10,00,000


//**************** MATHS *******************************

// console.log(Math);
// console.log(Math.abs(-4));  //Gives absolute value (positive)
// console.log(Math.round(4.6));  //Round off decimal
// console.log(Math.ceil(4.2));  //Gives ceiling value of decimal(Upper value of decimal)
// console.log(Math.floor(4.9)); //Gives lower value of decimal
// console.log(Math.sqrt(169));
// console.log(Math.pow(2,3));  //Power
// console.log(Math.min(2,3, 5,7,8)); 
// console.log(Math.max(2,3, 4,23,5,22,4)); 

console.log(Math.random());   //It always give values btw 0 and 1- 0 (inclusive) and 1 (exclusive).
console.log((Math.random()*10)+1);   //It always give values btw 1 and 11
console.log(Math.floor(Math.random()*10)+1);   //Round off to smallest value of decimal

const min=10
const max=20

console.log(Math.random() * (max-min+1));  //1 to 11
console.log(Math.floor(Math.random() * (max-min+1))+min);  // >10





