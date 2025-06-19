// Understanding JavaScript Object Methods
// The Object global object provides common utilities for all JavaScript objects. These methods are used for tasks such as creating objects, manipulating properties, checking object types, and comparing objects.

// Key Concepts Before We Start:
// Static Methods: Most Object methods are static, meaning you call them directly on the Object constructor (e.g., Object.keys(), Object.assign()), not on an object instance (myObject.keys() would cause an error).
// Properties vs. Values: When dealing with object properties, remember that properties have keys (names) and values.
// Enumerable Properties: Many methods only deal with enumerable properties (those that show up when you loop with for...in or Object.keys()). Non-enumerable properties (like those inherited from the prototype chain or some built-in properties) are often ignored.
// Shallow vs. Deep Operations: Be aware that some operations (like copying) are shallow. If an object contains other objects, only the references to those nested objects are copied, not the nested objects themselves.
// I. Methods for Creating Objects
// Object.create()
// Purpose: Creates a new object, using an existing object as the prototype of the newly created object. This is fundamental for prototypal inheritance.
// Parameters:
// proto: The object to be the prototype of the newly created object. Can be null.
// propertiesObject (optional): An object whose enumerable own properties (that is, those properties defined upon itself and not upon its prototype chain) specify property descriptors to be added to the newly created object.
// Return Value: A new object with the specified prototype object and properties.
// Example Use Case: Implementing prototypal inheritance, creating objects with specific prototype chains, polyfilling new operator behavior.
// JavaScript

// const animal = {
//     speaks: true,
//     walk() { console.log('walking...'); }
// };

// // Create a new object 'dog' with 'animal' as its prototype
// const dog = Object.create(animal);
// dog.name = 'Buddy'; // 'name' is an own property of 'dog'

// console.log(dog.name);      // "Buddy"
// console.log(dog.speaks);    // true (inherited from animal)
// dog.walk();                 // "walking..." (inherited from animal)
// console.log(dog.__proto__ === animal); // true
// Object.assign()
// Purpose: Copies all enumerable own properties from one or more source objects to a target object. It's often used for merging objects or cloning objects.
// Parameters:
// target: The target object to which source properties will be copied.
// source1, source2, ... (optional): One or more source objects whose enumerable own properties will be copied to the target object.
// Return Value: The modified target object.
// Important: This performs a shallow copy. If source properties are object references, only the reference is copied.
// Example Use Case: Merging configuration objects, creating a shallow copy of an object, extending an object with new properties.
// JavaScript

// const target = { a: 1, b: 2 };
// const source1 = { b: 4, c: 5 };
// const source2 = { d: 6 };

// // Merge source1 and source2 into target
// Object.assign(target, source1, source2);
// console.log(target); // { a: 1, b: 4, c: 5, d: 6 } (b was overwritten)

// // Creating a shallow copy of an object
// const original = { x: 1, y: { z: 2 } };
// const copy = Object.assign({}, original);
// console.log(copy);          // { x: 1, y: { z: 2 } }
// console.log(copy === original); // false (different object)
// console.log(copy.y === original.y); // true (same nested object reference!)
// copy.y.z = 100;
// console.log(original.y.z);  // 100 (original mutated because it's a shallow copy)
// II. Methods for Property Inspection and Iteration
// These methods help you get information about an object's properties or iterate over them.

// Object.keys()
// Purpose: Returns an array of a given object's own enumerable string-keyed property names.
// Parameters: obj: The object whose enumerable own properties are to be returned.
// Return Value: An array of strings.
// Example Use Case: Getting a list of all property names to iterate over, checking for the existence of certain properties.
// JavaScript

// const myObject = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(myObject)); // ['a', 'b', 'c']

// const arr = ['x', 'y', 'z'];
// console.log(Object.keys(arr));      // ['0', '1', '2'] (array indices are string keys)

// const str = "hello";
// console.log(Object.keys(str));      // ['0', '1', '2', '3', '4'] (string indices are string keys)
// Object.values() (ES2017)
// Purpose: Returns an array of a given object's own enumerable string-keyed property values.
// Parameters: obj: The object whose enumerable own property values are to be returned.
// Return Value: An array of values.
// Example Use Case: Getting a list of all property values to process, for example, summing numbers or concatenating strings.
// JavaScript

