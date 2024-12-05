//Singleton -object constructor(literals- not singleton)

//object literals  (Simple syntax: { key: value }.
// No restrictions on creating multiple instances.)

const mySym = Symbol("key1")


const JsUser= {
    name : "Upendra",
    "full name": "Upendra Kushwaha",
    // mySym: "mykey1",
    [mySym]: "mykey1",  //Correct way for symbol
    age: 20,
    location: "Uttar pradesh",
    isloggedIn: false,
    lastLoginDays: ["Monday", "saturday"]
    } // name, age, etc are strings

    console.log(JsUser.name);
    console.log(JsUser["name"]); //another way to access objects
    // console.log(JsUser.full name);   // can't acces from this syntax
    // console.log(JsUser."full name");   // can't acces from this syntax
    console.log(JsUser["full name"]);
    // console.log(JsUser.mySym);
    // console.log(typeof JsUser.mySym);   It will remain as string not symbol
    console.log(JsUser[mySym]);
    console.log(typeof JsUser[mySym]);
//     typeof inspects the value ("mykey1") and returns its type, which is "string".
// It does not inspect the type of the key (mySym).


//To change
JsUser.name= "Rahul"
// Object.freeze(JsUser)  // No amendements will be made
JsUser.name = "Raj"
console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello Js user");
    }
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
    }

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());


    



    