// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// const result = arr.flat().filter(function(val){
// return val % 2 === 0
// });

// console.log(result)


// const arr = [1, 2, 3, 3, 4, 5, 1];

// const removeDuplicate = [...new Set(arr)]
// console.log(removeDuplicate);


// const arr = [[1, 2], [3, 4], [5, 6]];


// const result = arr.flat().filter((num)=> num % 2 !== 0).reduce((acc, num)=> acc + num, 0)
// console.log(result);


// const arr2 = [1, 2, 3, 3, 4, 5, 1];

// function result(arr){
//     return  arr.map(function(num){
//         return num % 2 !== 0 ? `${num} id Odd` : `${num} id even`
//     })
// }

// const final = result(arr2);
// console.log(final);


// function test(num){
//  return num % 2 === 0 ? "even" : "odd"
// }

// const result = test(7);
// console.log(result);


// //4. Array.prototype.every()
// const arr = [2,4,6, 7];
// const result = arr.every((val)=> val % 2 === 0);
// console.log(result);


// 5. Array.prototype.fill()

// const arr = [2,3,54,5,5];

// const filledValue = arr.fill(0);

// console.log(filledValue);
// console.log(arr);
// [ 0, 0, 0, 0, 0 ]
// [ 0, 0, 0, 0, 0 ]

//filter

// const arr = [1,2,3,4,5,6,7];

// const result = arr.filter(function(num){
//     return num % 2 === 0 
// })

// console.log(result);


//7. Array.prototype.find()

// const arr = [1,2,3,4];

// const result = arr.find((num)=>num > 2 )

// console.log(result); //3


// Array.prototype.findIndex()

// const arr = [1,2,3,4]

// const result = arr.findIndex((num)=> num > 2)

// console.log(result); //2



//flat

// const arr = [2, [3,4, [5,6]]];

// const result = arr.flat(2);

// console.log(result);


// //flatMap

// const arr = [1, 2, 3];

// const flattenMap = arr.flatMap((c)=> [c, c*2]);
// // const flattenMap = arr.map((c)=> [c, c*2]).flat();

// console.log(flattenMap); //[ 1, 2, 2, 4, 3, 6 ]


//Array.prototype.forEach()

// const arr = [1,2,3,4,4];
// const result = arr.forEach((num)=> console.log(num*2));


//. Array.prototype.includes()

// const arr = [1, 2, 3];
// const result = arr.includes(5);
// console.log(result);

//Join

// const arr = ['a', 'b', 'c'];
// // const arr = [1, 2, 3];

// const result = arr.join("/")
// console.log(result); // 1/2/3


//reduce 

// const arr = [1, 2, 3];
// const sum = arr.reduce((acc, val) => acc + val, 0); // 6
// console.log(sum);


//reduceRight 


//reverse
// const arr = [1, 2, 3];

// const result = arr.reverse();
// console.log(result);

//slice

// const arr = [1,3,4,5,7];

// const slicedArr = arr.slice(1,3)
// console.log(slicedArr);
// console.log(arr);


// // sort
// const arr = [1,3,4,5,3,2,4,7];
// // const arr = ["a","p", "r","b"]

// const result = arr.sort((a,b)=>{
//     return b-a
// })
// //set
// const unique = [... new Set(result)]
// console.log(unique)


//. Array.prototype.splice()

// const arr = [1,2,3];

// arr.splice(1,1);
// console.log(arr);


//localstring or toString()
// // const arr = [1, 2, 3];

// const result = arr.toLocaleString();
// console.log(typeof(result)); // '1,2,3'

//.unshift()

// const arr = [1,3,4,5];
// console.log(arr, arr.length); 
// arr.unshift(13,3,3);

// console.log(arr, arr.length);


// Sort an Array of Objects by Age
// const arr = [
//     { name: 'John', age: 25 },
//     { name: 'Jane', age: 22 },
//     { name: 'Jack', age: 30 }
//   ];

// const result = arr.sort((a,b)=> b.age - a.age);

// console.log(result);

//


// const arr = [[1, 2], [3, 4], [5, 6]];
// const flattened = arr.flat().indexOf(4);
// console.log(flattened);

//


// const arr = [1, 2, 3, 4];

// const result = arr.map((num)=> ({ "number": num, "square": num** 2}))
//   console.log(result);



// const users = [
//     { fullName: "John Doe", age: 25 },
//     { fullName: "Jane Smith", age: 30 },
//   ];
//   const firstNames = users.map(user => user.fullName.split(' ')[0]);
  
//   console.log(firstNames); // ["John", "Jane"]
  

//
// const orders = [
//     { amount: 50 },
//     { amount: 100 },
//     { amount: 30 },
//   ];


//   const totalOrderValue = orders.reduce(( acc,order)=> acc + order.amount, 0);
//   console.log(totalOrderValue);
  


//Scenario: E-commerce Order Processing System

const orders = [
    {
      id: 1,
      customer: 'Alice',
      items: [{ price: 100, quantity: 2 }, { price: 50, quantity: 1 }],
      status: 'completed',
      paymentStatus: 'paid',
      discount: 0.1
    },
    {
      id: 2,
      customer: 'Bob',
      items: [{ price: 200, quantity: 1 }],
      status: 'pending',
      paymentStatus: 'pending',
      discount: 0.2
    },
    {
      id: 3,
      customer: 'Charlie',
      items: [{ price: 300, quantity: 3 }],
      status: 'completed',
      paymentStatus: 'paid',
      discount: 0.15
    },
    {
      id: 4,
      customer: 'David',
      items: [{ price: 50, quantity: 5 }],
      status: 'completed',
      paymentStatus: 'pending',
      discount: 0.05
    }
  ];

  
//Step-by-step Breakdown:
// 1. Filter Out Completed Orders
  

const completedOrders = orders.filter((order)=> order.status === 'completed');
// console.log(completedOrders.length);


//2. Map Orders to Calculate Total Price After Discount

const orderWithTotalPrice = completedOrders.map(( order)=>{
    const totalPrice =  order.items.reduce((sum, item)=> sum + item.price* item.quantity,0);
    const discountPrice = totalPrice - (1- order.discount)
    return {...order, totalPrice: discountPrice}
} )

//3. Check if Any Order Has Pending Payment

const hasPendingOrder = orderWithTotalPrice.some((order)=> order.paymentStatus === 'pending')

//4. Sort Orders by Total Price (Descending)

const sortedOrders = orderWithTotalPrice.sort((a,b)=> b.totalPrice - a.totalPrice);


//5. Reduce the Orders to Calculate Overall Revenue

const totalRevenue = orderWithTotalPrice.reduce((total,order)=> total + order.totalPrice,0)

console.log('Completed Orders:', sortedOrders);
console.log('Has Pending Payments:', hasPendingOrder);
console.log('Total Revenue:', totalRevenue);