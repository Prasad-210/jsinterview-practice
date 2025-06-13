//Basic String Questions

//todo Reverse a string.

//? 1. Using Built-in Methods: split(), reverse(), join()

// function reverseString(str){
//    return str.split('').reverse().join("")
// }

// const str = 'Hello'
// console.log(reverseString(str))

// Explanation:
// str.split('') → turns the string into an array of characters.
// "hello" → ["h", "e", "l", "l", "o"]

// .reverse() → reverses the array.
// ["o", "l", "l", "e", "h"]

// .join('') → joins the array back into a string.
// "olleh"

//? 2. Using a for loop (backward iteration)

// function reverseString(str){
//   let reversed = '';

//   for( let i = str.length-1; i >=0 ; i--){
//     reversed = reversed + str[i];
//   }
//   return reversed
// }

// const str = 'Hello'

// console.log(reverseString(str))

//? 3. Using a for...of loop (forward iteration)

// function reverseString(str){
//   let reversed = '';

//   for(let char of str){
//     reversed = char + reversed   //Because you’re building the new string from front to back in reverse order.
//   }

//   return reversed
// }

// const str = 'Hello'
// console.log(reverseString(str))

// 🔍 Explanation:
// Loop through each character.

// Instead of appending, you add it before the current string:

// reversed = char + reversed

// 🧠 Why does this work?
// Because you’re building the new string from front to back in reverse order.

//? 4. Using Array.prototype.reduce()

// function reverseString(str){
//  return str.split("").reduce((accReverse, char) => char + accReverse, '')
// }

// const str = 'Hello'
// console.log(reverseString(str))

//=====================================================================================================

//todo 2: Check if a string is a palindrome // A string that reads the same forward and backward.

//? 1. Using split(), reverse(), join()

// function isPalindrome(str){
//     const reversed = str.split('').reverse().join('')
//     return str === reversed
// }

// console.log(isPalindrome("racecar"));  //true
// console.log(isPalindrome("level")); //true
// console.log(isPalindrome("Kajal")); //false

//? 2. Using a for loop (Manual Comparison)

// function isPalindrome(str){
//     for(let i=0; i < str.length / 2; i++){
//         if(str[i] !== str[str.length -1 - i]){
//             return false
//         }
//     }

//     return true
// }

// console.log(isPalindrome("racecar"));  //true
// console.log(isPalindrome("level")); //true
// console.log(isPalindrome("Kajal")); //false

// //? 3. Case-insensitive + Remove non-letter characters

// function isPalindrome(str) {
//     const clean = str.toLowerCase().replace(/[^a-z0-9]/g, '');
//     return clean === clean.split('').reverse().join('');
//   }

//=====================================================================================================

//todo Count the number of vowels in a string
// 📦 Input: "Hello World"
// 🎯 Output: 3

//? 1. Using for...of loop and includes()

// function countVowels(str){

//     const vowels = 'aeiou';
//     let count = 0;

//     for( let char of str){
//         if(vowels.includes(char)){
//             count++
//         }
//     }

//     return count;
// }

// const inputStr = 'Hello World'
// console.log(countVowels(inputStr));  //3

//?  2. Using Regular Expression (match())

// function countVowels(str) {
//     const matches = str.match(/[aeiou]/gi); // g = global, i = case-insensitive
//     return matches ? matches.length : 0;
//   }

//   const inputStr = 'Hello WorldAA'
// console.log(countVowels(inputStr));  //5

//? 3. Using reduce() and split()

// function countVowels(str){
//   const vowels = 'aeiouAEIOU';

//   return str.split('').reduce((count, char)=>{
//     return vowels.includes(char) ? count + 1 : count;
//   },0)

// }

// const inputStr = 'Hello WorldAA'
// console.log(countVowels(inputStr));  //5

//? 4. Using a for loop

// function countVowels(str){
//     const vowels = 'aeiouAEIOU';
//     let count = 0;

//     for( let i=0; i < str.length ; i++){
//         if(vowels.indexOf(str[i]) !== -1){
//             count++;
//         }
//     }

//     return count;
// }

// const inputStr = 'Hello World'
// console.log(countVowels(inputStr));  //3

//=========================================================================================================

//todo count how many times each vowel appears in a string
// INPUT :const input = "JavaScript is awesome";
// OUTPUT:
// {
//     a: 2,
//     e: 2,
//     i: 2,
//     o: 1,
//     u: 0
//   }

//? Method 1: Using a for loop and an object

