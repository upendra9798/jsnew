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
console.log("Inner:", a);

} 

console.log(a); 

