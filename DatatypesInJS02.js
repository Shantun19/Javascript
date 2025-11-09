/*
Datatypes define what type of data you are storing in a variable.
In JavaScript, there are 7 primitive datatypes:
    1. Null
    2. Undefined
    3. Number
    4. String
    5. Boolean
    6. Symbol
    7. BigInt
*/

/* 
1. Null
   - If the value of a variable is null, it means it is not referencing any object.
   - You can explicitly assign null to a variable.
*/
let a = null;
console.log(a); // null
console.log(typeof a); // "object" (this is a known JavaScript quirk)

/* Example: */
let car = null; // No car assigned yet
console.log(car); // null


/*
2. Undefined
   - If the value of a variable is undefined, it means you haven’t assigned any value yet.
   - JavaScript automatically initializes unassigned variables with undefined.
*/
let age;
console.log(age); // undefined
console.log(typeof age); // "undefined"

/* Example: */
let city;
console.log(city); // undefined


/*
3. Number
   - Represents both integer and floating-point numbers.
   - Special numeric values: Infinity, -Infinity, NaN (Not a Number)
*/
let num1 = 25;
let num2 = 3.14;
let num3 = Infinity;
console.log(num1, num2, num3); // 25 3.14 Infinity
console.log(typeof num1); // "number"

/* Example: */
let temperature = -5.7;
console.log(temperature); // -5.7


/*
4. String
   - Represents textual data enclosed in single, double, or backticks (for template literals).
*/
let name = "Alice";
let greeting = 'Hello, World!';
let message = `Welcome, ${name}!`;
console.log(name, greeting, message);
console.log(typeof name); // "string"

/* Example: */
let hobby = "playing guitar";
console.log(`My hobby is ${hobby}.`); // My hobby is playing guitar.


/*
5. Boolean
   - Represents true or false values.
   - Commonly used for conditions and comparisons.
*/
let isLoggedIn = true;
let isOver18 = false;
console.log(isLoggedIn, isOver18);
console.log(typeof isLoggedIn); // "boolean"

/* Example: */
let hasAccess = age >= 18;
console.log(hasAccess); // false (because age is undefined)


/*
6. Symbol
   - Used to create unique identifiers.
   - Even if two symbols have the same description, they are unique.
*/
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 === id2); // false (each symbol is unique)
console.log(typeof id1); // "symbol"

/* Example: */
const userID = Symbol("user123");
console.log(userID); // Symbol(user123)


/*
7. BigInt
   - Used to represent integers larger than 2^53 - 1 (the max safe integer in JavaScript).
   - Append 'n' to the end of an integer or use BigInt() constructor.
*/
let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber); // "bigint"

/* Example: */
let anotherBig = BigInt(999999999999999999999);
console.log(anotherBig); // 999999999999999999999n