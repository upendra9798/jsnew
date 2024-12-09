//THIS FUNCTION

//This not works in function but works in object
//Object
const user ={
    username: "upendra",
    price: 999,
//${} - Directly include variables into a string.
    welcomMessage: function () {
        console.log(`${this.username}, welcome to website`);
        //By this we means to give current context
        console.log(this);
        
    }
}
// user.welcomMessage()
// user.username = 'SAM'
// user.welcomMessage()
// console.log(this);  //{} -Will give empty as no context in global(Interview)


// function chai() {
//         let username = "hitesh"
//         console.log(this.username);  //Undefined      //This not works in function
//         }
//         chai()

//Function                 //This not works in function but works in object
//             }

// const chai = function () {
//             let username = "hitesh"
//             console.log(this.username);  //Undefined      
//             chai()




//ARROW FUNCTION (() => {})
const chai =  () => {
            let username = "hitesh"
            console.log(this.username);  //Undefined      //This not works in function
            }
            // chai()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }                                            //Curly braces -return
// console.log(addTwo(3,4));

//Another way(Implicit return) - No need to write return
// const addTwo = (num1,num2) =>  num1+num2
//Or
// const addTwo = (num1,num2) =>  (num1+num2)          //Paranthesis - no return needed

// const addTwo = (num1,num2) =>  {username: "hitesh"}  - Undefined
const addTwo = (num1,num2) =>  ({username: "hitesh"})  // paranthesis needed

console.log(addTwo(3,4));

