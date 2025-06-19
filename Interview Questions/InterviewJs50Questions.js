// 50 JS Practice questions


//todo 1. Create a function that returns the last element of an array.

// function getLastElement(arr){
//  return arr[arr.length - 1]
// }

// console.log(getLastElement([3,5,6,7]))


 //? using pop   // issue here is that pop method will modify the original array also
// function getLastelementPop(arr){
  
//     return arr.pop()
// }

// let arr2 = [3,5,6,7,9,10]
// console.log(getLastelementPop(arr2))
// console.log(arr2)  //  [ 3, 5, 6, 7, 9 ]   // pop method will modify the original array also



//===================================================================================================================================


// //todo Find the combination of two arrays.

// Note without any function create also u can do below methods

//? using spread operator
// function comninationOfArr(arr1, arr2, arr3){
//   return [...arr1, ... arr2, ...arr3]
// }

// let arr1 = [2,34,5,6];
// let arr2 = [3,5,6,7,8];
// let arr3 = ["a", "b"]
// console.log(comninationOfArr(arr1, arr2, arr3))


// //? using concat method of array

// function comninationOfArr(arr1, arr2){
//  return arr1.concat(arr2, arr3)
// }

// let arr1 = [2,34,5,6];
// let arr2 = [3,5,6,7,8];
// let arr3 = ["a", "b"];

// console.log(comninationOfArr(arr1,arr2,arr3))



//===================================================================================================================================

//todo 3. Generate a random integer between 0 to 18.

// const random = Math.random()

// console.log(random*100)

// const randomNumber = Math.floor(Math.random()*19)   // floor is for low side , ceil is for up side

// console.log(randomNumber)



//===================================================================================================================================

//todo 4. Create a function that takes an array containing both numbers and strings, and returns a new array containing only the string values.


// function filterStringArr(arr){
//   const filterString = arr.filter((elem)=> typeof elem === 'string')
//   return filterString;

//  OR
//  return arr.filter((elem)=> typeof elem === 'string')
// }


// const arr =[ 353,2,"apple ", 'tata', 56,"kaka"]

// console.log(filterStringArr(arr))  //[ 'apple ', 'tata', 'kaka' ]


//===================================================================================================================================

//todo 5. Find the maximum number in an array.

// let arr = [3,22,46,65,8,9];

// const result = Math.max(...arr)
// console.log(result)  //65

//OR

// function findMaxNumber(arr){
//    const result = arr.sort((a,b)=> b-a)
//    return result[0]

// }

// let arr2 = [3,22,46,65,8,9];
// console.log(findMaxNumber(arr2))



//todo 6. Write a function that returns the length of a given object (number of keys).

// const dummyObj = {
//     name : "Prasad",
//     age:27,
//     city:"Pusad"
// } 

// function getLengthOfKey(obj){
// return Object.keys(obj)
// }

// const lengthofKey = getLengthOfKey(dummyObj) //[ 'name', 'age', 'city' ]

// console.log(lengthofKey.length) //3





//todo 7. In an array of objects filter out those objects which have gender's value male.


// let  arr = [
//     {
//         name: 'Prasad',
//         gender: 'Male'
//     },
//     {
//         name:'Sanika',
//         gender:"female"
//     },
//     {
//         name: 'Prathamesh',
//         gender: 'Male'
//     }
// ]


// const resultArr = arr.filter((obj)=>{
//     return (obj.gender === 'Male')
// })


//console.log(resultArr)    //output   //[
                            // { name: 'Prasad', gender: 'Male' },
                            // { name: 'Prathamesh', gender: 'Male' }
                            // ]





//todo 8. Given an array of strings, return a new array where all strings are in uppercase.

// let arr = ["apple", "string3", "prathamesh", "Anup","Jaya"];

// let resultArr = arr.map((ele)=> {
//    return ele.toUpperCase()
// }
// )

// console.log(resultArr)  // [ 'APPLE', 'STRING3', 'PRATHAMESH', 'ANUP', 'JAYA' ]




//todo 9. Check if an object is empty (has no keys).

//Note : to find the length of object we need to first find the length of keys in object

// const obj = {
//     name: "Prasad",
//     gender: 'Male'
// }


// console.log(Object.keys(obj).length === 0 ? "Obj is empty" : "Obj is not empty")





//todo 10. Create an array of numbers and double each value using .map().

// const arr = [2,4,6,8,9];

// const resultArr = arr.map((ele)=>{
//    return  ele *2
// })

// console.log(resultArr)  // [ 4, 8, 12, 16, 18 ]





//todo 11. Convert an array of strings into a single comma-separated string.

// let arr = ["apple", "string3", "prathamesh", "Anup","Jaya"];


//  let resultArr = arr.join(" , ") // apple,string3,prathamesh,Anup,Jayas  //Note :: bye default join method is "," seprated

// let resultArr = arr.join("&")   //apple&string3&prathamesh&Anup&Jaya
// let resultArr = arr.join(" AND ")   //apple AND string3 AND prathamesh AND Anup AND Jaya

// console.log(resultArr)





//todo 12. Write a function to flatten a nested array (one level deep).(e.g., [1, [2, 3], 4] → [1, 2, 3, 4])


// const arr = [1,2,3, [2, 3], 4, 5];
// console.log(arr[3])

// arr.splice(3,1, ...arr[3])

// console.log(arr)   // [ 1, 2, 3, 2, 3, 4, 5 ]

//OR

// const arr2 = [1,2,3, [2, 3, [7,8,9]], 4, 5];
// const flattenResult = arr2.flat(2);

