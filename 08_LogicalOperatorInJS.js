/*
    logical operator are use to perform the logical operation on values and get either true or false.
    these operators are commonly used in decision making statement like if or while loop to control the flow of execution based on the condition.

    In JavaScript, there are basically three types of logical operators.
*/

/*
    1. Logical AND (&&) Operator
        - The logical AND (&&) operator checks whether both operands are true. If both are true, the result is true. If any one or both operands are false, the result is false.
*/

let age = 20;
let isEligible = true;

if(age >= 20 && isEligible) console.log('Allowed');
else console.log('not Allowed');

/*
    It works with numbers as well, treating 0 as false and any non-zero value as true. 
    The && operator doesn’t always give you true or false.
    Instead, it gives you one of the actual values you used.

    Case 1: First value is “falsy”
        - (Falsy means: 0, "", null, undefined, false, NaN)
        - If the first value is falsy, JavaScript stops and returns that value.
*/

console.log(0 && true); // return 0
console.log(null && "Hello"); // return null

/*
    Case 2: First value is “truthy”
        - (Truthies are basically anything not falsy)
        - If the first value is truthy, JavaScript continues and returns the second value.
*/

console.log(5 && "hello");   // returns "hello"
console.log("hi" && 123);    // returns 123
console.log(true && "ok");   // returns "ok"

/* ------------------------------------------------------------------------------------------------------------- */

/*
    2. Logical OR (||) Operator
        - The logical OR (||) operator checks whether at least one of the operands is true. If either operand is true, the result is true. If both operands are false, the result is false.

    Rules for ||:
        - If the first operand is truthy, it stops and returns that value.
        - If the first operand is falsy, it evaluates the second operand and returns its value.
        - Falsy values: false, 0, null, undefined, NaN, and "" (empty string).
        - Truthy values: Anything not falsy.
*/

let isPanCard = true;
let isAadhar = false;

if(isAadhar || isPanCard) console.log("Allowed");
else console.log("Not allowed");

/* ------------------------------------------------------------------------------------------------------------- */


/*
    3. Logical NOT (!) Operator
        - The logical NOT (!) operator inverts the boolean value of its operand. If the operand is true, it returns false. If the operand is false, it returns true.
*/

let isAllowed = true;
console.log(!isAllowed);

/*
    Logical NOT Works for Non-Boolean Values
    Unlike && and ||, the logical not operator always results in true or false. It consider falsy values (mentioned above with logical or) as false. And all other values as true.
*/

let x = "Hello";
console.log(!x); // false
console.log(!!x);  // true 

let y = 20;
console.log(!y); // false 
console.log(!!y); // true 

/* ------------------------------------------------------------------------------------------------------------- */


/*
    4. Nullish Coalescing (??) Operator
        - The nullish coalescing operator (??) returns the right-hand operand when the left-hand operand is either null or undefined. Otherwise, it returns the left-hand operand. 
*/

let username = null;
let defaultName = "Guest";
console.log(username ?? defaultName);

username = "Kartik";
defaultName = "Guest";
console.log(username ?? defaultName);