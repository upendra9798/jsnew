class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
    //A static method cannot be called on an instance of the class; 
    // instead, it must be called on the class itself.
    // No Access to this (Instance Context):
}

const hitesh = new User("hitesh")
// console.log(hitesh.createId()) // ERROR - static(can't be inherited)

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
// console.log(iphone.createId()); // Error(static)