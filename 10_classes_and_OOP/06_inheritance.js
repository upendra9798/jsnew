class User {
    constructor(username){
        this.username = username
    }

    logMe(){//simply gives console.log+* 
        console.log(`USERNAME is ${this.username}`);
    }
}

/*The extends keyword is used to create a child class that inherits from a parent class.
It allows the child class to reuse the properties and methods defined in the parent class.
How it Works:
The child class automatically gets access to the methods and properties of the parent class.
The child class can override the parent class methods or define its own methods and properties.
*/
class Teacher extends User{
    constructor(username, email, password){
        super(username) // can't use this wthout super
//When defining a constructor in the child class, you must call super() before accessing this,
// as this is not initialized until the parent class constructor is executed.
        this.email = email
        this.password = password
    }
//super:
// Must be called in the child class constructor to initialize the parent class.
// Can be used to call methods from the parent class.

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123")

chai.logMe()
const masalaChai = new User("masalaChai")

masalaChai.logMe()

console.log(chai === User);  //false
console.log(chai === Teacher );
console.log(chai === masalaChai );
console.log(chai instanceof User); //True
/*instanceof is used to check if an object is created by (or inherits from) a specific constructor or class in the prototype chain.
It returns true if the object is an instance of the class or its subclasses, otherwise false.
*/