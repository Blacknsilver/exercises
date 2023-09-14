class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
}

const courseOne = new Course("RandomTitle", 10, 20);
const courseTwo = new Course("RandomOtherTitle", 15, 30);
console.log(courseOne);
console.log(courseTwo);
