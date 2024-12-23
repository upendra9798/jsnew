const user = {  //Object
    username:  "upendra",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");  
        // console.log(`Username: ${username}`); //ERROR
 // In this code, the username property is part of the object, //(child fn can only access things from parent fn)
 //  not a parent function variable. To access object properties in a method, you need to use this.

        // console.log(`Username: ${this.username}`);
        // console.log(this);
             
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //Empty


//Constructor- Eg: new
function User(username, loginCount, isLoggedIn){
    this.username = username;   //this.username-variable & username- declares in scope(User)
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this  //no need
}

// const userOne =  User("hitesh", 12, true)
// const userTwo =  User("ChaiAurCode", 11, false)
// console.log(userOne);   //In userOne also data of userTwo prints
// console.log(userTwo);

// So we have to use 'new' keyword
// new- 1.Creates new object-> 2.constructor function called(because of new)

/*
1.Creates a New Object:
A new, empty object is created.
This object is initially not assigned to any variable.

2.Sets the Prototype:
The __proto__ property of the new object is set to the prototype of the constructor function. In this case, userOne.__proto__ === User.prototype.

3.Calls the Constructor Function:
The User function is executed, and the this keyword inside the function refers to the newly created object.
Properties and methods are added to the new object via this.

4.Returns the Object:
The new object is returned unless the constructor explicitly returns a different object. If the constructor returns a non-object, the newly created object is returned instead.
*/
const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne.constructor);
console.log(userOne);

