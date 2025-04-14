// const numbers = [123,45,5,32,32,22,22,45,67];

// const newNumbers = [...new Set(numbers)];

// console.log({newNumbers});
// console.log({numbers});

//===============================

// const employees = {
//     id:1,
//     name:"Rama",
//     age:23,
//     salary :"25k"
// }


// delete employees.age;

// console.log({employees});
// console.log(employees.length); // undefined  // object does not have the length proerty as array has

// console.log(Object.keys(employees).length)  //lenth // its basically give you an array of the keys of employyes obj


// alternative way

// const {age, ...restelements}= employees;

// console.log(restelements);



//===============================



// const numbers = [123,45,5,32,32,22,22,45,67];

// const employees = {
//     id:1,
//     name:"Rama",
//     age:23,
//     salary :"25k"
// }

// const myVar = 18;

// console.log(Array.isArray(numbers));
// console.log(Array.isArray(employees));
// console.log(Array.isArray(myVar));


//===============================   


const employees = {
    id:1,
    name:"Rama",
    age:23,
    salary :"25k"
}


// const result = Object.entries(employees);
// console.log(result)


// Object.entries(employees).forEach(([key,value])=>{
//     console.log(`${key}::: ${value}`);
    
// })