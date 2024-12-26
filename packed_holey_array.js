//continious, Holey

//SMI(small integer)
// Packed element(CONTINUOUS)
//Double (float, string, function)

const arrTwo = [1,2,3,4,5] 
//PACKED_SMI_ELEMENTS

arrTwo.push(3.0) 
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('3')
// PACKED_ELEMENTS

arrTwo[10]=11
//HOLEY_ELEMENTS (gap in array)

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]); //Undefined
console.log(arrTwo[19]); //Undefined (out of bound)

// TO CHECK THE ELEMENTS IN ARRAY
//bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

const arrThree = [1,2,3,4,5]
console.log(arrThree[2]);

// OPTIMIZATION ORDER

// SMI > DOUBLE > PACKED > H_SMI > H_DOUBLE > H_PACKED
// 

//If arr is down graded then it never go at hiher optimization
// For eg if arr becomes double then it can't become SMI, even if u delete double element
// also if u delete any element and arr becomes holey it will never become packed 

const arrFour = new Array(3)
// just 3 holes-HOLEY_SMI_ELEMENTS
arrFour[0]='1' //HOLEY_PACKED_ELEMENTS
arrFour[1]='2' //HOLEY_PACKED_ELEMENTS
arrFour[2]='3' //HOLEY_PACKED_ELEMENTS
// If we make our arr holey before even if we fill the space it will remain HOLEY

// In place of it we can make empty array

const arrFive = []
arrFive.push('1') //PACKED_ELEMENTS
arrFive.push('2') //PACKED_ELEMENTS
arrFive.push('3') //PACKED_ELEMENTS
// arrFive.push(NaN) //Double
// arrFive.push(Infinity) //Double

//Try Using for, for-Of, forEach