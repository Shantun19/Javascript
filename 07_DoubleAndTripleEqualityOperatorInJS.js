/*
    Equality comparisons and sameness
        JavaScript provides three different value-comparison operations:
                1.=== — strict equality (triple equals)
                2.== — loose equality (double equals)
                3.Object.is()
        Which operation you choose depends on what sort of comparison you are looking to perform. Briefly:
*/

/*
    1. == (loose comparison) → “I will try to match even if types are different.”
        - (==) will change the type of the opearnds.
        - (==) convert the values into the same type
*/

console.log(5 == "5"); // true - convert the string into the number data type
console.log(0 == false); // convert the boolean false into 0

/*
    2. === (strict comparison) → “No type conversion. Types must match.”
        - If the types are different, result is always false.
*/

console.log(5 == "5"); // false
console.log(0 == false) // false 

/*
    3. Object.is() → “SUPER strict. No type conversion & no special numeric rules.”
        - This one behaves exactly like strict comparison except for NaN and -0.
*/

console.log(Object.is(5 , "5")); // false 
console.log(Object.is(5 , 5)); // true
console.log(Object.is(null, null)); // true 
console.log(Object.is(NaN, NaN)); // true only method that says this correctly
console.log(Object.is(-0, +0)); // false // only method that can tell difference
 

