// Dates are in millisecind in JS

let myDate=new Date()
// console.log(myDate);  //Not readable
// console.log(myDate.toString());    // current date,day ,also gives current timing and GMT
// console.log(myDate.toDateString());  // gives date and day
// console.log(myDate.toLocaleString());  // date and time
// console.log(typeof myDate);  //Interview question

// let myCreatedDate = new Date(2023, 0, 23)   // Month starts from 0 index
// let myCreatedDate = new Date(2023, 0, 23,5,3)  //5,3- time
// let myCreatedDate = new Date("2023-01-14")  //YYYY-MM-DD
let myCreatedDate = new Date("01-14-2023")     //DD-MM-YYYY
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp =Date.now()

// console.log(myTimeStamp);        //Used for comparing, creating polls
// console.log(myCreatedDate.getTime());  //To convert it in ms
// console.log(Date.now()/1000);       //   to convert in seconds(comes in decimal)
// console.log(Math.floor(Date.now()/1000));  //Round off decimal

let newDate =new Date()
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time is`

newDate.toLocaleString('default', {
    weekday: "long",   // Ctrl + space -for suggestions
    // timeZone: ''
})






