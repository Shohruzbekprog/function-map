const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const wordCount = animals.reduce((count, word) => {
  if (count[word]) {
    count[word]++;
  } else {
    count[word] = 1;
  }
  return count;
}, {});

console.log(wordCount);
