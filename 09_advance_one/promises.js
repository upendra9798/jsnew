  const promiseOne =new Promise(function(resolve, reject){//new Promise() creates a new Promise object.

    // A Promise in JavaScript is an object representing the eventual completion (or failure) of an asynchronous operation
    //  and its resulting value. Promises help manage asynchronous tasks in a more readable and maintainable way compared to traditional callback-based approaches.

    // Do an asynchronous task (Eg-Using timeout fn. In asynchronous operations, tasks can start and complete independently of each other.
    //  A task doesn't block the execution of other tasks, whereas In synchronous operations,
    //  tasks are executed sequentially, one after another. A task must complete before the next task begins.)

    //DB calls, cryptography, network

    //A Promise has three states:
//1. Pending: The initial state; the promise is neither resolved nor rejected.
//2. Fulfilled: The operation completed successfully, and resolve was called.
//3. Rejected: The operation failed, and reject was called.

    setTimeout(function(){
        console.log('Async task is complete');
        resolve()    // If it is not there then .then function not executes(no chaining)   
    }, 1000)
  })

  //.then()-Chaining, it is a method used with Promises. It is called when a Promise is either resolved (fulfilled successfully)
  //  or when the next step in a Promise chain needs to be executed.
  promiseOne.then(function(){
    console.log('promise consumed');
    
  })

  // Without storing in any variable
  new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log(("Async task 2"));
    resolve()
   },1000) 
  }).then(function(){
    console.log("Async 2 resolved");
    
  })

  const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Chai", email: "snfo@sfnn.com"})
    },1000)
  })

  //the user object ({ username: "Chai", email: "snfo@sfnn.com" }) is passed to the .then() callback.
  promiseThree.then(function(user){
    console.log(user);
    
  })

  const promiseFour = new Promise(function(resolve, reject){
     setTimeout(function(){
       let error = true;
        if(!error){
        resolve({username:"Upendra", pass:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
     } ,1000)
  })

//   const username=promiseFour.then(function(user){
//     console.log(user);
//     return user.username;
//   })
//   console.log(username);  //Shows ERROR(if error is true)
  
  promiseFour
  .then((user) => {
    console.log(user);
    return user.username
  })
  .then((my_username)=>{
    console.log(my_username);
  })
  .catch(function(error){
    console.log(error);
  })
  .finally(()=> console.log("The Promise is either resolved or rejected "))


const promisFive= new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true;
         if(!error){
         resolve({username:"javascript", pass:"123"})
         }
         else{
             reject('ERROR: JS went wrong')
         }
      } ,1000)
   })

// async await function- like then function
// But can't directly handles errors(have to use try catch)

// 1. async Function:-
// Declares a function as asynchronous.
// Always returns a Promise.
// Allows you to use await inside the function.

// 2. await:-
// Pauses the execution of an async function until the Promise is resolved or rejected.
// Makes asynchronous code look like synchronous code.

async function consumePomiseFive(){
    try{
        const response = await promisFive // Wait until the Promise resolves
        console.log(response);        // Logs: Upendra
    }catch(error){
        console.log(error);        // Handles any rejection
    }
}

consumePomiseFive()

// async function getAllUsers(){ // async Keyword:
//     // Declares the getAllUsers function as asynchronous.
//      try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //it also takes time so have to use await(compulsory)
// // The response.json() method parses the raw HTTP response body into a JSON object.
// // This is another asynchronous operation that also returns a Promise, so await is used again
//         console.log(data);
        
//      } catch(error){
//         console.log("E:", error);
        
//      }
// }

// getAllUsers()

// Same code with then

//FETCH

fetch('https://api.github.com/users/hiteshchoudhar') 
//Executes before then upper code as it have priority then others (also if it have same timeout-Eg-1sec)
// The fetch() function is a modern JavaScript API used to make HTTP requests, such as retrieving data from or sending data to a server.
//It is built into most modern browsers and provides a simpler and more powerful way to handle network requests compared to the older XMLHttpRequest (XHR).
//Replaces older XMLHttpRequest (XHR).

//HTTP Errors:
// HTTP errors (e.g., 404 Not Found, 500 Internal Server Error) do not reject the Promise.
//How HTTP Responses Are Handled
// Success: If the network request completes (even with HTTP errors), the Promise resolves, and a Response object is returned.
// Failure: If the network fails (e.g., no internet, DNS issues, timeout), the Promise rejects with an error like TypeError: Failed to fetch.

.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);    
})
.catch((error)=> console.log(error)
)