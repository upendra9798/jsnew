// Primitive (call by value)

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score =100   //JS is dynamically defined - No need to define datatype like int, float
const scoreValue=100.33

const isLoggedIn = false
const outsideTemp = null // Empty
let userEmail;  //undefined

const id= Symbol('123')
const anotherID = Symbol('123')

// console.log(id === anotherID);

const bigNUmber = 928530582305803n


//Call by Reference (Non primitive)

//Array, Objects, Functions

const heros = ["rds", "dfs", "dfs"] //Array
// Object
let myObj = {
    name:  "hitesh", 
    age: 22,
}

//Function

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof anotherID)
// console.log(typeof myFunction) //object function
// console.log(typeof heros)
// console.log(typeof bigNUmber)
// console.log(typeof outsideTemp )
// console.log(typeof userEmail )
// console.log(typeof myObj )

/*    Data types
Null - Object
Undefined- undefined
function- object function
object- object
boolean- boolean
Number- number
string - string
*/



// **********************************************

// Stack(Primitive),  Heap(Non-Primitive)

let myName = "Upendra"
let anothername = myName
anothername="Raja"

console.log(myName)   // Not changed as string is call by value(change in copied fn)
console.log(anothername)

let user1 = {
    name: "Rohan",
    Age: 324
}

let user2= user1

user2.name = "Sapna"
console.log(user1.name)   //Get changed as function is a call by Reference
console.log(user2.name)