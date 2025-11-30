//

// const animal = {
//   eats: true,
//   walk() {
//     console.log('Animal walks');
//   }
// };

// const dog = Object.create(animal)
// dog.bark = true
// console.log(dog)

// const userProfile = {
//   name: 'Bob',
//   email: 'bob@example.com'
// };
// const result1 = userProfile.hasOwnProperty('name');
// const result2 = userProfile.hasOwnProperty('ages')

// console.log("output:- ",result1, result2);

// for( const key in userProfile){
//     if( userProfile.hasOwnProperty(key)){
//         console.log(`Key ${key} :: ${userProfile[key]}`)
//     }else{
//         console.log(`Key:- ${key}`)
//     }
// }

// function debounce(func, delay){
//     let timerId ;

//     return function(...args){
//         const context = this;
//         clearTimeout(timerId)
//         timerId = setTimeout(()=>{
//             func.apply(context, args)
//         }, delay)
//     }
// }

// function search(query){
//   console.log(`The user search : ${query}`)
// }

// const debounceSearch = debounce(search, 500)

// debounceSearch("a")
// debounceSearch("ap")
// debounceSearch("appl")
// debounceSearch("apple i phone")

//debouncing

// function debounce(func, delay){
//     let timeoutId;

//     return function(...args){

//         const context = this;

//         clearTimeout(timeoutId)

//         timeoutId = setTimeout(()=>{
//             func.apply(context, args)
//         }, delay)
//     }

// }

// function search(query){
//     console.log(`Searching for query : ${query}`)
// }

// const debounceSearch = debounce(search, 500)

// debounceSearch("ap")
// debounceSearch("app")
// debounceSearch("apple")
// debounceSearch("apple i phone")

// =====================

// function throttle(func, limit){
//    let inThrottle;

//    return function(...args){
//       const context = this;

//       if(!inThrottle){
//          func.apply(context,args)

//          inThrottle = true;

//          setTimeout(()=>{
//             inThrottle = false
//          }, limit)
//       }
//    }
// }

// function hanldeButtonClick(){
//    console.log("Button Clicked")
// }

// const throttleFunClickHandler = throttle(hanldeButtonClick, 2000)

// throttleFunClickHandler()
// throttleFunClickHandler()
// throttleFunClickHandler()
// throttleFunClickHandler()
// throttleFunClickHandler()
// throttleFunClickHandler()

// setTimeout(()=>{
//  throttleFunClickHandler()
// }, 2400)
// setTimeout(()=>{
//  throttleFunClickHandler()
// }, 2500)

//throttling

// function throttle(func, limit){

//     let inThrottle ;

//     return function(...args){

//         const context = this;

//         if(!inThrottle){
//             func.apply(context,args);
//             inThrottle = true;

//             setTimeout(()=>{
//                 inThrottle = false;
//             }, limit)
//         }
//     }
// }

// function handleButtonClick(){
//   console.log(`Button Clicked`);
// }

// const throttleFunClickHandler = throttle(handleButtonClick, 2000)

// throttleFunClickHandler()
// throttleFunClickHandler()
// throttleFunClickHandler()
// throttleFunClickHandler()

// setTimeout(()=>{
// throttleFunClickHandler()
// },2400)

// setTimeout(()=>{
// throttleFunClickHandler()
// },2500)

// const redius = [2,4,6,8];

// const circumfernce  = []

// for( let i=0; i < redius.length ; i++){
//     const circum = 2* Math.PI * redius[i]

//     circumfernce.push(circum)
// }

// console.log(circumfernce)

// const areafinal  = []

// for( let i=0; i < redius.length ; i++){
//     const area = Math.PI * redius[i] * redius[i]

//     areafinal.push(area)
// }

// console.log(areafinal)
// const diameter  = []

// for( let i=0; i < redius.length ; i++){
//     const dia = redius[i] * redius[i]

//     diameter.push(dia)
// }

// console.log(diameter)

//HOF
// const redius = [2,4,6,8];
// function calculate(arr, logic){
//   return arr.map(logic)
// }

// const getArea = (r) =>  Math.PI * r * r
// const getCircum = (r) =>  2* Math.PI * r
// const getDiam = (r) =>  r * r

// console.log("area", calculate(redius, getArea) )
// console.log("circum", calculate(redius, getCircum) )
// console.log("diameter", calculate(redius,getDiam) )

//IIFE

// (function(){
// console.log("Hii")
// })()

// //closure

// function outerFunc(){

//     const outer = " I am outer variable";

//     function InnerFun(){

//         console.log( ` Inner ${outer}`)
//     }

//   InnerFun()
// }

// console.log(outerFunc())

// const createBankAccount = (initialBalance) => {
//    let balance = initialBalance;

//    return {
//     deposite : (amount)=>{
//         balance += amount;

