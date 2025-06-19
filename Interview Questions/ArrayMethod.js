// Understanding JavaScript Array Methods
// JavaScript Array methods are built-in functions that allow you to perform various operations on arrays, such as adding, removing, sorting, searching, iterating, and transforming elements. They are invoked directly on an array instance (e.g., myArray.methodName(...)).

// Key Concepts Before We Start:
// Mutation vs. Non-Mutation: Some methods modify the original array (mutate it) and some return a new array, leaving the original untouched (non-mutating). This is a critical distinction.
// Callback Functions: Many array methods accept a "callback function" as an argument. This function is executed once for each element in the array. Common parameters for these callbacks are:
// element: The current element being processed.
// index (optional): The index of the current element.
// array (optional): The array on which the method was called.
// Shallow Copy: Methods that return a new array often perform a "shallow copy." This means if your array contains objects or other arrays, only the references to those objects are copied, not the objects themselves. Modifying the nested object in the new array will also affect it in the original array.
// I. Methods for Adding and Removing Elements (Mutating)
// These methods directly change the length and content of the original array.

// push()
// Purpose: Adds one or more elements to the end of an array.
// Modifies Original Array? YES.
// Parameters: One or more elements to add.
// Return Value: The new length of the array.
// Example Use Case: Adding items to a shopping cart, logging new events in a chronological list.
// JavaScript

// const numbers = [1, 2, 3];
// const newLength = numbers.push(4, 5);
// console.log(numbers);     // [1, 2, 3, 4, 5]
// console.log(newLength);   // 5
// pop()
// Purpose: Removes the last element from an array.
// Modifies Original Array? YES.
// Parameters: None.
// Return Value: The removed element. undefined if the array is empty.
// Example Use Case: Implementing a "undo" stack, processing items from the end of a queue.
// JavaScript

// const fruits = ['apple', 'banana', 'cherry'];
// const removedFruit = fruits.pop();
// console.log(fruits);       // ['apple', 'banana']
// console.log(removedFruit); // 'cherry'

// const emptyArray = [];
// console.log(emptyArray.pop()); // undefined
// unshift()
// Purpose: Adds one or more elements to the beginning of an array.
// Modifies Original Array? YES.
// Parameters: One or more elements to add.
// Return Value: The new length of the array.
// Example Use Case: Adding new items to the top of a news feed, pre-pending data.
// JavaScript

// const colors = ['green', 'blue'];
// const newLength = colors.unshift('red', 'yellow');
// console.log(colors);     // ['red', 'yellow', 'green', 'blue']
// console.log(newLength);  // 4
// shift()
// Purpose: Removes the first element from an array.
// Modifies Original Array? YES.
// Parameters: None.
// Return Value: The removed element. undefined if the array is empty.
// Example Use Case: Processing tasks from the front of a queue, consuming elements from a list.
// JavaScript

// const tasks = ['buy groceries', 'clean house', 'pay bills'];
// const completedTask = tasks.shift();
// console.log(tasks);         // ['clean house', 'pay bills']
// console.log(completedTask); // 'buy groceries'
// splice() (Revisited for context)
// Purpose: Changes the content of an array by removing existing elements and/or adding new elements.
// Modifies Original Array? YES.
// Parameters:
// start: Index at which to start changing the array.
// deleteCount (optional): Number of elements to remove.
// item1, item2, ... (optional): Elements to add.
// Return Value: An array containing the deleted elements.
// Example Use Case: Removing specific items from a list, inserting items at a specific position, replacing items.
// JavaScript

// const items = ['a', 'b', 'c', 'd', 'e'];

// // Remove 2 elements starting from index 1 ('b', 'c')
// const removedItems = items.splice(1, 2);
// console.log(items);        // ['a', 'd', 'e']
// console.log(removedItems); // ['b', 'c']

// // Insert 'x', 'y' at index 1 without deleting
// items.splice(1, 0, 'x', 'y');
// console.log(items);        // ['a', 'x', 'y', 'd', 'e']

// // Replace 1 element at index 2 ('y') with 'z'
// items.splice(2, 1, 'z');
// console.log(items);        // ['a', 'x', 'z', 'd', 'e']
// II. Methods for Accessing and Copying (Non-Mutating)
// These methods return new arrays or values and leave the original array untouched.

