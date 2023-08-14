function hasWhitespace(str) {
  return str.split('').some(char => char === ' ');
}

const input = "I am Abdulaziz Programmer";
console.log(hasWhitespace(input));
