/*
    Operator in js 
        - use to perform the mathematical and logocal expression.
*/

/*
    Assignment operator 
        - to assign value to a variable.
*/

let a = 90; 
let sum = a + 10;

/*
    Arithmatic operator 
        - use to perform arithmatic operation on Numbers.
        - Addition(+) , substraction(-) , multiplication(*) , exponent(**) , division(/) , modulo(%) , pre/post increament(++) , pre/post decreament(--).
*/

let num01 = 10;
let num02 = 90;

let addition = (num01 + num02); // 100

/*
    Assignment operator 
        =   | x = y   | x= y
        +=  | x += y  | x = x + y
        -=  | x -= y  | x = x - y
        /=  | x /= y  | x = x / y
        %=  | x %= y  | x = x % y
        **= | x **= y | x = x ** y
        *=  | x *= y  | x = x * y
*/

/*
    comparison operator 
        ==  | equals to 
        === | equals value with equals type
        !=  | not equals to 
        !== | not equals value or not equals type 
        >   | greater than 
        <   | less than 
        >=  | greate than or equals to 
        <=  | less than or equals to 
        ?   | ternary
*/

/*
    String comparison operator 
        - all comparison operators can be used with string also , compared alphabetically 
*/

console.log("A" < "B"); // true 
console.log("A" + "B"); // AB
console.log("5"+5); // 55 
console.log("Hello" + 5); // Hello5 - if you add a number to a string the result will be a string 

/*
    string subtraction 
*/

console.log(5 - "Hello"); // Nan -not a number
console.log(5 - true); // 1 
console.log(5 - "3"); // 2 - "3" is converted to a number