// slice() (Revisited for context)
// Purpose: Extracts a shallow copy of a portion of an array into a new array.
// Modifies Original Array? NO.
// Parameters: start (inclusive), end (exclusive).
// Return Value: A new array containing the extracted elements.
// Example Use Case: Creating a sub-array, copying an entire array (arr.slice()).
// JavaScript

// const originalArr = [10, 20, 30, 40, 50];
// const newArr = originalArr.slice(1, 4); // Extracts elements from index 1 to 3
// console.log(newArr);        // [20, 30, 40]
// console.log(originalArr);   // [10, 20, 30, 40, 50] (original unchanged)

// const copyArr = originalArr.slice(); // Copies the entire array
// console.log(copyArr);       // [10, 20, 30, 40, 50]
// console.log(copyArr === originalArr); // false (different array in memory)

// concat()
// Purpose: Used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.
// Modifies Original Array? NO.
// Parameters: One or more arrays and/or values to concatenate.
// Return Value: A new array containing the joined arrays/values.
// Example Use Case: Combining search results from different sources, building a final list from multiple partial lists.
// JavaScript

// const arr1 = [1, 2];
// const arr2 = [3, 4];
// const arr3 = ['a', 'b'];

// const combinedArr = arr1.concat(arr2, arr3, 5);
// console.log(combinedArr); // [1, 2, 3, 4, 'a', 'b', 5]
// console.log(arr1);        // [1, 2] (original unchanged)
// III. Iteration Methods (Non-Mutating, but Callbacks can Mutate)
// These methods iterate over each element of the array and execute a provided callback function. They are generally non-mutating in their direct operation, but the callback function itself could mutate the array if not careful.

// forEach()
// Purpose: Executes a provided function once for each array element.
// Modifies Original Array? NO (directly). However, the callback function can modify the array.
// Parameters: A callback function (element, index, array).
// Return Value: undefined. It's purely for side effects.
// Example Use Case: Printing each item in a list, performing an action for each element (e.g., updating a UI element).
// JavaScript

// const numbers = [1, 2, 3];
// numbers.forEach(function(num, index) {
//     console.log(`Element at index ${index}: ${num}`);
// });
// // Output:
// // Element at index 0: 1
// // Element at index 1: 2
// // Element at index 2: 3

// map()
// Purpose: Creates a new array by calling a provided function on every element in the calling array. Transforms each element.
// Modifies Original Array? NO.
// Parameters: A callback function (element, index, array).
// Return Value: A new array containing the results of the callback function for each element.
// Example Use Case: Converting a list of prices to prices with tax, extracting a specific property from an array of objects.
// JavaScript

// const temperatures = [0, 10, 20, 30];
// const fahrenheit = temperatures.map(temp => (temp * 9/5) + 32);
// console.log(fahrenheit);  // [32, 50, 68, 86]
// console.log(temperatures); // [0, 10, 20, 30] (original unchanged)
// filter()
// Purpose: Creates a new array with all elements that pass the test implemented by the provided function.
// Modifies Original Array? NO.
// Parameters: A callback function (element, index, array) that returns true or false.
// Return Value: A new array containing only the elements for which the callback returned true.
// Example Use Case: Filtering a list of products by category, getting all even numbers from an array, searching for active users.
// JavaScript

// const ages = [12, 17, 18, 25, 60];
// const adults = ages.filter(age => age >= 18);
// console.log(adults); // [18, 25, 60]
// console.log(ages);   // [12, 17, 18, 25, 60] (original unchanged)
// reduce()
// Purpose: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value. It "reduces" the array to a single value.
// Modifies Original Array? NO.
// Parameters:
// A callback function (accumulator, currentValue, currentIndex, array).
// initialValue (optional): Value to use as the first argument to the first call of the callback.
// Return Value: The single value that results from the reduction.
// Example Use Case: Calculating the sum of all numbers, flattening an array of arrays, counting occurrences of items, grouping objects by a property.
// JavaScript

