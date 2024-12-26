// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);  //Value can't change


const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descriptor); 

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani");
    }
}

// console.log(chai);
// console.log( Object.getOwnPropertyDescriptor(chai)); //Undefined(chai is object not a property)
console.log( Object.getOwnPropertyDescriptor(chai, "name")); 
//Here writable is true, means it's properties are changeable

// Object.defineProperty(chai, 'name',{
//     writable: false,  // Prevents modifications to the property
//     enumerable: false // Excludes the property from being listed in loops like for...in or Object.entries
// })
// console.log( Object.getOwnPropertyDescriptor(chai, "name"));
//Here we changed writable to false, means now we can't change it's properties

// for (const [key, value] of chai) {
//      console.log(`${key} : ${value}`);
// }
/*chai is not iterable in this context. Objects in JavaScript cannot be directly iterated over using a for...of loop, 
which works with iterable objects like arrays, strings, or other objects implementing the Symbol.iterator method.

To iterate over the properties of an object like chai, you can use Object.entries(), Object.keys(), or Object.values().
*/

// for (const [key, value] of Object.entries(chai)) {
//     console.log(`${key} : ${value}`);
// }
//this will print orderChai fn as it is, to avoid it use if else

for (const [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
    console.log(`${key} : ${value}`);
    }
}

// console.log(Math.PI);
// Object.defineProperty(Math, 'PI', {
//     writable: true
// });
// Math.PI=5
// console.log(Math.PI);  //Value can't change

/* you cannot make Math.PI writable using Object.defineProperty() or any similar method.
 This is because the Math object and its properties, like Math.PI, are defined as non-configurable by JavaScript.
  Properties that are non-configurable cannot have their attributes (like writable, enumerable, or configurable) changed.
  */
