//trim() is used to remove the extra spaces in a string. As we know string is immutable, and even the spaces will be considered in length.
let firstName = 'vijaygopal    ';
console.log(firstName); //this will print the value with spaces
console.log(firstName.length); //this will print the length including spaces considering as length as 14. So If I don't want the spaces, i will follow the below.

//applying trim method.
firstName = firstName.trim(); //this will trim the spaces and the value will be stored in the firstName variable.
console.log(firstName);
console.log(firstName.length); //now the length of the string after trimming the spaces will be 10. 