// const prices = [10, 20, 30, 40];
// const sum = prices.reduce((total, price) => total + price, 0); // 0 is initialValue
// console.log(sum); // 100

// const words = ['hello', 'world', 'from', 'js'];
// const sentence = words.reduce((acc, word) => acc + ' ' + word);
// console.log(sentence); // "hello world from js" (no initial value, so 'hello' is acc on first iteration)
// some()
// Purpose: Checks if at least one element in the array satisfies the provided testing function.
// Modifies Original Array? NO.
// Parameters: A callback function (element, index, array) that returns true or false.
// Return Value: true if the callback returns true for at least one element; otherwise, false.
// Example Use Case: Checking if any item in a shopping cart is out of stock, validating if at least one user is active.
// JavaScript

// const numbers = [1, 2, 3, 4, 5];
// const hasEven = numbers.some(num => num % 2 === 0);
// console.log(hasEven); // true (because 2 and 4 are even)

// const hasNegative = numbers.some(num => num < 0);
// console.log(hasNegative); // false
// every()
// Purpose: Checks if all elements in the array satisfy the provided testing function.
// Modifies Original Array? NO.
// Parameters: A callback function (element, index, array) that returns true or false.
// Return Value: true if the callback returns true for all elements; otherwise, false.
// Example Use Case: Validating if all fields in a form are filled, checking if all users are administrators.
// JavaScript

// const grades = [85, 92, 78, 95];
// const allPassing = grades.every(grade => grade >= 70);
// console.log(allPassing); // true

// const someLowGrades = [85, 60, 90];
// const allHigh = someLowGrades.every(grade => grade >= 80);
// console.log(allHigh); // false (because 60 is not >= 80)
// IV. Search and Find Methods (Non-Mutating)
// These methods help you locate elements or their indices within an array.

// indexOf()
// Purpose: Returns the first index at which a given element can be found in the array.
// Modifies Original Array? NO.
// Parameters: searchElement, fromIndex (optional - where to start the search).
// Return Value: The index of the first occurrence of searchElement, or -1 if not found. Uses strict equality (===).
// Example Use Case: Checking if an item exists in a list, getting the position of a specific value.
// JavaScript

// const animals = ['dog', 'cat', 'bird', 'dog'];
// console.log(animals.indexOf('cat'));   // 1
// console.log(animals.indexOf('dog'));   // 0 (first occurrence)
// console.log(animals.indexOf('fish'));  // -1
// console.log(animals.indexOf('dog', 1)); // 3 (search starts from index 1)
// lastIndexOf()
// Purpose: Returns the last index at which a given element can be found in the array, searching backwards from fromIndex.
// Modifies Original Array? NO.
// Parameters: searchElement, fromIndex (optional - where to start the search, defaults to array.length - 1).
// Return Value: The index of the last occurrence of searchElement, or -1 if not found.
// Example Use Case: Finding the most recent entry of an item.
// JavaScript

// const animals = ['dog', 'cat', 'bird', 'dog'];
// console.log(animals.lastIndexOf('dog')); // 3 (last occurrence)
// console.log(animals.lastIndexOf('cat', 2)); // 1 (search from index 2 backwards)
// find()
// Purpose: Returns the first element in the array that satisfies the provided testing function.
// Modifies Original Array? NO.
// Parameters: A callback function (element, index, array) that returns true or false.
// Return Value: The first element that passes the test, or undefined if no element satisfies the condition.
// Example Use Case: Finding a specific user object by ID, finding the first product that meets a price criteria.
// JavaScript

// const users = [
//     { id: 1, name: 'Alice' },
//     { id: 2, name: 'Bob' },
//     { id: 3, name: 'Charlie' }
// ];
// const userBob = users.find(user => user.name === 'Bob');
// console.log(userBob); // { id: 2, name: 'Bob' }

// const userFour = users.find(user => user.id === 4);
// console.log(userFour); // undefined
// findIndex()
// Purpose: Returns the index of the first element in the array that satisfies the provided testing function.
// Modifies Original Array? NO.
// Parameters: A callback function (element, index, array) that returns true or false.
// Return Value: The index of the first element that passes the test, or -1 if no element satisfies the condition.
// Example Use Case: Getting the index of an item to remove or update, finding the position of a complex object.
// JavaScript

