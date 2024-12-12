const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
//    console.log(key);
//    console.log(myObject[key]);
// console.log(`${key} shortchut is for ${myObject[key]}`);  
}

const programming =["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key);  // in array numbers(0,1,...) are default keys
    // console.log(programming[key]);
}

const map = new Map()   //Unique, in order
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

for(const key in map){
    // console.log(key);// No iteration
    
}