//         console.log(`The deposite amount is ${amount}   total balance is ${balance} `)
//     },

//     withdraw :  (amount)=>{
//         balance -= amount;

//         console.log(`The withdraw amount is ${amount}   total balnmce is ${balance} `)
//     },

//     getBalance : ()=>{
//         console.log(`balance: ${balance}`)
//     }

//    }
// }

// const myAccount = createBankAccount(1000)
// myAccount.withdraw(200)
// console.log(myAccount.balance)

//currying

// function sendEmail(from){
//     return function (to){
//             return function(subject){
//                 return function (message){
//                     return `Here From : ${from}
//                     To : ${to}
//                      Sub: ${subject}
//                      message : ${message}
//                     `
//                 }
//             }
//     }
// }

// const fromSender = sendEmail("support@gmail.com")
// const toReciecer = fromSender("to@user.com")
// const subjectAdd = toReciecer("Welcom to on board")
// const email = subjectAdd("Thanks  for sing up")

// console.log(email)

//Generator function

// function* infiniteSequence(){
//     let num = 1;

//     while(true){
//         yield num;
//         num++
//     }
// }

// const seq = infiniteSequence();

// console.log(seq.next().value)
// console.log(seq.next().value)

// const dummyObj = {
//     name : "Prasad",
//     age:27,
//     city:"Pusad"
// }

// const output = Object.keys(dummyObj).length
// console.log(output)

// function countOccurences(str){
//   return str.split("").reduce((acc, char)=>{
//     acc[char] = (acc[char] || 0) + 1
//     return acc
//   }, {})
// }

// console.log(countOccurences('javascriptt tt  yyy'))

//==========================

// function removeDuplicates(str){
//    return str.split("").filter((char, index) =>{
//     return str.indexOf(char) === index
//    }).join('')
// }

// console.log(removeDuplicates("banana"))

//==========================

//todo Objects and Prototypes

// Object literal

// const Person = {
//     name : "Dinesh",
//     age:23,
//     house:'Yes',
//     city:"DattaPur",
//     greet: function(){
//         return `Hello Mahadev, located at ${this.city}`
//     },
//     get: ()=>{
//      return `Hello ${this.name}`
//     }
// }

// console.log(Person.age)        //23
// console.log(Person.greet)     //[Function: greet]
// console.log(Person.greet())  //Hello Mahadev, located at DattaPur
// console.log(Person.get())    // Hello undefined  ===> As this is Arrow function it does not have its This binding.

//========================================================================================================

//todo How do you create objects in JavaScript?

//? Object Literal
// const obj = {
//     name: "Prasad",
//     age:12
// }

// --------------------------------------------------------------------

//? Constructor functions:
// function Person(name){
//     this.name = name ;
// }

// const person = Person.name("John")

// console.log("Person", person)      // Person { name: 'John' }
// console.log("Person", person.name) // John

// --------------------------------------------------------------------

//? Object.create():

// const dummyObj = {
// greet : function(){
//     return "Hello"
// }
// }

// const obj = Object.create(dummyObj)
// console.log(obj.greet())   // Hello

// const dummyObj2 = {
//     greet: function(name){
//         return `Hello ${name}`
//     }
// }
// const obj2 = Object.create(dummyObj2)
// console.log(obj2.greet("Mithun"))

// --------------------------------------------------------------------

//?  ES6 Classes:

// class Person{
//     constructor(name){
//         this.name = name
//     }
// }
// const person = new Person("John")
// console.log(person.name) //john

// --------------------------------------------------------------------

//? factory function

// function createPerson(name){
//     return {name}
// }

// const person = createPerson("Sasta")
// console.log(person.name)  //Sasta

//=========================================================================================

//todo What is the prototype chain?

// const animal = {
//     makeSound: function(){
//         return "SOME SOUND"
//     }
// }
// const dog = Object.create(animal);
// dog.makeSound();  // SOME SOUND   //(inherited from animal)

// to check prototype chain
// console.log(Object.getPrototypeOf(dog) === animal);   //true

// --------------------------------------------------------------------

//todo How does inheritance work in JavaScript?

//todo polyfill Map

// Step 1: Add map to Array prototype if not exists
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    // Step 2: 'this' refers to the array calling myMap
    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const result = []; // Step 3: new array to return
    const array = this; // Step 4: save reference to current array

    // Step 5: loop through array
    for (let i = 0; i < array.length; i++) {
      // Step 6: check if element actually exists (for sparse arrays)
      if (i in array) {
        // Step 7: call the callback with proper thisArg
        result.push(callback.call(thisArg, array[i], i, array));
      }
    }

    // Step 8: return new array
    return result;
  };
}

const nums = [1, 2, 3];
const doubled = nums.myMap((num, i, arr) => num * 2);

console.log(doubled); // [2, 4, 6]
console.log(nums); // [1, 2, 3] (original unchanged)
