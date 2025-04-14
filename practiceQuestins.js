// const user = {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com",
//     address: {
//       city: "New York",
//       zip: "10001"
//     },
//     phoneNumbers: ["123-456-7890", "987-654-3210"],
//     company: {
//       name: "Tech Corp",
//       role: "Developer",
//       package:" 55kpm"
//     }
//   };

//   Task:
//   1. Destructuring API Response
//   Destructure name, email, and address.city.
//   Extract the first phone number into primaryPhone.
//   Extract the company object but exclude the role field.

// const {name, email, address:{city},phoneNumbers:[primarynum],company:{role, ...companyDeatils}}= user;

// console.log(name,email,city, primarynum,companyDeatils);

// 2. Adding and Updating an Array of Objects
// Task
// You have a list of users and need to:

// Add a new user { id: 3, name: "Charlie", email: "charlie@example.com" }.
// Update Bob’s email to "bob.new@example.com".
// Remove the user with id: 1.

// const users = [
//     { id: 1, name: "Alice", email: "alice@example.com" },
//     { id: 2, name: "Bob", email: "bob@example.com" }
//   ];

//   //Add a new user
//   const newUsers = [...users,{ id: 3, name: "Charlie", email: "charlie@example.com" }]
//   console.log(newUsers);
//   console.log((users));

//   // Update Bob’s email to "bob.new@example.com".

//   const updateEmailaddress = newUsers.map( user => user.name.toLocaleLowerCase() === "bob" ? {...user, email:"bob.new@example.com"} : user);

//   console.log("e", updateEmailaddress);

//   //// Remove user with id: 1

//   const finalUserData = updateEmailaddress.filter( user => user.id !== 1)

//   console.log(finalUserData);

//3. REST Operator to Exclude Fields

//4. Merging Objects

// const defaultSettings = {
//     theme: "light",
//     notifications: true,
//     language: "en"
//   };

//   const userPreferences = {
//     theme: "dark",
//     language: "es"
//   };

//   const finalPreferance = {...defaultSettings, ...userPreferences, FontSize:"12px"}
//   console.log(finalPreferance);

// 5. Extracting and Transforming API Data

// const products = [
//     { id: 101, name: "Laptop", price: 1200, category: "Electronics" },
//     { id: 102, name: "Headphones", price: 100, category: "Accessories" },
//     { id: 103, name: "Shoes", price: 60, category: "Fashion" }
//   ];

//   const [firstProduct, ...remainingProducts] = products;
// console.log(firstProduct);

//   const {category, ...otherPartofFirstProduct} =firstProduct;
//   console.log(category);
//   console.log(otherPartofFirstProduct);

//   const newProducts = [ { id: 104, name: "mobile", price: 8200, category: "mobile" }, ...products,];
//   console.log("r", newProducts);

//6. Nested Destructuring

// const order = {
//     orderId: 12345,
//     customer: {
//       name: "John Doe",
//       email: "john@example.com",
//       address: {
//         line1: "123 Main St",
//         city: "Los Angeles",
//         state: "CA",
//         zip: "90001"
//       }
//     },
//     items: [
//       { product: "Laptop", quantity: 1, price: 1200 },
//       { product: "Mouse", quantity: 2, price: 25 }
//     ]
//   };

// // console.log(order);

//   const {orderId,customer:{email,name,...otherCustomerDetails},...other } = order;
//   console.log(orderId);
//   console.log(email);
//   console.log(name);
//   console.log(otherCustomerDetails);
//   console.log(other);

// 7. Filtering and Calculating with REST

// const employees = [
//     { id: 1, name: "Alice", department: "HR", salary: 50000 },
//     { id: 2, name: "Bob", department: "IT", salary: 60000 },
//     { id: 3, name: "Charlie", department: "Finance", salary: 55000 }
//   ];

// //   console.log(employees);

//   const filteredEmployees = employees.filter(employee=> employee.id !== 2).reduce((acc, emp)=> acc + emp.salary,0);
//   console.log(filteredEmployees);

// //   const finalResult = filteredEmployees.reduce((acc, emp)=> acc + emp.salary,0);
// //   console.log(finalResult);

//

