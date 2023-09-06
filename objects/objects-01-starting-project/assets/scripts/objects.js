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
// const userChosenName = "user";
// const person = {
//   "first name": "Max", // this is how strings can be used as a key in objects
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   // userChosenName: "...", // This will create a new property rather than use the previous const.
//   [userChosenName]: "...", // The square brackets will make the interpreter search for a variable with that name and take the value stored in it.
//   greet: function () {
//     alert("Hello There");
//   },
//   1.5: "hello", // must be a positive number or zero
// };
// console.log(person[1.5]); // this doesn't need quotes

// console.log(person["first name"]); // This is how to access string keys.

// const movieList = document.getElementById("movie-list");

// movieList.style["backgroundColor"] = "red"; // This also works
// movieList.style.display = "block";

// const numbers = { 5: "hi", 1: "true" };
// console.log(numbers); // If an object only has numbers as keys, it gets sorted immediately. If there are string keys, the order will be kept.

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];

const addMovieHandler = () => {
  // Gathers all user input and adds that to the movie.
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value; // The value property will hold the user input.
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };
  movies.push(newMovie);
  console.log(newMovie);
};
