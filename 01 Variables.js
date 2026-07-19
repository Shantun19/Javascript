// javascript is the world most popular programming language that is used to build dynamic web applications.

/*

VARIABLES 
=========

variable are use to store data or any type of data inside the varaible.
in javascript we can declare varaible in 3 ways,
    - using let keyword
    - using var keyword
    - using const keyword

1.var keyword
-------------
this var keyword is used in old browsers or before 2016.
this keyword is used before the ES6 module has been declared, because after ES6 we use the let keyword.
why we are using let keyword instead of var after ES6, there are some problem are associated with var keyowrds, 

problem Aassociated with var keyword
------------------------------------
1. the var keyword is functioned scope means, which is correct there is no issue in that.

function f1() {
    var a = 10; ------> this varaible is declared inside the function scope
    console.log(a); ------> output : 10 accessible inside the function which is correct
}

console.log(a); ---> error (because there is no global varaible a is declared thats why it is giving error)

now, the issue comes up with blocked scope means,

if(true) {
    var a = 20; ---> variable is declared inside the block scope should nt be accessible outside the block scope.
    console.log(a); ----> output : 10
}

console.log(a);----> output : 10 (here comes the issue how it is able to access from the outer scope to inner scope this needs to be thrown an errpr here),
so this behaviour above will leads to an error.














































*/