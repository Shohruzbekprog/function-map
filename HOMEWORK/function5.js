let input = 'George Raymond Richard Martin';
let words = input.split(' ');
let capitalLetters = words.map((word) => word.match(/[A-Z]/g).join(''));
let output = capitalLetters.join('');
console.log(output);
