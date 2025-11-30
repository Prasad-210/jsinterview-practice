//map methods

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const double = numbers.map( item => item * 2)

// console.log({double})
// console.log({numbers})



//Event buubling and event capturing
// console.log("Details in HTML file")


//Higher order function


// const redius = [1,2,3,4,5];

// //using MAP method
// const circumfernce = redius.map((red)=> 2* Math.PI * red)
// console.log(circumfernce);

// const areaOfCircle = redius.map((red)=> Math.PI * red * red);
// console.log(areaOfCircle);

// const diameterOfCircle = redius.map((r)=> r * r)

// console.log(diameterOfCircle)



//using For loop

// const areas = [];

// for(let i = 0; i< redius.length; i ++){
//   const area = Math.PI * redius[i] * redius[i];

//   areas.push(area)
// }

// const redius = [1,2,3,4,5];
// const areas = []

// for(let i=0; i < redius.length ; i++){
//    const area = Math.PI * redius[i] * redius[i]

//    areas.push(area)
// }
// console.log(areas)

// console.log(areas)


// const circumfernces = [];


// for( let i = 0; i< redius.length; i++){

//     const circum = 2* Math.PI * redius[i]

//     circumfernces.push(circum)
// }

// console.log(circumfernces)

// const diameter = [];

// for(let i=0 ; i < redius.length; i++){
//     const dia = redius[i] * redius[i];
//     diameter.push(dia)
// }

// console.log(diameter)


//  Now by using HOF with map

// const calculate = (arr, logic)=>{
//   return arr.map(logic)
// }


// const getArea = (r)=> Math.PI * r * r;

// const getCircum =  (r) => 2 * Math.PI * r;

// const getDiameter = (r) => r*r;

//  const getVolume = (r) => (4/3) * Math.PI * r * r* r 
// const getVolume = (r) => +( (4 / 3) * Math.PI * Math.pow(r, 3) ).toFixed(2);

// console.log("Areas", calculate(redius, getArea))
// console.log("circum", calculate(redius, getCircum))
// console.log("diam", calculate(redius, getDiameter))
// console.log("volume", calculate(redius,getVolume))



//regular function

// function greet(){
//     console.log("Hello JavaScript !!")
// }

// greet();


//todo  IIFE

// (function(){
//     console.log("Hello ")
// })();


// (function(){
//     console.log("IIFE")
// })()


//todo closure

// function outerfunction(){
//     const test = " I am outer fn vaiable";

//     function InnerFunction(){
//      console.log(test)
//     }

//     return InnerFunction;
// }


// const cloureFun = outerfunction();

// cloureFun()


//practicle example 


// function createBankAccount(initialBalance){
//  let balance = initialBalance;

//  return {
//     deposite: (amount)=>{
//    balance = balance + amount
//    console.log(`Deposite  ${amount} , Balance ${balance}`)
//     },

//     withdraw:(amount)=>{
//         balance = balance-amount;
//         console.log(`Withdraw amount  ${amount} , Balance ${balance}`)
//     },

//     getBalnce: ()=>{
//         console.log(`balance ${balance}`)
//     }
//  }
// }


// const myAccount = createBankAccount(1000)

// myAccount.withdraw(400);
// myAccount.deposite(200);
// myAccount.getBalnce()


// console.log(myAccount.balance)




//todo setTimeout

// const timer = setTimeout(()=>{
//     console.log("timer should be run after 2 seconds")
// }, 2000)


// clearInterval(timer)


// setIntervals

// setInterval(()=>{
//     console.log("Timer will run after every 2 second")
// },2000)






// Promoise

// const data = { name: "john", age:39}

// function fetchData(){
//  return new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(data)
//     },2000)
//  })
// }



// fetchData().then(
//     data =>{
//         console.log("Data: ", data)
//     }
// ).catch((err)=> console.log(err  ))


/// Add and learn about promise methods



//Async Await


// async function fetchData(){
//     try{
//      const  response = await fetch("https://jsonplaceholder.typicode.com/todos/1" );
//      const data = await response.json()
//      console.log("Data: ", data)
//     }catch(err){
//     console.log("Unable to fetch data")
//     }
// }


// fetchData()



//todo call apply bind

// function cook(ing1,ing2,ing3){
//     console.log(`The person ${this.name} order a dish with ingredient ${ing1} , ${ing2} and ${ing3}`)
// }


// const person= {
//     name:"Adam",
//     age:22
// }



// cook.call(person,"rice","dal","curd")
// cook.apply(person, ["rice","dal","curd"])

// const cookForAdam = cook.bind(person, "rice", "chaval", "dal");

// console.log(typeof cookForAdam)
//cookForAdam()





//reduce method


// const numbers = [1,3,4,5,6,4];

// const total = numbers.reduce((acc, currentVal)=>{
//     return acc +currentVal;
// },0)

// console.log(total)



// currying 

// Currying transforms a function with multiple arguments into 
// a sequence of nested functions, each taking a single argument. 
// It's useful for reusability and partial application.


// Currying is a technique where a function doesn’t take all arguments at once.
// Instead, it takes one argument and returns another function, which takes the next argument, and so on.




// function double(a){
//    return function(b){
//      return a*b
//    }
// }


// const double2 = double(2)

// console.log(double2(3))
// console.log(double2(4))
// console.log(double2(5))


