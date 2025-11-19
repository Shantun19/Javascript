/*
    String is a object in javascript means , in js string is like this => String = { propertines / methods }
    string in js is used to represent or manipulate the sequnence of characters eg : 'Apple' , 'Banana' , 'Peter'
    String holds the data that are in the text form.
    Some of the most-used operations on strings are to check their
        - length()
    to build and concatenate them using the + and += string operators
        + , +=
    checking for the existence or location of substrings with the help of
        - indexOf() method
    extracting substrings with the hrlp of
        - substring() method.
*/

/*
    Creating strings
        - Strings can be created as primitives from string literals
        - or as objects, using the String() constructor:
*/

/*
    String literals can be specified using single or double quotes, which are treated identically, or using the backtick character `
*/
const first_string = 'this is the primitive string or this is also a string literal';
const second_string = `define string the backtics character`; // this is also known as template literals
const third_string = new String('create string using the string constructor');

/*
    Character access
        - There are two ways to access an individual character in a string. The first is the charAt() method:
        - The other way is to treat the string as an array-like object, where individual characters correspond to a numerical index:
        
*/

console.log('Apple'.charAt(1)); // p - getting charcter using first way 
console.log("Banana"[3]); // a - treat this string like an array like object and get value corresponding to specific index. ['B' , 'a' , 'n' , 'a' , 'n' , 'a']

/*
    when you are using the bracket notation([]) to access the value
        - you can't delete the charater from the string 
        - yu can't update any character in the string 
*/

"Health"[2] = 'p' // does noting
delete "Health"[2] // also doesn't work 

/*
    Strings in JavaScript cannot be changed — they are immutable.
    So even though you can read characters like an array, you cannot modify them like an array.
*/

/*
    javascript string comparison 
        - 1. You can compare strings using < and >
            - JavaScript compares strings alphabetically (based on Unicode order), just like words in a dictionary.
*/

let a = 'a';
let b = 'b';
if(a < b) console.log('a is smaller than b'); // Since "a" comes before "b", "a" < "b" is true.

/*
    Comparisons are case-sensitive
        - This means JavaScript treats uppercase and lowercase as different letters.
        - Example:
            - "A" is not equal to "a"
            - "apple" is not equal to "Apple"
            - Even === and == treat them differently.
*/

/*
    How to compare strings without caring about uppercase/lowercase
        - How to compare strings without caring about uppercase/lowercase
*/

console.log("Apple".toLowerCase() == "apple".toLowerCase()); // true

/*
    But this method is NOT perfect for all languages
        - Some languages have special letters that behave differently.
            - Problem 1 — German "ß"
                "ß".toUpperCase() → "SS"
                "ss".toUpperCase() → "SS"
                So "ß" and "ss" look equal when uppercased…
                but they are NOT actually the same letter.
            - Problem 2 — Turkish "ı" (dotless i)
                "ı".toLowerCase() → "ı"
                "I".toLowerCase() → "i"
                They don’t match unless you use Turkish-specific settings.
*/

// The correct, language-aware way

const areEqual = (str1, str2, locale = "en-US") => 
    str1.localeCompare(str2, locale, { sensitivity: "accent" }) === 0; // This compares strings in a way that respects language rules.

areEqual("ß", "ss", "de"); // false (correct for German)
areEqual("ı", "I", "tr");  // true  (correct for Turkish)

/*
    Escape sequence
        - when you need to use the single quote / double quote or any backslash character we need to use escape sequence.
        - Example -> Hello 'world'
*/

let print_helloWorld = 'Hello\'world\'';
console.log(print_helloWorld)

// print - it's Monday
let print_itsMonday = 'it\'s Monday';
console.log(print_itsMonday)

/* 
    String as an object 
        - string can also be defines as object in js using the new keyword 
        - but do not create string as an object , because the new keyword complicate the process and slow down the execution speed.
*/

let stringAsObject = new String('String as an object');

// example - 1
let x = 'hello';
let y = new String('hello');

if(x == y) // true
    console.log('both string are same') 
else 
    console.log('both string are not same')

// example - 2
let str01 = new String('Hello');
let str02 = new String('Hello');

/*
    comparing the 2 javascript object always return false, weather the content of the object is same or not it always return false,
    because object in js are always stpred in two dofferent memory location.
*/

if(str01 == str02) // false
    console.log('same');
else 
    console.log('not same');

/*
    String methods 
*/

// 1. length - return the legth of the string
console.log('Hello'.length()); // 5 