// const products = [
//     { name: 'Laptop', price: 1200 },
//     { name: 'Mouse', price: 25 },
//     { name: 'Keyboard', price: 75 }
// ];
// const expensiveProductIndex = products.findIndex(p => p.price > 100);
// console.log(expensiveProductIndex); // 0 (index of 'Laptop')

// const cheapProductIndex = products.findIndex(p => p.price < 20);
// console.log(cheapProductIndex); // -1
// includes()
// Purpose: Determines whether an array includes a certain value among its entries.
// Modifies Original Array? NO.
// Parameters: searchElement, fromIndex (optional - position to start search from).
// Return Value: true if the value is found, false otherwise. Uses SameValueZero equality algorithm (handles NaN correctly, unlike indexOf).
// Example Use Case: Quickly checking for the presence of an item, validating if a user has a specific role.
// JavaScript

// const availableColors = ['red', 'green', 'blue'];
// console.log(availableColors.includes('green')); // true
// console.log(availableColors.includes('yellow')); // false

// const data = [1, NaN, 3];
// console.log(data.includes(NaN)); // true (works for NaN)
// console.log(data.indexOf(NaN)); // -1 (indexOf does not work for NaN)
// V. Ordering and Transformation Methods
// These methods often sort or reverse the array or convert it to a string. Be mindful of mutation.

// sort()
// Purpose: Sorts the elements of an array in place and returns the array. The default sort order is ascending, based on converting elements to strings and comparing their UTF-16 code unit values.
// Modifies Original Array? YES.
// Parameters: compareFunction (optional): A function that defines the sort order.
// compareFunction(a, b):
// Returns a negative value if a should come before b.
// Returns a positive value if a should come after b.
// Returns 0 if a and b are considered equal.
// Return Value: The sorted original array.
// Example Use Case: Sorting lists of names, numbers, or objects by a specific property.
// JavaScript

// const numbers = [3, 1, 4, 1, 5, 9];
// numbers.sort(); // Sorts as strings by default
// console.log(numbers); // [1, 1, 3, 4, 5, 9] (looks correct here because numbers are single digits)

// const complexNumbers = [10, 2, 100, 20];
// complexNumbers.sort(); // Sorts as strings
// console.log(complexNumbers); // [10, 100, 2, 20] (incorrect numerical sort!)

// // Correct numerical sort:
// complexNumbers.sort((a, b) => a - b); // Ascending
// console.log(complexNumbers); // [2, 10, 20, 100]

// complexNumbers.sort((a, b) => b - a); // Descending
// console.log(complexNumbers); // [100, 20, 10, 2]

// const names = ['Charlie', 'Alice', 'Bob'];
// names.sort();
// console.log(names); // ['Alice', 'Bob', 'Charlie']
// reverse()
// Purpose: Reverses the order of the elements in an array in place.
// Modifies Original Array? YES.
// Parameters: None.
// Return Value: The reversed original array.
// Example Use Case: Displaying a list in reverse chronological order, implementing a card game deck shuffle.
// JavaScript

// const data = [1, 2, 3, 4, 5];
// data.reverse();
// console.log(data); // [5, 4, 3, 2, 1]
// join()
// Purpose: Creates and returns a new string by concatenating all of the elements in an array, separated by a specified separator string.
// Modifies Original Array? NO.
// Parameters: separator (optional): A string to separate each element of the array. Defaults to a comma (,).
// Return Value: A string.
// Example Use Case: Converting an array of words into a sentence, generating a CSV string from an array of data.
// JavaScript

// const words = ['Hello', 'World', '!'];
// const sentence = words.join(' ');
// console.log(sentence); // "Hello World !"

// const csvData = ['apple', 'banana', 'cherry'];
// console.log(csvData.join(',')); // "apple,banana,cherry"

// const noSeparator = ['a', 'b', 'c'].join('');
// console.log(noSeparator); // "abc"
// toString()
// Purpose: Returns a string representing the specified array and its elements. It's similar to join(',').
// Modifies Original Array? NO.
// Parameters: None.
// Return Value: A string.
// Example Use Case: Simple string representation for logging or display.
// JavaScript