// const data = { name: 'John', age: 30, city: 'New York' };
// console.log(Object.values(data)); // ['John', 30, 'New York']
// Object.entries() (ES2017)
// Purpose: Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// Parameters: obj: The object whose enumerable own [key, value] pairs are to be returned.
// Return Value: An array of arrays, where each inner array is a [key, value] pair.
// Example Use Case: Iterating over both keys and values, converting an object to a Map, filtering object properties.
// JavaScript

// const user = { id: 1, name: 'Alice', status: 'active' };
// console.log(Object.entries(user));
// // Output:
// // [
// //   ['id', 1],
// //   ['name', 'Alice'],
// //   ['status', 'active']
// // ]

// // Example: Iterate with for...of loop
// for (const [key, value] of Object.entries(user)) {
//     console.log(`${key}: ${value}`);
// }
// // Output:
// // id: 1
// // name: Alice
// // status: active
// Object.getOwnPropertyNames()
// Purpose: Returns an array of all own (non-inherited) string-keyed property names of a given object, regardless of whether they are enumerable or not.
// Parameters: obj: The object whose own property names are to be returned.
// Return Value: An array of strings.
// Example Use Case: Introspecting an object to see all its direct properties, including non-enumerable ones.
// JavaScript

// const obj = {};
// Object.defineProperty(obj, 'a', { value: 1, enumerable: true });
// Object.defineProperty(obj, 'b', { value: 2, enumerable: false }); // Non-enumerable

// console.log(Object.keys(obj));               // ['a'] (only enumerable)
// console.log(Object.getOwnPropertyNames(obj)); // ['a', 'b'] (both enumerable and non-enumerable)
// Object.getOwnPropertyDescriptor()
// Purpose: Returns a property descriptor for an own property (that is, one directly present on an object and not in its prototype chain) of a given object.
// Parameters:
// obj: The object in which to look for the property.
// prop: The name of the property.
// Return Value: A property descriptor object (e.g., { value: ..., writable: ..., enumerable: ..., configurable: ... }), or undefined if the property doesn't exist.
// Example Use Case: Inspecting the attributes of a property (e.g., if it's writable, enumerable), before modifying it.
// JavaScript

// const myCar = { make: 'Honda', model: 'Civic' };
// Object.defineProperty(myCar, 'year', {
//     value: 2020,
//     writable: false, // Cannot change year after creation
//     enumerable: true,
//     configurable: true
// });

// console.log(Object.getOwnPropertyDescriptor(myCar, 'make'));
// // { value: 'Honda', writable: true, enumerable: true, configurable: true }

// console.log(Object.getOwnPropertyDescriptor(myCar, 'year'));
// // { value: 2020, writable: false, enumerable: true, configurable: true }
// III. Methods for Property Definition and Control
// These methods allow fine-grained control over how properties are defined and behave.

// Object.defineProperty()
// Purpose: Defines a new property directly on an object, or modifies an existing property, and returns the object. It allows you to control property attributes like writable, enumerable, and configurable.
// Parameters:
// obj: The object on which to define the property.
// prop: The name of the property to be defined or modified.
// descriptor: An object whose properties describe the property being defined or modified.
// Return Value: The object that was passed to the function.
// Example Use Case: Creating read-only properties, hiding properties from iteration, adding getters/setters.
// JavaScript

// const config = {};
// Object.defineProperty(config, 'API_KEY', {
//     value: 'xyz123abc',
//     writable: false,    // Cannot be reassigned
//     enumerable: false,  // Will not show up in Object.keys(), for...in
//     configurable: false // Cannot be deleted or have its attributes changed again
// });

// console.log(config.API_KEY); // "xyz123abc"
// config.API_KEY = 'newKey';   // No effect in non-strict mode, throws TypeError in strict mode
// console.log(config.API_KEY); // "xyz123abc"

