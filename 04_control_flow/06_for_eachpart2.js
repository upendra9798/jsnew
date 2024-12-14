const coding = ["js", "ruby", "java"]

const values =coding.forEach((item) => {
    // console.log(item);
    return item
})
3

// console.log(values);  // for each loop  Not return anything

const myNums = [1,2,3,4,5,6,7,8,9]
 
const newNums = myNums.filter((num) => num>4)   //filter - condition needed like num>4
console.log(newNums);
