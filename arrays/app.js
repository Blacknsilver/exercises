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

// const hobbies = ["Sports", "Cooking"];
// hobbies.push("Reading"); // Adds a new item to the end of the array
// hobbies.unshift("Running"); // Adds an element to the start of the array

// const popped = hobbies.pop(); // Removes last element and optionally puts it into a new var
// hobbies.shift(); // Removes item from the beginning of an array. Shifts all elements to the left

// hobbies[1] = "Dancing"; // Set existing element to something else

// hobbies.splice(1, 0, "Eating"); // Not useable on array-like objects

// console.log(hobbies);

// hobbies.splice(0, 1, "Drinking");

// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];

// console.log(testResults.slice());
// const storedResults = testResults.slice(); // Returns a brand new array
// testResults.push(5.91);

// console.log(storedResults, testResults);

// storedResults2 = testResults.slice(0, 2); // Finds and adds the elements from the first index (included) to the second (not included). Can also use negative numbers but
// // both arguments have to be negative.
// console.log(storedResults2);

// console.log(testResults.slice(2)); //Using a single argument will output everything from that element (included) to the end.

const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
const storedResults = testResults.concat([3.99, 2]); // Creates a new array by combining an existing array with the elements inside of concat.

console.log(storedResults);
console.log(testResults);