// console.log(Object.keys(config)); // [] (because API_KEY is not enumerable)
// Object.defineProperties()
// Purpose: Defines new or modifies existing properties directly on an object, using a map of property descriptors. It's a convenience method for defining multiple properties at once.
// Parameters:
// obj: The object on which to define or modify properties.
// props: An object where keys are property names and values are property descriptor objects.
// Return Value: The object that was passed to the function.
// Example Use Case: Initializing an object with multiple controlled properties.
// JavaScript

// const product = {};
// Object.defineProperties(product, {
//     name: {
//         value: 'Laptop',
//         writable: true,
//         enumerable: true
//     },
//     price: {
//         value: 1200,
//         writable: false,
//         enumerable: true
//     },
//     id: {
//         value: 'xyz-001',
//         writable: false,
//         enumerable: false
//     }
// });

// console.log(product.name);  // "Laptop"
// console.log(product.price); // 1200
// console.log(Object.keys(product)); // ['name', 'price'] (id is not enumerable)
// IV. Methods for Object Extensibility and Sealing
// These methods control how an object's properties can be added, removed, or modified.

// Object.preventExtensions()
// Purpose: Prevents new properties from being added to an object. Existing properties can still be deleted or modified.
// Parameters: obj: The object to make non-extensible.
// Return Value: The object that was passed to the function.
// Example Use Case: Locking down the structure of an object, preventing accidental property additions.
// JavaScript

// const user = { name: 'Alice' };
// Object.preventExtensions(user);

// user.age = 30; // Fails silently in non-strict, throws TypeError in strict mode
// console.log(user); // { name: 'Alice' }

// delete user.name; // Still allowed
// console.log(user); // {}
// Object.isExtensible()
// Purpose: Determines if an object is extensible (i.e., new properties can be added to it).
// Parameters: obj: The object to check.
// Return Value: true if extensible, false otherwise.
// JavaScript

// const obj1 = {};
// console.log(Object.isExtensible(obj1)); // true

// Object.preventExtensions(obj1);
// console.log(Object.isExtensible(obj1)); // false
// Object.seal()
// Purpose: Prevents new properties from being added to an object and marks all existing properties as non-configurable. Values of existing properties can still be changed as long as they are writable.
// Parameters: obj: The object to seal.
// Return Value: The object that was passed to the function.
// Example Use Case: Creating an object where properties can be updated but not added or removed.
// JavaScript

// const config = { host: 'localhost', port: 8080 };
// Object.seal(config);

// config.host = 'newhost'; // Allowed (if writable)
// console.log(config.host); // "newhost"

// config.user = 'admin'; // Fails silently/TypeError (new properties cannot be added)
// console.log(config.user); // undefined

// delete config.host; // Fails silently/TypeError (properties cannot be deleted)
// console.log(config.host); // "newhost"
// Object.isSealed()
// Purpose: Determines if an object is sealed.
// Parameters: obj: The object to check.
// Return Value: true if sealed, false otherwise.
// JavaScript

// const obj = {};
// console.log(Object.isSealed(obj)); // false

// Object.seal(obj);
// console.log(Object.isSealed(obj)); // true
// Object.freeze()
// Purpose: Freezes an object. Freezing an object prevents extensions and makes existing properties non-writable and non-configurable. This is the highest level of immutability directly provided by Object methods.
// Parameters: obj: The object to freeze.
// Return Value: The object that was passed to the function.
// Important: Object.freeze() performs a shallow freeze. If an object contains other objects, those nested objects are not frozen and can still be modified.
// Example Use Case: Creating truly immutable (shallowly) configuration objects, constants, or data structures that should never change.
// JavaScript

// const USER_ROLES = { ADMIN: 'admin', USER: 'user' };
// Object.freeze(USER_ROLES);

// USER_ROLES.ADMIN = 'super_admin'; // Fails silently/TypeError
// console.log(USER_ROLES.ADMIN);    // "admin"

// USER_ROLES.GUEST = 'guest';       // Fails silently/TypeError
// console.log(USER_ROLES.GUEST);    // undefined

// delete USER_ROLES.USER;           // Fails silently/TypeError
// console.log(USER_ROLES.USER);     // "user"

