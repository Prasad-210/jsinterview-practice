// Understanding JavaScript String Methods
// In JavaScript, strings are primitive values, but they behave like objects when you call methods on them. This is because JavaScript temporarily wraps the primitive string in a String object, executes the method, and then discards the object. This is known as "autoboxing."

// All string methods are non-mutating. This is a crucial point:

// Strings are immutable: Unlike arrays, you cannot change a string in place. Any method that appears to "modify" a string actually returns a new string with the changes, leaving the original string untouched.


// I. Methods for Extracting Substrings (Non-Mutating)
// These methods return a new string containing a portion of the original string.

// slice()
// Purpose: Extracts a section of a string and returns it as a new string.
// Modifies Original String? NO.
// Parameters:
// startIndex (optional): The index at which to begin extraction. If omitted, it starts from 0. Can be negative (counts from the end).
// endIndex (optional): The index before which to end extraction. The character at endIndex itself is not included. If omitted, it extracts to the end of the string. Can be negative.
// Return Value: A new string containing the extracted section.
// Example Use Case: Getting a portion of a URL, extracting a date from a timestamp string.
// JavaScript

// const greeting = "Hello, World!";
// console.log(greeting.slice(0, 5));  // "Hello"
// console.log(greeting.slice(7, 12)); // "World"
// console.log(greeting.slice(7));     // "World!" (to the end)
// console.log(greeting.slice(-6, -1)); // "World" (negative indices)
// console.log(greeting);              // "Hello, World!" (original unchanged)
// substring()
// Purpose: Returns the part of the string between startIndex and endIndex, or to the end of the string.
// Modifies Original String? NO.
// Parameters:
// indexStart: The starting index (inclusive).
// indexEnd (optional): The ending index (exclusive).
// Differences from slice():
// substring() treats negative indices as 0.
// substring() swaps indexStart and indexEnd if indexStart is greater than indexEnd.
// Return Value: A new string.
// Example Use Case: Similar to slice(), often used where handling of negative indices or swapped arguments isn't critical.

// JavaScript

// const sentence = "JavaScript is fun!";
// console.log(sentence.substring(0, 10));  // "JavaScript"
// console.log(sentence.substring(14));     // "fun!" (to the end)
// console.log(sentence.substring(10, 0));  // "JavaScript" (swaps arguments)
// console.log(sentence.substring(-5, 5));  // "JavaS" (negative treated as 0)
// console.log(sentence);                   // "JavaScript is fun!" (original unchanged)
// substr() (Deprecated)
// Purpose: Returns a portion of the string, starting at a specified index and extending for a given number of characters.
// Modifies Original String? NO.
// Parameters:
// startIndex: The index where to start the extraction.
// length (optional): The number of characters to extract.
// Return Value: A new string.
// Note: This method is largely considered deprecated and should generally be avoided in new code in favor of slice() or substring().
// Example Use Case: (Historical) Extracting a fixed-length segment from a string.

// JavaScript

// const message = "Hello there";
// console.log(message.substr(6, 5)); // "there"
// console.log(message.substr(0, 5)); // "Hello"



// II. Methods for Searching and Checking (Non-Mutating)
// These methods help you find characters/substrings or check for their presence.

// indexOf()
// Purpose: Returns the first index at which a given value can be found in the string.
// Modifies Original String? NO.
// Parameters:
// searchValue: The string to search for.
// fromIndex (optional): The index to start the search at. Defaults to 0.
// Return Value: The index of the first occurrence of searchValue, or -1 if not found.
// Example Use Case: Checking if a substring exists, getting the position for further manipulation.
// JavaScript

// const text = "The quick brown fox jumps over the lazy fox.";
// console.log(text.indexOf("fox"));    // 16
// console.log(text.indexOf("cat"));    // -1
// console.log(text.indexOf("fox", 20)); // 40 (search starts from index 20)


// lastIndexOf()
// Purpose: Returns the last index at which a given value can be found in the string, searching backwards.
// Modifies Original String? NO.
// Parameters:
// searchValue: The string to search for.
// fromIndex (optional): The index at which to start searching backwards from. Defaults to string.length - 1.
// Return Value: The index of the last occurrence of searchValue, or -1 if not found.
// Example Use Case: Finding the most recent mention of a keyword.
// JavaScript

// const text = "The quick brown fox jumps over the lazy fox.";
// console.log(text.lastIndexOf("fox"));    // 40
// console.log(text.lastIndexOf("quick"));  // 4
// console.log(text.lastIndexOf("fox", 30)); // 16 (search backwards from index 30)

// startsWith() (ES6)
// Purpose: Determines whether a string begins with the characters of a specified string.
// Modifies Original String? NO.
// Parameters:
// searchString: The characters to be searched for at the beginning of the string.
// position (optional): The position in the string at which to begin searching. Defaults to 0.
// Return Value: true if the string starts with searchString, otherwise false.
// Example Use Case: Validating file extensions, checking URL prefixes.
// JavaScript

