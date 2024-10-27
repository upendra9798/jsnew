const name="Upendra"
const repoCount = 50

// console.log(name + repoCount + " Value"); //to add strings //Not to folloe this
//Follow lower method to add strings
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('fosjgd-kffkj') // Another way to declare a string

// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length);   //To know length of string
// console.log(gameName.toUpperCase()); //  To make all characters in Upper case

console.log(gameName.charAt(2));     //char at index 2
console.log(gameName.indexOf('j'))    // At which index char j is

const newString = gameName.substring(0,4)  //To break string in substring
// const newString = gameName.substring(-8,-4)  N0t work
console.log(newString);

const anotherString = gameName.slice(-7, -3)  //WIll count from back (same as substring func)
console.log(anotherString)

const newS = "   Upendra   "
console.log(newS);
console.log(newS.trim());  //To remove extra space
console.log(newS.trimStart());  //To remove extra space from starting only
console.log(newS.trimEnd());  //To remove extra space from end only

const url = "https://upendra.com/upendra%20kushwaha"

console.log(url.replace('%20', '_'))  //To replace anything in string

console.log(url.includes('sundar'));  //To find it it is include in string or not

console.log(gameName.split('-'));  //Splait string from given character

// console.log(gameName.bold());

// const str1 = 'Hello';
// const str2 = 'World';

// //concat - combine strings
// console.log(str1.concat(' ', str2));
// // Expected output: "Hello World"

// console.log(str2.concat(', ', str1));
// // Expected output: "World, Hello"

const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));
// Expected output: true

console.log(str1.endsWith('best', 17));  //17 -last index is 17
// Expected output: true

const str2 = 'Is this a question?';

console.log(str2.endsWith('question'));
// Expected output: false









