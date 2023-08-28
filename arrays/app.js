// const numbers = [1, 2, 3];
// console.log(numbers);

// // const numbers2 = new Array("Hi", "Welcome");
// // const numbers2 = new Array(1, 2);
// // const numbers2 = new Array(5);
// const numbers2 = Array(5);
// console.log(numbers2);

// const numbers3 = Array.of(1, 2);
// console.log(numbers3);

// const listItems = document.querySelectorAll("li");
// console.log(listItems);
// const numbers4 = Array.from(listItems); // Turns an array-like object, such as a string or a node list, into an actual array
// console.log(numbers4);

const hobbies = ["Sports", "Cooking"];
hobbies.push("Reading"); // Adds a new item to the end of the array
hobbies.unshift("Running"); // Adds an element to the start of the array

const popped = hobbies.pop(); // Removes last element and optionally puts it into a new var
hobbies.shift(); // Removes item from the beginning of an array. Shifts all elements to the left

hobbies[1] = "Dancing"; // Set existing element to something else

console.log(hobbies);