// const nestedObj = { a: 1, b: { c: 2 } };
// Object.freeze(nestedObj);
// nestedObj.b.c = 100; // This is ALLOWED because it's a shallow freeze!
// console.log(nestedObj.b.c); // 100
// Object.isFrozen()
// Purpose: Determines if an object is frozen.
// Parameters: obj: The object to check.
// Return Value: true if frozen, false otherwise.
// JavaScript

// const obj = {};
// console.log(Object.isFrozen(obj)); // false

// Object.freeze(obj);
// console.log(Object.isFrozen(obj)); // true
// V. Methods for Prototype Management
// These methods allow you to inspect and modify an object's prototype chain.

// Object.getPrototypeOf()
// Purpose: Returns the prototype (i.e., the value of the internal [[Prototype]] property) of the specified object.
// Parameters: obj: The object whose prototype is to be returned.
// Return Value: The prototype of the given object.
// Example Use Case: Inspecting the inheritance chain, checking if an object inherits from a specific prototype.
// JavaScript

// const animal = { species: 'mammal' };
// const dog = Object.create(animal);
// dog.name = 'Buddy';

// console.log(Object.getPrototypeOf(dog) === animal);     // true
// console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
// console.log(Object.getPrototypeOf({}));                 // [Object: null prototype] {} (same as Object.prototype)
// Object.setPrototypeOf() (ES6)
// Purpose: Sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.
// Parameters:
// obj: The object on which to set the prototype.
// proto: The object's new prototype (an object or null).
// Return Value: The object whose prototype was changed.
// Note: While useful, directly manipulating prototypes with Object.setPrototypeOf() can have performance implications and is often discouraged in favor of Object.create() for creating objects with specific prototypes.
// Example Use Case: Dynamically changing the inheritance chain (use with caution).
// JavaScript

// const person = { sayHello() { console.log('Hello'); } };
// const programmer = { writeCode() { console.log('Coding...'); } };

// const dev = {};
// Object.setPrototypeOf(dev, person);
// dev.sayHello(); // "Hello"

// Object.setPrototypeOf(dev, programmer); // Change prototype
// dev.writeCode(); // "Coding..."
// // dev.sayHello(); // Error: dev.sayHello is not a function
// VI. Methods for Object Comparison
// Object.is() (ES6)
// Purpose: Determines whether two values are the same value. It's a stricter comparison than == (which does type coercion) and === (which has some quirks for NaN and +0/-0).
// Parameters: value1, value2: The two values to compare.
// Return Value: true if the values are the same, false otherwise.
// Differences from ===:
// Object.is(NaN, NaN) is true (whereas NaN === NaN is false).
// Object.is(+0, -0) is false (whereas +0 === -0 is true).
// Example Use Case: When you need strict value comparison that correctly handles NaN and signed zeros.
// JavaScript

// console.log(Object.is(1, 1));     // true
// console.log(Object.is('abc', 'abc')); // true
// console.log(Object.is({}, {}));   // false (different object references)
// console.log(Object.is(NaN, NaN)); // true
// console.log(NaN === NaN);         // false

// console.log(Object.is(0, -0));    // false
// console.log(0 === -0);            // true
// VII. Utility Method
// Object.hasOwn() (ES2022)
// Purpose: Returns true if the specified object has the indicated property as its own property. This is the recommended way to check for own properties over hasOwnProperty().
// Parameters:
// obj: The object to test.
// prop: The string name or Symbol of the property to test.
// Return Value: true if the property is an own property, false otherwise.
// Difference from Object.prototype.hasOwnProperty(): Object.hasOwn() is safer because it doesn't run into issues if an object overrides hasOwnProperty (e.g., Object.create(null) or a malicious object).
// JavaScript

// const myObj = { a: 1 };
// console.log(Object.hasOwn(myObj, 'a')); // true
// console.log(Object.hasOwn(myObj, 'toString')); // false (inherited)

// const noProto = Object.create(null);
// noProto.x = 1;
// console.log(Object.hasOwn(noProto, 'x')); // true
// // console.log(noProto.hasOwnProperty('x')); // This would cause an error!
