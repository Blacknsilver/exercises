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

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10];
// const storedResults = testResults.concat([3.99, 2]); // Creates a new array by combining an existing array with the elements inside of concat.

// console.log(storedResults);
// console.log(testResults); // Original not changed

// const testResults = [1, 5.3, 1.5, 10.99, -5, 10, 1.5];
// console.log(testResults.indexOf(1.5)); // Returns the index of the value inside the parentheses. Will only look for the first element, then stop.

// console.log(testResults.lastIndexOf(1.5));

// const personData = [{ name: "Max" }, { name: "Manuel" }];
// console.log(personData.indexOf({ name: "Manuel" })); // Returns -1, which means it couldn't find anything. indexOf doesn't work if there are objects in the array.

// const personData = [{ name: "Max" }, { name: "Manuel" }];
// const manuel = personData.find((person, idx, persons) => {
//   // Executes this anonymous function on every element in the object  and then passes in that element,
//   // then the index, then the full array. This does not create a copy, it uses the original object.
//   return person.name === "Manuel"; // If there are multiple Manuels, it will still stop after the first one.
// });
// console.log(manuel);
// manuel.name = "Daniel";
// console.log(personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   // This will not return the matching item but the index of that item.
//   return person.name === "Max";
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.2;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // } // This works fine
// prices.forEach((price, idx, prices) => {
//   // prices can be used here fine because of block scoping
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// }); // An alternative to for loops that gives easy access to indices.

// console.log(taxAdjustedPrices);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.2;
// const taxAdjustedPrices = prices.map((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   return priceObj;
// }); // Same as forEach but returns a new element for each array. The original remains untouched.

// // console.log(prices, taxAdjustedPrices);

// // const sortedPrices = prices.sort(); // Converts everything to a string and checks the first number in each element, where 1 is smaller than 3.
// const sortedPrices = prices.sort((a, b) => {
//   if (a > b) {
//     return 1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return -1;
//   }
// });
// console.log(sortedPrices);
// console.log(sortedPrices.reverse()); // Reverses the array.

// const filteredArray = prices.filter((price, index, prices) => {
//   return price > 6;
// }); // Returns new array. Expects to return true or false. False drops the value of the current index.

// // Alternative way to write the same code:
// // const filteredArray = prices.filter(price => price >6)
// console.log(filteredArray);

// // let sum = 0;

// // prices.forEach((price) => {
// //   sum += price;
// // });

// // console.log(sum);
// const sum = prices.reduce((prevValue, currValue, currIndex, prices) => {
//   return prevValue + currValue;
// }, 0); // Adds together every element in the array, 0 is the starting number. We want total value so it's 0.

// console.log(sum);

const nameFragments = ["Max", "Schwartz"];
nameFragments.push("Mr");

const copiedNameFragments = [...nameFragments]; //This is the spread operator. It returns a new object where each element is an element from the array.
console.log(copiedNameFragments, nameFragments);
console.log(Math.min(1, 5, -3)); // Works fine.
const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(prices)); // Does not work with array.s
console.log(Math.min(...prices)); // Works just fine!

const persons = [
  { name: "Max", age: 30 },
  { name: "Manuel", age: 31 },
];
const copiedPersons = [...persons];
persons.push({ name: "Anna", age: 29 });
persons[0].age = 13;
console.log(persons, copiedPersons); // The age is a reference type so we're only working with the address in memory.
const secondCopiedPersons = [
  ...persons.map((person) => ({ name: person.name, age: person.age })),
]; // This is how to create new objects in new places in memory.
