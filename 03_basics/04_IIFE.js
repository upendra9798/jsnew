// Immediately Invoked Function Expression (IIFE)
//Global scope ke pollution ko htane ke liye hm IIFE ko use karte h

// function chai(){
//     console.log(`DB connected`);
    
// }()    --Undefined

(function chai(){  // named IIFE
    console.log(`DB connected`);
    
})()  ;

// ()() -Function definition then execution
//Writning 2 IIFE together
//For this code to run semi column is necessary in upper code
((name) => {    //Unnamed IIFE
    console.log(`DB connected ${name}`);
    
})('upendra')