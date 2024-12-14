// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval} `);
//     return acc+currval
// },0)  //Initial value=0
// console.log(myTotal);

//current value = myNums
//First acc=Initial val, then it updates as acc+current value
// acc=0, 0+1=1, 1+2=3, 3+3=6

//Used in shopping cards bill

//OR (with arrow fn)
const myTotal = myNums.reduce( (acc,curr) => acc+curr,0)
console.log(myTotal);

const shoppingCart =[
    {
        itemName: "mobile",
        price: 30000
    },
    {
        itemName: "js cours",
        price: 2000
    },
    {
        itemName: "py course",
        price: 3200
    },
    {
        itemName: "mobile case",
        price: 1230
    }
]

const priceToPay = shoppingCart.reduce((acc,item) => acc+item.price,0) 

console.log(priceToPay);

