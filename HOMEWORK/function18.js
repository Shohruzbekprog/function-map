function getWordLengths(str) {
  const words = str.split(" ");
  
  const lengths = words.map(word => word.length);
  
  return lengths;
}

const input = "I am Abdulaziz Programmer";
const output = getWordLengths(input);
console.log(output); 