// const orders = [
//     {
//       orderId: 1,
//       customer: { name: "John Doe", email: "john@example.com" },
//       totalPrice: 300,
//       items: [
//         { product: "Laptop", price: 250, discount: 20 },
//         { product: "Mouse", price: 50, discount: 5 }
//       ]
//     },
//     {
//       orderId: 2,
//       customer: { name: "Jane Smith", email: "jane@example.com" },
//       totalPrice: 200,
//       items: [
//         { product: "Monitor", price: 180, discount: 10 },
//         { product: "Cable", price: 20, discount: 0 }
//       ]
//     }
//   ];

//   console.log(orders);

//   const [firstOrder, ...remaningOrders] = orders;
//   console.log(firstOrder);
//   console.log(remaningOrders);

//   const {customer:{name},totalPrice, items} = firstOrder;
//   console.log(name,totalPrice);
//   console.log("3", items);

//   const itemWithoutDiscount = items.map(({discount, ...rest})=> rest)

//   console.log(itemWithoutDiscount);

// 2. Combining and Flattening Data

// const categories = [
//     {
//       category: "Electronics",
//       products: [
//         { name: "Laptop", price: 1000 },
//         { name: "Headphones", price: 200 }
//       ]
//     },
//     {
//       category: "Clothing",
//       products: [
//         { name: "T-shirt", price: 20 },
//         { name: "Jeans", price: 50 }
//       ]
//     }
//   ];

//   console.log("categories", categories);

//   const arr = [1, 2, 3];
// const result = arr.map(x => [x, x * 2]).flat()
// console.log("result", result); // [1, 2, 2, 4, 3, 6]

//3. Nested REST Operator with Array Filtering

// const employees = [
//     {
//       id: 1,
//       name: "Alice",
//       department: "Engineering",
//       salary: 90000,
//       socialSecurityNumber: "123-45-6789",
//       skills: ["JavaScript", "React"]
//     },
//     {
//       id: 2,
//       name: "Bob",
//       department: "HR",
//       salary: 60000,
//       socialSecurityNumber: "987-65-4321",
//       skills: ["Recruiting"]
//     },
//     {
//       id: 3,
//       name: "Charlie",
//       department: "Engineering",
//       salary: 95000,
//       socialSecurityNumber: "567-89-0123",
//       skills: ["Python", "Django"]
//     }
//   ];

//   console.log(employees);

//   const sensativeDeatilsRemove = employees.map(({salary,socialSecurityNumber, ...rests})=> rests);
//   console.log(sensativeDeatilsRemove);

//   const employeeOfEnginnering = sensativeDeatilsRemove.filter(({department})=> department === "Engineering")

//   console.log(employeeOfEnginnering);

//   const [{department, skills, ...otherdetails}] = employeeOfEnginnering;

//   console.log(department,skills,otherdetails);

//4. Multi-level Nested Transformation

// const school = {
//     students: [
//       { name: "Alice", age: 16, grades: [90, 85, 88] },
//       { name: "Bob", age: 17, grades: [70, 80, 78] },
//       { name: "Charlie", age: 16, grades: [95, 92, 89] }
//     ]
//   };

//   console.log(school);

//   const [first, ...reststudent]= school.students;
//   console.log(first);
//   console.log(reststudent);

//   const {grades, ...studentDetils} = first;

//   const avg = reststudent.flatMap(({grades})=> grades).reduce((acc,grade,_,arr) => acc + grade / arr.length, 0);
//   console.log(avg);

//

// const company = {
//     departments: [
//       { id: 1, name: "HR", employees: ["Alice", "Bob"] },
//       { id: 2, name: "Finance", employees: ["Charlie", "David"] }
//     ]
//   };

//   const updatedDepartments = company.departments.map(department =>
//     department.id === 2
//       ? { ...department, name: "Operations" }
//       : department.id === 1
//       ? { ...department, employees: [...department.employees, "Emily"] }
//       : department
//   );

//   console.log(updatedDepartments);
/*
  [
    { id: 1, name: "HR", employees: ["Alice", "Bob", "Emily"] },
    { id: 2, name: "Operations", employees: ["Charlie", "David"] }
  ]
  */

//   const userProfile = {
//     name: "Alice",
//     age: 25,
//     address: {
//       city: "New York",
//       zip: "10001"
//     }
//   };

//   const updatedProfile = {
//     ...userProfile,
//     age: 30,
//     isVerified: true,
//     address:{
//         ...userProfile.address, city:"Pune",age:44,add:"455", street:"line no.1"
//     }
//     // address: { ...userProfile.address } // Deep copy for nested objects
//   };