// const fileName = "document.pdf";
// console.log(fileName.startsWith("doc"));   // true
// console.log(fileName.startsWith("PDF"));   // false (case-sensitive)
// console.log(fileName.startsWith("ment", 4)); // true ('ment' starts at index 4)


// endsWith() (ES6)
// Purpose: Determines whether a string ends with the characters of a specified string.
// Modifies Original String? NO.
// Parameters:
// searchString: The characters to be searched for at the end of the string.
// length (optional): The length of the string to search within. Defaults to string.length.
// Return Value: true if the string ends with searchString, otherwise false.
// Example Use Case: Validating file extensions, checking if a sentence ends with punctuation.
// JavaScript

// const email = "user@example.com";
// console.log(email.endsWith(".com"));      // true
// console.log(email.endsWith(".org"));      // false
// console.log(email.endsWith("example", 14)); // true (checks within "user@example")
// includes() (ES6)
// Purpose: Determines whether a string contains the characters of a specified string.
// Modifies Original String? **NO`.
// Parameters:
// searchString: The string to be searched for.
// position (optional): The position in the string at which to begin searching. Defaults to 0.
// Return Value: true if the searchString is found anywhere within the string, otherwise false.
// Example Use Case: Simple keyword search, checking for presence of a sub-string.
// JavaScript

// const poem = "Roses are red, violets are blue.";
// console.log(poem.includes("red"));    // true
// console.log(poem.includes("yellow")); // false
// console.log(poem.includes("are", 10)); // true (search from index 10)
// III. Methods for Transformation and Case Conversion (Non-Mutating)
// These methods return a new string with modified casing or structure.

// toUpperCase()
// Purpose: Converts the string to uppercase.
// Modifies Original String? NO.
// Parameters: None.
// Return Value: A new string in uppercase.
// Example Use Case: Normalizing user input for comparison, displaying text in a prominent way.
// JavaScript

// const name = "Alice";
// console.log(name.toUpperCase()); // "ALICE"
// console.log(name);               // "Alice" (original unchanged)


// toLowerCase()
// Purpose: Converts the string to lowercase.
// Modifies Original String? NO.
// Parameters: None.
// Return Value: A new string in lowercase.
// Example Use Case: Normalizing user input for comparison, case-insensitive searching.
// JavaScript

// const city = "New YORK";
// console.log(city.toLowerCase()); // "new york"



// trim() (ES5)
// Purpose: Removes whitespace from both ends of a string.
// Modifies Original String? NO.
// Parameters: None.
// Return Value: A new string with leading and trailing whitespace removed.
// Example Use Case: Cleaning user input from forms, preparing strings for comparison.

// JavaScript

// const userInput = "   Hello World!   ";
// console.log(`"${userInput.trim()}"`); // "Hello World!"
// trimStart() / trimLeft() (ES2019)
// Purpose: Removes whitespace from the beginning (left) of a string.
// Modifies Original String? NO.
// Parameters: None.
// Return Value: A new string.
// Note: trimLeft() is an alias for trimStart().
// Example Use Case: Removing indentation, cleaning data where only leading spaces are an issue.
// JavaScript

// const padded = "   data";
// console.log(`"${padded.trimStart()}"`); // "data"



// trimEnd() / trimRight() (ES2019)
// Purpose: Removes whitespace from the end (right) of a string.
// Modifies Original String? NO.
// Parameters: None.
// Return Value: A new string.
// Note: trimRight() is an alias for trimEnd().
// Example Use Case: Removing trailing spaces from user input, cleaning up generated strings.
// JavaScript

// const padded = "data   ";
// console.log(`"${padded.trimEnd()}"`); // "data"








// IV. Methods for Replacement and Splitting (Non-Mutating)
// These methods help you replace parts of a string or break it into an array.

// replace()
// Purpose: Searches a string for a value or a regular expression, and returns a new string where the first (or all, with g flag) match is replaced.
// Modifies Original String? NO.
// Parameters:
// searchValue: A string or a RegExp object to search for.
// replaceValue: A string or a function to use as a replacement.
// Return Value: A new string with the replacement(s).
// Example Use Case: Correcting typos, sanitizing input, reformatting text.
// JavaScript

// const paragraph = "The dog barked. The dog ran.";
// console.log(paragraph.replace("dog", "cat")); // "The cat barked. The dog ran." (only first match)

// // Using RegExp with global flag (g) for all occurrences
// console.log(paragraph.replace(/dog/g, "cat")); // "The cat barked. The cat ran."

