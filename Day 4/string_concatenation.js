//string concatenation meaning joining two different string together.

let str1 = 'vijay';
let str2 = 'gopal';

let mystr = str1 + " " + str2;
console.log(mystr);

//if I want to convert a string to number and concatenate. then below will work,

let mystr1 = '17';
let mystr2 = '20';

let mystr3 = +mystr1 + +mystr2; // as we knew adding + symbol before any string will be converted to number. so in this case, we have converted string to number and concatenated both to get the output.
console.log(mystr3); // this will print 37.