// console.log("updatedProfile", updatedProfile);

// console.log("userProfile", userProfile);

//============
// const users = [
//     { id: 1, name: "Alice", email: "alice@example.com" },
//     { id: 2, name: "Bob", email: "bob@example.com", role: "admin" }
//   ];

//   const normalizedUser = users.map(({ role = "user", ...rest }) => ({role, ...rest}) );

//   console.log(normalizedUser);

//5. Combining APIs with Defaults

// const users = [
//     { id: 1, name: "Alice" },
//     { id: 2, name: "Bob" }
//   ];

//   const details = [
//     { id: 1, age: 25 },
//     { id: 2, age: 30 }
//   ];

// const userUpdate = users.map((user)=>({
//     ...user,
//     ...details.find( detail => detail.id === user.id)
// }))

// console.log(userUpdate);

//6. Flatten and Transform Nested Data

// const orders = [
//     {
//       id: 1,
//       items: [
//         { name: "Laptop", price: 1000, quantity: 1 },
//         { name: "Mouse", price: 50, quantity: 2 }
//       ]
//     },
//     {
//       id: 2,
//       items: [
//         { name: "Monitor", price: 200, quantity: 1 },
//         { name: "Keyboard", price: 100, quantity: 1 }
//       ]
//     }
//   ];

//   const flatorders = orders.flatMap(({items})=> items.map(({name, price,quantity})=> ({
//     name, totalPrice: price * quantity
//   })))

//   console.log(flatorders);

//function calling another function
//  function greeting(name){
//     console.log(`Hello ${name}`);
//  }

//  function welcome(){
//     console.log(`Welcome to my website`);
//  }

//  const greetingAndwelcome = function(a){
//     greeting(a)
//     welcome()
//  }

//  greetingAndwelcome("Rama,  Hanumanji")

// const icecream = (name) =>{
//     // console.log(`Hello ${name}`)
//     return `hello ${name}`
// };

//  const ice = icecream("uiui");
//  console.log(ice);

//String and Array methods

// 1: Filter and Transform Data from a String

// const names = "john,doe,jane,john,mary,jane";

// const nameArray = names.split(",")
// console.log(nameArray);

// const removeDuplicate = [... new Set(nameArray)]
// console.log(removeDuplicate);

// const formattedNames = removeDuplicate.map( name => name.charAt(0).toLocaleUpperCase() + name.substring(1));  //name.slice(1) can also use
// console.log(formattedNames);

//2:Count Words in a String

// const sentence = "apple banana apple orange apple banana";

// Step 1: Split the sentence into words
// const words = sentence.split(" ");
// console.log(words);

// // Step 2: Create an empty object to store word counts
// const wordCounts = {};

// // Step 3: Loop through each word and count them
// for (const word of words) {
//   console.log("aa",  wordCounts[word]);

//   if (wordCounts[word]) {
//     wordCounts[word] += 1; // If the word is already in the object, add 1 to its count
//   } else {
//     wordCounts[word] = 1; // If the word is not in the object, set its count to 1
//   }
// }

// console.log(wordCounts);

//
// const words = ["madam", "racecar", "hello", "level", "world"];

// const palindromeWord = words.filter((word)=> word === word.split("").reverse().join(""));

// console.log(palindromeWord);

// function checkPalindrome(str){
// const result = str.split("").reverse().join("") === str;
// return result
// }

// const test = checkPalindrome("madam")
// console.log(test);

// function checkpalindrome(str){
// const result = str.split("").reverse().join("") === str
// return result
// }

// const test = checkpalindrome("madamN")
// console.log(test);

// const text = "The quick brown fox jumps over the lazy dog";

// const charechters = text.toLocaleLowerCase().split("");
// console.log(charechters);

// const vowels = charechters.filter( char => "aeiou".includes(char));

// const result = vowels.length;

// console.log(result);

//: Find Numbers Greater Than a Threshold
// Problem:
// Given an array of numbers, return a new array containing only the numbers greater than a given threshold.

// const numbers = [10, 25, 3, 18, 30, 8];
// const threshold = 15;

// const  filteredNum = numbers.filter( num => num > threshold);

// console.log(filteredNum);
// const pad = "5".padEnd(4,6)
// console.log(pad);
// const pad2 = "4".padStart(3,0)
// console.log(typeof(pad2));

