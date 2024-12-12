//for of

const arr = [1,2,3,4,5]
for (const num of arr) {
    // console.log(num);
}

const greetings= "hello world"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


//Maps

const map = new Map()   //Unique, in order
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key); //Array
//     }


for (const [key,value] of map) {
    // console.log(key, ':-', value); 
 }

 //Object 
 const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
 }

 for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    //Object is not iterable
 }
