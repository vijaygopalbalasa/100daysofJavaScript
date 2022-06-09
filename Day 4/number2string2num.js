//converting number to string and again back to number

let name = 'vijaygopal';
let age = 23;

//convert number to string. we just need to add empty string "" with the number
age = age + ""; // we have concatenated empty string with num.
console.log(typeof age); //this will show the type as string

let num = 10;
let mystr = String(num); 
console.log(typeof mystr);

//convert string to number.
let str = '34';
str = +"str"; //adding + sign before any string will convert to number.
console.log(typeof str);

let str1 = '24';
str1 = Number(str1); //this method will convert string to number.
console.log(typeof str1);
