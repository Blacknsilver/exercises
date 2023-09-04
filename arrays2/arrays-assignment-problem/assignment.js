const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.filter((val) => val > 5);
console.log(filteredNumbers);

const mappedNumbers = numbers.map((val) => ({ num: val }));
console.log(mappedNumbers);

const multiplication = numbers.reduce((currResult, currVal) => {
  return currResult * currVal;
}, 1); // Have to start with 1, starting multiplication with 0 results in nothing but 0s.
console.log(multiplication);

function findMax(...nums) {
  let curMax = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
  }
  return curMax;
}

console.log(findMax(...numbers));

function findMinMax(...nums) {
  let curMax = nums[0];
  let curMin = nums[0];
  for (const num of nums) {
    if (num > curMax) {
      curMax = num;
    }
    if (num < curMin) {
      curMin = num;
    }
  }
  return [curMin, curMax];
}

const [min, max] = findMinMax(...numbers);
console.log(min, max);
