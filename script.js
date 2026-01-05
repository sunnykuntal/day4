 console.log("Day 4 JavaScript");

// 1. Add
function addTwoNumbers(a, b) {
    let sum = a + b;
  return sum;
}
console.log(addTwoNumbers(5, 3));

// 2. Even Odd
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(checkEvenOdd(10));
console.log(checkEvenOdd(7));

// 3. Largest
function largestOfThree(a, b, c) {
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
console.log(largestOfThree(5, 90, 35));

// 4. Celsius to Fahrenheit
function celsiusToFahrenheit(c) {
  return (c * 9 / 5) + 32;
}
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit(50));