//Unshift and Shift methods are slower than Push and pop methods.

// push

let myFruits = ["Apple", "Mango", "Orange"];
console.log(myFruits);

myFruits.push("Banana");
console.log(myFruits);

//pop
let removedFruit = myFruits.pop(); //this pop method will not only pop the last element in array but also returns the element.
console.log(removedFruit);

//Unshift - used to add element in starting point of array

myFruits.unshift("Banana");
console.log(myFruits);

//Shift - used to remove element in starting point of array
myFruits.shift();
console.log(myFruits);