// function countVowels(str) {
//   const vowels = "aeiou";
//   const counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

//   for (let char of str.toLowerCase()){
//     if( vowels.includes(char)){
//         counts[char]++
//     }
//   }

//   return counts;
// }

// const input = "JavaScript is awesome";
// console.log(countVowels(input));

//? Method 2: Using reduce() and split()

// function countVowels(str){
//   const vowels = "aeiou";
//   const initials = { a: 0, e: 0, i: 0, o: 0, u: 0 };

//   return str.toLowerCase().split('').reduce((acc, char)=>{
//     if(vowels.includes(char)){
//         acc[char]++
//     }
//     return acc
//   }, initials)
// }

// const input = "JavaScript is awesome";
// console.log(countVowels(input));

//==================================================================================================

//todo If you want to count how many times each character appears in a string (including letters, numbers, spaces, or symbols)

// INPUT :const str = "hello world";
// OUTPUT: {
//     h: 1,
//     e: 1,
//     l: 3,
//     o: 2,
//     ' ': 1,
//     w: 1,
//     r: 1,
//     d: 1
//   }

//?  Method 1: Using a for...of loop

// function countCharOfStr(str) {
//   const countChar = {};

//   for(let char of str){
//     countChar[char] = (countChar[char]|| 0) + 1
//   }

//   return countChar
// }

// const str = "hello world";
// console.log(countCharOfStr(str));

//? Method 2: Using split() and reduce()

// function countChar(str){
//     const result  = str.split("").reduce((acc,char)=>{
//      acc[char] = (acc[char] || 0) + 1
//      return acc
//     },{})

//     return result
//   }

//   const str = "hello world";
//   console.log(countChar(str))

//==================================================================================================

//todo 4: Check if two strings are anagrams of each other

// Two strings are anagrams if they contain the same characters in the same frequency, just arranged differently.

// ✅ Examples:
// "listen" and "silent" → ✅ Yes, they are anagrams

// "hello" and "world" → ❌ No, not anagrams

// "rail safety" and "fairy tales" → ✅ Yes (if spaces are ignored)

//?  Method 1: Sort and Compare (Simple & Popular)

// function isAnagram(str1, str2){
//    if(str1.length !== str2.length) false;

//    const clearStr1 = str1.replace(/\s/g,'').toLowerCase().split('').sort().join('');
//    const clearStr2 = str2.replace(/\s/g, '').toLowerCase().split('').sort().join('')

//    return clearStr1 === clearStr2
// }

// let s1 = 'Listen'
// let s2 =  'Silent'
// console.log(isAnagram(s1,s2))

//=========================================================================================

//todo Remove duplicate characters from a string

//Given a string, return a new string without any duplicate characters — keep only the first occurrence of each character.

// Input:  "programming"
// Output: "progamin"

// Input: "hello"
// Output: "helo"

//? ✅ Method 1: Using a Set (Easiest & Cleanest)

// function removeDuplicates(str){
//      return [...new Set(str)].join('')
// }

// let s1 = "programming";
// console.log(removeDuplicates(s1))  //progamin

//? ✅ Method 2: Using for...of loop and a Set

// function removeDuplicates(str){
// let result = "";
// const seen =  new Set();

// for ( let char of str){
//     if(!seen.has(char)){
//         seen.add(char)
//         result = result + char
//     }
// }

// return result
// }

// let s1 = "programming";
// console.log(removeDuplicates(s1))  //progamin

//=========================================================================================

//todo Count the number of words in a string.
// For example:

// "Hello world" has 2 words.
// " Leading and trailing spaces " also has 4 words.
// "One-word" has 1 word.
// "" (empty string) has 0 words.
// " " (only spaces) has 0 words.

//? Method 1: Using split() and filter()

// function countNumberOfWords(str) {
//     if (!str || str.trim() === '') {
//         return 0; // Handle empty or only-whitespace strings
//     }
//     // Split by one or more whitespace characters
//     const words = str.trim().split(/\s+/);
//     // Filter out any potential empty strings (though /\s+/ often handles this well)
//     // and then return the length
//     return words.length;
// }

// console.log(countNumberOfWords("Hello world"))  //2
// console.log(countNumberOfWords("  Leading and trailing spaces  ")) //4
// console.log(countNumberOfWords("One-word")) //1
// console.log(countNumberOfWords("")) //0
// console.log(countNumberOfWords("  ")) //0
// console.log(countNumberOfWords("  Hello   there  general    kenobi  ")) //4

//? Method 2: Using match() with Regular Expressions

