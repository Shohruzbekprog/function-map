let numbers = [1, -4, 12, 0, -3, 29, -150];
let positiveNumbers = numbers.filter(num => num > 0);
let sum = positiveNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);
