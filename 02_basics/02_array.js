const marvel = ["thor", "spider", "ironman"]
const dc = ["superman", "batman", "flash"]

// marvel.push(dc)  //it brings whole dc array in marvel as a new element 

// console.log(marvel); 
// console.log(marvel[3]); 
// console.log(marvel[3][1]); 
// console.log(marvel[1]); 

//concat - for merging array
// const allHero = marvel.concat(dc)   //concat works on new array while push on existing array
// console.log(allHero);

//Preffered 
// Spread operator(...) (for joining arrays)
const all_new_hero =  [...marvel, ...dc]  //can merge multiple array

// console.log(all_new_hero);

const array = [1,2,[4,5,6],7,[8,9,[2,3]]]

//Flat- used for bringing all subarray concentrated in single new array
const another_arr = array.flat(Infinity)
// console.log(another_arr);

console.log(Array.isArray("Upendra"));  //To check wheter it is array or not
console.log(Array.from("Upendra"));   // to convert anything in array form
console.log(Array.from({name: "Upendra"})); // interesting case(interview)
 //we have to tell  what we have to change key or value

 let score1= 100
 let score2= 200
 let score3= 300

 console.log(Array.of(score1,score2,score3));  // To convert in array
 


