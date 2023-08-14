function sumKeysValues(obj) {
  return Object.entries(obj)
    .map(([key, value]) => key + value)
    .join(',');
}

const input = { a: 2, b: 5, c: 7 };
const output = sumKeysValues(input);

console.log(output); 