// const str= "mama ";

// const repeatString = str.repeat(4)
// const splitted = repeatString.split(' ').map( name => name.charAt(0).toUpperCase() + name.substring(1,4)).join("")
// console.log(splitted);

// const arr = [2, 3];
//  const result = arr.unshift(1);
// console.log(result, arr);

// try {

//   alert('Start of try runs');  // (1) <--

//   // ...no errors here

//   alert(`End of try runs ${name}`);   // (2) <--

// } catch (err) {

//   alert('Catch is ignored, because there are no errors'); // (3)

// }

// try {

//   alert('Start of try runs');  // (1) <--

//   lalala; // error, variable is not defined!

//   alert('End of try (never reached)');  // (2)

// } catch (err) {

//   alert(`Error has occurred!`); // (3) <--

// }

// try {
//   lalala; // error, variable is not defined!
// } catch (err) {
//   console.log(err.name); // ReferenceError
//   console.log(err.message); // lalala is not defined
//   console.log(err.stack); // ReferenceError: lalala is not defined at (...call stack)

//   // Can also show an error as a whole
//   // The error is converted to string as "name: message"
//   console.log(err); // ReferenceError: lalala is not defined
// }

// let json = '{"name":"John", "age": 30}'; // data from the server

// let user = JSON.parse(json); // convert the text representation to JS object

// // now user is an object with properties from the string
// console.log(user);

// console.log( user.name ); // John
// console.log( user.age );  // 30

// let final = JSON.stringify(user);
// console.log(final)

// let json = "{ bad json }";

// try {

//   let user = JSON.parse(json); // <-- when an error occurs...
//   console.log( user.name ); // doesn't work

// } catch (err) {
//   // ...the execution jumps here
//   console.log( "Our apologies, the data has errors, we'll try to request it one more time." );
//   console.log( err.name );
//   console.log( err.message );
// }

// let promise = new Promise((res, rej) => {
//   let a = 2;

//   if (a === 2) {
//     res("Success");
//   } else {
//     res("Failure");
//   }
// });

// promise
//   .then((msg) => {
//     console.log("This is inside the then block " + msg);
//   })
//   .catch((msg) => {
//     console.log(`This is inside the catch block ${msg}`);
//   });

//async /await

// async function fetchUserData() {
//   try {
//     console.log("user data is fetching...");

//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);

//     const usersData = await response.json()
//     console.log(usersData);

//     console.log("user data is fetching...2");
//   } catch (error) {

//   }
// }

// fetchUserData()

// function delay(ms){
//  return new Promise((resolve)=> setTimeout(resolve, ms))
// }

// async function sequencialTask(params) {
//   console.log("Task 1 started");

//   await delay(1000);
//   console.log("Task 1 completed");

//   console.log("Task 2 started");

//   await delay(1000);
// console.log("Task 2 completed");
// }
// console.log("er");

// sequencialTask()

// async function fetchWithError() {
//   try {
//     const response = await fetch("https://invalid-url.com"); // Invalid URL
//     const data = await response.json();
//     console.log("Data:", data);
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }

// fetchWithError();

// const urls = [
//   "https://jsonplaceholder.typicode.com/users/1",
//   "https://jsonplaceholder.typicode.com/posts/1",
//   "https://jsonplaceholder.typicode.com/todos/1",
// ];

// async function fetchinsideLoop() {
//   for(let url of urls){
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log("result", result);
//   }
// }
// fetchinsideLoop()

// const arr = [1, 3, 4, 5];

// function sumCalulate(array){
//   let sum = 0;
  
//   for( let i=0; i < array.length; i++){
//     sum = sum + array[i]
//   }

//   return sum;
// }

// const finalSum = sumCalulate(arr);
// console.log(finalSum);


// const arr = [1, 3, 4, 5];

// const reduceArray = arr.reduce( (acc, num) => acc + num , 0);

// console.log(reduceArray);



// 

// let arr = [1,2,3,4,5,5,6];
// let reverArr =  arr.slice().reverse()
// console.log(reverArr);


let arr = [1,2,3,4,5,5,6,4];

// console.log(arr.length);

let reversedArr = [];

for(let i = arr.length - 1; i >=0 ; i--){
  reversedArr.push(arr[i])
}

console.log(reversedArr);

// let reversedArr2 = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   reversedArr2.push(arr[i]);
// }
// console.log(reversedArr2);