// function sendEmail(from){
//     return function(to){
//       return function(subject){
//          return function(message){
//             return `From: ${from}
//                    To: ${to}
//                    Subject: ${subject}  
//                    Message: ${message}
//             `
//          }
//       }
//     }
// }





// const fromSupport = sendEmail("support@example.com");
// const toUser = fromSupport("user@example.com");
// const withSubject = toUser("Welcome!");
// const email = withSubject("Thanks for signing up.");

// console.log(email);







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
// console.log(seq.next().value)
// console.log(seq.next().value)
// console.log(seq.next().value)




// WeakMap and WeakSet

// WeakMap and WeakSet often come up in JavaScript interviews—especially when discussing memory management, garbage collection, or advanced data structures
// A WeakMap is similar to a regular Map, but:

// ✅ Keys must be objects only (not strings, numbers, etc.)	
// 🗑️ Keys are held weakly – if the object is no longer used elsewhere, it’s garbage collected	
// 🔐 It’s not iterable – you can’t loop through it	
// ✅ Use case: Private data storage for objects (like caching, metadata, etc.)


//Practical Example: Storing metadata for DOM elements

// const metadata = new WeakMap();

// let button = document.createElement("button");
// metadata.set(button, { clicked: false });

// // Access metadata
// console.log(metadata.get(button)); // { clicked: false }

// // Now remove the button reference
// button = null;

// ✅ The metadata entry will be garbage collected automatically

// Use WeakMap when you want to associate data only while an object exists – helps with memory efficiency.

// ============

// A WeakSet is like a Set, but:

// ✅ Only stores objects	
// 🗑️ Objects are held weakly – if there are no other references, they're garbage collected	
// 🔄 Not iterable – no for...of, no size, no keys	
// ✅ Use case: Track objects existence (e.g. login state, seen elements, etc.)


// Practical Example: Track logged-in users (temporarily)

// const loggedInusers = new WeakSet();

// let user1 = {name:"Alice"};
// let user2 = {name:"Tony"};


// loggedInusers.add(user1);
// loggedInusers.add(user2);


// console.log(loggedInusers.has(user1))

// // Now user1 logs out or object is removed
// user1 = null;


// ✅ user1 is garbage collected and automatically removed from WeakSet




//todo Shallow copy and Deep copy




// todo Callback function

// Example 1 General Function

// function greet(name, cb){
//     cb();
//     console.log(`Hello ${name}`);
//     cb();
// }

//callback
// function welcomefun(){
//     console.log("Welcome to JavaScript bhai !!");  
// }


// greet("Suraj", welcomefun)

//*? output
//  Welcome to JavaScript bhai !!
//  Hello Name
//  Welcome to JavaScript bhai !!



//Example 2 - callback with async function

// function printInfo(name, callbackfn){

//     //async fn 
//     setTimeout(function(){
//         console.log(`The professional details of : ${name}`);
//         callbackfn("Hello dada............")
//     },6000)

    // callbackfn("Hello dada............") // if the direct call callback function without async then it will print first then setTimeout console.log

// }


// //callback

// function displayMsg(msg){
//     console.log(msg)
// }

// printInfo("Naveen", displayMsg)



//Example 3

// function fetchUserData(userId, callback){
//     setTimeout(()=>{
         
//         const users = {
//             1: {name:"Jane"},
//             2:{name:"dost"}
//         }

//         const user = users[userId]

//         if(user){
//            callback( null, user) 
//         }else{
//             callback("The user not found ", null)
//         }
//     },1000)
// }


// const handeleUserData =(err, user)=>{
//   if(err){
//     console.error("Error: ", err)
//   }else{
//     console.log("user: ", user)
//   }
// }


// fetchUserData(2, handeleUserData)



//todo Flatten Array

// input = [[1,2],[3,4]]
// output =[1,2,3,4]


// function flattendArray(arr){
//     const result = arr.reduce((acc, curValue)=>{
//         return acc.concat(curValue)
//     }, [])
//     return result
// }

//  let arr = [[1,2],[3,4]]
// console.log(flattendArray(arr))



// function flattendArray(arr){
//     const result = arr.reduce((acc, curValue)=>{
//         return acc.concat(Array.isArray(curValue) ? flattendArray(curValue) : curValue)
//     }, [])
//     return result
// }

    //  let arr2 = [1,2,[4,6, [3,4]]]
    // console.log(flattendArray(arr2))



//todo Throttling and Debouncing


//todo map function 

// const words = ['react', 'script', 'interview', 'style', 'javascript']


// const answer = words.filter((word)=>{
//    return  word.length > 6
// })

// console.log({answer})
// console.log({words})


//*? using without filter

// let answers = [];

// for(let i=0; i < words.length; i++){
    // if(words[i].length > 6){
    //     answers.push(words[i])
    // }
//     console.log(words[i])
// }

// // console.log(answers )



// polyfill filter


// Array.prototype.myFilter = function(callback, thisArg){
    
//     if( typeof callback !== 'function'){
//         throw new TypeError ("Undefined is not a function")
//     }
    
//     const arr = this;
//     const newArr = [];
    
//   for(let i=0; i< arr.length; i++){
//       if(i in arr){
//           const result = callback.call(thisArg, arr[i], i , arr);
          
//           if(result){
//               newArr.push(arr[i])
//           }
//       }
//   }
  
//   return newArr
// }


// let arr = [1, 2, 3, 4, , 5];

// const newResult = arr.myFilter((item, i, self)=>{
//     return item > 2
// })

// console.log(newResult)