// function countWordMatchregex(str){
//     if(!str) return 0;

//     const matches  = str.match(/[^\s]+/g);

//     return matches ? matches.length : 0

// }

// console.log(countWordMatchregex("Hello world"))  //2
// console.log(countWordMatchregex("  Leading and trailing spaces  ")) //4
// console.log(countWordMatchregex("One-word")) //1
// console.log(countWordMatchregex("")) //0
// console.log(countWordMatchregex("  ")) //0
// console.log(countWordMatchregex("  Hello   there  general    kenobi  ")) //4

//=========================================================================================================

//todo Capitalize the first letter of each word in a string.

// For example:

// "hello world" should become "Hello World"
// "this is a test string" should become "This Is A Test String"
// "jAVAscript pROGRAMMING" should become "Javascript Programming"
// " leading and trailing spaces " should become " Leading And Trailing Spaces " (preserving original spaces for now, or normalizing them depending on approach)
// "" (empty string) should remain ""

//? Method 1: Using split(), map(), charAt(), slice(), and join()

// function capitalizeWordsSplitMapJoin(str){

//   if(!str){
//     return ""
//   }

//   const words = str.trim().split(/\s+/)   // Important (/\s+/)

//   const capitalizedWords = words.map((word)=>{
//     if(word.length === 0){
//         return ""
//     }

//     return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//   })

//   return capitalizedWords.join(" ")
// }



// // Cases:
// console.log(`Method 1: "hello world" -> "${capitalizeWordsSplitMapJoin("hello world")}"`); // "Hello World"
// console.log(`Method 1: "this is a test string" -> "${capitalizeWordsSplitMapJoin("this is a test string")}"`); // "This Is A Test String"
// console.log(`Method 1: "jAVAscript pROGRAMMING" -> "${capitalizeWordsSplitMapJoin("jAVAscript pROGRAMMING")}"`); // "Javascript Programming"
// console.log(`Method 1: "  leading and trailing spaces  " -> "${capitalizeWordsSplitMapJoin("  leading and trailing spaces  ")}"`); // "Leading And Trailing Spaces" (normalized spaces)
// console.log(`Method 1: "" -> "${capitalizeWordsSplitMapJoin("")}"`); // ""
// console.log(`Method 1: "a" -> "${capitalizeWordsSplitMapJoin("a")}"`); // "A"
// console.log(`Method 1: "HELLO" -> "${capitalizeWordsSplitMapJoin("HELLO")}"`); // "Hello"
// console.log(`Method 1: "    multiple   spaces   here    " -> "${capitalizeWordsSplitMapJoin("    multiple   spaces   here    ")}"`); // "Multiple Spaces Here"




//=============================================================================================================

// todo Find the longest word in a sentence.


//? Method 1:

// function findLongestWordSort(sentence) {
//     if (!sentence || sentence.trim() === '') {
//         return ''; // Handle empty or only-whitespace sentences
//     }

//     // Step 1: Clean the sentence and split into words.
//     // - .toLowerCase(): Convert to lowercase for consistent comparison (though not strictly necessary for length)
//     // - .replace(/[^\w\s]/g, ''): Remove all non-word, non-whitespace characters (i.e., punctuation)
//     // - .split(/\s+/): Split by one or more whitespace characters
//     const words = sentence
//         .toLowerCase()
//         .replace(/[^\w\s]/g, '') // Remove punctuation but keep spaces
//         .split(/\s+/) // Split by any sequence of whitespace
//         // .filter(word => word.length > 0); // Filter out empty strings that might result from splitting (e.g., "  ")

//     if (words.length === 0) {
//         return ''; // No words found after cleaning
//     }

//     // Step 2: Sort the words by length in descending order.
//     // If lengths are equal (b.length - a.length === 0), their relative order remains unchanged,
//     // which effectively means the first encountered longest word will stay first.
//     const result = words.sort((a, b) => b.length - a.length);

//     // Step 3: The first element in the sorted array is the longest word.
//     return result[0];
// }