// console.log(flattenResult)   //[  1, 2, 3, 2, 3, 7, 8, 9, 4, 5]


//todo Flatten Array

//for one level nested array

// function flattendArray(arr){
//   const result =  arr.reduce((acc, currtVal)=>{
//    return acc.concat(currtVal)
//   }, [])

//   return result
// }

// let arr = [[1,2],[3,4]]
// console.log(flattendArray(arr))  // [ 1, 2, 3, 4 ]


// for nested level array flatten


// function flattendArray(arr){
//   const result = arr.reduce((acc, currVal)=>{

//     return acc.concat(Array.isArray(currVal) ? flattendArray(currVal) : currVal)
    
//   },[])

//   return result
// }

// let arr2 = [1,2,[4,6, [3,4]]]
// console.log(flattendArray(arr2))  // [ 1, 2, 4, 6, 3, 4 ]




//todo 13. Write a function that checks if all elements in an array are numbers.

// function checkIsNumbers(arr){
//     const isNumbers = arr.every((ele)=>{
//         return typeof ele === 'number'
//     })

//     return isNumbers //false 
// }

// console.log(checkIsNumbers([1,2,3,'a',5,6]))  //false





//todo 14. Build a simple isPrime() function to check if a number is prime.


// function isPrime(num){

//     if( num === 0 || num === 1){
//         return false
//     }

//     for(let i = 2; i < Math.sqrt(num); i++){
//         if(num % i === 0){
//             return false;
//         }
//     }

//     return true

// }

// console.log(isPrime(4))  //true
// console.log(isPrime(5))  //true
// console.log(isPrime(6))  //false




//todo 15. Create a function that removes duplicate values from an array.

// function removeDuplicates(arr){

//     const resultArr = new Set(arr)   // { 1, 2, 3, 4, 5, 6, 8 }
//     return [...resultArr]     // [ 1, 2, 3, 4, 5, 6, 8 ]

// }

// console.log(removeDuplicates([1,2,3,4,2,3,5,6,2,8,1,1]))

//OR

// function removeDuplicates(arr){

//     const resultantArr = arr.filter((element, index)=>{
//         return arr.indexOf(element) === index
//     })

//     return resultantArr

// }    


// console.log(removeDuplicates([1,2,3,4,2,3,5,6,2,8,1,1]))   // [ 1, 2, 3, 4, 5, 6, 8 ]







//todo 16. What’s the difference between parseInt and Number()?


// Examples of parseInt():

// JavaScript

// console.log(parseInt("100"));         // 100 (default radix 10)
// console.log(parseInt("100.75"));      // 100 (truncates decimals)
// console.log(parseInt("10px"));        // 10 (stops at 'p')
// console.log(parseInt("  20 apples")); // 20 (ignores leading whitespace, stops at ' ')
// console.log(parseInt("apple 30"));    // NaN (starts with non-numeric character)
// console.log(parseInt("0xF", 16));     // 15 (hexadecimal)
// console.log(parseInt("101", 2));      // 5 (binary)
// console.log(parseInt("010"));         // 10 (modern JS, default radix 10)
// console.log(parseInt(""));            // NaN
// console.log(parseInt(null));          // NaN (null becomes "null")
// console.log(parseInt(true));          // NaN (true becomes "true")



// Examples of Number():

// JavaScript

// console.log(Number("100"));         // 100
// console.log(Number("100.75"));      // 100.75 (retains decimals)
// console.log(Number("10px"));        // NaN (contains non-numeric characters)
// console.log(Number("  20  "));      // 20 (ignores leading/trailing whitespace)
// console.log(Number("apple 30"));    // NaN
// console.log(Number("0xF"));         // 15 (recognizes hex prefix)
// console.log(Number(""));            // 0
// console.log(Number(null));          // 0
// console.log(Number(true));          // 1
// console.log(Number(false));         // 0
// console.log(Number(undefined));     // NaN




//todo 17. Why does 0.1 + 0.2 !== 0.3 in JavaScript?
//todo 18. Explain floating-point precision issues in JavaScript.
//todo 19. How would you handle high-precision decimal math in JS?

// const sum = (0.1 + 0.2).toFixed(2)
// console.log(typeof sum )  //string
// console.log(sum === 0.30) //false


// const sum = Number((0.1 + 0.2).toFixed(2))
// console.log(typeof sum )  //number
// console.log(sum === 0.30) //true



//20. What is the difference between slice and splice?


const colors = ['red', 'green', 'blue', 'yellow', 'purple'];

// 1. Delete 2 elements starting from index 1 ('green', 'blue')
const removedColors1 = colors.splice(1, 2);
console.log(removedColors1); // ['green', 'blue'] (the deleted elements)
console.log(colors);         // ['red', 'yellow', 'purple'] (original array modified)

// 2. Insert elements without deleting any
colors.splice(1, 0, 'orange', 'pink'); // Insert 'orange', 'pink' at index 1
console.log(colors); // ['red', 'orange', 'pink', 'yellow', 'purple']

// 3. Replace elements (delete 1, insert 2)
colors.splice(2, 1, 'black', 'white'); // Delete 'pink', insert 'black', 'white' at index 2
console.log(colors); // ['red', 'orange', 'black', 'white', 'yellow', 'purple']

// 4. Delete all elements from a certain point
const newColors = ['one', 'two', 'three', 'four'];
const removedToEnd = newColors.splice(2); // Delete from index 2 to the end
console.log(removedToEnd); // ['three', 'four']
console.log(newColors);    // ['one', 'two']