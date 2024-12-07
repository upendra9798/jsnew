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
// console.log(loginUserMessage());  //If no username provided then undefined not null



// When we dont know the number of values to be entered For ex- Going to shopping the no of items buy

//... can be used as spread or rest operator
// function calculateCartPrice(...num1) {    //Here ... is rest operator 
//     return num1
// }

// console.log(calculateCartPrice(200,300,5000,9000));  //With rest operator we can give
// more than 1 values here(with only 1 parameter) in form of array

function calculateCartPrice(val1, val2, ...num1) {    
    return num1
}

// console.log(calculateCartPrice(200,300,5000,9000));  // 200-val1, 300-val2, rest in num1 as array


//Object in function

const user = {
    username: "upendra",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    }
    // handleObject(user)
    //OR direct
    handleObject({
        username: "sam",
        price: 399
    })

    // Array in function

const myNewArray = [200,300,40,111]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,40,111]));


