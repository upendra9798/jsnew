/* {} - With objects then curly braces is known as object declaration
  {} - with others like function,if, if else then known as scope
*/
if(true){//scope start (local scope or block scope)
    let a=10
const b=20
var c=30
} //scope ends 

// console.log(a); // Not defined (only defined under scope)
// console.log(b); // Not defined 
// console.log(c);     //In var it will print (that's why we not use var)

let a =300  //Global scope
if(true){
    let a=10
const b=20
// console.log("Inner:", a);

} 

// console.log(a); 




//Nested scope (chain of scopes)

function one(){ //parent
    const username ="hitesh"

    function two(){ //child
        const website = "youtube"
        // console.log(username);
     }
     //Function Two can use One inside it(Eg-username) but One can't use two inside it(Eg- website)
//child can use parent but not vice versa
            // console.log(website);  //Not work(Error)(local scope)
            two()
}
one()
//First function one executes then two


if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website="youtube"
        // console.log(username+website);
    }
    // console.log(website); //Error
}
// console.log(username); //Error

// ***************** interesting ***************

// Two ways of function

addone(5) // No error
function addone(num) {
    return num+1
}

//  addTwo(5)  // Error
const addTwo =function(num){
    return num+2
}
