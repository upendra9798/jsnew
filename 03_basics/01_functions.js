function sayMyName(){
    console.log("H");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
    }

    // sayMyName()  //() - Parenthesis is function execution 

    // function addTwoNumbers(number1, number2){  // number1, number2 - Parameters
    //     console.log(number1 + number2);
    //         }
    // addTwoNumbers(3,4) //3,4 - Arguments  /Ans-7

//     const result = addTwoNumbers(3,4)  //For this to print we need return type
// console.log(result);  // Undefined

function addTwoNumbers(number1, number2){  // number1, number2 - Parameters
//    let result = number1+number2
//    return result
    //OR
    return number1+number2
   console.log("Upendra");//After return nothing works
   
        }

        const result = addTwoNumbers(3,4)
        console.log(result);  // Ans-7

function loginUserMessage(username){  //Ypu can give any default value like username=ram if no username given then ram will print
    // if (username === undefined) {
    //     console.log("Please enter a username");
    //     return 
    // }
    if (!username) { //Another way of upper if
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// loginUserMessage()  //Not work
// console.log(loginUserMessage("Upendra"));
console.log(loginUserMessage());  //If no username provided then undefined not null
