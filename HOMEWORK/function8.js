function deleteDuplicates(array) {
  const encounteredValues = {};

  const result = array.reduce((acc, curr) => {
    if (!encounteredValues[curr]) {
      encounteredValues[curr] = true;
      acc.push(curr);
    }
    return acc;
  }, []);

  return result;
}
const array = [1, 2, 3, 4, 12, 18, 15, 12, 15, 18, 2, 3, 5, 1];
const result = deleteDuplicates(array);
console.log(result);
