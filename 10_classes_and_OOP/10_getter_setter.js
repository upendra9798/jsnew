class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        // return this.email.toUpperCase()  // this will create STACK OVERFLOW
        return this._email.toUpperCase()
    }
    set email(value){
        // return this.email=value;
        return this._email=value;
    }
    get password(){
        // return this.password.toUpperCase()
        return `${this._password}upendra`
        //Setters allow you to validate or transform data when assigning a value.
    }
    set password(value){
        // return this.password = value
        return this._password = value
    }    
}

const hitesh = new User("jan@fjwf", "abc")
console.log(hitesh.email);
console.log(hitesh.password);

/*
Diagram of Original Code’s Behavior
When this.email is accessed:
Calls get email().
Inside get email(), you access this.email → Calls the getter again → Infinite recursion.

When this.email = value is assigned:
Calls set email(value).
Inside set email(value), you assign this.email = value → Calls the setter again → Infinite recursion.

Why Infinite Recursion Happens: Using this.email inside get email() or set email() repeatedly calls the getter or setter because the property email itself is tied to these methods.

Solution: Use a separate property like _email to store the value.

By using _email as the private-like property:

The getter (get email()) no longer calls itself because it accesses this._email, not this.email.
The setter (set email(value)) no longer calls itself because it updates this._email, not this.email.
*/