const elements = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenElements = elements.filter(element => element % 2 === 0);

const oddElements = elements.filter(element => element % 2 !== 0);

console.log(evenElements);
console.log(oddElements);
