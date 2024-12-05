// Singleton object  (Only one instance exists throughout the application's lifecycle.)

// const tinderUser = new Object()    // Singleton  // Empty
const tinderUser={}                 //Empty

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); 

const regularUser = {
    email: "kafuioa@gmail.com",
    fullname: {
        userfullname: {
            firstname: "upendra",
            lastname: "kushwaha"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname.firstname);

// To combine two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = {obj1, obj2}  //Not correct
//console.log(obj3); //   { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3= Object.assign(obj1,obj2)  
       //OR
// const obj3= Object.assign({},obj1,obj2) 
// console.log(obj3);  //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// OR (best)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  //To see whether the property exist or not


// DE STRUCTURE AND JSON API

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "upendra"
}
// course.courseInstructor

const {courseInstructor: Instruc} = course  //Destructuring

// console.log(courseInstructor);
// console.log(Instruc);


// JASON API  (All leys and values are in strings)
// {
//     "name": "Upendra",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// Array as JASON API 
[
    {},
    {},
    {}
]
