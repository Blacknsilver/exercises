const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  greet: function () {
    alert("Hello There");
  },
};
person.isAdmin = true; // This works just fine even though person is a const.
person.age = 31; // This also works.
delete person.name; // This is how to remove a property from an object.
// person.age = undefined // This works but is not as clean. Null also works but delete is optimal.
console.log(person);