// const arr = [1, 2, 'hello', true];
// console.log(arr.toString()); // "1,2,hello,true"
// VI. Other Useful Methods
// flat() (ES2019)
// Purpose: Creates a new array with all sub-array elements recursively concatenated into it up to the specified depth.
// Modifies Original Array? NO.
// Parameters: depth (optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to 1. Infinity can be used to flatten all levels.
// Return Value: A new array with the sub-array elements flattened.
// Example Use Case: Unnesting complex data structures, preparing data from APIs that return nested arrays.
// JavaScript

// const nestedArr = [1, [2, 3], [4, [5, 6]]];
// console.log(nestedArr.flat());     // [1, 2, 3, 4, [5, 6]] (depth 1)
// console.log(nestedArr.flat(2));    // [1, 2, 3, 4, 5, 6] (depth 2)
// console.log(nestedArr.flat(Infinity)); // [1, 2, 3, 4, 5, 6] (all levels)
// flatMap() (ES2019)
// Purpose: Maps each element using a mapping function, then flattens the result into a new array. It's equivalent to map() followed by flat(1).
// Modifies Original Array? NO.
// Parameters: A callback function (element, index, array).
// Return Value: A new array with the mapped and flattened elements.
// Example Use Case: Transforming and then flattening a list of tags, processing items that might return zero, one, or multiple results.
// JavaScript

// const sentences = ['hello world', 'how are you'];
// const words = sentences.flatMap(sentence => sentence.split(' '));
// console.log(words); // ['hello', 'world', 'how', 'are', 'you']

// const numbers = [1, 2, 3];
// const multipliedAndFlattened = numbers.flatMap(num => [num, num * 2]);
// console.log(multipliedAndFlattened); // [1, 2, 2, 4, 3, 6]
// from()
// Purpose: Creates a new, shallow-copied Array instance from an iterable or array-like object.
// Modifies Original Array? NO (creates a new one).
// Parameters:
// arrayLike: An iterable or array-like object to convert to an array.
// mapFn (optional): A map function to call on each element.
// thisArg (optional): Value to use as this when executing mapFn.
// Return Value: A new Array instance.
// Example Use Case: Converting NodeList (from document.querySelectorAll), arguments object, or a Set/Map into a real Array.
// JavaScript

// const myString = 'abc';
// const charArray = Array.from(myString);
// console.log(charArray); // ['a', 'b', 'c']

// const set = new Set([1, 2, 3]);
// const setArray = Array.from(set);
// console.log(setArray);  // [1, 2, 3]

// // With a map function
// const numbers = Array.from({ length: 5 }, (_, i) => i + 1);
// console.log(numbers); // [1, 2, 3, 4, 5]
// isArray()
// Purpose: Determines whether the passed value is an Array.
// Modifies Original Array? NO.
// Parameters: value: The value to be checked.
// Return Value: true if the value is an Array, false otherwise.
// Example Use Case: Type checking before performing array-specific operations.
// JavaScript

// console.log(Array.isArray([1, 2, 3])); // true
// console.log(Array.isArray('hello'));   // false
// console.log(Array.isArray({ length: 2 })); // false
// fill()
// Purpose: Changes all elements in an array to a static value, from a start index to an end index.
// Modifies Original Array? YES.
// Parameters:
// value: Value to fill the array with.
// start (optional): Start index (inclusive). Defaults to 0.
// end (optional): End index (exclusive). Defaults to array.length.
// Return Value: The modified original array.
// Example Use Case: Initializing an array with a default value, resetting parts of an array.
// JavaScript

// const data = [1, 2, 3, 4, 5];
// data.fill(0);
// console.log(data); // [0, 0, 0, 0, 0]

// const newArr = new Array(5).fill('hello');
// console.log(newArr); // ['hello', 'hello', 'hello', 'hello', 'hello']

// const partFill = [1, 2, 3, 4, 5];
// partFill.fill(9, 1, 4); // Fill 9 from index 1 (inclusive) to 4 (exclusive)
// console.log(partFill); // [1, 9, 9, 9, 5]






