function findAgeDifference(peopleArray) {
  let youngest = peopleArray[0].age;
  let oldest = peopleArray[0].age;

  for (let i = 1; i < peopleArray.length; i++) {
    const age = peopleArray[i].age;

    if (age < youngest) {
      youngest = age;
    }

    if (age > oldest) {
      oldest = age;
    }
  }

  const difference = oldest - youngest;
  return difference;
}

const people = [
  { name: 'John', age: 13 },
  { name: 'Mark', age: 56 },
  { name: 'Rachel', age: 45 },
  { name: 'Nate', age: 67 },
  { name: 'Jeniffer', age: 65 }
];

const ageDifference = findAgeDifference(people);
console.log(ageDifference); 
