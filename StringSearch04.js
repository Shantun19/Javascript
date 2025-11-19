/*
    these method use to search the string 
*/

/*
    indexOf()
        - the indexOf method is use to return the index of the first occurence string of a given string as parameter.
*/

let text = 'Hello World';
console.log(text.indexOf('world')); // 6 [H , e , l , l , o , W , o , r , l , d];
console.log(text.indexOf('q')); // return the -1 if the string is not present.

/*
    lastIndexOf()
        - this method return the last occurence of the specified text in string 
        - it also return the -1 if the string is not found.
        - both method accept the second parameter as the starting position from where we have the start searching
*/

let text01 = 'please locate the locate';
console.log(text01.lastIndexOf("the" , 10)); // starting from the index 10 and search for the string until specified string is not found

/*
    search()
        - it accept the string or regular expression.
*/

let text03 = 'My Name is Peter Parker';
console.log(text03.search('Name')); // ['M' , 'y' , ' ' , 'N' ......]; => 3
console.log(text03.search(/Name/)); // ['M' , 'y' , ' ' , 'N' ......]; => 3

/*
    what is the diffrence search() and indexOf() ?
        - the search method didn't take/accept the 2md parameter indexOf() didn't accept the regular expression
*/

/*
    match() 
        - the match method returns the array contains the result of matched string 
*/

let text04 = 'My Name is Pater Parker';
console.log(text04.match('ame')); // ['ame' , index : 4 , input : My Name is Peter Parker]
console.log(text04.match(/ame/)); // ['ame' , index : 4 , input : My Name is Peter Parker]

// also perform the global search 
let text05 = 'i like the game of the street game';
console.log(text05.match(/ame/g)); // [ 'ame', 'ame' ]