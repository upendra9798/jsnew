// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); //no acess
//We want a function so that we can find length direct of all string(only letters) with this code
// console.log(myName.trim().length);  //we cand find from this but we have to write this 
//separately for all strings
//For this we use prototype

//Array
let myHeros = ["thor", "spiderman"] 

//Object
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}

/*
// All things in javascript is an Object for eg- Array, Function, string

     function -> Object ->null
     string   -> Object ->null
     array   -> Object ->null

//Object is basically a top hierarchy from which all things pass,
SO basically if we want to access new thing in all places so we can delare it in object,
then acess everyehere (it can be done by prototype fn)
  */

Object.prototype.hitesh = function(){
    // console.log(`hitesh is present in all objects`);
}
/*Adding hitesh to Object.prototype:
Object.prototype is the top of the prototype chain in JavaScript.
By adding a method hitesh to Object.prototype, every object in JavaScript (including arrays, functions, custom objects, etc.) will have access to this method.
javascript
Copy code
*/

// heroPower.hitesh()
// myHeros.hitesh()

Array.prototype.heyHitesh = function(){  //Doing same with array
    // console.log('hitesh says hello');
}
myHeros.heyHitesh() //Array have power
// heroPower.heyHitesh() //Error- Opposite tracing not true, if we declared something in array then we can't
// acces it in object, fn or string


// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User   //Old method of inheritance
//By assigning Teacher.__proto__ = User, you are saying that the Teacher constructor should inherit from the User constructor.
// This means that any properties or methods on User will now be available to Teacher (and its instances) through the prototype chain.

// Mordern inheritance syntax

Object.setPrototypeOf(TeachingSupport, Teacher)
//TeachingSupport inherits all the property of Teacher

let anotherUsername = "ChaiAurCode       "
String.prototype.trueLength = function(){
    console.log(`${this}`);  //gives name of the reference( current context or jisne call kiya h  )
    console.log(`True length is: ${this.trim().length}`);   
}

anotherUsername.trueLength()
"upendra".trueLength()
"iceTea  ".trueLength()