// 2. charAt() - return the character present at the given index 
console.log('Hello'.charAt(2)); // l

// 3. charCodeAt() - return the ASCHII character at the given index
console.log('Apple'.charCodeAt(0)); // 65

/*
    4. at() 
        - introduces in ES2022
        - return the character at the given index 
        - it allow you to use the negative index while charAt() doesn;t allow to use the -ve index.
        - you can use the .at(-2) instead of str.length - 2 in order to access the last element of the string 
*/

let str = 'Health';
console.log(str.at(2)); // a
console.log(str.at(0)); // H
console.log(str.at(-1)); // h
console.log(str.at(-3)); // l

/*
    slice(startIndex , endIndex) method 
        - doesn't change the original string 
        - it is used to extract the string from the existing string and return the extracted parts.
        - this method takes 2 parameters startIndex and endIndex
        - endIndex are not included 
        - also support the -ve index
*/

let tempString = 'Hello World';
console.log(tempString.slice(6 , 9)); // return - Wor
console.log(tempString.slice()); // return the original string 
console.log(tempString.slice(3)); // return the string start from index 3 to the end - lo World
console.log(tempString.slice(-4)); // orld

/*
    substring()
        - similar to the slice method 
        - the main difference is that if the value of startIndex and endIndex is less than 0 then this method will treat those method as 0
*/

let person = 'Harry';
console.log(person.substring(1 , 4)); // arr
console.log(person.substring(2)); // start from the 2 index and go till to the last index.
console.log(person.substring(0)); // retrun the whole string 
console.log(person.substring(-3)); // consider as 0, then return the same exact string

/*
    substr()
        - not changes the original string 
        - similar to the slice() method 
        - the main diff is that the second parameter you specify is basically the length of the string that you want to extract.
        - if the index is -v then it count from the last
*/

console.log('Aeroplane'.substr(2)); // roplane start from the index 2 and take to the rest 
console.log('Aeroplane'.substr(-4)); // lane
console.log('Aeroplane'.substr(2 , 3)); // rop

/*
    contact()
        - this methos is use to join 2 or more string 
        - we can also use the + operator to contact / join the string 
        - but using the + operator for concat will lead to an implicit conversion that will an error 
        - to avoid that error we use the concat() method
*/

let str1 = "Hello";
let str2 = "World";

console.log(str1+ '' +str2); // Hello World

/*
    Note :
        - all the string method will not changes the actual string.
        - strings are immutable in js 
*/

/*
    trim() 
        - use to remove the white space from the strig from both side
*/

let sampleString = "     Hello     World          "; // 5 space Hello 5 space World  10 psaces
console.log(sampleString.trim()); // remove the space from both the sides and keep the space that is present beyween the words.

/*
    padStart()
        - pad / add somestring before the string
        - this method only works with string data types 
        - if you want to pad something in a numberic data type you need to convert this into the string first
*/
console.log("5".padStart(4 , "*")); // ***5
// console.log(5.padStart(4 ,  "0")); this will lead an error 


/*
    repeat()
        - repeat the number of copies of the same string 
        - it return the new string 
        - does not changes the original string 
*/

console.log("Apple".repeat(2)); // AppleApple

/*
    replace() 
        - this method is use to replace the specific string from the existing string 
        - we can also replace the substring from the existing string 
*/

console.log("Microsoft".replace("Microsoft" , "Google")); // Google
console.log("Microsoft".replace("Micro" , "Google")); // Googlesoft
console.log("welcome to the home".replace("home" , "Villa")); // welcome to the Villa

/*
    - it will replace the first match from the sting 
    - if you want that it will replace all the matches then use /g (global flag)
    - this method is case sensitive meand Home and home will treat differently 
*/

console.log("Welcome to the Home of the squirrel Home".replace("Home" , "Villa")); // Welcome to the Villa of the squirrel Home
console.log("Welcome to the Home of the squirrel Home".replace(/Home/g , "Villa")); // Welcome to the Villa of the squirrel Home

/*
    replaceAll()
        - use to replace all the occurence of the string 
*/

console.log("My name is grook and grook now going to introduce".replaceAll('grook' , 'levi'));

/*
    split()
        - use to convert the string into the array 
*/

console.log('Heelo , My name is Peter Parker'.split(',')); // [ 'Heelo ', ' My name is Peter Parker' ]
console.log('Heelo , My name is Peter Parker'.split(' ')); // ['Heelo',',','My','name','is','Peter','Parker']
