const myArr = [0, 1 ,2 , 3, true, "upendra"]   // anything mix can be written

const myarr2 = new Array(1,2,3,4);  //another way to declare array

// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)     //adds in first(0th index) place of arr
// myArr.shift()          //removes first element

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  //It converts arr in string and binds it

console.log(myArr);
console.log(newArr);  
console.log(typeof newArr); 


//slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,5)   // index 5 excludes

console.log(myn1);
console.log("B", myArr); //slice does not change the original array

const myn2 = myArr.splice(1,3)  //index 3 included
console.log("c", myArr);    //splice change the original array
console.log(myn2);




