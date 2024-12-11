// const userEmail ="nfkasgbg@gmail.com" //True
// const userEmail ="[]" //(Empty array) True 
// const userEmail ="{}" //(Empty object) True 
// const userEmail ="" // (Empty string) False  

// if (userEmail) {
//     console.log("Got user EmAIL");
    
// }
// else console.log("Not get email");


//falsy values - false, 0, -0, BigInt 0n, "", null, undefined. NaN(Not a number)

//truthy values-  "0", 'false', " ", [], {}, function(){} 
//anything in string is true


//To check empty array
// const userEmail =[]
// if (userEmail.length===0) {
//     console.log("Array is empty");
//     }


//To check empty object

const emptyObj ={}

if (Object.keys(emptyObj).length===0) {    //Object.keys(emptyObj)  //used to return an array of a given object's
    // console.log("Object is empty");
    }




//NULLISH coalescing Operator (??) : for only null, undefined

let val1;
// val1= 5??10  //assigns 1st value
// val1 = null ?? 10  
// val1=undefined ?? 10
val1 = null ?? 10 ?? 20 

// console.log(val1);



// Terniary Operator

// condition ? true :false 

const iceTeaPrice =100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");
;


