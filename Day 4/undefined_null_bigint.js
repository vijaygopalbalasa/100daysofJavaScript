// undefined

let myName;
console.log(typeof myName); //this is a undefined variable since no value is assigned

//null

let firstName = null;
console.log(typeof firstName); //it will be null ...

//but the the typeof null is an object and that is a bug in JS
console.log(typeof null); //this will print object and the fix is not applied since it will affect many people.

//bigInt - the use will be to store large integer value

let number = BigInt(12345890017839378393); //we can use bigInt() constructor.
console.log(number); //this will print the value with n

//other way to use bigInt is like,
let num1 = 123n; // we have to type n at the end so that it will considered as bigint.
console.log(num1); //this will print the value

// we can add the value of BigInt with BigInt but cannot with normal Int.
