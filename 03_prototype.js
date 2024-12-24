// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength); //no acess

//Array
let myHeros = ["thor", "spiderman"] 

//Object
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
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
    console.log(`hitesh is present in all objects`);
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
    console.log('hitesh says hello');
}
myHeros.heyHitesh() //Array have power
// heroPower.heyHitesh() //Error- Opposite tracing not true, if we declared something in array then we can't
// acces it in object, fn or string


