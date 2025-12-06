/*
====================================================
    JavaScript Overview
====================================================
    JavaScript is the world's most popular programming language.
    It is primarily used in web development to make websites dynamic.
    With the help of JavaScript, we can add interactivity, animations,
    and logic to our web pages.
*/

/*
====================================================
    Variables in JavaScript
====================================================
    - Variables are used to store data.
    - In JavaScript, we can declare variables using:
        1. var
        2. let
        3. const
*/

/*
====================================================
    1. The 'var' Keyword
====================================================
    - 'var' was used before 2015 (before ES6).
    - After 2015, 'let' and 'const' were introduced to fix
      some issues associated with 'var'.
*/

/*
====================================================
    Problems with 'var'
====================================================
    1. Lack of Block Scope
       - Variables declared with 'var' are not limited
         to block scope (like inside if-statements or loops).
       - They are function-scoped instead.
*/

if (true) {
    var a = 90;
    console.log(a);  // Output: 90 (works fine inside the block)
}

console.log(a);      // Output: 90 (incorrect behavior — should be an error if block-scoped)

/*
    Explanation:
    Because 'var' is not block-scoped, 'a' is accessible
    outside the 'if' block. This can lead to unintended bugs.
*/

/*
====================================================
    2. Function Scope of 'var'
====================================================
    - 'var' is function-scoped, not block-scoped.
    - Variables declared with 'var' inside a function
      cannot be accessed outside that function.
*/

function m1() {
    var b = 78;
    console.log(b);  // Output: 78 (valid inside the function)
}

m1();
console.log(b);      // Error: 'b' is not defined (works only within the function)

/*
====================================================
    3. Hoisting
====================================================
    - Hoisting is a mechanism in JavaScript where variable
      and function declarations are moved to the top of
      their scope during the compilation phase.
    - However, only the declaration is hoisted — not the initialization.
*/

console.log(a);  // Output: undefined (due to hoisting)
var a = 90;

/*
    Behind the scenes, JavaScript does this:
    
    var a;
    console.log(a);  // undefined
    a = 90;
*/

/*
    Explanation:
    This is why we get 'undefined' instead of a ReferenceError.
    The variable exists (declared), but it has not yet been assigned
    a value at the time of the first console.log().
*/

/*
====================================================
    Conclusion
====================================================
    - Avoid using 'var' to prevent unexpected behaviors.
    - Use 'let' or 'const' instead, as they provide
      block scope and are safer to use.
*/

/*
====================================================
    4. Recdecleration issue in var
====================================================
   var a = 50;
   var a = 100; - it should lead and error but in js it is working fine with var keyowrd.
*/

/*
    to avoid all the issues we encounter while deleraing the var keyword we use let and const instead of the var
*/

/* Rules for decleration of the variables 
    - letter , underscore , dollar we can use the declare the variable
    - we can also use the digit but the variable name should not start eith the digits itself
*/

let $ = 89;
let _ = 66;

// let 9cd = 78; // this will lead an error 
