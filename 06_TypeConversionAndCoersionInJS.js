/*
    convert the one value type to another value type is known as type conversion.
    type conversion can be implicit and explicit 
    implicit type conversion also known as 'Coersion'
*/

console.log(35 + "Hello"); // - in javascript is weakly typed programming lang. instead of throwing an error it convert the number data type to string.
// the result will be 35Hello

console.log(35 - "Hello"); // in the case of substraction it return NaN because string cannot be convertable to Number

/*
    truthy and falsy values in js - those values who always return the false
*/
console.log(Boolean(null)); // - false
console.log(Boolean(undefined)); // - false
console.log(Boolean(false)); // - false
console.log(Boolean(-0)); // - false
console.log(Boolean(0)); // - false
console.log(Boolean(NaN)); //- false
console.log(Boolean(" ")); //- false

/*
    except these all are truthy values in js 
*/


