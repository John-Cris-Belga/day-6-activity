// Step 1
const greet = function () {
  console.log("Hello, welcome!");
};

// Step 2
greet();

// Step 3
const add = function (a, b) {
  return a + b;
};

// Step 4
const sum = add(5, 3);

// Step 5
console.log("Sum:", sum);

// Step 6
const multiply = function (a, b) {
  return a * b;
};

// Step 7
const product = multiply(4, 2);

// Step 8
console.log("Product:", product);

// Step 9
const isEven = function (number) {
  return number % 2 === 0;
};

// Step 10
const even = isEven(6);

// Step 11
console.log("Is Even:", even);

// Step 12
const square = function (number) {
  return number * number;
};

// Step 13
const squaredValue = square(3);

// Step 14
console.log("Squared Value:", squaredValue);

// Step 15
const fullName = function (firstName, lastName) {
  return `${firstName} ${lastName}`;
};

// Step 16
const name = fullName("John", "Doe");

// Step 17
console.log("Full Name:", name);

// Step 18
const capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// Step 19
const capitalizedString = capitalize("javascript");

// Step 20
console.log("Capitalized String:", capitalizedString);

// Step 1
// function is_Even(number) {
//   return number % 2 === 0;
// }

// Step 2
for (let i = 0; i <= 10; i++) {
  console.log(`isEven(${i}):`, isEven(i));
}

// Step 3
// function multiply(a, b) {
//   return a * b;
// }

// Step 4
while (true) {
  const num1 = parseInt(prompt("Enter the first number: "), 10);
  const num2 = parseInt(prompt("Enter the second number: "), 10);

  if (num1 < 0 || num2 < 0) break;

  console.log(`multiply(${num1}, ${num2}):`, multiply(num1, num2));
}

// Step 5
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Step 6
console.log("reverseString('hello'):", reverseString("hello"));

// Step 7
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
}

// Step 8
console.log("countVowels('JavaScript'):", countVowels("JavaScript"));

// Step 9
function findMax(arr) {
  return Math.max(...arr);
}

// Step 10
console.log("findMax([4, 9, 2, 7, 5]):", findMax([4, 9, 2, 7, 5]));

// Step 11
function calculateFactorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * calculateFactorial(num - 1);
}

// Step 12
console.log("calculateFactorial(5):", calculateFactorial(5));

// Step 13
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

// Step 14
console.log("isPalindrome('level'):", isPalindrome("level"));

// Step 15
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

// Step 16
console.log("sumArray([1, 2, 3, 4, 5]):", sumArray([1, 2, 3, 4, 5]));

// Step 17
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Step 18
console.log(
  "capitalizeFirstLetter('javascript'):",
  capitalizeFirstLetter("javascript")
);

// Step 19
function filterEvenNumbers(arr) {
  return arr.filter((num) => isEven(num));
}

// Step 20
console.log(
  "filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]):",
  filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
);