// // Test Cases:
// console.log(`Method 1: "The quick brown fox jumped over the lazy dog." -> "${findLongestWordSort("The quick brown fox jumped over the lazy dog.")}"`); // "jumped"
// console.log(`Method 1: "Hello world!" -> "${findLongestWordSort("Hello world!")}"`); // "hello"
// console.log(`Method 1: "A short sentence." -> "${findLongestWordSort("A short sentence.")}"`); // "sentence"
// console.log(`Method 1: "apple banana cherry" -> "${findLongestWordSort("apple banana cherry")}"`); // "banana" (or cherry, depending on sort stability for equal lengths)
// console.log(`Method 1: "" -> "${findLongestWordSort("")}"`); // ""
// console.log(`Method 1: "   " -> "${findLongestWordSort("   ")}"`); // ""
// console.log(`Method 1: "!" -> "${findLongestWordSort("!")}"`); // ""
// console.log(`Method 1: "Helloooooooooo" -> "${findLongestWordSort("Helloooooooooo")}"`); // "helloooooooooo"
// console.log(`Method 1: "Longest one, two!" -> "${findLongestWordSort("Longest one, two!")}"`); // "longest"
// console.log(`Method 1: "Longest longest!" -> "${findLongestWordSort("Longest longest!")}"`); // "longest" (first one)






//? Method 2: Using split(), reduce() for efficient iteration


// function findLongestWordReduce(sentence){

//   if(!sentence ||  sentence.trim() === '') return '';

//   const words = sentence
//   .toLowerCase()
//   .replace(/[^\w\s]/g, '')
//   .split(/\s+/)
//    .filter((word)=> word.length > 0);


//    if(words.length === 0) return "";


//    return words.reduce((longest, currentWord) => {
//     return currentWord.length > longest.length ? currentWord : longest;

//    }, '')

// }



// // Test Cases:
// console.log(`Method 2: "The quick brown fox jumped over the lazy dog." -> "${findLongestWordReduce("The quick brown fox jumped over the lazy dog.")}"`); // "jumped"
// console.log(`Method 2: "Hello world!" -> "${findLongestWordReduce("Hello world!")}"`); // "hello"
// console.log(`Method 2: "A short sentence." -> "${findLongestWordReduce("A short sentence.")}"`); // "sentence"
// console.log(`Method 2: "apple banana cherry" -> "${findLongestWordReduce("apple banana cherry")}"`); // "banana" (first longest encountered)
// console.log(`Method 2: "" -> "${findLongestWordReduce("")}"`); // ""
// console.log(`Method 2: "   " -> "${findLongestWordReduce("   ")}"`); // ""
// console.log(`Method 2: "!" -> "${findLongestWordReduce("!")}"`); // ""
// console.log(`Method 2: "Helloooooooooo" -> "${findLongestWordReduce("Helloooooooooo")}"`); // "helloooooooooo"
// console.log(`Method 2: "Longest one, two!" -> "${findLongestWordReduce("Longest one, two!")}"`); // "longest"
// console.log(`Method 2: "Longest longest!" -> "${findLongestWordReduce("Longest longest!")}"`); // "longest"




//? Method 3: Using a Loop (for...of)


// function findLongestWordLoop(sentence){

//     if(!sentence || sentence.trim() === '') return '';

//     const words = sentence.toLowerCase()
//     .replace(/[^\w\s]/g, '')
//     .split(/\s+/)
//     .filter((word)=> word.length > 0);

//     if(words.length === 0) return '';

//     let longestWord = '';
//     let maxLength = 0;

//     for( const word of words){
//         if(word.length > maxLength){
//             maxLength = word.length;
//             longestWord = word
//         }
//     }

//     return longestWord

// }


// console.log(`Method 3: "The quick brown fox jumped over the lazy dog." -> "${findLongestWordLoop("The quick brown fox jumped over the lazy dog.")}"`); // "jumped"
// console.log(`Method 3: "Hello world!" -> "${findLongestWordLoop("Hello world!")}"`); // "hello"
// console.log(`Method 3: "A short sentence." -> "${findLongestWordLoop("A short sentence.")}"`); // "sentence"
// console.log(`Method 3: "apple banana cherry" -> "${findLongestWordLoop("apple banana cherry")}"`); // "banana" (first longest encountered)
// console.log(`Method 3: "" -> "${findLongestWordLoop("")}"`); // ""
// console.log(`Method 3: "   " -> "${findLongestWordLoop("   ")}"`); // ""
// console.log(`Method 3: "!" -> "${findLongestWordLoop("!")}"`); // ""
// console.log(`Method 3: "Helloooooooooo" -> "${findLongestWordLoop("Helloooooooooo")}"`); // "helloooooooooo"
// console.log(`Method 3: "Longest one, two!" -> "${findLongestWordLoop("Longest one, two!")}"`); // "longest"
// console.log(`Method 3: "Longest longest!" -> "${findLongestWordLoop("Longest longest!")}"`); // "longest"








///===================================================================================================================================