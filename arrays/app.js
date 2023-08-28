const numbers = [1, 2, 3];
console.log(numbers);

// const numbers2 = new Array("Hi", "Welcome");
// const numbers2 = new Array(1, 2);
// const numbers2 = new Array(5);
const numbers2 = Array(5);
console.log(numbers2);

const numbers3 = Array.of(1, 2);
console.log(numbers3);

const listItems = document.querySelectorAll("li");
console.log(listItems);
const numbers4 = Array.from(listItems); // Turns an array-like object, such as a string or a node list, into an actual array
console.log(numbers4);
