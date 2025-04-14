//reverse a string

// Solution 1: Using split(), reverse(), and join() (Simple and Clean)

// function reverseString(str){
//   return  str.split('').reverse().join('');
// }

// const result = reverseString('hello');
// console.log(result)

// =================================================================================================================================

// Solution 2: Using a for Loop (Manual Method)

// function reverseString(str){
//    let reversed = "";
//     for(i = str.length -1; i>=0; i--){
//         reversed = reversed + str[i]
//     }

//     return reversed
// }

// console.log(reverseString("world"))

// =================================================================================================================================

//Solution 3: Using Recursion
// function reverString(str){
// if( str === ""){
//     return str
// }

// return reverString(str.substr(1)) + str[0]
// }

// console.log(reverString("recursion"))

// =================================================================================================================================

// Solution 4: Using the Spread Operator and reverse()

// const reverString = (str)=> [...str].reverse().join('');
// console.log(reverString)

// =================================================================================================================================

// Solution 5: Using reduce()

// const reverString = (str) => str.split('').reduce((acc, cha)=> cha + acc, '');

// console.log(reverString("reduce"))

// =================================================================================================================================

//Solution 6: Using Array.from()

// const reverseString = (str)=> Array.from(str).reverse().join("")

// console.log(reverseString("array"))

// =================================================================================================================================

// 2. Check if a String is a Palindrome in JavaScript
// A  palindrome is a word, phrase, number, or sequence that reads the same backward as forward, ignoring spaces, punctuation, and capitalization (e.g., "racecar", "madam").

// Solution 1: Using split(), reverse(), and join() (Simple Method)

// function isPalindrome(str) {
//   const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");  // Remove non-alphanumeric chars
//   const reversed = cleaned.split('').reverse().join('');
//   return cleaned === reversed;
// }

// console.log(isPalindrome("racecar"));     // true
// console.log(isPalindrome("Hello"));        // false
// console.log(isPalindrome("A man, a plan, a canal, Panama!"));  // true


// Solution 2: Using every() Method


// 3. Remove Duplicates from a String in JavaScript

// Solution 1: Using Set() and join() (ES6 Method)

// function removeDuplicates(str){
//   return [...new Set(str)].join("");
// }


// console.log(removeDuplicates("haha"))


// function removeDuplicates(str){
//  return str
//  .split('')
//  .filter((char, i)=> str.indexOf(char) === i)
//  .join("")
// }

// console.log(removeDuplicates("banana"))


//number of occurance 


// function countOccurences(str){
//   return str.split("").reduce((acc, char)=>{
//     acc[char] = (acc[char] || 0) + 1
//     return acc
//   }, {})
// }


// console.log(countOccurences('javascriptttt'))



// function countOcurence(str){
//  return str.split("").reduce((acc, char)=>{

//     acc[char] = (acc[char] || 0) + 1/

//     return acc
//  },{})
// }


// console.log(countOcurence("jjjjjavaScript"))



//6. Reverse Words in a Sentence in JavaScript (Simplified and Explained) 


// function reverseWord(sentence){
  
//  const words = sentence.split(' ')
//  const reversed = words.reverse()
//   return reversed.join(" ")
// }


// console.log(reverseWord("Hello Javascript"))
// console.log(reverseWord("JavaScript is fun"))




// function reverseWord(sentence){
//   const words = sentence.split(" ")

//   const reversed = words.reverse()

//   return reversed.join(" ")
// }

// console.log(reverseWord("Hello Javascript fun"))
// console.log(reverseWord("JavaScript is fun"))




// 7. Check if Two Strings are Anagrams in JavaScript (Simplified and Explained)


// function isAnagram(str1,str2){

//     if(str1.length !== str2.length) return false;


//     const sorted1= str1.split("").sort().join("");
//     const sorted2 = str2.split("").sort().join("");


//     return sorted1 === sorted2

// }


// console.log(isAnagram("listen", "silent"));    // true  
// console.log(isAnagram("hello", "world"));      // false  
// console.log(isAnagram("triangle", "integral")); // true  
// console.log(isAnagram("rat", "car"));          // false  




//find all substrings

// function findAllSubstrings(str){

//   let substrings =[];

//   for( let i=0; i < str.length; i++){
//     for(let j= i +1 ; j <= str.length; j++){
//         substrings.push(str.substring(i.j))
//     }
//   }

//   return substrings;
// }


// console.log(findAllSubstrings("abc"));     // ["a", "ab", "abc", "b", "bc", "c"]
// console.log(findAllSubstrings("dog"));     // ["d", "do", "dog", "o", "og", "g"]



// const p1 = Promise.resolve(1);
// const p2 = Promise.resolve(2);
// const p3 = Promise.resolve(3);


// Promise.all([p1,p2,p3])
// .then((values)=> console.log(values)) ///123
// .catch((err)=> console.error(err))


const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 1")
    },500)
})

const promise2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise  2")
    }, 1000)
   
})

const promise3  = new Promise((resolve, reject)=>{
    reject("Promise 3 rejected")
})


// const promises = [promise1,promise2,promise3]

// Promise.all(promises)
// .then((result)=> console.log(result))
// .catch((err)=> console.error(err) )



Promise.runAll = function(promises){

let result = new Array(promises.length);
let totalPromisesResolve = 0;

 return new Promise((resolve, reject)=>{
   promises.forEach((promise, index)=>{
    promise.then((res)=>{
        result[index] = res;
        totalPromisesResolve++

        if(totalPromisesResolve >= promises.length){
            resolve(result)
        }
    }).catch((err)=>reject(err))
   })
 })
  
}

Promise.runAll(promises)
.then((result)=> console.log(result))
.catch((err)=> console.error(err) )




///HOF


// const redius = [1,2,3,4,5];


// const area = redius.map((r)=> Math.PI * r*r)
// console.log(area)

// const circum = redius.map((r)=>  2* Math.PI *r)
// console.log(circum)


// const dia = redius.map((r)=>  2*r)
// console.log(dia)


// const calulate = (arr, logic)=>{
//  return arr.map(logic)
// }

// const area = (r)=> Math.PI * r*r
// const circum = (r)=>  2* Math.PI *r
// const dia = (r)=>  2*r


// console.log(calulate(redius, circum))
// console.log(calulate(redius, circum))
// console.log(calulate(redius, circum))




//closure

// function createBankAccount(initialBalance){

//     let balance = initialBalance;

//     return{
//         deposit: (amount)=>{
//          balance+= amount;

//          console.log(`"Deposit"${amount}, "Balnce" ${balance}`)
//         },

//         withdraw:(amount)=>{
//             if(amount>balance) {
//                 return console.log("Insufficent balance")
//             }
//          balance -= amount;
//          console.log(`"withdraw"${amount}, "Balnce" ${balance}`)
//         },

//         getBalance:()=>{
//             console.log(`balance ${balance}`)
//         }
//     }

// }





// const myAccount = createBankAccount(1000)

// myAccount.withdraw(400)
// myAccount.deposit(400)
// myAccount.getBalance()


// console.log(myAccount.balance)




//currring
// function discount(rate){
//     return function(price){
//         return price - price*rate
//     }
// }

// const tenpercentDisc = discount(0.1)
// const twentypercentDisc = discount(0.2)

// console.log(tenpercentDisc(200))
// console.log(twentypercentDisc(200))

