class Course {
  constructor(title, length, price) {
    this.title = title;
    this.length = length;
    this.price = price;
  }
  calculateValue() {
    return this.length / this.price;
  }
  printSummary() {
    console.log(
      `Title: ${this.title}, Length: ${this.length}, Price: ${this.price}`
    );
  }
}

const courseOne = new Course("RandomTitle", 10, 20);
const courseTwo = new Course("RandomOtherTitle", 15, 30);
console.log(courseOne);
console.log(courseTwo);

console.log(courseOne.calculateValue());
console.log(courseTwo.calculateValue());

courseOne.printSummary();
courseTwo.printSummary();

class PracticalCourse extends Course {
  constructor(title, length, price, exercisesCount) {
    super(title, length, price);
    this.exercisesCount = exercisesCount;
  }
}

const courseThree = new PracticalCourse("RandomThirdTitle", 11, 50, 100);
console.log(courseThree);

class TheoreticalCourse extends Course {
  publish() {
    console.log("Publishing...");
  }
}

const courseFour = new TheoreticalCourse("RandomFourthTitle", 5, 70);

courseFour.printSummary();
courseFour.publish();
