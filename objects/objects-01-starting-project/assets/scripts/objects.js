// const person = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   greet: function () {
//     alert("Hello There");
//   },
// };
// person.isAdmin = true; // This works just fine even though person is a const.
// person.age = 31; // This also works.
// delete person.name; // This is how to remove a property from an object.
// // person.age = undefined // This works but is not as clean. Null also works but delete is optimal.
// console.log(person);

const person = {
  "first name": "Max", // this is how strings can be used as a key in objects
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hello There");
  },
  1.5: "hello", // must be a positive number or zero
};
console.log(person[1.5]); // this doesn't need quotes

console.log(person["first name"]); // This is how to access string keys.

const movieList = document.getElementById("movie-list");

movieList.style["backgroundColor"] = "red"; // This also works
movieList.style.display = "block";

const numbers = { 5: "hi", 1: "true" };
console.log(numbers); // If an object only has numbers as keys, it gets sorted immediately. If there are string keys, the order will be kept.
