// Primitive (call by value)

// 7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score =100   //JS is dynamically defined - No need to define datatype like int, float
const scoreValue=100.33

const isLoggedIn = false
const outsideTemp = null // Empty
let userEmail;  //undefined

const id= Symbol('123')
const anotherID = Symbol('123')

console.log(id === anotherID);

const bigNUmber = 928530582305803n


//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["rds", "dfs", "dfs"] //Array
// Object
let myObj = {
    name:  "hitesh", 
    age: 22,
}

//Function

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherID)
console.log(typeof myFunction) //object function
console.log(typeof heros)
console.log(typeof bigNUmber)
console.log(typeof outsideTemp )
console.log(typeof userEmail )
console.log(typeof myObj )

/*    Data types
Null - Object
Undefined- undefined
function- object function
object- object
boolean- boolean
Number- number
string - string
*/