// // Using a replacement function
// const str = 'abc123def';
// console.log(str.replace(/\d+/g, match => `[${match}]`)); // "abc[123]def"
// replaceAll() (ES2021)
// Purpose: Returns a new string with all occurrences of a searchValue replaced with a replaceValue.
// Modifies Original String? NO.
// Parameters:
// searchValue: A string or a RegExp object. If it's a string, all occurrences are replaced. If it's a RegExp, it must have the g (global) flag set.
// replaceValue: A string or a function.
// Return Value: A new string with all replacements.
// Example Use Case: When you consistently need to replace all occurrences of a substring without using regular expressions.
// JavaScript

// const sentence = "I like cats and I like dogs.";
// console.log(sentence.replaceAll("like", "love")); // "I love cats and I love dogs."

// const tags = "tag1,tag2,tag3";
// console.log(tags.replaceAll(",", ";")); // "tag1;tag2;tag3"


// split()
// Purpose: Divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.
// Modifies Original String? NO.
// Parameters:
// separator (optional): A string or RegExp to use for splitting. If omitted, the array will contain the original string as its only element.
// limit (optional): A non-negative integer specifying a limit on the number of splits.
// Return Value: A new array of strings.
// Example Use Case: Parsing CSV data, breaking a sentence into words, extracting hashtags from a tweet.
// JavaScript

// const csvLine = "Alice,25,New York";
// const data = csvLine.split(','); // Splits by comma
// console.log(data); // ['Alice', '25', 'New York']

// const sentence = "Hello world, how are you?";
// const words = sentence.split(' '); // Splits by space
// console.log(words); // ['Hello', 'world,', 'how', 'are', 'you?']

// const chars = "abc".split(''); // Splits by each character
// console.log(chars); // ['a', 'b', 'c']





// V. Other Utility Methods
// charAt()
// Purpose: Returns the character at a specified index (position) in a string.
// Modifies Original String? NO.
// Parameters: index: An integer between 0 and string.length - 1.
// Return Value: A string representing the character at the specified index, or an empty string if index is out of range.
// Note: While functional, using bracket notation (str[index]) is more common and often preferred for accessing individual characters.
// JavaScript

// const greeting = "Hello";
// console.log(greeting.charAt(0)); // "H"
// console.log(greeting.charAt(4)); // "o"
// console.log(greeting.charAt(10)); // "" (empty string, no error)
// console.log(greeting[0]);        // "H" (common modern way)
// charCodeAt()
// Purpose: Returns the UTF-16 code unit value of the character at a specified index.
// Modifies Original String? NO.
// Parameters: index: An integer between 0 and string.length - 1.
// Return Value: A number representing the UTF-16 code unit value, or NaN if index is out of range.
// Example Use Case: Low-level character processing, working with Unicode.
// JavaScript

// const char = "A";
// console.log(char.charCodeAt(0)); // 65 (ASCII/UTF-16 for 'A')
// console.log("😊".charCodeAt(0)); // 55357 (surrogate pair start) - use `codePointAt` for full Unicode
// codePointAt() (ES6)
// Purpose: Returns the Unicode code point value of the character at a given position. This is a more robust way to handle Unicode characters (like emojis) which might take up more than one UTF-16 code unit (surrogate pairs).
// Modifies Original String? NO.
// Parameters: position: The position of the character.
// Return Value: A non-negative integer representing the code point value, or undefined if position is out of range.
// Example Use Case: Correctly handling all Unicode characters.
// JavaScript

// const emoji = "😊"; // This is a surrogate pair (2 JS characters)
// console.log(emoji.charCodeAt(0));   // 55357
// console.log(emoji.charCodeAt(1));   // 56836
// console.log(emoji.codePointAt(0));  // 128522 (the actual Unicode code point for the smiling face)
// repeat() (ES6)
// Purpose: Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
// Modifies Original String? NO.
// Parameters: count: An integer indicating the number of times to repeat the string.
// Return Value: A new string.
// Example Use Case: Creating separator lines, generating padded strings, simple text art.
// JavaScript

// console.log("abc".repeat(3)); // "abcabcabc"
// console.log("-".repeat(20));  // "--------------------"
// padStart() / padEnd() (ES2017)
// Purpose: Pads the current string with another string (repeated, if needed) until the resulting string reaches the given targetLength. The padding is applied from the start (padStart) or end (padEnd).
// Modifies Original String? **NO`.
// Parameters:
// targetLength: The length of the resulting string once the current string has been padded.
// padString (optional): The string to pad the current string with. Defaults to a single space.
// Return Value: A new string of the specified length.
// Example Use Case: Formatting numbers (e.g., adding leading zeros), aligning text in columns.
// JavaScript

// const num = "42";
// console.log(num.padStart(5, '0'));   // "00042"
// console.log("hello".padEnd(10, '*')); // "hello*****"
// console.log("test".padEnd(2));       // "test" (targetLength less than string length, no chan