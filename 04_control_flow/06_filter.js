const coding = ["js", "ruby", "java"]

const values =coding.forEach((item) => {
    // console.log(item);
    return item
})


// console.log(values);  // for each loop  Not return anything

const myNums = [1,2,3,4,5,6,7,8,9]
 
// const newNums = myNums.filter((num) => num>4)   //filter - condition needed like num>4

// const newNums = myNums.filter((num) => {   // filter(() => {})
//     num>4    //Will give empty array  //As in scope we need return value or parantesis() - (refer 03_basics_03_arrow)
// })

// const newNums = myNums.filter((num) => {   // filter(() => {})
//        return num>4    
//     })
// console.log(newNums);

// From foreach

const newNums= []

myNums.forEach((num) => {       // We have to use if for condition
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   const userbook = books.filter((bk) => bk.genre= "History")  // '=' - IT will change all genre to history
// console.log(userbook);

let userbook = books.filter((bk) => bk.genre=== "History")  // '=' - IT will print all genre of history
// console.log(userbook);

 userbook = books.filter((bk) =>{return bk.publish >= 1999}) 
// console.log(userbook);

userbook = books.filter((bk) =>{
    return bk.publish >= 1999 && bk.genre === 'History'
}) 
console.log(userbook);



