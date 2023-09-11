const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)

function checkNumber(number) {
  if (number > 0.7) {
    alert("Number alert 1");
  }
}
checkNumber(randomNumber);

const arrayOfNumbers = [0, 1, 2, 3, 4, 5];

function loopThroughArray(array) {
  for (number in array) {
    console.log(number);
    number++;
  }
}

// function alternativeLoopThroughArray(array) {
//   let i = array[0];
//   do {
//     console.log(i);
//     i++;
//   } while (i <= array[array.length - 1]);
// }

function alternativeLoopThroughArray(array) {
  let i = array.length - 1;
  do {
    console.log(i);
    i--;
  } while (i >= array[0]);
}

loopThroughArray(arrayOfNumbers);
alternativeLoopThroughArray(arrayOfNumbers);

const alternativeRandomNumber = Math.random();

function alternativeCheckNumber(number1, number2) {
  if ((number1 > 0.7 && number2 > 0.7) || number1 <= 0.2 || number2 <= 0.2) {
    alert("Number alert 2");
  }
}
alternativeCheckNumber(randomNumber, alternativeRandomNumber);
