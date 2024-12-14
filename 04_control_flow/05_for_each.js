const coding = ["js", "ruby", "java", "python", "cpp"]

//For each - call back function- give the function and it will return it

// coding.forEach(function (val){   //function(){}  ()- what you have to call it(i, item,etc)
//     console.log(val);
    
// })

//Another way to print 
coding.forEach((item) => {   //Arrow function () => {}
    // console.log(item);
    
})

//Another way to print 
// function printMe(item){
//     console.log(item);
//     }

//   coding.forEach(printMe)

//     coding.forEach((item, index, arr) => {   //Arrow function () => {}
//     console.log(item,index, arr);
    // })


// [{}]  // how to acess objects in array

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    }
]

myCoding.forEach ((item) => {
    console.log(item.languageName);
})